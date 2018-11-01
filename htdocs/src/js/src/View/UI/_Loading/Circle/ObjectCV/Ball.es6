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

    this.ballRadius = 5;
    this.radius = 140;
    this.color = '#fff';
    this.curPI = 0;

  }

  add() {

    this.container = new createjs.Container();

    this.s = new createjs.Shape();

    this.container.x = this.cx;
    this.container.y = this.cy - 140;
    this.container.regY = -140;
    this.container.scaleX = 0;
    this.container.scaleY = 0;

    var x = 0 + Math.cos(-Math.PI/2 + this.curPI) * this.radius;
    var y = 0 + Math.sin(-Math.PI/2 + this.curPI) * this.radius;

    this.s.graphics
      .beginFill(this.color)
      .drawCircle(x, y, this.ballRadius);

    this.container.addChild(this.s);
    // add
    this.stage.addChild(this.container);

  }

  update(cur) {

    var rate = cur / 100;
    this.curPI = rate * Math.PI * 2

  }
　
  draw() {

    this.s.graphics.clear();

    var x = 0 + Math.cos(-Math.PI/2 + this.curPI) * this.radius;
    var y = 0 + Math.sin(-Math.PI/2 + this.curPI) * this.radius;

    this.s.graphics
      .beginFill(this.color)
      .drawCircle(x, y, this.ballRadius);

  }

  show() {

    var tl = new TimelineMax();

    tl
      .to(this.container, 0.9, {
        scaleX: 1.0,
        scaleY: 1.0,
        ease: Elastic.easeOut.config(1.5, 0.3),
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

  hide02(dur=1.0, delay) {

    var tl = new TimelineMax();

    tl
      .to(this.container, dur, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeIn.config(5.7),
        delay: delay
      })

  }

}