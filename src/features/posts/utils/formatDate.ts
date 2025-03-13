/**
 * Format a date string for display in posts
 * This is a simple implementation - in a real app we would use a proper i18n date formatting library
 */
export function formatPostDate(dateString: string, locale: string = 'en'): string {
    const date = new Date(dateString);

    // Very simple locale-specific formatting
    if (locale === 'de') {
        // German format: day. month year
        return date.toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Default English format: month day, year
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
} 
