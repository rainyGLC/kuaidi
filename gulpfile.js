const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less    = require('gulp-less');
const rename  = require('gulp-rename');

gulp.task('build',function(){
  return gulp.src(['src/**/*','!src/**/*.less'])
      .pipe(gulp.dest('dist'))
})
gulp.task('less',function(){
  return gulp.src('src/**/*.less')
  .pipe(less())
  .pipe(rename({
    extname:'.wxss'
  }))
  .pipe(gulp.dest('dist'))
});


gulp.task('default',['build','less']);

gulp.task('watch',function(){
	return gulp.watch('src/**',['build','less'])
})



