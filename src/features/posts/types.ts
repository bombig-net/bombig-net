import { Metadata } from 'next';

// Define the post type using the frontmatter from MDX
export type Post = {
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
