var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('skeleton-sass', function(){
    gulp.src('./bower_components/Skeleton-Sass/scss/skeleton.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./bower_components/Skeleton-Sass/scss/skeleton.scss', ['sass', 'skeleton-sass']);
});

gulp.task('serve', ['sass:watch'], function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);