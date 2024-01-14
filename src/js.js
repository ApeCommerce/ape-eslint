'use strict'

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@stylistic',
    'import',
  ],
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: true,
    },
  },
  extends: [
    '@apeframework/eslint/rules/eslint',
    '@apeframework/eslint/rules/stylistic',
    '@apeframework/eslint/rules/import',
  ],
}
