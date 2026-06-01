/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // generates an out/ folder of pure static files
  trailingSlash: true, // ensures /about/ → out/about/index.html (S3-friendly)
}

module.exports = nextConfig
