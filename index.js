const warningsReporter = () => {
  return {
    postcssPlugin: 'postcss-fail-on-warn',
    OnceExit (css, { result }) {
      let [first, ...rest] = result.warnings()

      /* eslint-disable no-console */
      rest && rest.map(console.log)

      if (first) {
        throw new Error(first)
      }
    }
  }
}

module.exports = warningsReporter
module.exports.postcss = true
