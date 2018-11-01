//--------------------------------------------------
//
//  Scale for Img
//
//--------------------------------------------------

// 特定px以下

// rateに合わせて

// scale

export default class Scale {

  constructor($target, baseW, targetBase, maxW=100000, minW=0, adjust=0.9) {

    this.baseW = baseW;
    this.maxW = maxW;
    this.minW = minW;

    this.rate = 1;
    this.defAdjust = adjust;

    this.$target = $target;
    this.targetBase = targetBase;

    this.run();
    this.setup();
    this.setEvents();

  }

  setup() {

    
  }

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();

  }

  // 拡大
  // scale() {

  //   // 比率の計算
  //   if (this.W > this.maxW) this.W = this.maxW;
  //   if (this.W < this.minW) this.W = this.minW;

  //   this.rate = this.W / this.baseW;

  //   // 適用
  //   TweenMax.set(this.$target, {
  //     width: this.targetBase,
  //     scale: this.rate,
  //     'transform-origin':'0 0',
  //     '-webkit-transform-origin':'0 0'
  //   });

  // }

  scale() {

    this.adjust = this.defAdjust;

    // 比率の計算
    if (this.W > this.maxW) {
      this.W = this.maxW;
      this.adjust = 1;
    }
    if (this.W < this.minW) this.W = this.minW;

    this.rate = this.W / this.baseW * this.adjust;

    // 適用
    TweenMax.set(this.$target, {
      width: this.targetBase * this.rate,
      height: 'auto',
      'transform-origin':'0 0',
      '-webkit-transform-origin':'0 0'
    });

  }

  wrap() {



  }

  onResize() {

    this.run();

  }

  setEvents() {

    gb.r.add('scale', this.onResize.bind(this));
    
  }

}