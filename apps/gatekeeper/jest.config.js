const nextJest = require('next/jest');

const withNextJest = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '<rootDir>',
});

module.exports = withNextJest({
  displayName: 'gatekeeper',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/gatekeeper',
});
