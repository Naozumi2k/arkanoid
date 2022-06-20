import gulp from "gulp";
import babelify from "babelify";
import browserify from "browserify";
import minify from "gulp-minify";
import htmlmin from "gulp-htmlmin";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import browserSync from "browser-sync";

const bs = browserSync.create();

// копируем index.html в dist
gulp.task("html", () => {
  return gulp.src(["src/index.html"]).pipe(gulp.dest("dist")).pipe(bs.stream());
});

// компилируем js файлы в bundle.js
gulp.task("js", () => {
  return browserify({
    entries: "src/js/main.js",
    transform: [
      babelify.configure({
        presets: ["@babel/preset-env"],
      }),
    ],
  })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist/src/js"))
    .pipe(buffer())
    .pipe(bs.stream());
});

gulp.task("serve", () => {
  gulp.parallel("html", "js")();

  gulp.watch("src/index.html", gulp.series("html"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));

  gulp.watch("dest/*.html").on("change", bs.reload);

  bs.init({
    server: "dist",
  });
});

gulp.task("minify-html", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-js", () => {
  return browserify({
    entries: "src/js/main.js",
    transform: [
      babelify.configure({
        presets: ["@babel/preset-env"],
      }),
    ],
  })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
        noSource: true,
      })
    )
    .pipe(gulp.dest("dist/src/js"));
});

gulp.task("build", gulp.parallel("minify-html", "minify-js"));
gulp.task("default", gulp.task("build"));
