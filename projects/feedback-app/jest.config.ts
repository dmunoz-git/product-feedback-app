/* eslint-disable */
export default {
    displayName: 'feedback-app',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    moduleNameMapper: {
        '^@core/(.*)': '<rootDir>/src/app/core/$1',
        '^@modules/(.*)$': '<rootDir>/src/app/modules/$1',
        '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
        '^@components/(.*)$': '<rootDir>/src/app/components/$1',
        '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
        },
    },
    coverageDirectory: '../../coverage/projects/feedback-app',
    transform: {
        '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
};
