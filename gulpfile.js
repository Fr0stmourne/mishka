"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
var run = require("run-sequence");
var del = require("del");
var tinypng = require("gulp-tinypng-compress");



gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.html"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("."));
});

gulp.task("clean", function () {
  return del("build");
});


gulp.task("style", function () {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("./css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task("images", function () {
  return gulp.src(["!./img/sprite/**/*", "!./img/logo-footer.svg", "./img/**/*.{png,jpg,svg}"])
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("./img"));
});

gulp.task("tinypng", function () {
  gulp.src('source/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'RsCZev1geyFwOKznstLNGmxugsTZZmG6',
      sigFile: 'source/img/.tinypng-sigs',
      log: true
    }))
    .pipe(gulp.dest('./img'));
});


gulp.task("sprite", function () {
  return gulp.src("./img/**/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("svg-sprite.svg"))
    .pipe(gulp.dest("./img/sprite"));
});

gulp.task("build", function (fn) {
  run(
    "clean",
    "copy",
    "style",
    "images",
    "tinypng",
    "sprite",
    fn
  );
});




gulp.task("html:copy", function () {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("."));
});

gulp.task("html:update", ["html:copy"], function (done) {
  server.reload();
  done();
});

gulp.task("serve", function () {
  server.init({
    server: "./"
  });
  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html", ["html:update"]);
});
