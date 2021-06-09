let postcss = require('postcss')

let plugin = require('./')

function run(another, opts) {
  return function () {
    return postcss([another, plugin(opts)]).process('a{}').css
  }
}

it('does not do anything without warnings', () => {
  expect(run(() => {})).not.toThrow()
})

it('throws first warning', () => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  expect(
    run((root, result) => {
      root.warn(result, 'Test 1', { plugin: 'postcss-test' })
      result.warn('Test 2')
      result.warn('Test 3', { plugin: 'postcss-test' })
      root.warn(result, 'Test 4', { plugin: 'postcss-test' })
    })
  ).toThrow('Test 1')
  expect(console.warn).toHaveBeenCalledTimes(3)
  expect(console.warn).toHaveBeenNthCalledWith(1, 'Test 2')
  expect(console.warn).toHaveBeenNthCalledWith(2, 'postcss-test: Test 3')
  expect(console.warn).toHaveBeenNthCalledWith(
    3,
    'postcss-test: <css input>:1:1: Test 4'
  )
})
