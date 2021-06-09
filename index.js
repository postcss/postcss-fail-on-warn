const warningsReporter = function (opts = {}) {
  return {
    postcssPlugin: 'postcss-warnings-reporters',
    OnceExit (css, { result }) {
      const [first, ...rest] = result.warnings()

      rest && rest.map(console.log)

      if (first) {
        throw new Error(first)
      }
    }
  }
}

module.exports = warningsReporter
module.exports.postcss = true
