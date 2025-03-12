'use client';

import { useTranslations } from 'next-intl';

export default function ContentPlaceholder() {
    const t = useTranslations('content');

    return (
        <div className="py-10 text-center">
            <p className="text-white">
                {t('placeholder')}
            </p>
        </div>
    );
} 