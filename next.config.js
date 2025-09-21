/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-prompt-helper/' : '/', // Use leading slash for local builds
  // This setting helps with static exports
  trailingSlash: true,
}

module.exports = nextConfig;