'use strict'

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  semi: false,
  printWidth: 120,
  proseWrap: 'preserve',
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: '*.{css,scss,less,html,hbs,yml,yaml}',
      options: { singleQuote: false },
    },
    { files: '*.{html,hbs}', options: { printWidth: 200 } },
  ],
}
