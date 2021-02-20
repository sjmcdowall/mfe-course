// Container -- Webpack Prod Config

const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

// Grab our dependencies
const packageJson = require('../package.json')

// Get our domain from env
const domain = process.env.PRODUCTION_DOMAIN

// Setup our dev environment
const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/marketing/latest/',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}

// Now export the merged configs
module.exports = merge(commonConfig, prodConfig)
