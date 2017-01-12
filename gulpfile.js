var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();

gulp.task('tsc',function(){
    gulp.src('typescript/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('javascript/'));
});

gulp.task('tsc:w',['tsc'],function(){
    gulp.watch('typescript/**/*.ts',['tsc']);
});