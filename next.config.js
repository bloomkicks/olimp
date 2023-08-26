/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const nextConfig = withPWA({
  output: "export",
  distDir: "dist",
  assetPrefix: !isDev ? "./" : "/olimp/dist/",
  basePath: !isDev ? "" : "/olimp/dist",
  images: {
    unoptimized: true,
  },
  env: {
    ASSET_PREFIX: !isDev ? "" : "/olimp/dist",
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
