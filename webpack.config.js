const path = require('path');

module.exports = {
  entry : './src/js/app.js',
  output : {
    path : path.resolve(__dirname, 'dist/js'),
    filename : 'bundle.js'
  },
  devServer: {
    contentBase: '/dist'
  },
  /*
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]*/
}