/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-prompt-helper' : '',
}