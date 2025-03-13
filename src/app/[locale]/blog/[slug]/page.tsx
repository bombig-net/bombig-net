import { Metadata } from 'next';
import { getPost, getPosts, formatPostDate } from '@/features/posts';
import { getMdxMetadata } from '@/lib/metadata';
import { Locale, locales } from '@/lib/i18n/settings';
import { ClientProvider } from '@/lib/i18n/client-provider';
import { Link } from '@/lib/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
    const { locale, slug } = await params;

    // First check if the post exists - if not, provide fallback metadata
    const post = await getPost(slug, locale as Locale);

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
        const posts = await getPosts(locale);

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
    const post = await getPost(slug, locale as Locale);

    // Get available locales for this post
    const availableLocales: Locale[] = [];
    for (const l of locales) {
        if (l === locale) continue; // Skip current locale
        const p = await getPost(slug, l);
        if (p) availableLocales.push(l);
    }

    // Load common messages
    const commonMessages = (await import(`@/locales/${locale}.json`)).default;

    // Load feature-specific translations
    const postsMessages = (await import(`@/features/posts/locales/${locale}.json`)).default;

    // If post not found in current locale
    if (!post) {
        return (
            <ClientProvider locale={locale} messages={{ ...commonMessages, posts: postsMessages }}>
                <div className="mx-auto px-4 py-10 container">
                    <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h1 className="mb-4 font-bold text-white text-3xl">{postsMessages.ui.notAvailable}</h1>
                        <p className="mb-8 text-gray-300">
                            {postsMessages.ui.notAvailableMessage}
                        </p>

                        {availableLocales.length > 0 && (
                            <div className="mb-8">
                                <h2 className="mb-2 font-semibold text-white text-xl">{postsMessages.ui.availableIn}</h2>
                                <ul className="flex flex-wrap gap-2">
                                    {availableLocales.map(l => (
                                        <li key={l}>
                                            <Link
                                                href={`/blog/${slug}`}
                                                locale={l}
                                                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
                                            >
                                                {l === 'en' ? 'English' : 'German'}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                            ← {postsMessages.ui.backToBlog}
                        </Link>
                    </div>
                </div>
            </ClientProvider>
        );
    }

    // Get frontmatter data for rendering
    const { title, date } = post.frontmatter;

    return (
        <ClientProvider locale={locale} messages={{ ...commonMessages, posts: postsMessages }}>
            <div className="mx-auto px-4 py-10 container">
                <article className="prose-invert mx-auto prose lg:prose-xl">
                    <h1 className="mb-4 font-bold text-white text-3xl">{title}</h1>
                    <p className="mb-4 text-gray-400">{formatPostDate(date, locale)}</p>

                    <div className="text-white">
                        {/* Render the MDX content */}
                        {post.content}
                        <p className="mt-4 text-gray-400">
                            This is a placeholder for the blog post content. In a real implementation,
                            this would be rendered MDX content.
                        </p>
                    </div>
                </article>

                <div className="mt-8 text-center">
                    <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                        ← {postsMessages.ui.backToBlog}
                    </Link>
                </div>
            </div>
        </ClientProvider>
    );
}
