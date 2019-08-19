module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    mocha: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    pageData: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    // ESLint Builtins
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-return-assign': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'operator-linebreak': 'off',
    // React Plugin
    'react/button-has-type': 'off',
    // 'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    // the above line gives me a warning when using JSX syntax inside of a .jsx file
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-sort-props': ['warn', { shorthandFirst: true }],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    // Prettier Plugin
    'prettier/prettier': 'error',
    // Import Plugin
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
  },
};
