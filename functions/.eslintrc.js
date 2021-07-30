module.exports = {
    root: true,

    env: {
        es6: true,
        node: true
    },

    extends: [
        'standard',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        sourceType: 'module'
    },

    // Ignore built files.
    ignorePatterns: [
        '/lib/**/*'
    ],

    plugins: [
        '@typescript-eslint',
        'import'
    ],

    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false
        }],

        'no-const-assign': 'error',

        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true
        }],

        semi: ['error', 'always'],
        quotes: ['error', 'single']
    }
};
