/** @type {import('next').NextConfig} */
// const isDev = process.env.NODE_ENV !== "production";
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  assetPrefix: "/olimp/build/",
  basePath: "/olimp/build",
};

module.exports = nextConfig;
