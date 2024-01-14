'use strict'

module.exports = {
  ...require('./ts'),
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
      rules: {
        ...require('./rules/jest'),
      },
    },
  ],
}
