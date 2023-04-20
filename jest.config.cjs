module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{tsx,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}