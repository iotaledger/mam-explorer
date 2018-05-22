// shared config (dev and prod)
const { resolve } = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loaders: [
          'file-loader',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
      {
        test: /\.svg$/,
        loaders: [
          'svg-react-loader'
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'assets/images/favicon.ico',
      title: 'IOTA MAM Explorer',
    }),
  ],
  performance: {
    hints: false,
  },
  node: {
    fs: 'empty',
  },
};
