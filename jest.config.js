module.exports = {
  verbose: false,
  notify: true,
  notifyMode: 'failure-change, success-change',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules', '/generated'],
  // setupFilesAfterEnv: ['./tests/test-helpers.js'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {branches: 80, functions: 80, lines: 80, statements: 80}
  },
  coverageReporters: ['text', 'text-summary', 'json', 'json-summary', 'lcov', 'clover', 'html'],
}
