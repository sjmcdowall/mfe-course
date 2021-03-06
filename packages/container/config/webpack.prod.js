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
    publicPath: '/container/latest/',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}

// Now export the merged configs
module.exports = merge(commonConfig, prodConfig)
