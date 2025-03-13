import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { Locale } from '@/i18n/settings';

/**
 * Read and parse an MDX file from the posts content directory
 */
export function parseMdxFile(locale: Locale, slug: string): GrayMatterFile<string> | null {
    try {
        const filePath = path.join(process.cwd(), 'src/features/posts/content', locale, `${slug}.mdx`);
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