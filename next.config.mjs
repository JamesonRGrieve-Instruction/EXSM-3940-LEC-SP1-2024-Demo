import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

const nextConfig = {};

export default process.env.NEXT_ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;
