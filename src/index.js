'use strict'

module.exports = {
  root: true,
  ...require('./config/js'),
  overrides: [
    {
      files: [
        '**/*.ts',
      ],
      ...require('./config/ts'),
      overrides: [
        {
          files: [
            '**/*.spec.ts',
          ],
          ...require('./config/spec'),
        },
      ],
    },
  ],
}
