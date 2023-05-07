/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  assetsPath: "./",
};

module.exports = nextConfig;
