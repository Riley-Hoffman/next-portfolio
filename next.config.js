/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
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
