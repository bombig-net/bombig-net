'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="bg-gray-700 py-20 text-white">
            <div className="mx-auto px-4 text-center container">
                <h1 className="mb-4 font-bold text-4xl">{t('title')}</h1>
                <h2 className="mb-6 text-2xl">{t('subtitle')}</h2>
                <p className="mx-auto mb-8 max-w-2xl">{t('description')}</p>
            </div>
        </section>
    );
}
