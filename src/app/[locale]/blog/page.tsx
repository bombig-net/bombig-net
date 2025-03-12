import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ClientProvider } from '@/i18n/client-provider';
import { getBlogPosts } from '@/features/blog';
import { Locale } from '@/i18n/settings';
import { getJsonMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return getJsonMetadata({ locale, pageName: 'blog' });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    // Load blogPosts for current locale
    const posts = await getBlogPosts(locale as Locale);

    // Load page-specific messages
    const pageMessages = (await import(`./locales/${locale}.json`)).default;

    // Load common messages for translations
    const commonMessages = {
        ...pageMessages,
        common: (await import(`@/locales/${locale}.json`)).default
    };

    return (
        <ClientProvider locale={locale} messages={commonMessages}>
            <div className="mx-auto px-4 py-10 container">
                <div className="mb-10">
                    <h1 className="mb-4 font-bold text-white text-4xl">{pageMessages.hero.title}</h1>
                    <p className="text-gray-300 text-xl">{pageMessages.hero.subtitle}</p>
                </div>

                {posts.length === 0 ? (
                    <p className="text-white">No posts available in {locale === 'en' ? 'English' : 'German'}.</p>
                ) : (
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map(post => (
                            <div key={post.slug} className="bg-gray-800 shadow-lg p-6 rounded-lg">
                                <h2 className="mb-2 font-bold text-white text-xl">
                                    {post.frontmatter.title}
                                </h2>
                                <p className="mb-2 text-gray-400">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                                <p className="mb-4 text-white">{post.frontmatter.excerpt}</p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    {pageMessages.posts.readMore} →
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ClientProvider>
    );
}
