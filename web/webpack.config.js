const path = require('path');

module.exports = {
  entry: './src/script/index.js',
  // __dirname
  output: {
    path: __dirname+"/dist",
    filename: "bind.js"
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
        exclude:/node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude:/node_modules/
      },
      {
        test: /\.js$/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        }],
        exclude:/node_modules/
      },
    ]
  }
}