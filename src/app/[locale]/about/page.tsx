import { Metadata } from 'next';
import Hero from './sections/hero';
import ContentPlaceholder from './sections/content-placeholder';
import { ClientProvider } from '@/i18n/client-provider';
import { getJsonMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return getJsonMetadata({ locale, pageName: 'about' });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    // Load page-specific messages
    const pageMessages = (await import(`./locales/${locale}.json`)).default;

    return (
        <ClientProvider locale={locale} messages={pageMessages}>
            <div className="mx-auto px-4 container">
                <Hero />
                <ContentPlaceholder />
            </div>
        </ClientProvider>
    );
}
