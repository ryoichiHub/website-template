import { scripts as config } from './tasks/config';
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV ? 'production' : 'development',
  entry: {
    app: `./${config.srcRoot}/main.js`
  },
  output: {
    filename: 'main.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: [path.resolve('./node_modules')],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
};
