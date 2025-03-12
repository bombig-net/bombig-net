/**
 * Internationalization Routing Configuration
 * 
 * This file configures the internationalization routing for Next.js using next-intl.
 * It defines the supported locales, default locale, and locale prefix strategy.
 */
import { Pathnames } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './settings';

/**
 * Pathnames configuration
 * 
 * This object maps route paths across different locales.
 * For now, we're using the same paths for all locales (e.g., '/about' is the same in all languages).
 * If you need language-specific paths, you can define them here.
 * 
 * Example for custom paths:
 * {
 *   '/about': {
 *     en: '/about',
 *     de: '/ueber-uns'
 *   }
 * }
 */
export const pathnames = {
    // Add your routes here
    // '/blog': {
    //   en: '/blog',
    //   de: '/blog'
    // },
} satisfies Pathnames<typeof locales>;

/**
 * Routing configuration
 * 
 * This object configures the next-intl middleware with:
 * - locales: All supported language codes
 * - defaultLocale: The fallback language
 * - localePrefix: Strategy for handling the locale in URLs
 *   - 'always' means the locale is always included in the URL (e.g., /en/about, /de/about)
 */
export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'always'
});
