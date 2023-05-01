/**
 * @type {import('next').NextConfig}
 */

const isGitHubPages = process.env.NODE_ENV === 'github_pages'

console.log("process.env.NODE_ENV", process.env.NODE_ENV)

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: isGitHubPages ? 'https://certator.github.io/test-fed0256/' : undefined,
  basePath: isGitHubPages ? '/test-fed0256' : undefined,
}

module.exports = nextConfig
