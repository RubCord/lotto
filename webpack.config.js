// webpack v4
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: { main: './src/js/server.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'src'),
    port: 3000,
    "proxy": {
      "/json": {
      "target": 'https://www.lottoland.com/api/drawings',
      "pathRewrite": { '^/json': '' },
      "changeOrigin": true,
      "secure": false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: "html-loader",
        options: { minimize: true }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: ["json-loader"],
        type: 'javascript/auto'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => autoprefixer({
                browsers: ['last 3 versions', '> 1%']
              })
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => autoprefixer({
                browsers: ['last 3 versions', '> 1%']
              })
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from:'src/images', to:'images' }
    ])
  ]
};
