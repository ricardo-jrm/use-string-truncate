const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

const { src, dest, series } = gulp;

const bundleJS = () =>
  src('out/index.js')
    .pipe(sourcemaps.init())
    .pipe(concat('index.min.js'))
    .pipe(
      terser({
        toplevel: true,
      }),
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest('out'));

module.exports.default = series(bundleJS);
