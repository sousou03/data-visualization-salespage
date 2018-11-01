// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import Render from './Render.es6';

export default class Dom extends Base {

  constructor(list) {

    super();

    this.list = list;
    this.$target = $('#wrapper .planeWrap, #wrapper .boxWrap');

    this.cnt = 0;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.rList = [];

    for (var i = 0; i < this.list.length; i++) {

      var l = this.list[i];

      l.isLock = false;
      l.w = this.$target.eq(i).find('.img').width();
      TweenMax.set(this.$target.eq(i).find('.imgInner'), {width: l.w});

      if (l.$target.parent().hasClass('planeWrap')) var r = new Render(l.$target.parent());
      else var r = [];
      this.rList.push(r);
      
    }
        
    TweenMax.set(this.$target.find('.img'), {'overflow': 'hidden', 'width': 0});    

  }

  update() {

    if (gb.up.frame%2==0) return;

    for (var i = 0; i < this.list.length; i++) {
      
      var l = this.list[i];

      if(l.pos.progress > .25 && !l.isLock) {
        l.isLock = true;
        this.timeline(i, l.w, l.shadow, l.$target);
        this.cnt++;
        if (this.cnt==this.list.length) this.offU();
      }

    }

  }

  timeline(i, w, shadow, $target) {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$target.eq(i).find('.img'), 1.6, {
        width: w,
        ease: Expo.easeOut,
      }, 0.0)
      .add(()=>{

        if ($target.parent().hasClass('planeWrap')) this.rList[i].show();

      }, 0.6)

  }

  setEvents() {

    super.setEvents();
    

  }

}