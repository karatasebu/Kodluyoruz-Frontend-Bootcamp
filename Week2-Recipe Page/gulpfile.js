var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('css', function () {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'))
  });

gulp.task('html', function () {
  return gulp.src('./src/views/*.njk')
    .pipe(nunjucksRender({
      path: ['./src/views/']
    }))
    .pipe(gulp.dest('dist/html'));
});


gulp.task("watch", function () {
    gulp.watch('./src/views/**/*.njk', gulp.series('html'))
    gulp.watch('./src/scss/**/*.scss', gulp.series('css'))
})
