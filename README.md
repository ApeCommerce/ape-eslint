# Ape Framework's ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeCommerce/ape-framework).

NPM package: [@apeframework/eslint-config](https://www.npmjs.com/package/@apeframework/eslint-config)

GitHub repository: [ApeCommerce/ape-eslint](https://github.com/ApeCommerce/ape-eslint)

## Installation

Install the package with its peer dependencies:

```
npm install --save-dev @apeframework/eslint-config \
  eslint \
  @typescript-eslint/eslint-plugin \
  @stylistic/eslint-plugin \
  eslint-plugin-import \
  eslint-plugin-jest
```

## Usage

Create `.eslintrc.json` file:

```json
{
  "extends": [
    "@apeframework"
  ],
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "@stylistic/eslint-plugin",
    "eslint-plugin-import",
    "eslint-plugin-jest"
  ],
  "rules": {}
}
```
