/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp'],
  },
  experimental: {
    serverActions: true,
  },
  swcMinify: true,
}

export default nextConfig 