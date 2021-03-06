module.exports = {
  entry: {
    hello: './public/hello.jsx'
  },
  output: {
    // __dirname is the path of webpack.js
    path: __dirname + '/public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, loader: 'babel-loader'
      }
    ]
  }
}
