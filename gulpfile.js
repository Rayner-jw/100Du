var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');
 
gulp.task('less', function() {
    gulp.src('src/css/page/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css/page'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/css/**/*.less', ['less']);
});