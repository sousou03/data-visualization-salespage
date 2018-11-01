//--------------------------------------------------
//
//  ResponsiveSwitchImg
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class ResponsiveSwitchImg extends Base {

  constructor() {

    super();

    this.$target = $('.responsiveImg');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;

    this.isPCLock = (gb.u.dv.isResPC)? false: true;
    this.isSPLock = (gb.u.dv.isResSP)? false: true;

    this.run();

  }

  run () {

    log(gb.u.dv.isResSP,this.isSPLock);

    // ------------------------------------------------------------
    //  ブレイクポイントよりもsp側
    // ------------------------------------------------------------
    if (gb.u.dv.isResSP && !this.isSPLock) {
      this.isPCLock = false;
      this.isSPLock = true;

      this.$target.each(function(index, el) {
        
        // imgの変更        
        var src = $(this).attr('src');
        src = gb.u.s.strReplace(src, 'img_pc', 'img_sp');
        $(this).attr('src',src);

        // sizeの変更
        // $(this).off('load');
        // $(this).on('load', (event)=>{

        //   if ($(this).hasClass('spSize')) gb.u.dv.setImgSPSize($(this));

        // });
        

      });

    } 

    // ------------------------------------------------------------
    //  ブレイクポイントよりもpc側
    // ------------------------------------------------------------
    if (gb.u.dv.isResPC && !this.isPCLock) {
      this.isPCLock = true;
      this.isSPLock = false;

      this.$target.each(function(index, el) {
        
        // imgの変更        
        var src = $(this).attr('src');
        src = gb.u.s.strReplace(src, 'img_sp', 'img_pc');
        $(this).attr('src',src);

        // sizeの変更
        // $(this).attr({width: 'auto',height: 'auto'});

      });

    }

  }

  onResize() {

    this.run();

  }
       
}