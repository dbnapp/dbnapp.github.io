var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


// SASS TASKS
gulp.task('skeleton-sass', compileSkeleton);
gulp.task('sass', compileSass);
gulp.task('sass:watch', watchSassAndSkeleton);


// OTHER TASKS
gulp.task('serve', ['sass:watch'], startServer);
gulp.task('default', ['serve']);


// FUNCTIONS
function compileSkeleton() {
    gulp.src('./bower_components/Skeleton-Sass/scss/skeleton.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function compileSass() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function watchSassAndSkeleton() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./bower_components/Skeleton-Sass/scss/skeleton.scss', ['sass', 'skeleton-sass']);
}

function startServer() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
}