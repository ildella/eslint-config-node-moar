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

## How to use

The module is required as a dev dependency:

```shell
yarn add -D eslint@5.16.0 eslint-config-node-opinionated
# or with npm
npm i -D eslint@5.16.0 eslint-config-node-opinionated
```

A one-liner eslint config file is all you need now:

```shell
echo "extends: ['node-opinionated']" > .eslintrc.yml
```
