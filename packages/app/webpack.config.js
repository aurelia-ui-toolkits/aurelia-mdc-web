/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');

const outDir = path.resolve(__dirname, 'dist');
module.exports = function ({ production = '', stats = 'errors-only' } = {}) {
  const cssLoaders = [{ loader: 'css-loader', options: { esModule: false } }, 'postcss-loader'];
  const scssLoaders = [...cssLoaders, {
    // this is super important as only 'sass' package supports new '@use' syntax
    loader: 'sass-loader', options: {
      implementation: require('sass'),
      webpackImporter: false,
      sassOptions: {
        // this tells sass to consider following folders when looking for modules in scoped packages
        includePaths: [path.resolve('../../node_modules/'), path.resolve('./node_modules')]
      }
    }
  }];

  return {
    target: 'web',
    mode: production === 'production' ? 'production' : 'development',
    devtool: production ? 'source-map' : 'eval-source-map',
    output: {
      path: outDir,
      filename: production ? '[name].[chunkhash].bundle.js' : '[name].[fullhash].bundle.js',
      sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[fullhash].bundle.map',
      chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[fullhash].chunk.js'
    },
    stats: stats,
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['src', '../../local_modules', 'node_modules', '../../node_modules'].map(x => path.resolve(x)),
      alias: {
        'src': path.resolve(__dirname, 'src'),
        // alias all packages to src code
        ...([
          'all',
          'base',
          'banner',
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
          'segmented-button',
          'select',
          'slider',
          'snackbar',
          'switch',
          'tab-bar',
          'text-field',
          'tooltip',
          'top-app-bar',
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
        { test: /\.(woff|woff2)(\?|$)/, use: { loader: 'url-loader', options: { limit: 1, esModule: false } } },
        { test: /\.(png|eot|ttf|svg)(\?|$)/, use: { loader: 'url-loader', options: { limit: 1000, esModule: false } } },
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.html$/i, use: { loader: 'html-loader', options: { esModule: false, sources: { list: [{ tag: 'img', attribute: 'src', type: 'src' }, { tag: 'app-nav-bar', attribute: 'logo-url', type: 'src' }] } } } },
        { test: /\.scss$/i, issuer: /(\.html|empty-entry\.js)$/i, use: scssLoaders },
        { test: /\.scss$/i, issuer: /\.ts$/i, use: ['style-loader', ...scssLoaders] },
        { test: /\.css$/i, issuer: [{ not: /\.html$/i }], use: ['style-loader', ...cssLoaders] },
        {
          test: /\.css$/i, issuer: /\.html$/i,
          // CSS required in templates cannot be extracted safely
          // because Aurelia would try to require it again in runtime
          use: cssLoaders
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
