/* eslint-disable */
const gulp = require('gulp');
const au2 = require('@aurelia/plugin-gulp').default;
const typescript = require('gulp-typescript');
const plumber = require('gulp-plumber');
const merge2 = require('merge2');

const dist = 'dist/esnext';

function buildJs(src) {
  const ts = typescript.createProject('tsconfig.build.json', { noEmitOnError: true });
  return gulp.src(src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(au2())
    .pipe(ts());
}

function buildHtml(src) {
  return gulp.src(src)
    .pipe(plumber())
    // The other possible Shadow DOM mode is "closed".
    // If you turn on "closed" mode, there will be difficulty to perform e2e
    // tests (such as Cypress). Because shadowRoot is not accessible through
    // standard DOM APIs in "closed" mode.
    .pipe(au2({ defaultShadowOptions: { mode: 'open' } }));
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
    buildHtml('src/**/*.html')
  )
    .pipe(gulp.dest(dist, { sourcemaps: '.' }));

  return merge2(code, tsResult.dts.pipe(gulp.dest('dist/types')));
}

exports.build = build;
