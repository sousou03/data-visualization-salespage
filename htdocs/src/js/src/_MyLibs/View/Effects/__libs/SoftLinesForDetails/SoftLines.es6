//--------------------------------------------------
//
//  SoftLines
//
//--------------------------------------------------

import Paths from './Paths.es6';

export default class SoftLines {

  constructor() {

    // this.defW = 735;
    // this.defH = 450;
    this.defW = 980;
    this.defH = 600;

    this.isLoop = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.canvas = document.getElementById("detailsCV");
    gb.stage = this.stage = new createjs.Stage(this.canvas);

    // layout
    this.onResize();

    // create object
    this.paths = new Paths(this.defW, this.defH);
    
  }

  loop() {

    if (!this.isLoop) return;

    this.paths.update();

    this.stage.update();

  }

  pulse01() {

    this.paths.addImpulse01();

    this.Timer01 = setTimeout(this.pulse01.bind(this), 200 + 200 * Math.random());

  }
  pulse02() {

    this.paths.addImpulse02();

    this.Timer02 = setTimeout(this.pulse02.bind(this), 200 + 200 * Math.random());

  }
  pulse03() {

    this.paths.addImpulse03();

    this.Timer03 = setTimeout(this.pulse03.bind(this), 200 + 200 * Math.random());

  }
  pulse04() {

    this.paths.addImpulse04();

    this.Timer04 = setTimeout(this.pulse04.bind(this), 200 + 200 * Math.random());

  }
  pulse05() {

    this.paths.addImpulse05();

    this.Timer05 = setTimeout(this.pulse05.bind(this), 200 + 200 * Math.random());

  }
  pulse06() {

    this.paths.addImpulse06();

    this.Timer06 = setTimeout(this.pulse06.bind(this), 200 + 200 * Math.random());

  }
  pulse07() {

    this.paths.addImpulse07();

    this.Timer07 = setTimeout(this.pulse07.bind(this), 200 + 200 * Math.random());

  }
  pulse08() {

    this.paths.addImpulse08();

    this.Timer08 = setTimeout(this.pulse08.bind(this), 200 + 200 * Math.random());

  }

  onResize() {

    this.canvas.width = this.defW;
    this.canvas.height = this.defH;

    // var w = gb.r.w;
    // var h = gb.r.h;

    // $(this.canvas).css({width: w,height: h});

  }

  play() {

    this.isLoop = true;

    // timer
    this.pulse01();
    this.pulse02();
    this.pulse03();
    this.pulse04();
    this.pulse05();
    this.pulse06();
    this.pulse07();
    this.pulse08();

  }

  pause() {

    this.isLoop = false;

    clearTimeout(this.Timer01);
    clearTimeout(this.Timer02);
    clearTimeout(this.Timer03);
    clearTimeout(this.Timer04);
    clearTimeout(this.Timer05);
    clearTimeout(this.Timer06);
    clearTimeout(this.Timer07);
    clearTimeout(this.Timer08);

  }

  clear() {

    clearTimeout(this.Timer01);
    clearTimeout(this.Timer02);
    clearTimeout(this.Timer03);
    clearTimeout(this.Timer04);
    clearTimeout(this.Timer05);
    clearTimeout(this.Timer06);
    clearTimeout(this.Timer07);
    clearTimeout(this.Timer08);

  }

  setEvents() {

    gb.r.add('SoftLines', this.onResize.bind(this));
    gb.up.add('SoftLines', this.loop.bind(this));

  }

}