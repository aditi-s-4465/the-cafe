import type { NextConfig } from "next";

// Serve site from repository subpath for GitHub Pages
const repoBasePath = '/Aditi-s-Personal-Website';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
};


export default nextConfig;
