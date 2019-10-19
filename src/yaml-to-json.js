const fs = require('fs')
const yaml = require('js-yaml')
module.exports = (configFileName = 'config.yml') => yaml.safeLoad(fs.readFileSync(configFileName, 'utf8'))
