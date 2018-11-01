//--------------------------------------------------
//
//  ResponsiveSwitchImg
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class ResponsiveSwitchImg extends Base {

  constructor($target, max, min) {

    super();

    this.$target = $target;

    this.max = max;
    this.min = min;
    this.defw = defw;
    this.defh = defh;
    this.w = this.defw;
    this.h = this.defh;
    this.rate = this.h / this.w;
    this.W = gb.r.w;
    this.H = gb.r.h;
       
       
       
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



  }

  onResize() {

    this.run();

  }
       
}
