# PostCSS Fail On Warn

[PostCSS] plugin throws a error on any warning from previous PostCSS plugins.

[PostCSS]: https://postcss.org/

## Usage

```js
postcss([
  require('autoprefixer'),
  // other plugins
  require('postcss-fail-on-warn')
])
```

See [PostCSS] docs for examples for your environment.
