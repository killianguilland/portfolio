import nextMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

// 1. Initialize the next-intl plugin
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/[locale]/articles/**/*.mdx'],
  }
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // Pass as strings in nested arrays so Turbopack can serialize them
    remarkPlugins: [['remark-gfm', {}]],
    rehypePlugins: [['@mapbox/rehype-prism', {}]],
  },
});

// 2. Wrap the configuration: MDX first, then Next-Intl
export default withNextIntl(withMDX(nextConfig));