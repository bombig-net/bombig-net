import fs from 'fs';
import path from 'path';
import { Locale, locales } from '@/i18n/settings';

// Define the blog post type
export type BlogPost = {
    slug: string;
    locale: string;
    title: string;
    date: string;
    content: string;
    excerpt: string;
    categories: string[];
};

// Get all blog posts for a specific locale
export async function getBlogPosts(locale: Locale): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog', locale);

    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
        .filter(filename => filename.endsWith('.mdx'))
        .map(filename => {
            // Get the slug from the filename
            const slug = filename.replace(/\.mdx$/, '');
            const filePath = path.join(postsDirectory, filename);

            // Read the file content
            const fileContent = fs.readFileSync(filePath, 'utf8');

            // Extract metadata from MDX file
            const { title, date, excerpt, categories } = extractMetadata(fileContent);

            return {
                slug,
                locale,
                title: title || `Blog Post: ${slug}`,
                date: date || new Date().toISOString(),
                content: fileContent,
                excerpt: excerpt || `This is a placeholder excerpt for blog post ${slug} in ${locale}...`,
                categories: categories || []
            };
        });

    return posts;
}

// Extract metadata from MDX file
function extractMetadata(content: string): { title?: string; date?: string; excerpt?: string; categories?: string[] } {
    const metadataSection = content.split('---')[1];

    if (!metadataSection) {
        return {};
    }

    const result: { title?: string; date?: string; excerpt?: string; categories?: string[] } = {};

    // Extract title
    const titleMatch = metadataSection.match(/title:\s*"([^"]*)"/);
    if (titleMatch && titleMatch[1]) {
        result.title = titleMatch[1];
    }

    // Extract date
    const dateMatch = metadataSection.match(/date:\s*"([^"]*)"/);
    if (dateMatch && dateMatch[1]) {
        result.date = dateMatch[1];
    }

    // Extract excerpt
    const excerptMatch = metadataSection.match(/excerpt:\s*"([^"]*)"/);
    if (excerptMatch && excerptMatch[1]) {
        result.excerpt = excerptMatch[1];
    }

    // Extract categories
    const categoriesMatch = metadataSection.match(/categories:\s*\[(.*?)\]/);
    if (categoriesMatch && categoriesMatch[1]) {
        result.categories = categoriesMatch[1]
            .split(',')
            .map(category => category.trim().replace(/"/g, ''))
            .filter(Boolean);
    }

    return result;
}

// Get a specific blog post by slug and locale
export async function getBlogPost(slug: string, locale: Locale): Promise<BlogPost | null> {
    const posts = await getBlogPosts(locale);
    const post = posts.find(post => post.slug === slug);
    return post || null;
}

// Get a specific blog post by slug in any locale, with locale preference order
export async function getBlogPostAcrossLocales(slug: string, preferredLocale: Locale): Promise<{ post: BlogPost | null, locale: Locale | null }> {
    // First try the preferred locale
    const preferredPost = await getBlogPost(slug, preferredLocale);
    if (preferredPost) {
        return { post: preferredPost, locale: preferredLocale };
    }

    // Try other locales
    for (const locale of locales) {
        if (locale !== preferredLocale) {
            const post = await getBlogPost(slug, locale);
            if (post) {
                return { post, locale };
            }
        }
    }

    // Not found in any locale
    return { post: null, locale: null };
}

// Get all blog posts for a specific category and locale
export async function getBlogPostsByCategory(category: string, locale: Locale): Promise<BlogPost[]> {
    const posts = await getBlogPosts(locale);
    return posts.filter(post => post.categories.includes(category));
}

// Get all unique categories across all blog posts in a specific locale
export async function getCategories(locale: Locale): Promise<string[]> {
    const posts = await getBlogPosts(locale);
    const categoriesSet = new Set<string>();

    posts.forEach(post => {
        post.categories.forEach(category => {
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
