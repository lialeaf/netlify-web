const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

// const CleanWebpackPlugin = require('clean-webpack-plugin');
// 尝试使用环境变量，否则使用根路径
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: "development", // "production" | "development" | "none",
  // entry: ['./src/index.js'],
  entry: {
    // context: path.join(__dirname, "src"),
    main: './src/index.js',
    // another: './src/another-module.js'
    // print: './src/print.js'
  },
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    // filename: 'main.js',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"), // 运行时自动打开浏览器
    // path: path.join(__dirname, "dist"), // 运行时不自动打开浏览器

    // publicPath: ASSET_PATH,

  },
  //2.将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  // optimization: {
  // usedExports: true
  // },

  devServer: {
    // contentBase: './dist',
    // publicPath: 'dist',
    hot: true,
    compress: true,
    port: 9000,
    clientLogLevel: "none",
    quiet: true
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|libs)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false    //禁用babel-loader的模块依赖解析
              }]
            ]
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
  devtool: 'inline-source-map',

  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // title: '从HtmlWebpackPlugin中产生的 Title'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    // 'autoprefixer': {
    //   overrideBrowserslist: [
    //     "Android 4.1",
    //     "iOS 7.1",
    //     "Chrome > 31",
    //     "ff > 31",
    //     "ie >= 8"
    //   ]
    // },

    // 这可以帮助我们在代码中安全地使用环境变量
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ]
};


// const serverConfig = {
//   target: 'node',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.node.js'
//   }
//   //…
// };

// const clientConfig = {
//   target: 'web', // <=== 默认是 'web'，可省略
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.js'
//   }
//   //…
// };
// module.exports = [serverConfig, clientConfig];