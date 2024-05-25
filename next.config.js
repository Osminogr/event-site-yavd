/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: "/event-site-yavd/",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  distDir: 'build',
  assetPrefix: '/event-site-yavd/',
};

module.exports = nextConfig
