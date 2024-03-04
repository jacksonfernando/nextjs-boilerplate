/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-2c1ae71907384bfba8e5f118feb7834f.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    PRODUCT_ENDPOINT: process.env.PRODUCT_ENDPOINT,
  }
}

module.exports = nextConfig
