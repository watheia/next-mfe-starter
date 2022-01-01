const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: false }, 'html']],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  setupFiles: ['dotenv/config'],
};
