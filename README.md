# Ape Framework ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeCommerce/ape-framework).

NPM package: [@apeframework/eslint](https://www.npmjs.com/package/@apeframework/eslint).

GitHub repository: [ApeCommerce/ape-eslint](https://github.com/ApeCommerce/ape-eslint).

## Installation

Install package and peer dependencies:

```
npm install --save-dev @apeframework/eslint \
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
    "@apeframework/eslint"
  ]
}
```

To customize linting rules, use:

```json
{
  "extends": [
    "@apeframework/eslint"
  ],
  "plugins": [
    "@stylistic",
    "import"
  ],
  "rules": {},
  "overrides": [
    {
      "files": [
        "**/*.ts"
      ],
      "plugins": [
        "@typescript-eslint"
      ],
      "rules": {},
      "overrides": [
        {
          "files": [
            "**/*.spec.ts"
          ],
          "plugins": [
            "jest"
          ],
          "rules": {}
        }
      ]
    }
  ]
}
```
