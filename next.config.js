/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyjson.com", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
