/* Gulp. Гайд для новичков  *  https://thegazer.ru/gajd-po-gulp/
*  https://webformyself.com/gulp-dlya-nachinayushhix/    *   http://www.creative-seo.ru/blog/gulp-dlya-nachinayushchih/
*  https://toster.ru/q/594171
*/
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const del = require('del');

//ТЕМА  -  1.копирование и удаление фалов,  2.составление ПУТЕЙ


var path = {
    delfile:{ del:'dist/**' },
    js:{
        jsa: 'aaa/js/*.js',
        jsb: 'bbb/js/*.js'
    }
};  // 1.Прописываем пути обращения к папкам (в этом примере - для копирования и удаления)
gulp.task('copya', function() {
        return gulp.src(path.js.jsa)
            .pipe(gulp.dest('dist/js'));
    }
);  //  2.Прописываем функцию копирования с путем обращения к папке ааа
gulp.task('copyb', function() {
        return gulp.src(path.js.jsb)
            .pipe(gulp.dest('dist/js'));
    }
);  //  3.Прописываем функцию копирования с путем обращения к папке bbb
gulp.task('copyab', gulp.parallel('copya', 'copyb')); //  4.Пишем функцию параллельного исполнения двух задач !!! И пишем именно так, а то не сработает!!!


gulp.task('del', function(done){
    del.sync(path.delfile.del);
    done();
});


gulp.task('clean', function(done) {  //syntax 4  -  ошибок нет
    del.sync('dist');
    done();
});

gulp.task('cl', function() {  //syntax 3  -  чистит, но выдает ошибки
    return del.sync('bbb/*');
});

gulp.task('default', gulp.parallel('cl'));




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
