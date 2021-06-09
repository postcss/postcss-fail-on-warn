# PostCSS Fail On Warn

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo-leftp.svg">

[PostCSS] plugin throws a error on any warning from previous PostCSS plugins.

[PostCSS]: https://postcss.org/

<a href="https://evilmartians.com/?utm_source=postcss-focus">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-focus
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
    require('autoprefixer'),
+   require('postcss-fail-on-warn')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
