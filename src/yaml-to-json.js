const {fsp} = require('./filesystem')
const yaml = require('js-yaml')
module.exports = async (configFileName = 'config.yml') => yaml.safeLoad(await fsp.readFile(configFileName, 'utf8'))
