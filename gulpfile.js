

let project_folder = "dist";
let source_folder = "src";


let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    pug: source_folder + "/pug/*.pug",
    css: source_folder + "/stylus/style.styl",
    js: source_folder + "/js/script.js",
    jsplugins: source_folder + "/js/plugins/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.woff2",
  },
  watch: {
    pug: source_folder + "/pug/**/*.pug",
    css: source_folder + "/stylus/**/*.styl",
    js: source_folder + "/js/**/*.js",
    jsplugins: source_folder + "/js/plugins/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
  },
  clean: "./" + project_folder + "/"

}

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  pug = require('gulp-pug'),
  del = require('del'),
  stylus = require('gulp-stylus'),
  autoprefixer = require("gulp-autoprefixer"),
  clean_css = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify-es").default,
  babel = require("gulp-babel"),
  imagemin = require("gulp-imagemin"),
  svgSprite = require("gulp-svg-sprite"),
  concat = require('gulp-concat'),
  svgstore = require('gulp-svgstore');


function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/",
      index: "tree.html"
    },
    notify: false
  })
}

function htmlBuild() {
  return src(path.src.pug)
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function cssBuild() {
  return src(path.src.css)
    .pipe(stylus())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function jsBuild() {
  return src(path.src.js)
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(dest(path.build.js))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function jsPluginsBuild() {
  return src(path.src.jsplugins)
    .pipe(concat('vendor.js'))
    .pipe(dest(path.build.js))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function imgBuild() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

gulp.task('svgSprite', function() {
  return gulp.src([source_folder + '/iconsprite/*.svg'])
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../icons/icons.svg", // sprite file name
        example: true
      }
    }
  }))
  .pipe(dest(path.build.img))
})

gulp.task('svgStoreSprite', function() {
  return gulp.src([source_folder + '/iconsprite/*.svg'])
  .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite_inline.svg"))
  .pipe(dest(path.build.img))
})

gulp.task('fonts', function() {
  return src(path.src.fonts)
  .pipe(dest(path.build.fonts))
})

function watchFiles(params) {
  gulp.watch([path.watch.pug], htmlBuild)
  gulp.watch([path.watch.css], cssBuild)
  gulp.watch([path.watch.js], jsBuild)
  gulp.watch([path.watch.jsplugins], jsPluginsBuild)
  gulp.watch([path.watch.img], imgBuild)
}

function clean(params) {
  return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(cssBuild,htmlBuild,jsBuild,jsPluginsBuild,imgBuild,'fonts'))
let watch = gulp.parallel(build,watchFiles,browserSync);

exports.htmlBuild = htmlBuild;
exports.cssBuild = cssBuild;
exports.jsBuild = jsBuild;
exports.jsPluginsBuild = jsPluginsBuild;
exports.imgBuild = imgBuild;
exports.build = build;
exports.watch = watch;
exports.default = watch;