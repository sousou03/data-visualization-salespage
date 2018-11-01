import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import eslint from "gulp-eslint";
import debug from 'gulp-debug';
import PATH from '../../../_setting/config';

gulp.task('eslint', ()=>{

  // gulp
  //   .src(PATH.src.js + 'src/**/*.js')
  //   // .pipe(debug({title: 'vinyl:'}))
  //   .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  //   .pipe(eslint(PATH.other.gulp + '.eslintrc'))
  //   .pipe(eslint.format())
  //   .pipe(eslint.failAfterError())
  //   .pipe(gulp.dest(PATH.dist.js));

});