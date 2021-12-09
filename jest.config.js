/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'jest-esm-transformer',
    '^.+\\.tsx?$': 'ts-jest',
    // '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  modulePathIgnorePatterns: ['./dist', './out'],
  // transformIgnorePatterns: [
  //   'node_modules/(?!(@ricardo-jrm/string-capitalize)/)',
  // ],
};
