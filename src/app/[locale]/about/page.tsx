import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from './sections/hero';
import ContentPlaceholder from './sections/content-placeholder';
import { ClientProvider } from '@/i18n/client-provider';

type MetadataProps = {
    params: { locale: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    // Await the params object before accessing properties
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    // Use the common namespace instead of 'about'
    const t = await getTranslations({ locale, namespace: 'common' });

    return {
        title: `${t('title')} - About`,
        description: t('description'),
    };
}

type PageProps = {
    params: { locale: string };
};

export default async function AboutPage({ params }: PageProps) {
    // Await the params object
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

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
