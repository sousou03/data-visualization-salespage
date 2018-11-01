import gulp from "gulp";
import plumber from "gulp-plumber";
// import coffee from 'gulp-coffee';
import PATH from '../../../_setting/config';

// gulp.task('coffee', ()=>{
//   return gulp.src([PATH.dist.js + '**/*.js','!' + PATH.dist.js + 'lib/**/*.js'])
//     .pipe(plumber())
//     // .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
//     .pipe(coffee({bare:true}))
//     // .pipe(sourcemaps.write(".")) /* ソースマップを出力させる場合 */
//     .pipe(gulp.dest(PATH.production.js));
// });