const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: 'dist',
    hot: true,
    port: 1337,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});
