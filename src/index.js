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
  overrides: [
    {
      files: [
        '**/*.js',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    {
      files: [
        '**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
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
