/** @returns {import('webpack').Configuration} Webpack Configuration */
const webpack = require('webpack')
const globImporter = require('node-sass-glob-importer')

module.exports = (config, { mode }) => {
  const rules = config.module.rules[0].oneOf

  const scssRuleIndex = rules.findIndex(
    (rule) => rule.test.toString() === /\.scss$/.toString()
  )
  // Override exising scss rule
  const scssRule = rules[scssRuleIndex]
  const customScssRule = {
    ...scssRule,
    use: [
      ...scssRule.use.filter((item) => item !== 'sass-loader'), //remove 'sass-loader'
      {
        loader: 'sass-loader',
        options: { sassOptions: { importer: globImporter() } },
      },
    ],
  }

  config.module.rules[0].oneOf[scssRuleIndex] = customScssRule

  config.devtool = false
  if (mode === 'development') config.devtool = 'cheap-module-source-map'

  // Webpack V5 missing polyfills
  config.resolve.fallback = {
    os: require.resolve(`os-browserify/browser`),
    https: require.resolve(`https-browserify`),
    http: require.resolve(`stream-http`),
    stream: require.resolve(`stream-browserify`),
    util: require.resolve(`util/`),
    url: require.resolve(`url/`),
    assert: require.resolve(`assert/`),
    crypto: require.resolve(`crypto-browserify`),
    path: require.resolve('path-browserify'),
  }
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  )
  return config
}
