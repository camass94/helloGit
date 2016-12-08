'use strict'; //javascript 코드의 안전성을 위해 문법검사를 더 확실히 검사 합니다.

import gulp from 'gulp';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass';
import include from 'gulp-file-include';
import connect from  'gulp-connect';
import del from 'del';

//const es6에 도입된 읽기전용 값은 상수를 선언할때 사용합니다.
const DIR = {
    SRC: 'src',
    DIST: 'dist'
};

const SRC = {
    JS: DIR.SRC + '/js/*.js',
    CSS: DIR.SRC + '/css/*.css',
    SCSS: DIR.SRC + '/scss/*.scss',
    HTML: DIR.SRC + '/*.html',
    INC: DIR.SRC + '/inc/*.html',
    IMAGES: DIR.SRC + '/img/*'
};

const DIST = {
    JS: DIR.DIST + '/js',
    CSS: DIR.DIST + '/css',
    SCSS: DIR.DIST + '/css',
    HTML: DIR.DIST + '/',
    IMAGES: DIR.DIST + '/img'
};

gulp.task('connect', () => {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('js', () => {
   return gulp.src(SRC.JS)
       .pipe(uglify())
       .pipe(gulp.dest(DIST.JS));
});

gulp.task('css', () => {
    return gulp.src(SRC.CSS)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(DIST.CSS));
});

gulp.task('sass', () => {
    return  gulp.src(SRC.SCSS)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(DIST.SCSS))
        .pipe(connect.reload());
});

gulp.task('html', () => {
    return gulp.src(SRC.HTML)
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin(/*{collapseWhitespace: true}*/))
        .pipe(gulp.dest(DIST.HTML))
        .pipe(connect.reload());
});

gulp.task('inc', ()=> {
    return gulp.src(SRC.INC)
        .pipe(gulp.dest(DIST.HTML))
        .pipe(connect.reload());
});

gulp.task('img', () => {
    return gulp.src(SRC.IMAGES)
        .pipe(imagemin())
        .pipe(gulp.dest(DIST.IMAGES));
});

gulp.task('clean', () => {
    return del.sync([DIR.DIST]);
});

gulp.task('watch', () => {
    gulp.watch(SRC.JS, ['js']);
    gulp.watch(SRC.CSS, ['css']);
    gulp.watch(SRC.SCSS, ['sass']);
    gulp.watch(SRC.HTML, ['html']);
    gulp.watch(SRC.INC, ['html']);
    gulp.watch(SRC.IMAGES, ['img']);
});

gulp.task('default', ['connect', 'clean', 'js', 'css', 'sass', 'html', 'img', 'watch'], () => {
   return gutil.log('gulp is running');
});
