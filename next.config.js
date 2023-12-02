/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js',
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
