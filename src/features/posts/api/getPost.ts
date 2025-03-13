import { Locale } from '@/lib/i18n/settings';
import { Post } from '../types';
import { parseMdxFile } from './parseMdx';

/**
 * Get a specific post by slug and locale
 */
export async function getPost(slug: string, locale: Locale): Promise<Post | null> {
    // Read and parse the MDX file
    const parsedFile = parseMdxFile(locale, slug);

    if (!parsedFile) {
        console.log(`Post not found or could not be parsed: ${slug} in ${locale}`);
        return null;
    }

    const { content, data } = parsedFile;

    // Ensure required frontmatter fields exist
    if (!data.title || !data.date) {
        console.error(`Missing required frontmatter in post ${slug} in ${locale}`);
        return null;
    }

    // Extract specific frontmatter fields
    const { title, date, excerpt = '', metadata, ...restData } = data;

    // Construct the post with data from frontmatter
    return {
        slug,
        locale,
        content,
        frontmatter: {
            title,
            date,
            excerpt,
            metadata,
            ...restData // Include any other frontmatter fields
        }
    };
} 
