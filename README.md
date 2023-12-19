# Ape Framework ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeCommerce/ape-framework).

NPM package: [@apeframework/eslint-config](https://www.npmjs.com/package/@apeframework/eslint-config)

GitHub repository: [ApeCommerce/ape-eslint](https://github.com/ApeCommerce/ape-eslint)

## Installation

```
npm install @apeframework/eslint-config
```

## Usage in a TypeScript project

Install required NPM packages:

```
npm install --save-dev \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  @stylistic/eslint-plugin \
  @apeframework/eslint-config
```

Create `.eslintrc.json` file:

```json
{
  "root": true,
  "env": {
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "@stylistic"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "@apeframework/eslint-config/stylistic"
  ]
}
```

## Usage in a JavaScript project

Install required NPM packages:

```
npm install --save-dev \
  eslint \
  @stylistic/eslint-plugin \
  @apeframework/eslint-config
```

Create `.eslintrc.json` file:

```json
{
  "root": true,
  "env": {
    "node": true
  },
  "plugins": [
    "@stylistic"
  ],
  "extends": [
    "eslint:recommended",
    "@apeframework/eslint-config/stylistic"
  ]
}
```
