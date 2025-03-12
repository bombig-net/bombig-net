import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ClientProvider } from '@/i18n/client-provider';
import { getBlogPostsByCategory, getAllCategories } from '@/lib/mdx';
import { Locale, locales } from '@/i18n/settings';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string }> }): Promise<Metadata> {
    const { locale, category: encodedCategory } = await params;
    const category = decodeURIComponent(encodedCategory);

    const t = await getTranslations({ locale, namespace: 'common' });

    return {
        title: `${t('title')} - ${t('blog.category')}: ${category}`,
        description: t('description'),
    };
}

// Generate static params for all blog categories
export async function generateStaticParams() {
    const categories = await getAllCategories();
    const staticParams = [];

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

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
    const { locale, category: encodedCategory } = await params;
    const category = decodeURIComponent(encodedCategory);

    // Get posts for this category and locale
    const posts = await getBlogPostsByCategory(category, locale as Locale);

    // Load common messages
    const commonMessages = (await import(`../../../../../locales/${locale}.json`)).default;
    const t = commonMessages.common.blog;

    return (
        <ClientProvider locale={locale} messages={commonMessages}>
            <div className="mx-auto px-4 py-10 container">
                <div className="mb-10">
                    <h1 className="mb-2 font-bold text-white text-3xl">{t.category}: {category}</h1>
                    <Link
                        href="/blog/categories"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        ← {t.browseByCategory}
                    </Link>
                </div>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.length === 0 ? (
                        <p className="text-white">No posts found in this category for {locale === 'en' ? 'English' : 'German'}.</p>
                    ) : (
                        posts.map((post) => (
                            <div key={post.slug} className="bg-gray-800 p-6 rounded-lg">
                                <h2 className="mb-2 font-bold text-white text-xl">{post.frontmatter.title}</h2>
                                <p className="mb-4 text-gray-400">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                                <p className="mb-4 text-white">{post.frontmatter.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    {t.readMore} →
                                </Link>
                            </div>
                        ))
                    )}
                </div>

                <div className="mt-10">
                    <Link
                        href="/blog"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        ← {t.backToBlog}
                    </Link>
                </div>
            </div>
        </ClientProvider>
    );
} 