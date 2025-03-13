import fs from 'fs';
import path from 'path';
import { Locale } from '@/lib/i18n/settings';
import { Post } from '../types';
import { getPost } from './getPost';

/**
 * Get all posts for a specific locale
 */
export async function getPosts(locale: Locale): Promise<Post[]> {
    const postsDirectory = path.join(process.cwd(), 'src/features/posts/content', locale);

    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        console.log(`Posts directory not found: ${postsDirectory}`);
        return [];
    }

    const filenames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.mdx'));
    console.log(`Found ${filenames.length} files in ${locale} posts directory`);

    const posts = [];

    for (const filename of filenames) {
        const slug = filename.replace(/\.mdx$/, '');

        // Get the post data using our helper function
        const post = await getPost(slug, locale);
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
