/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});
const nextConfig = {};
module.exports =
  process.env.NEXT_ANALYZE === "true"
    ? withBundleAnalyzer(nextConfig)
    : nextConfig;
