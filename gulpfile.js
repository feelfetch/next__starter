const { dest, src, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const prefix = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");

function scss() {
	return src("src/styles/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefix())
		.pipe(csso())
		.pipe(sourcemaps.write("."))
		.pipe(dest("./public"))
}

exports.scss = scss;
exports.default = function() {
	watch("scss/**/*.scss", scss);
};