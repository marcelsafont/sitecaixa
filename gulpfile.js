const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  browserSync = require('browser-sync').create(),
	  autoprefixer = require('gulp-autoprefixer'),
	  sourcemaps = require('gulp-sourcemaps'),
	  babel = require('gulp-babel');

//compile scss to css
function css(){
	return gulp.src('./sass/*.scss')
	.pipe(sass({
		outputStyle: 'compressed',
	}))
	.pipe(autoprefixer('last 2 versions'))
	.on('error', function (err) {
      console.log(err.message + ' on line ' + err.lineNumber + ' in file : ' + err.fileName);
    })
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream())
}

//compile js
// function js(){
//    gulp.src('src/app.js')
//         .pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
//         .pipe(gulp.dest('./js'))
//         .pipe(browserSync.stream())
// }

//watch for changes
function watch(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./sass/**/*.scss', css);
	// gulp.watch('./src/**/*.js', js);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.css = css;
exports.watch = watch;

gulp.task('default', watch);


