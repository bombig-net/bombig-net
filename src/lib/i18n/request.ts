/**
 * Server-side Internationalization Configuration
 * Setup for messages and localization settings on the server
 * Used by Server Components, Server Actions, and other server-only code
 */
import { getRequestConfig } from 'next-intl/server';
import { locales, Locale, defaultLocale } from './settings';

/**
 * Request configuration for next-intl
 * This is used by the server to determine which messages to load
 * and which locale to use for the current request
 */
export default getRequestConfig(async ({ requestLocale }) => {
    // Get the locale from the request context - it's a Promise, not a function
    let locale = await requestLocale;

    // Ensure that the incoming locale is valid
    if (!locale || !locales.includes(locale as Locale)) {
        locale = defaultLocale;
    }

    try {
        return {
            locale,
            timeZone: 'Europe/Berlin',
            messages: (await import(`../locales/${locale}.json`)).default
        };
    } catch {
        // If messages for the locale couldn't be loaded, fallback to default locale
        return {
            locale,
            timeZone: 'Europe/Berlin',
            messages: (await import(`../locales/${defaultLocale}.json`)).default
        };
    }
}); 
