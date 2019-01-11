//--------------------------------------------------
//
//  Camera
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

export default class Camera extends Base {

  constructor(scene) {

    super();

    this.scene = scene;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.x = 0;
    this.y = 0;
    this.z = 5;
    this.movex = 0;
    this.movey = 0;
    this.movez = 0;
    // this.x = 0;
    // this.y = 40;
    // this.z = 150;
    this.x2 = 0;
    this.y2 = 0;
    this.z2 = 0;
    this.lookx = 0;
    this.looky = 0;
    this.lookz = 0;

    this.power = 0;

    this.wheely = 0;

    this.fov    = 45;
    this.aspect = gb.r.w / gb.r.h;
    this.near   = 1;
    this.far    = 50000;

    this.ready();

    // this.addHelper();

    // this.param();

    this.progress = 0;

    // this.timeline();

  }

  ready() {

    this.camera = new THREE.PerspectiveCamera( this.fov, this.aspect, this.near, this.far );
    this.camera.position.set(this.x ,this.y, this.z);

  }

  update() {

    // mousemove
    var strength = 0.05;
    this.movex += ( - gb.m.cx * strength - this.movex ) * 0.08;
    this.movey += ( gb.m.cy * strength * 0.5 - this.movey ) * 0.08;

    // // z
    // this.wheely *= 0.95;
    // this.z += this.wheely * 0.01;

    this.camera.position.set(this.x + this.x2 + this.movex * this.power, this.y + this.y2 + this.movey * this.power, this.z + this.z2);
    this.camera.lookAt({x: this.lookx, y: this.looky, z: this.lookz});

  }

  addHelper() {

    var helper = new THREE.CameraHelper( this.camera );
    this.scene.add( helper );

  }

  param() {

    this.p = {
      x: 0.0,
      y: 0.0,
      z: 100.0,
      lookx: 0.0,
      looky: 0.0,
      lookz: 0.0,
      fov:  80,
      near: 0.1,
      far: 10000.0,
    };

    var gui = new dat.GUI();

    // init
    this.camera.position.set(this.p.x, this.p.y, this.p.z);
    this.lookx = this.p.lookx;
    this.looky = this.p.looky;
    this.lookz = this.p.lookz;
    this.camera.fov = this.p.fov;
    this.camera.near = this.p.near;
    this.camera.far = this.p.far;

    gui.add(this.p, 'lookx', -200, 200, 1).onChange((v)=>{this.lookx = v});
    gui.add(this.p, 'looky', -200, 200, 1).onChange((v)=>{this.looky = v});
    gui.add(this.p, 'lookz', -1000, 1000, 1).onChange((v)=>{this.lookz = v});
    gui.add(this.p, 'fov', 0, 200, 1).onChange((v)=>{this.camera.fov = v});
    gui.add(this.p, 'near', 0, 20000, 10.0).onChange((v)=>{this.camera.near = v});
    gui.add(this.p, 'far', 0, 20000, 10.0).onChange((v)=>{this.camera.far = v});

  }

  timeline() {

    var z = 150;
    if (gb.r.w<=767) z = 230;
    var y2 = 50;
    if (gb.r.w<=767) y2 = 30;

    var tl = new TimelineMax();

    tl
      .to(this, 3.0, {
        z: 20,
        ease: Power2.easeInOut
      }, 0.0)

    var t2 = new TimelineMax();

    t2
      .to(this, 3.5, {
        y2: '+=' + y2,
        ease: Power4.easeInOut,
      }, 1.0)
      .to(this, 3.0, {
        z2: '+=' + z,
        ease: Power4.easeInOut
      }, 1.0)
      .add(()=>{

        TweenMax.to(this, 2.5, {power: 1,ease: Power2.easeInOut})

      }, 4.0)

  }

  setDefPos() {

    var z = 150;
    if (gb.r.w<=767) z = 230;
    var y2 = 50;
    if (gb.r.w<=767) y2 = 30;

    var tl = new TimelineMax();

    tl
      .set(this, {
        z: 20,
      }, 0.0)

    var t2 = new TimelineMax();

    t2
      .to(this, {
        y2: '+=' + y2,
      }, 0.0)
      .set(this, {
        z2: '+=' + z,
      }, 0.0)
      .add(()=>{

        TweenMax.to(this, 2.5, {power: 1,ease: Power2.easeInOut})

      }, 0.0)

  }

  timelineSinY() {

    var y2 = 50;
    if (gb.r.w<=767) y2 = 30;

    TweenMax.to(this, 7.5, {
      z: '+='+ (-50),
      ease: Power2.easeInOut
    });

    var tl = new TimelineMax({repeat: 0, yoyo: true});
    tl
      .to(this, 5.0, {
        y: '+='+ (-y2),
        ease: Power1.easeInOut,
      })

  }

  timelineDef() {

    var y2 = 50;
    if (gb.r.w<=767) y2 = 30;

    TweenMax.killTweensOf(this);

    TweenMax.to(this, 7.5 - 4.0, {
      z: '+='+ (50),
      ease: Power2.easeInOut
    });

    var tl = new TimelineMax({repeat: 0, yoyo: true});
    tl
      .to(this, 5.0 - 2.0, {
        y: '+='+ (y2),
        ease: Power1.easeInOut,
      })

  }

  toDef() {

    TweenMax.killTweensOf(this);
    var z = 150;
    if (gb.r.w<=767) z = 230;
    var y2 = 50;
    if (gb.r.w<=767) y2 = 30;

    TweenMax.to(this, 5.0, {
      y: 0,
      z: 20,
      ease: Power2.easeInOut
    });
    TweenMax.to(this, 5.0, {
      y2: y2,
      z2: z,
      ease: Power2.easeInOut
    });

  }

  onResize() {


  }

  onWheel(e){

    this.wheely += e.deltaY;

  }

  setEvents() {

    super.setEvents();

    $(document).on('mousewheel', (e)=>{this.onWheel(e);});

  }

}
