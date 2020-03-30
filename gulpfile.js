//'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var cssmin = require('gulp-minify-css');
//imagemin = require('gulp-imagemin'),
//pngquant = require('imagemin-pngquant'),
var rimraf = require('rimraf');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var path = {
build: {
html: 'build/',
js: 'build/js/',
css: 'build/css/',
img: 'build/img/',
fonts: 'build/fonts/'
},
src: {
html: 'src/*.html',
js: 'src/js/*.js',
style: 'src/style/main.scss',
img: 'src/img/**/*.*',
fonts: 'src/fonts/**/*.*'
},
watch: {
html: 'src/**/*.html',
js: 'src/js/**/*.js',
style: 'src/style/**/*.scss',
img: 'src/img/**/*.*',
fonts: 'src/fonts/**/*.*'
},
clean: './build'
};

var config = {
server: {
baseDir: "./build"
},
tunnel: false,
host: 'localhost',
port: 4000,
logPrefix: "Koshak",
ui: {
    port: 8080
},

// Change the default weinre port
ui: {
    port: 8080,
    weinre: {
        port: 9090
    }
}
};

gulp.task('webserver', async function () {
browserSync(config);
});

gulp.task('clean', async function (cb) {
rimraf(path.clean, cb);
});

gulp.task('html:build', async function () {
gulp.src(path.src.html)
.pipe(rigger())
.pipe(gulp.dest(path.build.html))
.pipe(reload({stream: true}));
});

gulp.task('js:build', async function () {
gulp.src(path.src.js)
.pipe(rigger())
.pipe(sourcemaps.init())
.pipe(uglify())
.pipe(sourcemaps.write())
.pipe(gulp.dest(path.build.js))
.pipe(reload({stream: true}));
});

gulp.task('style:build', async function () {
gulp.src(path.src.style)
.pipe(sourcemaps.init())
.pipe(sass({
sourceMap: true,
errLogToConsole: true
}))
.pipe(prefixer())
.pipe(cssmin())
.pipe(sourcemaps.write())
.pipe(gulp.dest(path.build.css))
.pipe(reload({stream: true}));
});

/*gulp.task('image:build', async function () {
gulp.src(path.src.img)
.pipe(imagemin({
progressive: true,
svgoPlugins: [{removeViewBox: false}],
use: [pngquant()],
interlaced: true
}))
.pipe(gulp.dest(path.build.img))
.pipe(reload({stream: true}));
});*/

gulp.task('fonts:build', async function() {
gulp.src(path.src.fonts)
.pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', gulp.series(
'html:build',
'js:build',
'style:build',
'fonts:build'//,
//'image:build'
));

gulp.task('watch', async function(){
watch([path.watch.html], async function(event, cb) {
gulp.series('html:build');
});
watch([path.watch.style], async function(event, cb) {
gulp.series('style:build');
});
watch([path.watch.js], async function(event, cb) {
gulp.series('js:build');
});
/* watch([path.watch.img], async function(event, cb) {
gulp.series('image:build');
});*/
watch([path.watch.fonts], async function(event, cb) {
gulp.series('fonts:build');
});
});

gulp.task('serve', function(done) {
    var bs = browserSync.create();
    bs.init({
        server: "src/style/"
    });

    gulp.watch("src/style/**/*.scss", gulp.series('build'));
    gulp.watch("src/js/**/*.js", gulp.series('build'));
    gulp.watch("build/*.html", gulp.series('build'));
    gulp.watch("build/*.html").on('change', () => {
      bs.reload();
      done();
    });


    done();
});

gulp.task('default', gulp.series('build', 'watch', 'webserver', 'serve'));
