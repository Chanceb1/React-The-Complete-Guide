module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript
        'no-unused-vars': 'warn', // Warn about unused variables
        'react/jsx-uses-react': 'off', // Not needed with React 17+
        'react/jsx-uses-vars': 'warn', // Warn about unused variables in JSX
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};