import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { getMdxMetadata } from '@/lib/metadata';
import { Locale, locales } from '@/i18n/settings';
import { ClientProvider } from '@/i18n/client-provider';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
    const { locale, slug } = await params;

    // First check if the post exists - if not, provide fallback metadata
    const post = await getBlogPost(slug, locale as Locale);

    if (!post) {
        return {
            title: 'Post Not Available',
            description: `This blog post is not available in ${locale === 'en' ? 'English' : 'German'}.`
        };
    }

    // If the post exists, use the enhanced metadata from MDX frontmatter
    return getMdxMetadata({ slug, locale: locale as Locale });
}

// Generate static params for all blog posts across all locales
export async function generateStaticParams() {
    const staticParams = [];

    for (const locale of locales) {
        const posts = await getBlogPosts(locale);

        for (const post of posts) {
            staticParams.push({
                locale,
                slug: post.slug
            });
        }
    }

    return staticParams;
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    // Try to get the post in the current locale only
    const post = await getBlogPost(slug, locale as Locale);

    // Get available locales for this post
    const availableLocales: Locale[] = [];
    for (const otherLocale of locales) {
        if (otherLocale !== locale) {
            const otherLocalePost = await getBlogPost(slug, otherLocale);
            if (otherLocalePost) {
                availableLocales.push(otherLocale);
            }
        }
    }

    // Load common messages
    const commonMessages = (await import(`../../../../locales/${locale}.json`)).default;
    const t = commonMessages.common.blog;

    if (!post) {
        // If post not found in current locale, we use the already identified available locales
        return (
            <ClientProvider locale={locale} messages={commonMessages}>
                <div className="mx-auto px-4 py-10 container">
                    <div className="bg-gray-800 p-8 rounded-lg text-white text-center">
                        <h1 className="mb-4 font-bold text-white text-3xl">Post Not Available</h1>
                        <p className="mb-8">This blog post is not available in {locale === 'en' ? 'English' : 'German'}.</p>

                        {availableLocales.length > 0 && (
                            <div className="mb-8">
                                <p className="mb-4">Available in:</p>
                                <div className="flex justify-center space-x-4">
                                    {availableLocales.map(l => (
                                        <Link
                                            key={l}
                                            href={`/blog/${slug}`}
                                            locale={l}
                                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                                        >
                                            {l === 'en' ? 'English' : 'German'}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Link href="/blog" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white">
                            {t.backToBlog}
                        </Link>
                    </div>
                </div>
            </ClientProvider>
        );
    }

    // Get frontmatter data for rendering
    const { title, date, categories } = post.frontmatter;

    return (
        <ClientProvider locale={locale} messages={commonMessages}>
            <div className="mx-auto px-4 py-10 container">
                <article className="prose-invert mx-auto prose lg:prose-xl">
                    <h1 className="mb-4 font-bold text-white text-3xl">{title}</h1>
                    <p className="mb-4 text-gray-400">{new Date(date).toLocaleDateString()}</p>

                    {categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {categories.map(category => (
                                <Link
                                    key={category}
                                    href={`/blog/categories/${encodeURIComponent(category)}`}
                                    className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white text-sm"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="text-white">
                        {/* Render the MDX content */}
                        {post.content}
                        <p className="mt-4 text-gray-400">
                            This is a placeholder for the blog post content. In a real implementation,
                            this would be rendered MDX content.
                        </p>
                    </div>

                    {availableLocales.length > 0 && (
                        <div className="mt-8 p-4 border border-gray-700 rounded">
                            <p className="mb-2 text-gray-400">This post is also available in:</p>
                            <div className="flex space-x-4">
                                {availableLocales.map(l => (
                                    <Link
                                        key={l}
                                        href={`/blog/${slug}`}
                                        locale={l}
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        {l === 'en' ? 'English' : 'German'}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-8">
                        <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                            ← {t.backToBlog}
                        </Link>
                    </div>
                </article>
            </div>
        </ClientProvider>
    );
}
