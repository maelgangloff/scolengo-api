/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", {
      tsconfig: {
        allowJs: true
      }
    }]
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!ts-json-schema-generator)"
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/"]
};