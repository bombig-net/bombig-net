import fs from 'fs';
import path from 'path';
import { Locale } from '@/i18n/settings';
import { BlogPost } from '../types/BlogPost';
import { getBlogPost } from './getBlogPost';

/**
 * Get all blog posts for a specific locale
 */
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