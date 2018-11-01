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
    this.color = '#fff';
    this.curPIStart = 0;
    this.curPIEnd = 0;

  }

  add() {

    this.s = new createjs.Shape();

    this.s.x = this.cx;
    this.s.y = this.cy;

    this.s.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke(this.color)
      .arc(0, 0, this.radius, -Math.PI/2 + this.curPIStart,-Math.PI/2 + this.curPIEnd);

    // add
    this.stage.addChild(this.s);

  }

  update(cur) {

    var rate = cur / 100;
    this.curPIEnd = rate * Math.PI * 2

  }
　
  draw() {

    this.s.graphics.clear();

    this.s.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke(this.color)
      .arc(0, 0, this.radius, -Math.PI/2 + this.curPIStart,-Math.PI/2 + this.curPIEnd);

  }

  show() {



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

  hide02(dur=2.5, delay=0.2) {

    var tl = new TimelineMax();

    tl
      .to(this, dur, {
        curPIStart: Math.PI * 2,
        ease: Expo.easeInOut,
        delay: delay
      })

  }

}