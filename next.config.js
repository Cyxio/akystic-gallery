/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'stakysticimages.blob.core.windows.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
