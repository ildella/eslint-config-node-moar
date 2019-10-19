const fs = require('fs')
const yaml = require('js-yaml')
const doc = yaml.safeLoad(fs.readFileSync('.eslintrc.yml', 'utf8'))
// console.log(doc)
module.exports = doc
