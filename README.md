# Ape Framework ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeCommerce/ape-framework).

NPM package: [@apeframework/eslint-config](https://www.npmjs.com/package/@apeframework/eslint-config)

GitHub repository: [ApeCommerce/ape-eslint](https://github.com/ApeCommerce/ape-eslint)

## Installation

Install package and peer dependencies:

```
npm install --save-dev @apeframework/eslint-config \
  eslint \
  @typescript-eslint/parser \
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
  ]
}
```

## Override

To override configuration rules, add `overrides` in `.eslintrc.json`:

```json
{
  "extends": [
    "@apeframework"
  ],
  "overrides": [
    {
      "files": ["**/*.ts"],
      "plugins": [
        "@typescript-eslint",
        "@stylistic",
        "import",
        "jest"
      ],
      "rules": {}
    },
    {
      "files": ["**/*.js"],
      "plugins": [
        "@stylistic",
        "import"
      ],
      "rules": {}
    }
  ]
}
```

# TODO

- eslint
- typescript
- jest
