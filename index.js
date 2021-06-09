const warningsReporter = () => {
  return {
    postcssPlugin: 'postcss-warnings-reporters',
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
