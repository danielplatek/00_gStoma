var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gplumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var errorHandler = function (){
    return gplumber(function(error){
        console.log(error.message);
    })
}

var autoprefixerOptions = {
    browsers: ['last 10 versions', '> 1%', 'Firefox ESR']
};

gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
        .pipe(errorHandler())
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
});

gulp.task('watch', function(){
    return gulp.watch('sass/**/*.scss', ['sass']),
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    browserSync.init({
        proxy: "./"
    });
});

gulp.task('default', ['sass', 'watch']);