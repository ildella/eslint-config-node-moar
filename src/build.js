const fs = require('fs')
const fsp = fs.promises

const yamlToJson = require('./yaml-to-json')

module.exports = async () => {
  await fsp.writeFile('output/generated.js', `module.exports = ${JSON.stringify(yamlToJson())}`)
}
