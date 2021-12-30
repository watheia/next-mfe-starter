// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  basePath: '/catalog',
  nx: {
    // Set this to false if you don't need SVGR loadert
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  images: {
    domains: [],
  },
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: true,
  profiling: true,
  optimizeFonts: true,
  outputFileTracing: true,
  experimental: {
    // reactMode: 'concurrent',
    optimizeImages: true,
    optimizeCss: true,
  },
};

module.exports = withBundleAnalyzer(withNx(nextConfig));
