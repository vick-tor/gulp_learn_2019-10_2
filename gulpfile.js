/* Gulp. Гайд для новичков  *  https://thegazer.ru/gajd-po-gulp/
*  https://webformyself.com/gulp-dlya-nachinayushhix/    *   http://www.creative-seo.ru/blog/gulp-dlya-nachinayushchih/
*/
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const del = require('del');
/*
gulp.task('hello', function(){
    console.log('Hello World');
});

gulp.task('log', function(){
    console.log('Hello World again!');
});

gulp.task('Three', function(){
    console.log('Say - this is therd time, is Three!');
});
*/
/*gulp.task('default', ['hello','log']);                - syntax 3!!!
gulp.task('default', gulp.parallel('hello', 'log', 'Three'));    // - syntax 4
gulp.task('default', gulp.parallel('Three','hello', 'log'));    // - syntax 4
gulp.task('default', gulp.series('hello', 'log'));
gulp.task('default',(gulp.series( gulp.parallel('Three', 'hello'), gulp.parallel('log')))) */

gulp.task('move', function(){
     return gulp.src('aaa/**/*')
         .pipe(gulp.dest('bbb'));
});


gulp.task('clean', function(done) {  //syntax 4  -  ошибок нет
    del.sync('bbb/**/*');
    done();
});

gulp.task('cl', function() {  //syntax 3  -  чистит, но выдает ошибки
    return del.sync('bbb/*');
});

gulp.task('default', gulp.parallel('cl'));