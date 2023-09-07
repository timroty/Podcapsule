/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[]",
  },
}

module.exports = nextConfig
