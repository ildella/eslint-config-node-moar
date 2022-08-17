# A strict and complete ESLint configuration

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/eslint-config-node-moar.svg?style=flat-square)](https://npmjs.com/package/eslint-config-node-moar)
[![Build Status](https://github.com/ildella/eslint-config-node-moar/actions/workflows/main.yaml/badge.svg)](https://github.com/ildella/eslint-config-node-moar/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/ildella/eslint-config-node-moar/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ildella/eslint-config-node-moar?targetFile=package.json)

An ESLint [Shareable Config](https://eslint.org/docs/latest/developer-guide/shareable-configs) that includes:

  * ESLint with node/recommended 
  * A very strict and opinionated rule set
  * Errors are errors, and warnings are warnings. Yes, that's the rule.
  * The security plugin
  * The sonarjs plugin
  * The promise plugin

I was tired to copy-paste config and deps across projects, so I created a shareable eslint config for myself. Eventually could be interesting for somebody else as well. 

Why -moar? Because -strict was already taken and -more is boring. 

## Basic usage

Install all the dependencies:

```shell
yarn add -D eslint eslint-config-node-moar eslint-plugin-node eslint-plugin-security eslint-plugin-sonarjs
```

A one-liner eslint config file is all you need now:

```shell
echo "extends: ['node-moar']" > .eslintrc.yml
```

or create your own `.eslintrc.js` like this: 

```javascript
module.exports = {
  extends: [
    'node-moar',
  ],
}
```

## In combo with Jest

I often use ESLint in combination with [Jest](jestjs.io/), with some specific overrides for the `tests` folder: 

```javascript
module.exports = {
  extends: [
    'node-moar',
    'plugin:jest/recommended'
  ],
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/*test*/**'],
      rules: {
        'node/no-unpublished-require': 'off',
        'node/no-unpublished-import': 'off',
        'max-nested-callbacks': ['warn', 3],
        'security/detect-child-process': 'off',
        'security/detect-non-literal-fs-filename': 'off',
      }
    },
  ]
}
```
