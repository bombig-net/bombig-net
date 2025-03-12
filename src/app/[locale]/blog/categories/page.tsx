import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ClientProvider } from '@/i18n/client-provider';
import { getAllCategories } from '@/lib/mdx';

type MetadataProps = {
    params: { locale: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    const t = await getTranslations({ locale, namespace: 'common' });

    return {
        title: `${t('title')} - Blog Categories`,
        description: t('description'),
    };
}

type PageProps = {
    params: { locale: string };
};

export default async function CategoriesPage({ params }: PageProps) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    // Get all categories across all locales
    const categories = await getAllCategories();

    // Load common messages
    const commonMessages = (await import(`../../../../locales/${locale}.json`)).default;
    const t = commonMessages.common.blog;

    return (
        <ClientProvider locale={locale} messages={commonMessages}>
            <div className="mx-auto px-4 py-10 container">
                <h1 className="mb-8 font-bold text-white text-3xl">{t.allCategories}</h1>

                {categories.length === 0 ? (
                    <p className="text-white">No categories available.</p>
                ) : (
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/blog/categories/${encodeURIComponent(category)}`}
                                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg text-center"
                            >
                                <span className="font-medium text-white text-lg">{category}</span>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-8">
                    <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                        ← {t.backToBlog}
                    </Link>
                </div>
            </div>
        </ClientProvider>
    );
} 