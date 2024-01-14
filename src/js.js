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
  rules: {
    ...require('./rules/javascript'),
    ...require('./rules/stylistic'),
    ...require('./rules/import'),
  },
}
