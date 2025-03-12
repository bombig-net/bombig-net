import { Locale } from '@/i18n/settings';
import { BlogPost } from '../types/BlogPost';
import { parseMdxFile } from './parseMdx';

/**
 * Get a specific blog post by slug and locale
 */
export async function getBlogPost(slug: string, locale: Locale): Promise<BlogPost | null> {
    // Read and parse the MDX file
    const parsedFile = parseMdxFile(locale, slug);

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
    const { title, date, excerpt = '', metadata, ...restData } = data;

    // Construct the blog post with data from frontmatter
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