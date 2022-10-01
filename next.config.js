/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'api.lorem.space', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
