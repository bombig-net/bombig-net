import { Metadata } from 'next';
import { ClientProvider } from '@/i18n/client-provider';
import { getPosts } from '@/features/posts';
import { PostCard } from '@/features/posts/components/PostCard';
import { Locale } from '@/i18n/settings';
import { getJsonMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return getJsonMetadata({ locale, pageName: 'blog' });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    // Load posts for current locale
    const posts = await getPosts(locale as Locale);

    // Load page-specific messages
    const pageMessages = (await import(`./locales/${locale}.json`)).default;

    // Load feature-specific messages for post components
    const postsMessages = (await import(`@/features/posts/locales/${locale}.json`)).default;

    // Load common messages for translations
    const commonMessages = {
        ...pageMessages,
        posts: postsMessages,
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
                            <PostCard
                                key={post.slug}
                                post={post}
                                readMoreText={postsMessages.ui.readMore}
                            />
                        ))}
                    </div>
                )}
            </div>
        </ClientProvider>
    );
}
