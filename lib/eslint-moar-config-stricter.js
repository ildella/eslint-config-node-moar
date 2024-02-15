const rulesStricter = require('./eslint-moar-rules-stricter')

module.exports = {
  plugins: [
    'fp',
    'unicorn',
  ],
  extends: [
    'node-moar',
    'plugin:fp/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: rulesStricter,
}
