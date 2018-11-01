// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.isREv = true;

    this.adjust = 1.0;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.$target = $('#modal #video');
    
    this.getDef();

  }

  getDef() {

    this.$target.css({width: 'auto',height: 'auto'});

    // this.defw = this.$target.width();
    // this.defh = this.$target.height();
    this.defw = 980;
    this.defh = 551;

    this.onResize();

  }

  onResize() {

    var H = gb.r.h - 50;
    var W = gb.r.w - 0;
    if (gb.r.w<=750) {
      var H = gb.r.h - 0;
      var W = gb.r.w - 0;
    }

    this.ratioW = H / W;
    this.ratio = this.defh / this.defw;

    // size cover
    // update
    if (this.ratioW > this.ratio) {

      var scale = W / this.defw;

      var w = Math.min(W, this.defw * this.adjust);
      var h = Math.min(this.defh * scale, this.defh * this.adjust);

    } else if ( this.ratioW <= this.ratio) {

      var scale = H / this.defh;

      var w = Math.min(this.defw * scale, this.defw * this.adjust);
      var h = Math.min(H, this.defh * this.adjust);

    }

    // render
    log(w, h);
    this.$target.css({width: Math.floor(w),height: Math.floor(h)});

  }

  setEvents() {

    super.setEvents();

  }

}