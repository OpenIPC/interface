const path = require('path');
const postcssConfig = require('./postcss.config.js');

module.exports = {
  context: path.resolve('src'),
  entry: '/index.ts',
  output: {
    filename: 'app.js',
  },
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    compress: true,
    host: '127.0.0.1',
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: postcssConfig,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
