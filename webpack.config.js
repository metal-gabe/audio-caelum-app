const path = require('path');
module.exports = {
  entry: './frontend/audio_caelum_entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: { 
    rules: [
      {
        test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            presets: ['@babel/env', '@babel/react'] //
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [".js", '.jsx', '*']
  }
};
