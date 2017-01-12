var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('tsc',function(){
    gulp.src('typescript/**.ts')
        .pipe(ts())
        .pipe(gulp.dest('javascript/'));
});