// konfiguracja Webpack

const path = require("path");
const webpack = require("webpack");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const appPath = path.join(__dirname, "..", "app");

module.exports = {
  target: 'web',
  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      assets: path.resolve(appPath, 'assets'),
      config: path.resolve(appPath, 'config'),
      components: path.resolve(appPath, 'components'),
      constants: path.resolve(appPath, 'constants'),
      containers: path.resolve(appPath, 'containers'),
      services: path.resolve(appPath, 'services'),
      utils: path.resolve(appPath, 'utils'),
      actions: path.resolve(appPath, 'actions'),
      reducers: path.resolve(appPath, 'reducers'),
    },
    extensions: ['.js', '.png'],
  },
  entry: {
    app: path.join(appPath, 'index.js'),
  },
  output: {
    path: path.join(appPath, '..', 'public'),
    publicPath: '/',
    filename: 'bundle-[hash:8].js',
  },
  plugins: [
    new cleanWebpackPlugin(
      ['public'],
      {
        root: path.join(appPath, '..'),
        exclude: 'uploads',
      }
    ),
    new extractTextWebpackPlugin('[name]-[hash:8].css'),
    new htmlWebpackPlugin({
      template: path.join(appPath, 'index.html'),
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: extractTextWebpackPlugin.extract([{
          loader: 'css-loader',
          options: {
            minimize: true,
          }
        }]),
      }, {
        test: /\.(jpe?g|png|svg)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]',
          },
        },
      }, {
        test: /\.(woff|woff2)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: 'assets/fonts/[name].[ext]',
            }
          }
        ]
      },
    ]
  }
};