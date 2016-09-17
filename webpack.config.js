var path = require('path');

module.exports = {
  entry: "./src/bootstrap.js",
  output: {
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: 'webpack_cache'
        }
      }
    ]
  }
};