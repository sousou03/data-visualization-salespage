//--------------------------------------------------
//
//  ResponsiveSwitchImg
//
//--------------------------------------------------

export default class ResponsiveSwitchImg {

  constructor() {

    this.$target = $('.responsiveImg');

    this.setup();
    this.run();
    this.setEvents();

  }

  setup() {

    this.isPCLock = (gb.u.dv.isResPC)? false: true;
    this.isSPLock = (gb.u.dv.isResSP)? false: true;

  }

  run () {

    // ------------------------------------------------------------
    //  ブレイクポイントよりもsp側
    // ------------------------------------------------------------
    if (gb.u.dv.isResSP && !this.isSPLock) {
      this.isPCLock = false;
      this.isSPLock = true;

      this.$target.each(function(index, el) {
        
        // imgの変更        
        var src = $(this).attr('src');
        src = gb.u.s.strReplace(src, '_pc', '_sp');
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
        src = gb.u.s.strReplace(src, '_sp', '_pc');
        $(this).attr('src',src);

        // sizeの変更
        // $(this).attr({width: 'auto',height: 'auto'});

      });

    }

  }
       
  setEvents() {

    gb.r.add('responsiveSwitchImg', this.run.bind(this));

  }

}