//--------------------------------------------------
//
//  LoadingCircle
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import MaskCircle from './MaskCircle.es6';
import Ball from './Ball.es6';
import CircleBase from './CircleBase.es6';
import Circle from './Circle.es6';

import CircleAsist from './CircleAsist.es6';

export default class LoadingCircle extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

    // this.timeline01();
    this.timeline02();

  }

  setup() {

    this.cnt = 0;

    this.mc = new MaskCircle(this.stage);
    this.b = new Ball(this.stage);
    this.cb = new CircleBase(this.stage);
    this.c = new Circle(this.stage);

    this.ca01 = new CircleAsist(this.stage);
    this.ca02 = new CircleAsist(this.stage);
    this.ca03 = new CircleAsist(this.stage);

    this.reset();

    this.loopStart = true;

  }

  reset() {


  }

  update() {

    this.b.update(this.cnt);
    this.c.update(this.cnt);

    this.b.draw();
    this.cb.draw();
    this.c.draw();
    this.mc.draw();

    this.ca01.draw();
    this.ca02.draw();
    this.ca03.draw();

  }

  show () {

  
  }

  hide () {

    
  }

  state() {


  }

  timeline01() {

    var tl = new TimelineMax({delay: 1.5});

    tl
      .add(()=>{

        this.b.show();

      }, 0.0)
      .add(()=>{

        this.cb.show();

      }, 0.2)
      .to(this, 2.5, {
        cnt: 100,
        ease: Expo.easeInOut,
      }, 0.3)
      .add(()=>{

        this.mc.show(1.2);

      }, 2.8 - 0.4)
      .add(()=>{

        this.b.hide01(1.2);
        this.cb.hide01(1.2);
        this.c.hide01(1.2);

      }, 2.90 - 0.4)

  }

  timeline02() {

    // ------------------------------------------------------------
    //  timeline01
    // ------------------------------------------------------------
    var tl = new TimelineMax({delay: 1.5});

    tl
      .add(()=>{

        this.b.show();

      }, 0.0)
      .add(()=>{

        this.cb.show();

      }, 0.2)
      .to(this, 2.5, {
        cnt: 100,
        ease: Expo.easeInOut,
      }, 0.3)
      .add(()=>{

        this.mc.show(0.8);

      }, 2.8 - 0.4)
      .add(()=>{

        this.c.hide02(1.2, 0.0 * 1.0);
        this.cb.hide02(1.2, 0.2 * 1.0);
        this.b.hide02(0.6, 0.8);

      }, 2.90 - 0.4)

    // ------------------------------------------------------------
    //  timeline02
    // ------------------------------------------------------------
    var tl02 = new TimelineMax({delay: 1.5});

    tl02
      .add(()=>{

        var basePI = - Math.PI / 2 + Math.PI * 2 / 4 * 0 + Math.PI * Math.random() * 0.5;
        this.ca01.radius = 150;
        this.ca01.startAng = basePI;
        this.ca01.endAng = this.ca01.startAng;
        this.ca01.endRangeTarget = Math.PI * 2 / 10 * 4 + Math.PI * 1 * Math.random();
        this.ca01.startRangeTarget = this.ca01.endRangeTarget;

        var basePI = - Math.PI / 2 + Math.PI * 2 / 4 * 2 + Math.PI * Math.random() * 0.5;
        this.ca02.radius = 120;
        this.ca02.startAng = basePI;
        this.ca02.endAng = this.ca02.startAng;
        this.ca02.endRangeTarget = Math.PI * 2 / 10 * 4 + Math.PI * 1 * Math.random();
        this.ca02.startRangeTarget = this.ca02.endRangeTarget;

        var basePI = - Math.PI / 2 + Math.PI * 2 / 4 * 1 + Math.PI * Math.random() * 0.5;
        this.ca03.radius = 160;
        this.ca03.startAng = basePI;
        this.ca03.endAng = this.ca03.startAng;
        this.ca03.endRangeTarget = Math.PI * 2 / 10 * 7 + Math.PI * 1 * Math.random();
        this.ca03.startRangeTarget = this.ca03.endRangeTarget;

      }, 0.0)
      .add(()=>{

        this.ca01.show(0.5);
        this.ca01.hide(0.5, 0.2);
        this.ca02.show(0.5, 0.1);
        this.ca02.hide(0.5, 0.1 + 0.2);
        this.ca03.show(1.2, 0.4);
        this.ca03.hide(1.2, 0.4 + 0.2);

      }, 1.0)
      .add(()=>{

        

      }, 1.2);

  }

}