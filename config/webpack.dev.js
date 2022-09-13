const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: "./public/index.html",
    }),
  ],
  entry: {
    catalog: './src/index.js',
    catalogWithContainer: './src/indexWithContainer.js',
  },
  output: {
    filename: '[name].bundle.js',
  }
};

module.exports = merge(commonConfig, devConfig);

