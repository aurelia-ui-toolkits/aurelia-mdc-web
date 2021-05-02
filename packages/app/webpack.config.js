/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const cssLoader = 'css-loader';
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: [path.resolve('../../node_modules/'), path.resolve('./node_modules')]
    }
  }
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: ['autoprefixer']
    }
  }
};

const outDir = path.resolve(__dirname, 'dist');
module.exports = function (env, { analyze }) {
  const production = env.production || process.env.NODE_ENV === 'production';
  return {
    mode: production === 'production' ? 'production' : 'development',
    devtool: production ? 'source-map' : 'inline-source-map',
    entry: './src/main.ts',
    output: {
      path: outDir,
      publicPath: '.',
      filename: production ? '[name].[chunkhash].bundle.js' : '[name].[fullhash].bundle.js',
      sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[fullhash].bundle.map',
      chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[fullhash].chunk.js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['src', 'node_modules', '../../node_modules'].map(x => path.resolve(x)),
      alias: {
        'src': path.resolve(__dirname, 'src'),
        // alias all packages to src code
        ...([
          'all',
          'base',
          'button',
          'card',
          'checkbox',
          'chips',
          'circular-progress',
          'data-table',
          'dialog',
          'drawer',
          'expandable',
          'elevation',
          'fab',
          'floating-label',
          'form-field',
          'icon',
          'icon-button',
          'image-list',
          'layout-grid',
          'line-ripple',
          'linear-progress',
          'list',
          'lookup',
          'menu',
          'menu-surface',
          'notched-outline',
          'radio',
          'ripple',
          'select',
          'slider',
          'snackbar',
          'switch',
          'tab-bar',
          'tooltip',
          'top-app-bar',
          'text-field',
          'tree-view',
          'typography',
          'validation'
        ].reduce((map, packageName) => {
          const mappedPackagedName = `@aurelia-mdc-web/${packageName}`;
          map[mappedPackagedName] = path.resolve(__dirname, `../${packageName}/src`);
          return map;
        }, {}))
      },
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        { test: /\.(png|gif|jpg|cur|ttf|eot|svg|otf)$/i, loader: 'url-loader', options: { limit: 8192 } },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
        { test: /\.css$/i, use: ['style-loader', cssLoader/*, postcssLoader*/] },
        { test: /\.scss$/i, use: ['style-loader', cssLoader/*, postcssLoader*/, sassLoader] },
        { test: /\.ts$/i, use: ['ts-loader', '@aurelia/webpack-loader'], exclude: /node_modules/ },
        { test: /\.html$/i, use: '@aurelia/webpack-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.ejs' }),
      analyze && new BundleAnalyzerPlugin()
    ].filter(p => p)
  };
};
