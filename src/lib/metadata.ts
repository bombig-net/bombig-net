import { Metadata } from 'next';
import { Locale } from '@/i18n/settings';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Get metadata from page-specific JSON locale files
 * 
 * This function retrieves the metadata section from a specific page's locale file
 */
export async function getJsonMetadata({
    locale,
    pageName
}: {
    locale: string;
    pageName: string;
}): Promise<Metadata> {
    try {
        // For home page which is in (home) directory
        if (pageName === 'home') {
            const messages = (await import(`../app/[locale]/(home)/locales/${locale}.json`)).default;
            return messages.metadata || {};
        } else {
            // For other pages
            const messages = (await import(`../app/[locale]/${pageName}/locales/${locale}.json`)).default;
            return messages.metadata || {};
        }
    } catch {
        // Standardized error handling across both functions
        console.error(`Could not load JSON metadata for page "${pageName}" in locale "${locale}"`);
        return {};
    }
}

/**
 * Get metadata from MDX blog post frontmatter
 * 
 * Retrieves the metadata object from an MDX file's frontmatter for SEO and page metadata
 */
export async function getMdxMetadata({
    slug,
    locale
}: {
    slug: string;
    locale: Locale;
}): Promise<Metadata> {
    try {
        // Path to the MDX file
        const filePath = path.join(process.cwd(), 'src/content/blog', locale, `${slug}.mdx`);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            throw new Error(`MDX file not found: ${filePath}`);
        }

        // Read the file content
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Parse the frontmatter
        const { data } = matter(fileContents);

        // Extract the metadata object from the frontmatter
        return data.metadata || {};
    } catch (error) {
        console.error(`Could not load MDX metadata for blog post "${slug}" in locale "${locale}":`, error);
        return {
            title: `Blog Post Not Found: ${slug}`,
            description: `The requested blog post is not available in ${locale === 'en' ? 'English' : 'German'}.`
        };
    }
} 