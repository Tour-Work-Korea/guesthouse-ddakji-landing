/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/about',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
