/**
 * Internationalization Middleware
 * 
 * This middleware handles locale detection, URL rewriting, and redirects
 * for internationalized routes.
 */
import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

export default createMiddleware(routing);

/**
 * Define which routes should be processed by the middleware
 * - '/' - The homepage needs to be redirected to the appropriate locale
 * - '/(en|de)/:path*' - All language-prefixed routes
 */
export const config = {
    matcher: [
        // Match all pathnames except for
        // - /api routes
        // - /_next (Next.js internals)
        // - /images, /fonts, /favicon.ico, etc.
        '/((?!api|_next|.*\\..*).+)'
    ]
}; 
