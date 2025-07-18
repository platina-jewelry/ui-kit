module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
    moduleNameMapping: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@hoc/(.*)$': '<rootDir>/src/hoc/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@types$': '<rootDir>/src/types/index.ts'
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
        '<rootDir>/src/**/*.{test,spec}.{ts,tsx}'
    ],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.ts',
        '!src/__tests__/**'
    ],
    coverageReporters: ['text', 'lcov', 'html'],
    coverageDirectory: 'coverage',
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|react-native-.*)/)'
    ]
};
