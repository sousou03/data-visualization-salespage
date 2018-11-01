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

    // this.show();

  }


  ready() {

    // circle
    this.p = new Point();

    this.p.x = gb.r.w / 2;
    this.p.y = gb.r.h / 2;
    

    this.p.startAng = 0;
    this.p.endAng = Math.PI / 2;

    // mask circle
    this.pm = new Point();

    this.pm.x = gb.r.w / 2;
    this.pm.y = gb.r.h / 2;


    this.pm.startAng = 0;
    this.pm.endAng = Math.PI / 2;


    this.p.rad = 140;
    this.pm.rad = 140;
    this.tarRad = 160;

  }

  add() {

    this.container = new createjs.Container();

    // cirlce
    this.s = new createjs.Shape();
    // mask circle
    this.m = new createjs.Shape();
    this.m.compositeOperation = "destination-out";

    this.s.alpha = 0;
    this.m.alpha = 0;

    this.container.addChild(this.s, this.m);

    // add
    this.stage.addChild(this.container);

  }

  update() {


  }
　
  draw() {

    this.s.graphics.clear(); 
    this.m.graphics.clear(); 

    // ------------------------------------------------------------
    //  fill
    // ------------------------------------------------------------
    this.s.graphics
      .beginFill('#fff')
      .drawCircle(this.p.x, this.p.y, this.p.rad); // circle

    this.m.graphics
      .beginFill('#fff')
      .drawCircle(this.pm.x, this.pm.y, this.pm.rad); // mask circle


  }

  show(dur=0.7) {

    var tl = new TimelineMax({delay: 0.0});

    tl
      .add(()=>{

        this.s.alpha = 1;
        this.m.alpha = 1;

      }, 0.0)
      .to(this.p,  dur, {
        rad: this.tarRad,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.s.alpha = 0;
        }
      }, 0.0)
      .to(this.pm, dur, {
        rad: this.tarRad,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.m.alpha = 0;
        }
      }, 0.03)

  }

  hide() {

  }

}