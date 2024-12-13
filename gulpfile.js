const gulp = require('gulp')
const del = require('del')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')

gulp.task('clean', async function () {
	await del('lib')
	await del('es')
	await del('dist')
})

// es
gulp.task('es', function () {
	const tsProject = ts.createProject('tsconfig.pro.json', {
		module: 'ESNext',
	})
	return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'))
})

// cjs
gulp.task('cjs', function () {
	return gulp.src(['./es/**/*.js']).pipe(babel({
		configFile: '../../.babelrc'
	})).pipe(gulp.dest('lib/'))
})

// declaration
gulp.task('declaration', function () {
	const tsProject = ts.createProject('tsconfig.pro.json', {
		declaration: true,
	})
	return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'))
})

// copy
gulp.task('copyReadme', async function () {
	await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'))
})

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme')