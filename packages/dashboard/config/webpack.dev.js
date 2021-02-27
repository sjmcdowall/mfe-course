const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

// Grab our dependencies
const packageJson = require('../package.json')

// Setup our dev environment
const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8083/'
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: './index.html'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}

// Now export the merged configs
module.exports = merge(commonConfig, devConfig)
