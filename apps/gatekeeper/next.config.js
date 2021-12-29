// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { BLOG_URL, HOME_URL, CATALOG_URL } = process.env;

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

// async function redirects() {
//   return [
//     {
//       source: '/',
//       destination: '/home',
//       permanent: false,
//     },
//   ];
// }

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
    // redirects,
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
