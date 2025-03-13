import { Metadata } from 'next';
import { Locale } from '@/i18n/settings';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Get metadata from page-specific JSON locale files
 * 
 * This function retrieves the metadata section from a specific page's locale file
 * Falls back to the default metadata in the locale file if not found
 */
export async function getJsonMetadata({
    locale,
    pageName
}: {
    locale: string;
    pageName: string;
}): Promise<Metadata> {
    try {
        // Try to get page-specific metadata
        const messages = pageName === 'home'
            ? (await import(`../app/[locale]/(home)/locales/${locale}.json`)).default
            : (await import(`../app/[locale]/${pageName}/locales/${locale}.json`)).default;

        // Use page metadata if it exists, otherwise use the default locale metadata
        if (messages.metadata) {
            return messages.metadata;
        }
    } catch (error) {
        console.error(`Could not load JSON metadata for page "${pageName}" in locale "${locale}"`, error);
    }

    // Fall back to locale default metadata
    try {
        return (await import(`../locales/${locale}.json`)).default.metadata || {};
    } catch (error) {
        console.error(`Could not load fallback metadata for locale "${locale}"`, error);
        return {};
    }
}

/**
 * Get metadata from MDX post frontmatter
 * 
 * Retrieves the metadata object from an MDX file's frontmatter for SEO and page metadata
 * Falls back to the default metadata in the locale file if not found
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
        const filePath = path.join(process.cwd(), 'src/features/posts/content', locale, `${slug}.mdx`);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            throw new Error(`MDX file not found: ${filePath}`);
        }

        // Read the file content
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Parse the frontmatter
        const { data } = matter(fileContents);

        // Extract the metadata object from the frontmatter
        if (data.metadata && Object.keys(data.metadata).length > 0) {
            return data.metadata;
        }
    } catch (error) {
        console.error(`Could not load MDX metadata for post "${slug}" in locale "${locale}":`, error);
    }

    // Fall back to locale default metadata
    try {
        return (await import(`../locales/${locale}.json`)).default.metadata || {};
    } catch (error) {
        console.error(`Could not load fallback metadata for locale "${locale}"`, error);
        return {};
    }
} 