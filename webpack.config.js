const path = require('path');
const StyleLint = require('stylelint');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const options = {
  cache: true,
  cacheLocation: './storage/stylelint_caches/',
  configFile: './.stylelintrc.json',
  context: 'compiler.context',
  emitErrors: true,
  failOnError: false,
  files: '**/*.s?(a|c)ss',
  formatter: StyleLint.formatters.string,
  lintDirtyModulesOnly: false,
  syntax: ['css-in-js', 'html', 'less', 'sass', 'scss'],
};

module.exports = {
  devtool: 'source-map',
  entry: './frontend/audio_caelum_entry.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // a regular expression that tests what kind of files
        // to run through this loader.
        exclude: /(node_modules)/,
        // ignore these files
        use: {
          loader: 'babel-loader',
          // the name of the loader we are going to use (babel-loader).
          query: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js',
  },
  plugins: [new StyleLintPlugin(options)],
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
};
