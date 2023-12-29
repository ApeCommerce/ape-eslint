module.exports = {
  root: true,
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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: process.cwd(),
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
}
