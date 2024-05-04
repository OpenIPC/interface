const path = require('path');
const postcssConfig = require('./postcss.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('src'),
  entry: '/index.ts',
  output: {
    filename: 'app.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
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
