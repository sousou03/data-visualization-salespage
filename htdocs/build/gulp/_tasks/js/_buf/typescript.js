import gulp from "gulp";
import plumber from "gulp-plumber";
// import typescript from 'gulp-typescript';
import PATH from '../../../_setting/config';

// gulp.task('typescript', ()=>{

//   var opt = { target: 'ES5', module: 'commonjs' };

//   return gulp.src([PATH.dist.js + '**/*.js','!' + PATH.dist.js + 'lib/**/*.js'])
//     .pipe(plumber())
//     // .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
//     .pipe(typescript(opt))
//     // .pipe(sourcemaps.write(".")) /* ソースマップを出力させる場合 */
//     .pipe(gulp.dest(PATH.production.js));
// });