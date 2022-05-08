module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/next/**',
    '!**/content/**',
    '!**/enums/**',
    '!**/models/**',
    '!**/svg/**',
    '!**/pages/_app.tsx',
    '!**/context/App.tsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup.tsx'
  ],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/context/(.*)$': '<rootDir>/context/$1',
    '^@/content/(.*)$': '<rootDir>/content/$1',
    '^@/enums/(.*)$': '<rootDir>/enums/$1',
    '^@/models/(.*)$': '<rootDir>/models/$1',
    '^@/svg/(.*)$': '<rootDir>/svg/$1',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFiles: ['<rootDir>/__tests__/setup.tsx'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}