var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var htmlMinifier = require('gulp-html-minifier');
var uglify = require('gulp-uglify');

gulp.task('browserify', function () {
  return browserify('./source/js/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('shopping-list.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('minifyHtml', function() {
  return gulp.src('./source/*.html')
        .pipe(htmlMinifier({collapseWhitespace: true}))
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
  gulp.watch('./source/js/**/*.js', ['browserify']);
  gulp.watch('./source/**/*.html', ['minifyHtml']);
});

gulp.task('build', ['browserify', 'minifyHtml']);

gulp.task('default', ['watch', 'browserify', 'minifyHtml']);
