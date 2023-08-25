/** @type {import('next').NextConfig} */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
  output: "export",
  distDir: "dist",
  assetPrefix: "/olimp/dist/",
  basePath: "/olimp/dist",
  reactStrictMode: true,
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
};

module.exports = nextConfig;
