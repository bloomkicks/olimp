/** @type {import('next').NextConfig} */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  webpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    };
    return config;
  },
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
