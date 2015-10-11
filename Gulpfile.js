var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var browserSync = require('browser-sync');
var nodemon     = require('gulp-nodemon');
var path        = require('path');
var less        = require('gulp-less');

gulp.task('browser-sync', ['nodemon'], function() {

  browserSync.init(null, {
    proxy: 'localhost:4444',
    files: [
      'public/**/*.*',
      'views/**/*.*',
    ],
    // port: 3000,
  });

});

gulp.task('nodemon', ['scripts', 'styles'], function (cb) {

  var started = false;

  return nodemon({
    script: 'server.js',
    ignore: [
      'app/**/*.js',
      'public/**/*.js'
    ],
  }).on('start', function() {
    if (!started) {
      started = true;
      setTimeout(cb, 1500);
    }
  });

});

gulp.task('styles', function () {

  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/build'));

});

gulp.task('scripts', function () {

  gulp.src(['app/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./public/build'));

});

gulp.task('default', ['browser-sync'], function() {

  gulp.watch(['app/**/*.js'], ['scripts']);
  gulp.watch(['less/**/*.less'], ['styles']);

});
