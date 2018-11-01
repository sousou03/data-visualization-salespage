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
      l.$img = this.$target.eq(i).find('.img');
      l.shadow = this.$target.eq(i).find('.imgInner').css('box-shadow');
      TweenMax.set(this.$target.eq(i).find('.imgInner'), {'box-shadow': 'none'});
      
      if (l.$target.parent().hasClass('planeWrap')) var r = new Render(l.$target.parent());
      else var r = [];
      this.rList.push(r);
      
    }
      
    TweenMax.set(this.$target.find('.img'), {'overflow': 'hidden', z: 0, position: 'relative'});    
    TweenMax.set(this.$target.find('.img img'), {'opacity': 0, x: -100});

  }

  update() {

    for (var i = 0; i < this.list.length; i++) {
      
      var l = this.list[i];

      if(l.pos.progress > .2 && !l.isLock) {
        l.w = l.$img.width();
        l.isLock = true;
        this.timeline(i, l.w, l.shadow, l.$target);
      }

    }

  }

  timeline(i, w, shadow, $target) {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$target.eq(i).find('.overlay'), .8, {
        width: '100%',
        ease: Expo.easeInOut,
      }, 0.0)
      .set(this.$target.eq(i).find('.img img'), {opacity: 1,})
      .to(this.$target.eq(i).find('.img img'), .8, {
        x: 0,
        ease: Expo.easeOut,
      })
      .to(this.$target.eq(i).find('.overlay'), .8, {
        x: w + 0,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.$target.eq(i).find('.overlay').hide();
        }
      }, 0.85)
      .to(this.$target.eq(i).find('.imgInner'), 1.2, {
        boxShadow: shadow,
        ease: Power2.easeOut,
      }, .9)

      // tit
      .add(()=>{

        if ($target.parent().hasClass('planeWrap')) this.rList[i].show();

      }, 0.6)

  }

  setEvents() {

    super.setEvents();
    

  }

}