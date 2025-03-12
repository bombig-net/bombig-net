/**
 * Navigation Utilities for Internationalized Routing
 * 
 * This file exports navigation tools (Link, useRouter, etc.) that are aware of
 * the internationalized routing configuration. These components and hooks handle
 * locale prefixes and proper linking between localized routes.
 */
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { Locale, locales } from './settings';

/**
 * Extract locale from pathname
 * 
 * Helper function to extract locale from a URL pathname
 * Example: '/en/about' -> 'en'
 */
export function getLocaleFromPathname(pathname: string): Locale | null {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
        const potentialLocale = pathSegments[0];
        if (isValidLocale(potentialLocale)) {
            return potentialLocale as Locale;
        }
    }
    return null;
}

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): boolean {
    return locales.includes(locale as Locale);
}

/**
 * Create navigation utilities that work with the internationalized routing
 * 
 * This creates Link, useRouter, usePathname, and redirect functions
 * that are aware of our locale configuration.
 */
export const { Link, useRouter, usePathname, redirect } = createSharedPathnamesNavigation({ locales }); 