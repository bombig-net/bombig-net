'use client';

import { ReactNode } from 'react';
import { AbstractIntlMessages } from 'next-intl';
import { ClientProvider } from '@/i18n/client-provider';

type Props = {
    locale: string;
    children: ReactNode;
    messages: AbstractIntlMessages;
};

export default function PageWrapper({ children, locale, messages }: Props) {
    return (
        <ClientProvider locale={locale} messages={messages} now={new Date()}>
            {children}
        </ClientProvider>
    );
} 