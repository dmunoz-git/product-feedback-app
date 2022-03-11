module.exports = {
    moduleNameMapper: {
        '^@core/(.*)': '<rootDir>/src/app/core/$1',
        '^@modules/(.*)$': '<rootDir>/src/app/modules/$1',
        '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
        '^@components/(.*)$': '<rootDir>/src/app/components/$1',
        '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/cypress/'],
};
