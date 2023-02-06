/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
  eslint: {
    dirs: ["pages"]
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig

