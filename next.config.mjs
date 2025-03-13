import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

const nextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// Create the next-intl plugin with the path to the request.ts file
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

// Apply both plugins
export default withNextIntl(withMDX(nextConfig)); 