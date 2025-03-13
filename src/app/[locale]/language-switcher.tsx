'use client';

import { locales } from '@/lib/i18n/settings';
import { usePathname, Link } from '@/lib/i18n/navigation';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    // Get the current path without the locale prefix
    const pathname = usePathname();

    return (
        <div>
            <Link
                href={pathname}
                locale="en"
                className={currentLocale === 'en' ? 'font-bold' : ''}
            >
                English
            </Link>
            {' | '}
            <Link
                href={pathname}
                locale="de"
                className={currentLocale === 'de' ? 'font-bold' : ''}
            >
                Deutsch
            </Link>
        </div>
    );
} 