module.exports = {
  roots: ['<rootDir>/src/'],
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
