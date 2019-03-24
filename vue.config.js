const path = require('path');
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
       'process.env.VUE_APP_API_URL': JSON.stringify(process.env.VUE_APP_API_URL),
       'process.env.VUE_APP_API_URL_PORT': JSON.stringify(process.env.VUE_APP_API_URL_PORT)
      })
    ],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@plugins': path.resolve(__dirname, 'src/plugins')
      }
    }
  }
}
