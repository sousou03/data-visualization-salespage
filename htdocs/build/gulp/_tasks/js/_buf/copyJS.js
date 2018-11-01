import gulp from "gulp";
import PATH from '../../../_setting/config';

gulp.task('copyJS', ()=>{

    gulp
    .src(PATH.src.js + 'src/page/**/*.js')
    .pipe(gulp.dest(PATH.dist.js));

});