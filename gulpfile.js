const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const jsminify = require('gulp-minify');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const filesize = require('gulp-filesize');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

gulp.task('clean-js', () => gulp.src('dist/js/*.min.js', {read: false}).pipe(clean()));
gulp.task('clean-css', () => gulp.src('dist/design/css/*.min.css', {read: false}).pipe(clean()));

gulp.task(
	'css-minify',
	gulp.series('clean-css', () =>
		gulp
			.src('src/design/css/*.css')
			.pipe(filesize())
			.pipe(
				autoprefixer({
					browsers: ['ie >= 8', 'last 4 version'],
					cascade: false
				})
			)
			.pipe(cssnano())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/design/css/'))
			.pipe(filesize())
	)
);

gulp.task(
	'js-minify',
	gulp.series('clean-js', () =>
		gulp
			.src('src/js/*.js')
			.pipe(filesize())
			.pipe(
				babel({
					presets: ['@babel/env']
				})
			)
			.pipe(
				jsminify({
					ext: {
						min: '.min.js'
					},
					noSource: true
				})
			)
			.pipe(gulp.dest('dist/js/'))
			.pipe(filesize())
	)
);

gulp.task('img-optimize', () =>
	gulp
		.src('src/design/img/*.{jpg,svg}')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/design/img/'))
);

gulp.task('build', gulp.parallel('js-minify', 'css-minify', 'img-optimize'));
