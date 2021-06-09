module.exports = () => {
  return {
    postcssPlugin: 'postcss-fail-on-warn',
    OnceExit(css, { result, CssSyntaxError }) {
      let [first, ...rest] = result.warnings()
      if (!first) return

      function format(warning) {
        if (warning.line) {
          let input = (warning.node && warning.node.input) || {}
          let formatter = new CssSyntaxError(
            warning.text,
            warning.line,
            warning.column,
            input.css,
            input.file,
            warning.plugin
          )
          return formatter.toString().replace(/^CssSyntaxError: /, '')
        } else if (warning.plugin) {
          return warning.plugin + ': ' + warning.text
        } else {
          return warning.text
        }
      }

      if (rest) {
        for (let warning of rest) {
          console.warn(format(warning))
        }
      }

      throw new Error(format(first))
    }
  }
}
module.exports.postcss = true
