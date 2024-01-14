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
    '@apeframework/eslint-config/rules/eslint',
    '@apeframework/eslint-config/rules/stylistic',
    '@apeframework/eslint-config/rules/import',
  ],
}
