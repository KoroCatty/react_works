const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('./scss/**/*.scss')

    // 2.pass that file through sass compiler 
    .pipe(sass().on('error', sass.logError))//エラー時showing more succinctly

    // 3. where do i sase the compiled css?
    .pipe(gulp.dest('./scss'))
    
    // 4.stream changes to all browser
    .pipe(browserSync.stream());
}

//always watching and affecting browser automatically
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  // Where's from and when
  gulp.watch('./scss/**/*.scss',style);
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('main.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;