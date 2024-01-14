'use strict'

module.exports = {
  ...require('./js'),
  overrides: [
    {
      files: [
        '**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
      plugins: [
        '@typescript-eslint',
      ],
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
      rules: {
        ...require('./rules/typescript'),
      },
    },
  ],
}
