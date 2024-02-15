const rulesTest = require('./eslint-moar-rules-test')

module.exports = {
  plugins: [
    'jest',
  ],
  extends: [
    'node-moar',
    'plugin:jest/recommended',
  ],
  rules: rulesTest,
}
