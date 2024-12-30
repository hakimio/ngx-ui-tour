const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const stylisticTs = require('@stylistic/eslint-plugin-ts');

module.exports = tseslint.config({
    files: ['**/*.ts'],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
        '@stylistic/ts': stylisticTs
    },
    rules: {
        '@angular-eslint/directive-selector': ['error', {
            type: 'attribute',
            prefix: 'tour',
            style: 'camelCase',
        }],
        '@angular-eslint/component-selector': ['error', {
            type: 'element',
            prefix: 'tour',
            style: 'kebab-case',
        }],
        '@typescript-eslint/naming-convention': ['error', {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
        }, {
            selector: 'import',
            format: ['camelCase', 'PascalCase'],
        }, {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
        }, {
            selector: 'typeLike',
            format: ['PascalCase'],
        }, {
            selector: 'enumMember',
            format: ['PascalCase'],
        }, {
            selector: 'objectLiteralProperty',
            format: null,
        }, {
            selector: 'typeProperty',
            format: null,
        }, {
            selector: 'classProperty',
            modifiers: ['readonly'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
        }],
        'one-var': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@stylistic/ts/semi': [
            'error'
        ],
        '@stylistic/ts/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },

            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
        }],
        '@angular-eslint/prefer-standalone': ['error'],
        '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
        '@typescript-eslint/no-restricted-imports': ['error', {
            paths: [{
                "name": "@ionic/angular",
                "message": "Please import Ionic standalone components instead: `import {IonButton} from '@ionic/angular/standalone'`.",
                "allowTypeImports": true
            }]
        }],
        '@typescript-eslint/consistent-type-imports': ['warn', {
            prefer: 'type-imports',
        }],
        "@typescript-eslint/no-unused-vars": ["error", {
            "args": "all",
            "argsIgnorePattern": "^_",
            "caughtErrors": "all",
            "caughtErrorsIgnorePattern": "^_",
            "destructuredArrayIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
            "ignoreRestSiblings": true
        }]
    }
}, {
    files: ['**/*.html'],
    extends: [
        ...angular.configs.templateRecommended,
    ],
    rules: {},
});
