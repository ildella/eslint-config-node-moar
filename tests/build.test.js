const {fsp} = require('../src/filesystem')
beforeAll(() => {
  fsp.mkdir('output')
})
afterAll(() => {
  fsp.unlink('output/generated.js')
  fsp.rmdir('output')
})

const build = require('../src/build')

test('build', async () => {
  const handle = await build()
  expect(handle).toBe()
})
