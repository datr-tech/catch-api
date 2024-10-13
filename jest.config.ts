export default {
  coveragePathIgnorePatterns: ['<rootDir>/.jest', '<rootDir>/test/fixtures'],
  coverageReporters: ['clover', 'text'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
    '@appTest/(.*)': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
