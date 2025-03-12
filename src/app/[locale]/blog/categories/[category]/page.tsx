import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ClientProvider } from '@/i18n/client-provider';
import { getBlogPostsByCategory, getAllCategories } from '@/lib/mdx';
import { Locale, locales } from '@/i18n/settings';

type MetadataProps = {
    params: { locale: string; category: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const category = decodeURIComponent(resolvedParams.category);

    const t = await getTranslations({ locale, namespace: 'common' });

    return {
        title: `${t('title')} - ${category}`,
        description: t('description'),
    };
}

// Generate static params for all categories across all locales
export async function generateStaticParams() {
    const staticParams = [];
    const categories = await getAllCategories();

    for (const locale of locales) {
        for (const category of categories) {
            staticParams.push({
                locale,
                category: encodeURIComponent(category)
            });
        }
    }

    return staticParams;
}

type PageProps = {
    params: { locale: string; category: string };
};

export default async function CategoryPage({ params }: PageProps) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const category = decodeURIComponent(resolvedParams.category);

    // Get posts for this category and locale
    const posts = await getBlogPostsByCategory(category, locale as Locale);

    // Load common messages
    const commonMessages = (await import(`../../../../../locales/${locale}.json`)).default;
    const t = commonMessages.common.blog;

    return (
        <ClientProvider locale={locale} messages={commonMessages}>
            <div className="mx-auto px-4 py-10 container">
                <h1 className="mb-8 font-bold text-white text-3xl">
                    {t.category}: <span className="text-blue-400">{category}</span>
                </h1>

                {posts.length === 0 ? (
                    <p className="text-white">No posts available in this category for {locale === 'en' ? 'English' : 'German'}.</p>
                ) : (
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <div key={post.slug} className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="mb-2 font-bold text-white text-xl">{post.title}</h3>
                                <p className="mb-4 text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                                <p className="mb-4 text-white">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    Read More →
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex space-x-4 mt-8">
                    <Link href="/blog/categories" className="text-blue-400 hover:text-blue-300">
                        ← {t.allCategories}
                    </Link>
                    <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                        ← {t.backToBlog}
                    </Link>
                </div>
            </div>
        </ClientProvider>
    );
} 