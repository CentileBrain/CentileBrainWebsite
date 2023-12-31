// prettier-ignore
module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 9,
        'sourceType': 'module'
    },
    'plugins': ['simple-import-sort', 'react'],
    'rules': {
        'camelcase': 'error',
        'eqeqeq': 'error',
        'max-lines': ['warn', 200],
        'no-console': 'warn',
        'no-trailing-spaces': 'error',
        'no-unused-vars': ['error', {
            'argsIgnorePattern': '^(props)$',
            'varsIgnorePattern': 'React'
        }],
        'no-var': 'error',
        'prefer-rest-params': 'off',
        'react/boolean-prop-naming': 'error',
        'react/jsx-key': 'error',
        'react/no-children-prop': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'require-await': 'error',
        'simple-import-sort/sort': 'error',
        'react/display-name': 'off',
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
