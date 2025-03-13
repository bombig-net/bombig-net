import { Metadata } from 'next';
import Hero from './sections/hero';
import ContentPlaceholder from './sections/content-placeholder';
import { ClientProvider } from '@/lib/i18n/client-provider';
import { getJsonMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return getJsonMetadata({ locale, pageName: 'home' });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    // Load page-specific messages
    const pageMessages = (await import(`./locales/${locale}.json`)).default;

    return (
        <ClientProvider locale={locale} messages={pageMessages}>
            <div>
                <Hero />
                <ContentPlaceholder />
            </div>
        </ClientProvider>
    );
}
