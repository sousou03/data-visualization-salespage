//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Size extends Base {

  constructor() {

    super();

    this.$target = $('.sliderInner');
    this.$sub = $('.logo_big');

    this.max = 768;
    this.min = 376;
    this.defw = 340;
    this.defh = 523;
    this.defW = 375;
    this.defH = 667;
    this.w = this.defw;
    this.h = this.defh;
    this.rate = this.h / this.w;
    this.ratew = gb.r.w / this.w;
    this.rateh = gb.r.h / this.h;
       
    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;

    this.run();

  }

  run () {

    var adjust = 0;
    if ($('body').hasClass('landscape')) adjust = 200;

    var h = gb.r.h - 38 - this.$sub.innerHeight() + adjust;

    TweenMax.set(this.$target, {height: h});
    if (gb.r.w>this.max||gb.r.w<this.min) TweenMax.set(this.$target, {clearProps: 'all'});


  }

  onResizeC() {

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
      this.run();
    },100);

  }

  setEvents() {

    $(window).on('orientationchange', this.onResizeC.bind(this));

  }
       
}