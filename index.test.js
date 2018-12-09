var postcss = require('postcss')

var plugin = require('./')

function run (another, opts) {
  return function () {
    return postcss([another, plugin(opts)]).process('').css
  }
}

it('does not do anything without warnings', function () {
  expect(run(function () { })).not.toThrow()
})

it('throw first warning', function () {
  expect(run(function (root, result) {
    result.warn('Test 1')
    result.warn('Test 2')
  })).toThrow('Test 1')
})
