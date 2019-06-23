module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/test/**/*.spec.(ts|js)'
    ],
    testEnvironment: 'node',
    transformIgnorePatterns: [
        "/node_modules/",
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@@/(.*)$": "<rootDir>/test/$1",
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "src/server.ts",
    ],
    collectCoverage: true,
    coverageReporters: ["json", "lcov", "text-summary", "text"],
};

