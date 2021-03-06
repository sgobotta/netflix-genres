const path = require('path');
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_API_URL': JSON.stringify(process.env.VUE_APP_API_URL),
        'process.env.VUE_APP_BASE_NETFLIX_GENRE_URL': JSON.stringify(process.env.VUE_APP_BASE_NETFLIX_GENRE_URL)
      })
    ],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@plugins': path.resolve(__dirname, 'src/plugins')
      }
    }
  }
}
