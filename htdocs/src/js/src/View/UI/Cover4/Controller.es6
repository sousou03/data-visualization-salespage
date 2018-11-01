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

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    for (var i = 0; i < this.list.length; i++) {

      this.list[i].isLock = false;
      this.list[i].w = this.$target.eq(i).find('.img').width();
      this.list[i].shadow = this.$target.eq(i).find('.imgInner').css('box-shadow');
      TweenMax.set(this.$target.eq(i).find('.imgInner'), {width: this.list[i].w, 'box-shadow': 'none'});
      
    }
      
    TweenMax.set(this.$target.find('.img'), {'overflow': 'hidden', z: 0, width: 0});
    TweenMax.set(this.$target.find('.img img'), {x: -100});
    TweenMax.set(this.$target.find('.overlay'), {backgroundColor: 'rgba(255,255,255,.8)', width: '100%'});

  }

  update() {

    for (var i = 0; i < this.list.length; i++) {
      
      var l = this.list[i];

      if(l.pos.progress > .2 && !l.isLock) {
        l.isLock = true;
        this.timeline(i, l.w, l.shadow);
        log(i);
      }

    }

  }

  timeline(i, w, shadow) {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$target.eq(i).find('.img'), 1.2, {
        width: w,
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$target.eq(i).find('.img img'), 1.2, {
        x: 0,
        ease: Power4.easeOut,
      }, 0.0)
      .to(this.$target.eq(i).find('.overlay'), 1.2, {
        x: w + 3,
        ease: Expo.easeOut,
      }, 0.3)
      .to(this.$target.eq(i).find('.imgInner'), 1.2, {
        boxShadow: shadow,
        ease: Power2.easeOut,
      }, .9)

  }

  setEvents() {

    super.setEvents();
    

  }

}