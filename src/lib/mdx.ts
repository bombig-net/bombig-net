import fs from 'fs';
import path from 'path';
import { Locale, locales } from '@/i18n/settings';
import { Metadata } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';

// Define the blog post type using the frontmatter from MDX
export type BlogPost = {
    slug: string;
    locale: string;
    content: string; // The MDX content (without frontmatter)
    frontmatter: {
        title: string;
        date: string;
        excerpt: string;
        categories: string[];
        // Metadata for SEO and page head elements
        metadata?: Metadata;
        [key: string]: unknown; // For additional frontmatter fields
    };
};

/**
 * Read and parse an MDX file
 */
function readMdxFile(locale: Locale, slug: string): GrayMatterFile<string> | null {
    try {
        const filePath = path.join(process.cwd(), 'src/content/blog', locale, `${slug}.mdx`);
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        return matter(fileContents);
    } catch (error) {
        console.error(`Error reading MDX file ${slug} in ${locale}:`, error);
        return null;
    }
}

// Get all blog posts for a specific locale
export async function getBlogPosts(locale: Locale): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog', locale);

    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        console.log(`Blog directory not found: ${postsDirectory}`);
        return [];
    }

    const filenames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.mdx'));
    console.log(`Found ${filenames.length} files in ${locale} blog directory`);

    const posts = [];

    for (const filename of filenames) {
        const slug = filename.replace(/\.mdx$/, '');

        // Get the post data using our helper function
        const post = await getBlogPost(slug, locale);
        if (post) {
            posts.push(post);
        }
    }

    console.log(`Successfully processed ${posts.length} posts for ${locale}`);

    // Sort by date
    return posts.sort((a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
}

// Get a specific blog post by slug and locale
export async function getBlogPost(slug: string, locale: Locale): Promise<BlogPost | null> {
    // Read and parse the MDX file
    const parsedFile = readMdxFile(locale, slug);

    if (!parsedFile) {
        console.log(`Blog post not found or could not be parsed: ${slug} in ${locale}`);
        return null;
    }

    const { content, data } = parsedFile;

    // Ensure required frontmatter fields exist
    if (!data.title || !data.date) {
        console.error(`Missing required frontmatter in blog post ${slug} in ${locale}`);
        return null;
    }

    // Extract specific frontmatter fields
    const { title, date, excerpt = '', categories = [], metadata, ...restData } = data;

    // Construct the blog post with data from frontmatter
    return {
        slug,
        locale,
        content,
        frontmatter: {
            title,
            date,
            excerpt,
            categories: Array.isArray(categories) ? categories : [],
            metadata,
            ...restData // Include any other frontmatter fields
        }
    };
}

// Get all blog posts for a specific category and locale
export async function getBlogPostsByCategory(category: string, locale: Locale): Promise<BlogPost[]> {
    const posts = await getBlogPosts(locale);
    return posts.filter(post => post.frontmatter.categories.includes(category));
}

// Get all unique categories across all blog posts in a specific locale
export async function getCategories(locale: Locale): Promise<string[]> {
    const posts = await getBlogPosts(locale);
    const categoriesSet = new Set<string>();

    posts.forEach(post => {
        post.frontmatter.categories.forEach(category => {
            categoriesSet.add(category);
        });
    });

    return Array.from(categoriesSet).sort();
}

// Get all unique categories across all blog posts in all locales
export async function getAllCategories(): Promise<string[]> {
    const categoriesSet = new Set<string>();

    for (const locale of locales) {
        const categories = await getCategories(locale);
        categories.forEach(category => {
            categoriesSet.add(category);
        });
    }

    return Array.from(categoriesSet).sort();
}
