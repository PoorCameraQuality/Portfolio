/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Contentlayer configuration for Next.js 14
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
