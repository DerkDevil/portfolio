import createAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = createAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  // aquí va tu configuración adicional si tienes
});

export default nextConfig;
