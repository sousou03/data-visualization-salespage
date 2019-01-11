// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// basic objects
import Bg from './Bg/Controller.es6';
import Particle_red from './Particle_red/Controller.es6';
import Particle_blue from './Particle_blue/Controller.es6';

import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing.es6';
import * as a from 'Util/Array.es6';

export default class Objects extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.y = 0;
    this.cval = 0; //container val
    this.posy = 0;
    if (gb.r.w<=767) this.posy = -5;

    this.sy = 0;
    this.scrollY = 0;
    this.speed = 0.12;
    this.isRun = false

    this.isLock =false;

    // this.$body = $('.body');
    this.$btn = $('.p-drawerToggler');

    // ready
    this.ready();

    // add
    this.add();

  }


  ready() {

    this.defColor = new THREE.Color(0x092241);
    this.toColor = new THREE.Color(0xe6e9ec);

  }

  add() {

    this.container = new THREE.Object3D();

    // bg
    this.Bg = new Bg(this.scene, this.camera);

    // particle
    this.pListr = [];
    this.pListb = [];
    var len = 31;
    for (var i = 0; i < len; i++) {
      var pr = new Particle_red(this.scene, this.camera, this.renderer, len, i);
      var pb = new Particle_blue(this.scene, this.camera, this.renderer, len, i);
      this.pListr.push(pr);
      this.pListb.push(pb);

      this.container.add(pr.mesh);
      this.container.add(pb.mesh);
    }

    this.scene.add(this.container);


    if (!gb.isLower) this.forLoop();
    // this.setAnim();

  }

  updateObj() {

    for (var i = 0; i < this.pListr.length; i++) {
      var pr = this.pListr[i];
      var pb = this.pListb[i];
      pr.update();
      pb.update();
    }

  }
　
  update() {

    // update
    this.sy += (this.scrollY-this.sy)*this.speed;
    this.sy = Number(this.sy.toFixed(2));

    var tary = gb.s.st;
    var ease1 = 0.06;
    var ease2 = 0.02;

    tary = m.constrain(tary, 400, 500);
    tary = m.map(tary, 0, 1, 400, 500);
    this.y += (tary - this.y) * ease1;
    tary = gb.s.st;
    tary = m.constrain(tary, 400, 600);
    tary = m.map(tary, 0, 1, 400, 600);
    this.cval += (tary - this.cval) * ease2;

    // 下層だったら
    if (gb.isLower) this.y = 1;
    // topでmenuを開いたら
    if (!gb.isLower&&this.$btn.attr('aria-expanded')=='true') {
      ease1 = 1;
      ease2 = 1;
      this.y = 1;
    }

    var r = m.lerp(this.defColor.r, this.toColor.r, this.y);
    var g = m.lerp(this.defColor.g, this.toColor.g, this.y);
    var b = m.lerp(this.defColor.b, this.toColor.b, this.y);

    this.Bg.mesh.material.color.r = r;
    this.Bg.mesh.material.color.g = g;
    this.Bg.mesh.material.color.b = b;

    for (var i = 0; i < this.pListr.length; i++) {
      var pr = this.pListr[i];
      var pb = this.pListb[i];
      pr.uniforms.t.value = this.y;
      pb.uniforms.t.value = this.y;
    }

    this.container.position.z = this.cval * 35;
    this.container.position.y = this.cval * 10 + this.posy;
    this.container.rotation.x = e.inQuad(this.cval) * (- Math.PI * 2 * 0.02);

    if (!gb.isLower) {
      if (!this.isLock&&tary>=0.5) {
        this.isLock = true;
        this.toDef();
      }
      if (this.isLock&&tary<0.5) {
        this.isLock = false;
        this.forLoop();
      }
    }

    // constrain
    var dis = (this.scrollY - this.sy);
    if(dis < 0.1 && dis > -0.1) {
      this.isRun = false;
      this.offU();
    }

  }

  forLoop() {

    this.index = 0;
    this.pre = 0;
    this.len = 3;


    // repeat
    // var arr = a.randomArr(this.len-1);
    var arr = [0,1];
    // var arr = [0,2,1]
    arr.push(this.len-1);

    this.tl = new TimelineMax({delay: 6.5, repeat: -1, repeatDelay: 12.0});
    // var tl = new TimelineMax({delay: 2.0, repeat: -1, repeatDelay: 4.0});

    this.tl
      // rotate
      .add(()=>{

        var cb = (target, cur, pre, index)=>{
          var tl = new TimelineMax();
          tl
            .add(()=>{

              target.switch(cur, index);
              if (this.index%2==0) target.tweenParamTo1();
              else target.tweenParamTo0();

            }, 0.0)
        }

        var cur = arr[this.index];

        // camera
        if (cur==0) gb.camera.timelineSinY();
        if (cur==1) gb.camera.timelineDef();

        // state change
        for (var i = 0; i < this.pListb.length; i++) {

          var pb = this.pListb[i];
          var pr = this.pListr[i];
          // pb.switch(arr[this.index]);
          // pb.tweenParam();

          cb(pb, cur, this.pre, this.index);
          cb(pr, cur, this.pre, this.index);

        }

        this.index++;
        this.index %= this.len;
        this.pre = cur;


      }, 0.01)

  }

  // 特定のアニメーション
  setAnim(index=0) {

    for (var i = 0; i < this.pListb.length; i++) {
      var pb = this.pListb[i];
      var pr = this.pListr[i];

      pb.switch(index, i);
      pb.tweenParamTo1();
      pr.switch(index, i);
      pr.tweenParamTo1();

      // pb.mesh.position.y = 0;
      // pb.prev.pos.y = 0;

    }

  }

  // 特定のアニメーション
  toDef(index=0) {

    if (this.tl) this.tl.kill();
    this.setAnim(2);
    gb.camera.toDef();

  }

  show() {


  }

  hide() {


  }

  onScroll() {

    this.scrollY = gb.s.st;
    if (!this.isRun) {
      this.isRun = true;
      this.offU();
      this.onU();
    }

  }

  onChange() {

    this.offU();
    this.onU();
    this.sy = 100;

  }

  setEvents() {

    super.setEvents();

    $(window).on('scroll', this.onScroll.bind(this));
    $(window).on('changeMenu', this.onChange.bind(this));

  }

}
