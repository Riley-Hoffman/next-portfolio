/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    esmExternals: true,
  },
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/rileyhoffmandotcom.appspot.com/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
