let postcss = require('postcss')

let plugin = require('./')

function run (another, opts) {
  return function () {
    return postcss([another, plugin(opts)]).process('').css
  }
}

it('does not do anything without warnings', () => {
  expect(run(() => { })).not.toThrow()
})

it('throw first warning', () => {
  expect(run((root, result) => {
    result.warn('Test 1')
    result.warn('Test 2')
  })).toThrow('Test 1')
})
