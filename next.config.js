/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
