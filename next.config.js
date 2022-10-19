/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["c1.neweggimages.com", "promotions.newegg.com"],
  },
};

module.exports = nextConfig;
