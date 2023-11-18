const { src, dest, watch, series } = require('gulp');

// CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require("cssnano");

const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


function css( done ) {
    src('src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/css') )

    done();
}

function imagenes() {
    return src('src/img/**/*')
        .pipe( dest('build/img') )
}


function dev() {
    watch( 'src/scss/**/*.scss', css );
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
