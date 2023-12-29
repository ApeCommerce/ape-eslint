module.exports = {
  root: true,
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
    '@apeframework/eslint-config/eslint',
    '@apeframework/eslint-config/stylistic',
    '@apeframework/eslint-config/import',
  ],
}
