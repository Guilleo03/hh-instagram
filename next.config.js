/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "@/styles/breakpoints"; @import "@/styles/variables";`,
  },
  images: {
    domains: ['images.prismic.io'],
  },
};

module.exports = nextConfig;
