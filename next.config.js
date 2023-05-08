/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  assetPrefix: !isDev ? "/olimp/build/" : "",
};

module.exports = nextConfig;
