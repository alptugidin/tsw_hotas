module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 0,
    'no-mixed-spaces-and-tabs': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-console': 'off',
    'no-tabs': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'no-undef': 'off',
  },
};
