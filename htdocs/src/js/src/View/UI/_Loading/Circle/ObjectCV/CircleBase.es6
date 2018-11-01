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

    this.radius = 140;
    this.lineWidth = 2;
    this.color = '#000';
    this.curPIStart = 0;
    this.curPIEnd = 0;

  }

  add() {

    this.s = new createjs.Shape();

    this.s.x = this.cx;
    this.s.y = this.cy;

    this.s.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke('rgba(255,255,255,0.4)')
      .arc(0, 0, this.radius, -Math.PI/2 + this.curPIStart,-Math.PI/2 + this.curPIEnd);

    // add
    this.stage.addChild(this.s);

  }

  update(cur) {


  }
　
  draw() {

    this.s.graphics.clear();

    this.s.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke('rgba(255,255,255,0.4)')
      .arc(0, 0, this.radius, -Math.PI/2 + this.curPIStart,-Math.PI/2 + this.curPIEnd);

  }

  show() {

    var tl = new TimelineMax();

    tl
      .to(this, 0.5, {
        curPIEnd: Math.PI * 2,
        ease: Expo.easeInOut,
      })


  }

  hide01(dur=1.0) {

    var tl = new TimelineMax();

    tl
      .to(this.s, dur, {
        scaleX: 1.3,
        scaleY: 1.3,
        alpha: 0,
        ease: Expo.easeOut,
      })


  }

  hide02(dur=1.0, delay=0.2) {

    var tl = new TimelineMax();

    tl
      .to(this, dur, {
        curPIStart: Math.PI * 2,
        ease: Expo.easeInOut,
        delay: delay
      })

  }

}