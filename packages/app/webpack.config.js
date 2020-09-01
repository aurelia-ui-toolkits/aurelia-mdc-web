/* eslint-disable */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');

const outDir = path.resolve(__dirname, 'dist');
module.exports = function ({ production = '', stats = 'errors-only' } = {}) {
  const cssLoaders = ['css-loader', 'postcss-loader'];
  const scssLoaders = [...cssLoaders, {
    // this is super important as only 'sass' package supports new '@use' syntax
    loader: 'sass-loader', options: {
      implementation: require('sass'),
      sassOptions: {
        // this tells sass to consider following folders when looking for modules in scoped packages
        includePaths: [path.resolve('../../node_modules/'), path.resolve('./node_modules')]
      }
    }
  }];

  return {
    mode: production === 'production' ? 'production' : 'development',
    devtool: production ? false : 'source-map',
    output: {
      path: outDir,
      filename: production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js',
      sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[hash].bundle.map',
      chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[hash].chunk.js'
    },
    stats: stats,
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
    entry: {
      app: './src/main.ts'
    },
    module: {
      rules: [
        { test: /\.(woff|woff2)(\?|$)/, loader: 'url-loader?limit=1' },
        { test: /\.(png|eot|ttf|svg)(\?|$)/, use: { loader: 'url-loader', options: { limit: 1000, esModule: false } } },
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.html$/, loader: 'html-loader' },
        { test: /\.scss$/i, issuer: /(\.html|empty-entry\.js)$/i, use: scssLoaders },
        { test: /\.scss$/i, issuer: /\.ts$/i, use: ['style-loader', ...scssLoaders] },
        { test: /\.css$/i, issuer: [{ not: [{ test: /\.html$/i }] }], use: ['style-loader', 'css-loader'] },
        {
          test: /\.css$/i, issuer: [{ test: /\.html$/i }],
          // CSS required in templates cannot be extracted safely
          // because Aurelia would try to require it again in runtime
          use: ['css-loader']
        },
      ]
    },
    plugins: [
      new AureliaWebpackPlugin.AureliaPlugin({
        aureliaApp: 'src/main',
        dist: 'es2015',
        viewsFor: '{**/!(tslib)*.{ts,js},../**/*.{ts,js}}'
      }),
      new AureliaWebpackPlugin.GlobDependenciesPlugin({ 'main': ['src/{views,elements,converters,attributes}/**/*.{ts,html}'] }),
      new HtmlWebpackPlugin({ template: './index.ejs' })
    ]
  };
};
