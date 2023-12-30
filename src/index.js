export default {
  root: true,
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.spec.ts',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
        '@stylistic',
        'import',
        'jest',
      ],
      env: {
        'node': true,
        'jest/globals': true,
      },
      settings: {
        'import/resolver': {
          node: true,
          typescript: true,
          jest: {
            jestConfigFile: 'jest.config.json',
          },
        },
      },
      extends: [
        '@apeframework/eslint-config/eslint',
        '@apeframework/eslint-config/typescript',
        '@apeframework/eslint-config/stylistic',
        '@apeframework/eslint-config/import',
        '@apeframework/eslint-config/jest',
      ],
    },
    {
      files: [
        '**/*.js',
      ],
      parserOptions: {
        sourceType: 'module',
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
    },
  ],
}
