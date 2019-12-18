 const path = require('path');
//  const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
 module.exports = {
     entry: {
         app: './src/index.js'
     },
     module: {
         rules: [{
                 test: /\.m?js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['@babel/preset-env']
                     }
                 }
             },
             {
                 test: /\.css$/,
                 use: ['style-loader', 'css-loader']
             },
             {
                 test: /\.html$/,
                 loader: 'html-loader'
             },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: ['file-loader']
             },
             {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                     'file-loader'
                 ]
             },
             {
                 test: /\.(csv|tsv)$/,
                 use: [
                     'csv-loader'
                 ]
             },
             {
                 test: /\.xml$/,
                 use: [
                     'xml-loader'
                 ]
             }
         ]
     },
     plugins: [
        //  new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
             template: './src/index.html',
            //  title: '从HtmlWebpackPlugin中产生的 Title'
         })
     ],
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist')
     }
 };