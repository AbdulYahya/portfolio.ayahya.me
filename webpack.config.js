const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

// const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: { main: './src/index.js' },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: { contentBase: './dist' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [{ loader: 'babel-loader?cacheDirectory' }]
      },
      {
        test: /\.tipe$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tipe-loader',
            options: {
              apiKey: process.env.apiKey,
              orgKey: process.env.orgKey
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode
            ? { loader: 'style-loader' }
            : { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {}),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      chunks: 'all',
      enforce: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new StyleLintPlugin({
      configFile: './.stylelintrc.js',
      files: './src/assets/styles/*.css'
    })
    // Seems to work just fine without this but keeping it here just in case
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     apiKey: JSON.stringify(process.env.apiKey),
    //     orgKey: JSON.stringify(process.env.orgKey)
    //   }
    // })
  ]
});
