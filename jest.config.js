const nextJest = require("next/jest.js")

const createJestConfig = nextJest({
  dir: "./",
})

const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}

module.exports = async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
})
