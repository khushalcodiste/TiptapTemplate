const esModules = ['@tiptap/html', 'lodash-es'].join('|');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
    '^lodash-es/(.*)$': 'lodash/$1',
  },
  projects: ['<rootDir>/packages/*'],
  transform: {
    [`(${esModules}).+\\.ts$`]: [
      'ts-jest',
      {
        isolatedModules: true
      },
    ],
    [`(${esModules}).+\\.(js|jsx)$`]: 'babel-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
