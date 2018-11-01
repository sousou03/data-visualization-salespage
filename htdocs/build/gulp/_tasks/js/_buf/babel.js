import gulp from "gulp";
import plumber from "gulp-plumber";
// import babel from 'gulp-babel';
import es2015 from 'babel-preset-es2015';
import PATH from '../../../_setting/config';

// gulp.task('babel', ()=>{
//   return gulp.src([PATH.src.devjs + 'src/es6/**/*.es6'])
//     .pipe(plumber())
//     // .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
//     .pipe(babel({presets: [es2015]}))
//     // .pipe(sourcemaps.write(".")) /* ソースマップを出力させる場合 */
//     .pipe(gulp.dest(PATH.dist.js));
// });