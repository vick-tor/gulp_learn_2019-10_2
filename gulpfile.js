/* Gulp. Гайд для новичков  в комите 6-7 */

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const del = require('del');
const browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//ТЕМА  -  Запускаем Browser-Sync

gulp.task('html', function(){
    return gulp.src('*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('run', function(){
        browserSync.init({server:'dist'});
        gulp.watch('dist/**/*').on('change', browserSync.reload);
});