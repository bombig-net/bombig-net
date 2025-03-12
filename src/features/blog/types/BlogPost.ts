import { Metadata } from 'next';

// Define the blog post type using the frontmatter from MDX
export type BlogPost = {
    slug: string;
    locale: string;
    content: string; // The MDX content (without frontmatter)
    frontmatter: {
        title: string;
        date: string;
        excerpt: string;
        // Metadata for SEO and page head elements
        metadata?: Metadata;
        [key: string]: unknown; // For additional frontmatter fields
    };
}; 