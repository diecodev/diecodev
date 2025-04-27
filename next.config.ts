import type { NextConfig } from "next";
import withMDX from'@next/mdx'


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    reactCompiler: true,
    mdxRs: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default withMDX()(nextConfig);
