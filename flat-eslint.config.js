const path = require('path')
const {fileURLToPath} = require('url')
const {FlatCompat} = require('@eslint/eslintrc')
const promise = require('eslint-plugin-promise')
const security = require('eslint-plugin-security')
const sonarjs = require('eslint-plugin-sonarjs')
const node = require('eslint-plugin-node')
// const js = require('@eslint/js')

const eslintRulesCore = require('./eslint-rules-core')

// mimic CommonJS variables -- not needed if using CommonJS
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

module.exports = [
  // env: {
  //   es2022: true, // globals + syntax
  //   node: true,
  // },
  // js.configs.recommended,
  // eslint.configs.recommended,
  // node.configs.recommended,
  // promise.configs.recommended,
  security.configs.recommended,
  // sonarjs.configs.recommended,
  // ...compat.extends("eslint-plugin-sonarjs"),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2023, // syntax only
        ecmaFeatures: {
          impliedStrict: true,
          globalReturn: false,
        },
        allowImportExportEverywhere: false,
        requireConfigFile: false,
      },
    },
    plugins: {
      promise,
      security,
      sonarjs,
    },
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'array-element-newline': ['warn', 'consistent'],
    },
  },
  // {
  //   files: ['*.json'],
  //   languageOptions: {
  //     parser: jsoncParser,
  //   },
  //   rules: {},
  // },
]
