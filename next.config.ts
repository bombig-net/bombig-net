import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withNextIntl = createNextIntlPlugin();
const config = withMDX(nextConfig);

// Apply the next-intl plugin with the configuration
export default withNextIntl(config);
