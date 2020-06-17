# An opinionated ESLint configuration

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/eslint-config-node-opinionated.svg?style=flat-square)](https://npmjs.com/package/eslint-config-node-opinionated)
[![Build Status](https://travis-ci.com/ildella/eslint-config-node-opinionated.svg?branch=master)](https://travis-ci.com/ildella/eslint-config-node-opinionated)
[![Known Vulnerabilities](https://snyk.io/test/github/ildella/eslint-config-node-opinionated/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ildella/eslint-config-node-opinionated?targetFile=package.json)
[![David](https://img.shields.io/david/ildella/eslint-config-node-opinionated.svg)](https://david-dm.org/ildella/eslint-config-node-opinionated)
[![David](https://img.shields.io/david/dev/ildella/eslint-config-node-opinionated.svg)](https://david-dm.org/ildella/eslint-config-node-opinionated)
[![David](https://img.shields.io/david/peer/ildella/eslint-config-node-opinionated.svg)](https://david-dm.org/ildella/eslint-config-node-opinionated)

Across multiple Node.js projects, I use the same linter

  * ESLint with node reccomended defaults
  * A few plugins (node, security, sonarjs and jest)
  * A very strict and opinionated rule set

I was tired to copy-paste config and deps across projects, so I created a shareable eslint config for myself. Eventually could be interesting for somebody else as well. 

## Basic usage

Install all the dependencies:

```shell
yarn add -D eslint eslint-config-node-opinionated eslint-plugin-node eslint-plugin-security eslint-plugin-sonarjs
```

A one-liner eslint config file is all you need now:

```shell
echo "extends: ['node-opinionated']" > .eslintrc.yml
```

or create your own `.eslintrc.js` like this: 

```javascript
module.exports = {
  extends: [
    'node-opinionated',
  ],
}
```

## In combo with Jest

I often use ESLint in combination with [Jest](jestjs.io/), with some specific overrides for the `tests` folder: 

```javascript
module.exports = {
  extends: [
    'node-opinionated',
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
