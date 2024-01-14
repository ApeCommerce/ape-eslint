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
    },
  ],
}
