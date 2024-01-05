/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'opengraph.githubassets.com',
            port: '',
            pathname: '**/cooldragon12/**',
          },
        ],
    },
}

module.exports = nextConfig
