/**
 * Internationalization Settings
 * 
 * This file contains core configuration for the application's internationalization.
 * It defines supported locales, default locale, and type definitions for i18n.
 */

/**
 * Locale Type
 * 
 * Defines the type for supported language codes in the application.
 * Currently supporting English (en) and German (de).
 */
export type Locale = 'en' | 'de';

/**
 * Supported Locales
 * 
 * Array of all language codes supported by the application.
 * Used for locale detection, validation, and routing.
 */
export const locales: Locale[] = ['en', 'de'];

/**
 * Default Locale
 * 
 * The fallback language used when:
 * - No locale is specified in the URL
 * - A user visits the root path
 * - The requested locale isn't supported
 */
export const defaultLocale: Locale = 'en';
