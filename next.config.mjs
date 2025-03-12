import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

const nextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// Create the next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Apply both plugins
export default withNextIntl(withMDX(nextConfig)); 