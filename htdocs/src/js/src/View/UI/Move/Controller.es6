// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
// import Val from 'Util/Val.es6';

export default class Dom extends Base {

  constructor($target, pos) {

    super();

    this.$target = $target;
    this.target = this.$target.get(0);
    this.pos = pos;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    // this.v = new Val();

    this.x = 0;
    this.y = 0;

    // noraml
    // this.ease = 0.12;
    // this.radius = 100;

    // random
    this.ease = m.map(0.12 + (Math.random() - 0.5) * 0.3, 0.02, 0.16, -0.03, 0.27);
    this.radius = 50 + 100 * Math.random();

    // var size = this.$target.find('img').width() * this.$target.find('img').height() / 1000;
    // this.ease = 0.16 - m.map(size , 0.04, 0.12, 0, 600);
    // this.radius = 600 - size * 0.95;

    this.basex = this.$target.offset().left + this.$target.width() / 2;
    this.basey = this.$target.offset().top + this.$target.height() / 2;

  }

  update() {

    // if (gb.up.frame%4==0) return

    var mx = gb.m.cx;
    var my = gb.m.cy;
    var cx = mx;
    var cy = my;

    var tarx = 0;
    var tary = 0;
    var ookisa = 20;
    var radius = 20;

    // noise
    // tarx += this.v.noise(gb.up.frame / 200) * ookisa;
    // tary += this.v.noise(gb.up.frame / 200, 100) * ookisa;

    // 回転
    // tarx += 0 + Math.cos(gb.up.frame / 150) * radius;
    // tary += 0 + Math.sin(gb.up.frame / 150) * radius;

    // mousemove
    tarx += cx * 0.04;
    tary += cy * 0.04;

    
    this.x += (tarx - this.x) * this.ease;
    this.y += (tary - this.y) * this.ease;

    // draw
    this.x = Number(this.x.toFixed(1));
    this.y = Number(this.y.toFixed(1));

    if(this.pos.progress < 1.5 && this.pos.progress > -.5) this.target.style.transform ="translate3d("+this.x+"px, " + this.y + "px, 0)";

  }
　
  draw() {

    
  }

  timeline() {


  }

  setEvents() {

    super.setEvents();
    

  }

}