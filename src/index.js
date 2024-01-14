'use strict'

module.exports = {
  root: true,
  extends: [
    '@apeframework/eslint-config/ts',
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
        '@apeframework/eslint-config/rules/jest',
      ],
    },
  ],
}
