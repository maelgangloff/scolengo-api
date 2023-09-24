module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    '^axios$': require.resolve('axios')
  },
  testEnvironment: 'node',
  preset: 'ts-jest'
}
