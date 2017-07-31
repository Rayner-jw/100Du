var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
	concat = require("gulp-concat");
//less编译
gulp.task('less', function() {
    gulp.src('src/css/page/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css/page'))
        .pipe(livereload());
});
//实时监听
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/css/**/*.less', ['less']);
});
