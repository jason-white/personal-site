const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

function css () {
  return gulp
    .src('./src/css/**/*.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./static/css/'))
}

function watchFiles () {
  gulp.watch('./src/css/**/*.css', css)
}

gulp.task('css', css)

gulp.task('default', gulp.parallel(css, watchFiles))

gulp.task('watch', watchFiles)
