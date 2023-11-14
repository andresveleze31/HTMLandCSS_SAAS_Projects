const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
  // Compilar SAAS

  // Pasos: 1 Identificar Archivo
  src("src/scss/app.scss")
    .pipe(sass({ outputStyle: "compressed" })) // 2 - Compilarla
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("build/css")); // 3 - Guardar el .css

  done();
}

function images(){

   return src('src/img/**/*').pipe(dest('build/img'));

}

function dev(){
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', images);
}

exports.css = css;
exports.dev = dev;
