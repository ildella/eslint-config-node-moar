const core = require('./lib/eslint-moar-config-core')
const stricter = require('./lib/eslint-moar-config-stricter')
const test = require('./lib/eslint-moar-config-test')

module.exports = {
  configs: {
    core,
    stricter,
    test,
  },
}
