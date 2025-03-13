import { Link } from '@/lib/i18n/navigation';
import { Post } from '../types';
import { formatPostDate } from '../utils/formatDate';

interface PostCardProps {
    post: Post;
    readMoreText: string;
}

export function PostCard({ post, readMoreText }: PostCardProps) {
    return (
        <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
            <h2 className="mb-2 font-bold text-white text-xl">
                {post.frontmatter.title}
            </h2>
            <p className="mb-2 text-gray-400">{formatPostDate(post.frontmatter.date, post.locale)}</p>
            <p className="mb-4 text-white">{post.frontmatter.excerpt}</p>

            <Link
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300"
            >
                {readMoreText} →
            </Link>
        </div>
    );
} 
