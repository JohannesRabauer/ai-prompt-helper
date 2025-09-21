/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  assetPrefix: '',
  // This setting helps with static exports
  trailingSlash: true,
}

module.exports = nextConfig;