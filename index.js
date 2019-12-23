module.exports = {
    parser: '@typescript-eslint/parser',
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
        "plugin:node/recommended"
    ],
    'plugins': ['@typescript-eslint', 'prettier', 'jest'],
    parserOptions: {
        "ecmaVersion": 2020
    },
    'rules': {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
        }],
    },
    'overrides': [
        {
            'files': ['*.js'],
            'rules': {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
