'use client';

/**
 * Client-side Internationalization Provider
 * 
 * This component wraps client components to provide internationalization context.
 * It ensures all client components have access to the correct locale and messages.
 */

import { ReactNode } from 'react';
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { useParams } from 'next/navigation';

type Props = {
    locale?: string;
    children: ReactNode;
    messages: AbstractIntlMessages;
    now?: Date;
};

/**
 * ClientProvider Component
 * 
 * Wraps NextIntlClientProvider with improved locale resolution that:
 * 1. Uses the explicitly provided locale prop if available
 * 2. Falls back to the locale from URL parameters
 * 3. Uses 'en' as a final fallback
 * 
 * This ensures client components can access translations and formatting
 * functions with the correct locale context even when rendered separately
 * from the main application flow.
 */
export function ClientProvider({ children, locale: propLocale, messages, now }: Props) {
    // If a locale is passed as a prop, use it; otherwise, fall back to the URL parameter
    // This ensures client components get their locale from the provider first
    const params = useParams() as { locale?: string };
    const locale = propLocale || params.locale || 'en';

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Europe/Berlin"
            now={now}
        >
            {children}
        </NextIntlClientProvider>
    );
} 
