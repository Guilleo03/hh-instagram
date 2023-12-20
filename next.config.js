/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "@/styles/breakpoints"; @import "@/styles/variables";`,
  },
  images: {
    domains: ['plus.unsplash.com'],
  },
};

module.exports = nextConfig;
