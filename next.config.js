/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
