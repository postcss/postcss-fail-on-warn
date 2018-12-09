var postcss = require('postcss')

module.exports = postcss.plugin('postcss-fail-on-warn', function () {
  return function (root, result) {
    if (result.warnings().length > 0) {
      throw new Error(result.warnings()[0])
    }
  }
})
