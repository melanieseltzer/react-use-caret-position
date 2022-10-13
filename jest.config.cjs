module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
