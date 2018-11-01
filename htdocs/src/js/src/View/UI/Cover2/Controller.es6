// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
// import Val from 'Util/Val.es6';

export default class Dom extends Base {

  constructor(list) {

    super();

    this.list = list;
    this.$target = $('.planeWrap, .boxWrap');

    this.cnt = 0;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    for (var i = 0; i < this.list.length; i++) {

      this.list[i].isLock = false;
      this.list[i].w = this.$target.eq(i).find('.img').width();
      TweenMax.set(this.$target.eq(i).find('.imgInner'), {width: this.list[i].w});
      
    }
      
    TweenMax.set(this.$target.find('.imgInnerWrap'), {x: -50});    
    TweenMax.set(this.$target.find('.img'), {'overflow': 'hidden', 'width': 0});    
    TweenMax.set(this.$target.find('.img img'), {x: -100});

  }

  update() {

    for (var i = 0; i < this.list.length; i++) {
      
      var l = this.list[i];

      if(l.pos.progress > .25 && !l.isLock) {
        l.isLock = true;
        this.timeline(i, l.w, l.shadow);
        this.cnt++;
        if (this.cnt==this.list.length) this.offU();
      }

    }

  }

  timeline(i, w, shadow) {

    log(shadow)

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$target.eq(i).find('.imgInnerWrap'), 1.2, {
        x: 0,
        ease: Power2.easeOut,
      }, 0.0)
      .to(this.$target.eq(i).find('.img'), 1.2, {
        width: w,
        // ease: CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1"),
        ease: Power4.easeOut,
      }, 0.0)
      .to(this.$target.eq(i).find('.img img'), 1.2, {
        x: 0,
        // ease: CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1"),
        ease: Power4.easeOut,
      }, 0.0)

  }

  setEvents() {

    super.setEvents();
    

  }

}