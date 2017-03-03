var htmlWebpackPlugin=require('html-webpack-plugin')
var path = require('path');
const webpack = require('webpack');
module.exports = {
  //entry: './src/index.js',
  entry: ['./src/index.js'],
  //output: 'bundle.js',
  output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].bundle.js?[hash:8]",
    },
  debug: true,
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      //第一个jsloader的位置不要动，新加loader从后面添加
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include:/src/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
    },
    {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]?[hash:8]',

      },
      {
       test: /\.(mp4|ogg|svg)$/,
       loader: 'file-loader',
       query:{
         name:'images/[name].[ext]?[hash:8]'
       }
     }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader'],
      },
    ],
  },
  plugins:[
      new htmlWebpackPlugin({
          template:'index.html',
          inject:'body'
      }),


  ],
  postcss:[
    require('autoprefixer')({
      broswers:['last 5 versions']
    })
  ]
};
