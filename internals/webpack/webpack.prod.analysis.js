// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/* const OfflinePlugin = require('offline-plugin');*/
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],

  // use react-lite for production
  alias: {
    react: 'react-lite',
    'react-dom': 'react-lite',
  },

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader?modules&-autoprefixer&importLoaders=1!postcss-loader!sass-loader',
  }),

  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),

    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Extract the CSS into a seperate file
    new ExtractTextPlugin('[name].[contenthash].css'),

    new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      // In `server` mode analyzer will start HTTP server to show bundle report.
      // In `static` mode single HTML file with bundle report will be generated.
      // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
      analyzerMode: 'static',
      // Port that will be used by in `server` mode to start HTTP server.
      analyzerPort: 8888,
      // Path to bundle report file that will be generated in `static` mode.
      // If relative path is provided, it will be relative to bundles output directory
      reportFilename: 'report.html',
      // Automatically open report in default browser
      openAnalyzer: true,
      // If `true`, Webpack Stats JSON file will be generated in bundles output directory
      generateStatsFile: false,
      // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
      // Relative to bundles output directory.
      statsFilename: 'stats.json',
    }),
  ],
});
