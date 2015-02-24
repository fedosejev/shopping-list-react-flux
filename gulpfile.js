var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var htmlMinifier = require('gulp-html-minifier');

gulp.task('browserify', function () {
  return browserify('./source/js/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('shopping-list.js'))
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
