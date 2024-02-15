const rulesCore = require('./lib/eslint-moar-rules-core')

module.exports = {
  parserOptions: {
    ecmaVersion: 2023, // syntax only
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
    allowImportExportEverywhere: false,
    requireConfigFile: false,
  },
  env: {
    es2023: true, // globals + syntax
    node: true,
  },
  plugins: [
    'promise',
    'security',
    'sonarjs',
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: rulesCore,
}
