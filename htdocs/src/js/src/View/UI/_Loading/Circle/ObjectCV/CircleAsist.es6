// ------------------------------------------------------------
//
//  Circle
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../UtilCV/Object_Point/Point.es6';

export default class Circle extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    this.ready();

    // add
    this.add();

    // loop start
    this.loopStart = false;

  }


  ready() {

    // circle
    this.p = new Point();

    this.cx = gb.r.w / 2;
    this.cy = gb.r.h / 2;

    this.radius = 150;
    this.lineWidth = 2;
    this.color = '#fff';
    this.startAng = -Math.PI/2;
    this.startRange = 0;
    this.startRangeTarget = 0;
    this.endAng = -Math.PI/2;
    this.endRange = 0;
    this.endRangeTarget = 0;

  }

  add() {

    this.s = new createjs.Shape();

    this.s.x = this.cx;
    this.s.y = this.cy;

    this.s.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke(this.color)
      .arc(0, 0, this.radius, this.startAng + this.startRange, this.endAng + this.endRange);

    // add
    this.stage.addChild(this.s);

  }

  update(cur) {


  }
　
  draw() {

    this.s.graphics.clear();

    this.s.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke(this.color)
      .arc(0, 0, this.radius, this.startAng + this.startRange, this.endAng + this.endRange);

  }

  show(dur=0.5, delay=0.0) {

    var tl = new TimelineMax();

    tl
      .to(this, dur, {
        endRange: this.endRangeTarget,
        ease: Expo.easeInOut,
        delay: delay
      });

  }

  hide(dur=1.0, delay=0.0) {

    var tl = new TimelineMax();

    tl
      .to(this, dur, {
        startRange: this.startRangeTarget,
        ease: Expo.easeInOut,
        delay: delay
      });

  }


}