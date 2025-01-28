// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['jest-canvas-mock'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  fakeTimers: {
    enableGlobally: true,
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

module.exports = async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
})
