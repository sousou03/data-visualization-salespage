//--------------------------------------------------
//
//  Position
//
//--------------------------------------------------

export default class Position {

  constructor($target) {

    this.$target = $target;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.progress     = 0;
    this.progressC    = 0; // cneter
    this.progressOld  = 0;
    this.isStageIn    = false;
    this.stageSize    = { width:0, height:0 };
    this.offset       = {left:0,top:0,width:0,height:0};
    this.stageInOffset = {min:0,max:1};

    this.h = this.$target.height();
    this.top = this.$target.offset().top;

  }

  update() {

    var top = this.top - gb.s.st;

    // log((top+h/2) / gb.r.h);

    // progress
    this.progress   = 1 - (top+this.h)/(gb.r.h+this.h);
    this.progressC   = 1 - (top+this.h/2)/(gb.r.h/2);
    // var dir = this.progress-this.progressOld;

    // in,out
    // if(this.progress >= 0 && this.progress <= 1){
    //   this.isStageIn = true;
    // }else{
    //   this.isStageIn = false;
    // }
    
    // this.progressOld = this.progress; 

  }

  onResize() {

    this.h = this.$target.height();
    this.top = this.$target.offset().top;
    // if (gb.u.dv.isSP) this.top += gb.s.st;

  }

  setEvents() {

    $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));

  }

}