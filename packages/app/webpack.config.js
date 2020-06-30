const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');

const outDir = path.resolve(__dirname, 'dist');
/**
 * @param {{ production?: string; stats?: import('webpack').Stats.ToStringOptions }} param0
 * @returns {import('webpack').Configuration}
 */
module.exports = function ({ production = '', stats = 'errors-only' } = {}) {
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
          'textfield'
        ].reduce((map, packageName) => {
          const mappedPackagedName = `@aurelia-material-components-web/${packageName}`;
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
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.css$/i,
          issuer: [{ not: [{ test: /\.html$/i }] }],
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.css$/i,
          issuer: [{ test: /\.html$/i }],
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
        viewsFor: '{**/!(tslib)*.{ts,js},../textfield/**/*.{ts,js}}'
      }),
      new HtmlWebpackPlugin({ template: './index.ejs' })
    ]
  };
};
