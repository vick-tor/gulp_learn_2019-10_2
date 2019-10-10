/* Gulp. Гайд для новичков
*  https://thegazer.ru/gajd-po-gulp/
*/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();


gulp.task('hello', function(){
    console.log('Hello World');
});

gulp.task('log', function(){
    console.log('Hello World again!');
});

gulp.task('Three', function(){
    console.log('Say - this is therd time, is Three!');
});


//gulp.task('default', ['hello','log']);                - syntax 3!!!
//gulp.task('default', gulp.parallel('hello', 'log', 'Three'));    // - syntax 4
gulp.task('default', gulp.parallel('Three','hello', 'log'));    // - syntax 4
//gulp.task('default', gulp.series('hello', 'log'));

//gulp.task('default',(gulp.series( gulp.parallel('Three', 'hello'), gulp.parallel('log'))));