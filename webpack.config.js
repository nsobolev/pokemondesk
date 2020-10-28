const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

module.exports = {
  mode: NODE_ENV,

  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },

  devtool: isDevelopment ? 'source-map' : '',

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]_[hash:base64:5]',
                auto: /\.module\.\w+$/i
              }
            }
          },
          'less-loader',
        ],
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    })
  ]
}