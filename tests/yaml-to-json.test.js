const yaml = require('js-yaml')
const fs = require('fs')

test('load yaml checks', () => {
  const doc = yaml.safeLoad(fs.readFileSync('.eslintrc.yml', 'utf8'))
  expect(doc.env.node).toBe(true)
})

const generated = require('./expected')
const yamlToJson = require('../src/yaml-to-json')
test('compare with generated', () => {
  const doc = yamlToJson
  expect(doc).toEqual(generated)
})

test('smoke', () => {
  const doc = require('..')
  expect(doc).toEqual(generated)
})
