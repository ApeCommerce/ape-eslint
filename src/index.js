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
    '@apeframework/eslint-config/eslint',
    '@apeframework/eslint-config/stylistic',
    '@apeframework/eslint-config/import',
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
        '@apeframework/eslint-config/typescript',
      ],
      overrides: [
        {
          files: [
            '**/*.spec.ts',
          ],
          plugins: [
            'jest',
          ],
          env: {
            'jest/globals': true,
          },
          settings: {
            'import/resolver': {
              jest: {
                jestConfigFile: 'jest.config.json',
              },
            },
          },
          extends: [
            '@apeframework/eslint-config/jest',
          ],
        },
      ],
    },
  ],
}
