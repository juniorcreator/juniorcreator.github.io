var gulp =          require('gulp'),
    sass =          require('gulp-sass'),
    autoprefixer =  require('gulp-autoprefixer'),
    bs =            require('browser-sync').create(),
    sourcemaps =    require('gulp-sourcemaps'),
    uglify =        require('gulp-uglify'),
    concat =        require('gulp-concat'),
    bower  =        require('gulp-bower'),
    rigger =        require('gulp-rigger'),
    reload =        bs.reload;

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        notify: false,
    });
});
gulp.task('minify', function () {
    gulp.src('js/concataneted.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/min.js'));
});

gulp.task('scripts', function() {
    return gulp.src('js/script.js')
        .pipe(rigger())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js/mainJs'))
        .pipe(reload({stream: true}));
});

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 15 versions','true'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function () {
    gulp.watch("./sass/**/*.scss", ['sass'], bs.reload);
    gulp.watch("./sass/**/*.sass", ['sass'], bs.reload);
    gulp.watch("js/*.js", ['scripts'], bs.reload);
    gulp.watch('./*.html', bs.reload)
});