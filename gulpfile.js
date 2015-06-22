var gulp = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('test', function() {
  gulp.src(['./**/*.js', '!node_modules/**/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'))
  .on('error', notify.onError(function(error) {
    return error.message;
  }));
});

gulp.task('default', function() {

});