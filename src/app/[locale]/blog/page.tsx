import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Hero from './sections/hero';
import { getBlogPosts } from '@/lib/mdx';
import { Locale } from '@/i18n/settings';
import { ClientProvider } from '@/i18n/client-provider';

type MetadataProps = {
    params: { locale: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    // Await the params object
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    const t = await getTranslations({ locale, namespace: 'common' });

    return {
        title: `${t('title')} - Blog`,
        description: t('description'),
    };
}

type PageProps = {
    params: { locale: string };
};

export default async function BlogPage({ params }: PageProps) {
    // Await the params object
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    // Load blogPosts for current locale
    const posts = await getBlogPosts(locale as Locale);

    // Load page-specific messages
    const pageMessages = (await import(`./locales/${locale}.json`)).default;

    // Load common messages for translations
    const commonMessages = (await import(`../../../locales/${locale}.json`)).default;
    const t = commonMessages.common.blog;

    return (
        <ClientProvider locale={locale} messages={pageMessages}>
            <div className="mx-auto px-4 container">
                <Hero />
                <div className="py-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-white text-2xl">Blog Posts</h2>
                        <Link
                            href="/blog/categories"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm"
                        >
                            {t.browseByCategory}
                        </Link>
                    </div>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts.length === 0 ? (
                            <p className="text-white">No blog posts available in this language.</p>
                        ) : (
                            posts.map((post) => (
                                <div key={post.slug} className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="mb-2 font-bold text-white text-xl">{post.title}</h3>
                                    <p className="mb-4 text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                                    {post.categories.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.categories.map(category => (
                                                <Link
                                                    key={category}
                                                    href={`/blog/categories/${encodeURIComponent(category)}`}
                                                    className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white text-xs"
                                                >
                                                    {category}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                    <p className="mb-4 text-white">{post.excerpt}</p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </ClientProvider>
    );
}
