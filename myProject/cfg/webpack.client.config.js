const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const {
  HotModuleReplacementPlugin
} = require('webpack');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const express = require('express')

const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';

function setupDevtool() {
  if (IS_DEV) return 'eval'
  if (IS_PROD) return false
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    }
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'

  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        use: "ts-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          }
        },
      'less-loader', ]
      }
    ]
  },
  devtool: setupDevtool(),
  plugins: IS_DEV ? [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ] : [],
};