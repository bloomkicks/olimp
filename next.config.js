/** @type {import('next').NextConfig} */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const withPWA = require("next-pwa")({
  dest: "public",
  scope: "/olimp/dist/",
  sw: "sw.js",
  fallbacks: {
    document: "/olimp/dist/_offline",
  },
});

const isDev = process.env.NODE_ENV === "development";

const nextConfig = withPWA({
  output: "export",
  distDir: "dist",
  assetPrefix: "/olimp/dist/",
  basePath: "/olimp/dist",
  images: {
    unoptimized: true,
  },
  env: {
    ASSET_PREFIX: "/olimp/dist",
  },
  webpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    };
    return config;
  },
});

module.exports = nextConfig;
