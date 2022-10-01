/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'tailwindui.com', 'api.lorem.space', 'images.unsplash.com', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
