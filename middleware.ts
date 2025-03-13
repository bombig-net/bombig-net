import createMiddleware from 'next-intl/middleware';
import { routing } from './src/lib/i18n/routing';

// This middleware intercepts requests to /[locale]/... routes,
// and rewrites them so Next.js can handle them properly
export default createMiddleware(routing);

// Only apply this middleware to pathname patterns that have a locale
export const config = {
    matcher: [
        // Match all pathnames except for
        // - /api routes
        // - /_next (Next.js internals)
        // - /images, /fonts, /favicon.ico, etc.
        '/((?!api|_next|.*\\..*).+)'
    ]
}; 