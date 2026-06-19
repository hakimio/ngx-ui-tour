const {join} = require('path');

const libRoot = join(__dirname);

module.exports = {
    preset: 'jest-preset-angular',
    rootDir: libRoot,
    setupFilesAfterEnv: [join(libRoot, 'src/test-setup.ts')],
    testEnvironment: 'jsdom',
    roots: [join(libRoot, 'src')],
    testMatch: ['**/*.spec.ts'],
    modulePathIgnorePatterns: [join(libRoot, '../../dist')],
    moduleNameMapper: {
        '^ngx-ui-tour-core$': join(libRoot, 'src/public_api.ts')
    }
};
