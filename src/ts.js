'use strict'

module.exports = {
  root: true,
  extends: [
    '@apeframework/eslint-config/js',
  ],
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
      extends: [
        '@apeframework/eslint-config/rules/typescript',
      ],
    },
  ],
}
