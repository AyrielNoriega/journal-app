const RULES = {
    OFF: 'off',
    WARN: 'warn',
    ERROR: 'error'
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4],
        semi: [
            'error',
            'always'
        ],
        'react/react-in-jsx-scope': RULES.OFF,
        'no-undef': RULES.WARN,
        'react/prop-types': RULES.WARN,
        'react/no-children-prop': RULES.WARN,
        'react/no-unknown-property': RULES.WARN
    }
};
