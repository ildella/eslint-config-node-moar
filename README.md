# A strict and complete ESLint configuration

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/eslint-config-node-moar.svg?style=flat-square)](https://npmjs.com/package/eslint-config-node-moar)
[![Build Status](https://github.com/ildella/eslint-config-node-moar/actions/workflows/main.yaml/badge.svg)](https://github.com/ildella/eslint-config-node-moar/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/ildella/eslint-config-node-moar/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ildella/eslint-config-node-moar?targetFile=package.json)

An ESLint [Shareable Config](https://eslint.org/docs/latest/developer-guide/shareable-configs) that includes this plugins and enforces reccomended:

```javascript
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
  ],
```

And then defines: 

  * a quite strict and opinionated rule set
  * formatting rules - no need for prettier
  * errors as errors, and warnings as warnings. 
    - As in: if it does break it, it's an error. If it's a convention, it's a warning.

Why -moar? Because -strict was already taken and -more is boring. 

## Basic usage

Install all the dependencies:

```shell
yarn add -D eslint eslint-config-node-moar eslint-plugin-node eslint-plugin-security eslint-plugin-sonarjs
```

Create your own `.eslintrc.js`: 

```javascript
module.exports = {
  extends: [
    'node-moar',
  ],
}
```

Or use this one-liner:

```shell
echo "extends: ['node-moar']" > .eslintrc.yml
```
