var gulp = require('gulp');
var scss = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
// var minify = require("gulp-minify");
var webp = require('gulp-webp');
// ScSS files compilor task
gulp.task('scss', function() {
    return gulp.src([
        'node_modules/boxicons/css/boxicons.min.css',
        'node_modules/select2/dist/css/select2.min.css',
        'node_modules/aos/dist/aos.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/slick-carousel/slick/slick-theme.css',
        'assets/scss/**/*.scss'], { allowEmpty: true })
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(concat('style-min.css'))
        // .pipe(minify({noSource: true}))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});
// Client javascript
gulp.task("javascript", function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        'node_modules/select2/dist/js/select2.min.js',
        'node_modules/aos/dist/aos.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'assets/js/vendor.js',
        'assets/js/all-gsap.js',
        'assets/js/animation.js',
        'assets/js/custom.js'], { allowEmpty: true })
        .pipe(concat('minify/javascript-lib.js'))
        // .pipe(minify({noSource: true}))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});
// Optimize Images
gulp.task('imgwebp', () =>
    gulp.src('assets/images/**/*.{jpg,png,jpeg}')
    .pipe(webp())
    .pipe(gulp.dest('assets/images'))
);
// IF Node.js ^14+ & Gulp: ^4.00 made below code uncomment and above watch task comment
// Watch Task above gulp version 4.0.0
gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("assets/scss/**/*.scss", gulp.series('scss'));
    gulp.watch("assets/js/*.js", gulp.series('javascript'));
    gulp.watch("assets/images/*.{jpg,png}", gulp.series('imgwebp'));
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['serve','scss','javascript','imgwebp']));
// Watch Task upto gulp version 3.9.1
// gulp.task('serve', function() {
//     browserSync.init({
//         server: "./"
//     });
//     gulp.watch("assets/scss/**/*.scss", ['scss']);
//     gulp.watch("assets/js/*.js", ['javascript']);
//     gulp.watch("assets/images/*.{jpg,png}", ['imgwebp']);
//     gulp.watch("*.html").on('change', browserSync.reload);
// });

// gulp.task('default', ['serve','scss', 'javascript', 'imgwebp']);

