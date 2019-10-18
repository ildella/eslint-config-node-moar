# An opinionated linter based on ESLint

Across multiple Node.js projects, I use the same linter

  * ESLint with node reccomended defaults
  * A few plugins (node, security, sonarjs and jest)
  * A very strict and opinionated rule set

I was tired to copy-paste config and deps across projects, so I created a shareable eslint config for myself. Eventually could be interesting for somebody else as well. 

## How to use

The module is required as a dev dependency:

```json
"devDependencies": {
  "eslint-config-node-opinionated": "0.1.0"
}
```

A one-liner eslint config file is all you need now:

```shell
echo "extends: ['node-opinionated']" > .eslintrc.yml
```
