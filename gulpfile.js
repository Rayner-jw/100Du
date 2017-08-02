var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

//编译less
gulp.task('less', function () {
  return gulp.src('src/css/page/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css/page'));
});
//监听less文件
gulp.task('autoless', function () {
  gulp.watch('src/css/**/*.less', ['less']);
});
//监听所有文件变动，自动刷新页面
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/**/*.*','!src/**/*.less']).on('change', livereload.changed);
});
//定义默认任务
gulp.task('default', ['autoless', 'watch']);