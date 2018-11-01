//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Render extends Base {

  constructor($wrap, len) {

    super();

    this.$wrap = $wrap;
    this.$item = $wrap.find('.item');
    this.$img = this.$item.find('.img');
    this.$overlay = this.$wrap.find('.overlay');
    this.$indiItem = $wrap.find('.indicator .item');

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$img, {'opacity': 0, x: -150});
    // TweenMax.set(this.$img.eq(0), {'opacity': 1, x: 0});

  }

  next(cur, prev) {

    // this.$item.removeClass('active');
    // this.$item.eq(num).addClass('active');

    this.$indiItem.removeClass('active');
    this.$indiItem.eq(cur).addClass('active');

    this.timeline(cur, prev);

  }

  setCur(cur, prev) {
    
    if (this.isLock) return;
    this.isLock = true;

    this.timeline(cur, prev);

    this.$indiItem.removeClass('active');
    this.$indiItem.eq(cur).addClass('active');
    
  }

  timeline(cur, prev) {

    if (cur==0) var color = '#008dd6';
    if (cur==1) var color = '#f50d4e';
    if (cur==2) var color = '#00a478';
    if (cur==3) var color = '#f85aa0';
    if (gb.r.w<=768) {
      if (cur==0) var color = '#008dd6';
      if (cur==1) var color = '#f50d4e';
      if (cur==2) var color = '#00a478';
      if (cur==3) var color = '#f85aa0';
    }

    var tl = new TimelineMax({delay: 0});
    tl
      .set(this.$overlay, {width: '0%', x: '0%', backgroundColor: color}, 0.0)
      .to(this.$overlay, .8, {
        width: '100%',
        ease: Expo.easeInOut,
      }, 0.0)
      .to(this.$img.eq(prev), .8, {
        x: 150,
        ease: Power4.easeInOut,
      }, 0.0)
      .set(this.$img, {opacity: 0})
      // .set(this.$img.eq(cur), {opacity: 0, x: -150})
      .set(this.$img.eq(cur), {opacity: 1, x: -150})
      .to(this.$img.eq(cur), .8, {
        x: 0,
        ease: CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1"),
      })
      // .to(this.$img.eq(cur), .8, {
      //   opacity: 1,
      //   ease: Power2.easeInOut,
      // }, 0.8)
      .to(this.$overlay, .8, {
        x: '100%',
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.isLock = false;
        }
      }, 0.85)

  }

  onResize() {


  }

}
