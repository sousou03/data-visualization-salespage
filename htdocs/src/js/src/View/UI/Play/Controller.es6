// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.$wrap = $('.videoWrap');
    this.$target = this.$wrap.find('.play');
    this.$scale = this.$target.find('.playScale');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.x = 0;
    this.y = 0;
    this.wrapx = 0;
    this.wrapy = 0;

    this.prex = 0;

    this.ease = 0.12;
    this.radius = 300;

    this.v = 0;
    this.isEnter = false;
    

  }

  update() {

    var basex = this.$wrap.offset().left + this.$wrap.width() / 2;
    var basey = this.$wrap.offset().top + this.$wrap.height() / 2 - gb.s.st;

    var mx = gb.m.x;
    var my = gb.m.y;

    var dist = m.dist({x:mx,y:my},{x:basex,y:basey});

    // log(dist, mx, my, basex, basey);

    if (dist < this.$wrap.height() / 4 * 3) {

      var tarx = (mx - basex) * 0.2;
      var tary = (my - basey) * 0.2;

    } else {

      var tarx = 0;
      var tary = 0;

    }

    this.wrapx += (tarx - this.wrapx) * 0.08;
    this.wrapy += (tary - this.wrapy) * 0.08;
    // this.x += (tarx - this.x) * this.ease;
    // this.y += (tary - this.y) * this.ease;

    this.dis = Math.abs(tarx - this.wrapx);
    // log(this.dis)

  }
　
  draw() {

    if(this.dis < .1) return;

    TweenMax.set(this.$wrap, {x: this.wrapx, y: this.wrapy, z: 0});
    // TweenMax.set(this.$target, {x: this.x, y: this.y, z: 0});

  }

  onEnter() {

    this.isEnter = true;
    if (this.v!=0) return;

    this.tlEnter = new TimelineMax({repeat: -1, repeatDelay: .1});
    this.tlEnter
      .set(this.$scale, {scale: 1,opacity: 1})
      .to(this.$scale, 1.2, {
        scale: 1.2,
        opacity: 0,
        ease: Power2.easeOut,
        onUpdate: ()=>{

          this.v = this.tlEnter.progress().toFixed(2)

          if (!this.isEnter&&this.v>=0.99) {
            if (this.tlEnter) this.tlEnter.kill();
            TweenMax.killTweensOf(this.$scale);
            this.v = 0;
          }

        }
      })

  }

  onLeave() {

    this.isEnter = false;  

  }  

  timeline() {


  }

  setEvents() {

    super.setEvents();
  
    // gb.sl.add('Play', this.onScroll.bind(this));   

    this.$target.on('mouseenter', this.onEnter.bind(this));
    this.$target.on('mouseleave', this.onLeave.bind(this));

  }

}