const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('./static/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./static/css'));
}

function watchSass() {
    return gulp.watch('./static/scss/**/*.scss', compileSass);
}

gulp.task('sass', compileSass);

gulp.task('watch', watchSass);