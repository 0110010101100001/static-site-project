const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('static/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/css'));
})