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
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}

module.exports = nextConfig;
