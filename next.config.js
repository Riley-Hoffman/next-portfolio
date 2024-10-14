/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
