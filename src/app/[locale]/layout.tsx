import { Locale, locales } from '@/lib/i18n/settings';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { ClientProvider } from '@/lib/i18n/client-provider';
import LanguageSwitcher from './language-switcher';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '../../components/footer';
import './globals.css';

// Add global metadata with metadataBase
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

// Split layout into server and client components
export default async function LocaleLayout({ children, params }: Props) {
    // Await the params object before accessing properties
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    // Enables static rendering
    setRequestLocale(locale);

    // Validate that the incoming locale is supported
    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    // Load the messages for common elements
    const messages = (await import(`../../locales/${locale}.json`)).default;
    const t = await getTranslations({ locale, namespace: 'common' });

    return (
        <ClientProvider locale={locale} messages={messages} now={new Date()}>
            <div className="bg-black antialiased">
                <header className="bg-gray-800 p-4 text-white">
                    <nav className="flex justify-between">
                        <div>
                            <Link href="/" className="mr-4">{t('navigation.home')}</Link>
                            <Link href="/about" className="mr-4">{t('navigation.about')}</Link>
                            <Link href="/blog">{t('navigation.blog')}</Link>
                        </div>
                        <LanguageSwitcher currentLocale={locale} />
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </ClientProvider>
    );
} 