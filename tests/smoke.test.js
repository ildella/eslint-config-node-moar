const config = require('../src/config')

test('simple checks', () => {
  expect(config.env.node).toBe(true)
})

test('main require', () => {
  const module = require('..')
  expect(module.env.node).toBe(true)
})