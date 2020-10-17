/* eslint-disable */
const gulp = require('gulp');
const dumber = require('gulp-dumber');
const au2 = require('@aurelia/plugin-gulp').default;
const fs = require('fs');
const typescript = require('gulp-typescript');
const plumber = require('gulp-plumber');
const merge2 = require('merge2');
const terser = require('gulp-terser');
const gulpif = require('gulp-if');
const del = require('del');
// const devServer = require('./dev-server');
// const sass = require('gulp-dart-sass');
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const postcssUrl = require('postcss-url');

const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const dist = 'dist/esnext';

function buildJs(src) {
  const ts = typescript.createProject('tsconfig.build.json', { noEmitOnError: true });
  return gulp.src(src, { sourcemaps: !isProduction })
    .pipe(gulpif(!isProduction && !isTest, plumber()))
    .pipe(au2())
    .pipe(ts());
}

function buildHtml(src) {
  return gulp.src(src)
    .pipe(gulpif(!isProduction && !isTest, plumber()))
    // The other possible Shadow DOM mode is "closed".
    // If you turn on "closed" mode, there will be difficulty to perform e2e
    // tests (such as Cypress). Because shadowRoot is not accessible through
    // standard DOM APIs in "closed" mode.
    .pipe(au2({ defaultShadowOptions: { mode: 'open' } }));
}

function buildCss(src) {
  return gulp.src(src, { sourcemaps: !isProduction })
    .pipe(gulpif(
      f => f.extname === '.scss',
      isProduction || isTest ? sass.sync() : sass.sync().on('error', sass.logError)
    ))
    .pipe(postcss([
      autoprefixer(),
      // use postcss-url to inline any image/font/svg.
      // postcss-url by default use base64 for images, but
      // encodeURIComponent for svg which does NOT work on
      // some browsers.
      // Here we enforce base64 encoding for all assets to
      // improve compatibility on svg.
      postcssUrl({ url: 'inline', encodeType: 'base64' })
    ]));
}

function build() {
	const tsResult = buildJs('src/**/*.ts');
	// Merge all js/css/html file streams to feed dumber.
	// dumber knows nothing about .ts/.less/.scss/.md files,
	// gulp-* plugins transpiled them into js/css/html before
	// sending to dumber.
	const code = merge2(
		gulp.src('src/**/*.json'),
		tsResult.js,
		buildHtml('src/**/*.html'),
		// buildCss('src/**/*.scss')
	)
		// Note we did extra call `dr()` here, this is designed to cater watch mode.
		// dumber here consumes (swallows) all incoming Vinyl files,
		// then generates new Vinyl files for all output bundle files.
		// .pipe(dr())
		// Terser fast minify mode
		// https://github.com/terser-js/terser#terser-fast-minify-mode
		// It's a good balance on size and speed to turn off compress.
		// .pipe(gulpif(isProduction, terser({compress: false})))
		.pipe(gulp.dest(dist, { sourcemaps: isProduction ? false : '.' }));

	return merge2(code, tsResult.dts.pipe(gulp.dest('dist/types')));
}

function clean() {
  return del(dist);
}

function clearCache() {
  return dr.clearCache();
}

const serve = gulp.series(
  build,
  function startServer(done) {
    devServer.run({
      open: !process.env.CI,
      port: 9000
    });
    done();
  }
)

// Reload browserSync
function reload(done) {
  console.log('Reloading the browser');
  devServer.reload();
  done();
}

// Watch all files for rebuild and reload browserSync.
function watch() {
  return gulp.watch('src/**/*', gulp.series(build, reload));
}

const run = gulp.series(clean, serve, watch);

exports.build = build;
exports.clean = clean;
exports['clear-cache'] = clearCache;
exports.run = run;
exports.default = run;
