// eslint-disable-next-line @typescript-eslint/no-var-requires

const withNx = require('@nrwl/next/plugins/with-nx');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const HOME_URL = new URL(process.env['HOME_URL'] ?? 'http://localhost:4210/home').href
const BLOG_URL = new URL(process.env['BLOG_URL'] ?? 'http://localhost:4220/blog').href
const CATALOG_URL = new URL(process.env['CATALOG_URL'] ?? 'http://localhost:4230/catalog').href

const nx = {
  // Set this to true if you would like to to use SVGR
  // See: https://github.com/gregberge/svgr
  svgr: true,
};

const rewrite = (url, zone) => [
  {
    source: `/${zone}`,
    destination: `${url}`,
  },
  {
    source: `/${zone}/:path*`,
    destination: `${url}/:path*`,
  },
];

async function rewrites() {
  return [
    {
      source: '/:path*',
      destination: `/:path*`,
    },
    ...rewrite(HOME_URL, 'home'),
    ...rewrite(BLOG_URL, 'blog'),
    ...rewrite(CATALOG_URL, 'catalog'),
  ];
}

/**
 * @type {import(`@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
module.exports = withBundleAnalyzer(
  withNx({
    rewrites,
    nx,
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
      reactMode: 'concurrent',
      optimizeImages: true,
      optimizeCss: true,
    },
  })
);
