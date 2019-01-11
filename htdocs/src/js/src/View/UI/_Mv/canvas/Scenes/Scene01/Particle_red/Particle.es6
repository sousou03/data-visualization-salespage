//--------------------------------------------------
//
//  Particle
//
//--------------------------------------------------

import * as m from 'Util/Math/index.es6';
import v from 'Util/Val.es6';

export default class Particle {

  constructor(param) {

    this.vec = new THREE.Vector3();

    this.x = param.x || 0;
    this.y = param.y || 0;
    this.z = param.z || 0;

    this.defx = m.range(100)*Math.random();
    this.defy = m.range(70)*Math.random();
    this.defz = 0;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;

    // circle用
    this.radian = param.radian || 0;
    this.radian2 = param.radian2 || 0;
    this.vradian = param.vradian || 0;
    this.radius = param.radius || 0
    this.defRadius = param.defRadius || 0

    // sphere用
    this.rad = param.rad || 0;
    this.rad2 = param.rad2 || 0;
    this.vRad = param.vRad || 0;
    this.r = param.r || 0;

    this.minDis = 3;

    this.rotateX = param.rotateX || 0;
    this.rotateY = param.rotateY || 0;
    this.rotateZ = param.rotateZ || 0;

    this.noise = param.noise || 0;
    this.v = new v();
    this.seed = 10000 * Math.random();
    this.stepX = param.stepX || 0;
    this.stepY = param.stepY || 0;

    this.step = 5 + Math.random() * 8;

    this.top = -70;
    this.right = 130;
    this.bottom = 70;
    this.left = -130;

    this.defRight = 130;
    this.defLeft = -130;

    this.rr = Math.random() * 0.5;

    this.diffx = (Math.random() - 0.5) * 200;
    this.diffy = (Math.random() - 0.5) * 200;
    this.diffz = (Math.random() - 0.5) * 200;
    if (gb.r.w<=767) {
      this.diffx = (Math.random() - 0.5) * 150;
      this.diffy = (Math.random() - 0.5) * 150;
      this.diffz = (Math.random() - 0.5) * 150;
    }
    // var rad = Math.random() * Math.PI * 10;
    // var rad2 = Math.random() * Math.PI * 20;
    // this.diffx = Math.cos(rad) * Math.cos(rad2) * (70 + (Math.random() - 0.5) * 0);
    // this.diffy = Math.cos(rad) * Math.sin(rad2) * (70 + (Math.random() - 0.5) * 0);
    // this.diffz = Math.sin(rad) * (70 + (Math.random() - 0.5) * 0);
    // var rad = param.index / 100 * Math.PI * 2 * 5;
    // var rad2 = param.index / 100 * Math.PI * 2 * 5;
    // this.diffx = Math.cos(rad) * Math.cos(rad2) * 70;
    // this.diffy = Math.cos(rad) * Math.sin(rad2) * 70;
    // // this.diffz = Math.sin(rad) * 70;
    // var len = 100;
    // var radius = 70;
    // var phi = Math.acos( -1 + ( 2 * param.index ) / len ) + param.indexDis / 31 * Math.PI * 2;
    // var theta = Math.sqrt( len * Math.PI ) * phi;
    // this.diffx = radius * Math.cos( theta ) * Math.sin( phi );
    // this.diffy = radius * Math.sin( theta ) * Math.sin( phi );
    // this.diffz = radius * Math.cos( phi );


    this.paramDiff = 0;
    this.pf = 0;

    this.isEasingStop = false;

  }

  wavy(gx,gy,gz,vRadian) {

    var step = this.noise.getPerlin() * 2;

    var obj = {
      x: (Math.sin(this.radian2 + vRadian) * step) + (Math.sin(this.radian2 + vRadian) * step),
      y: (Math.cos(this.radian2 + vRadian) * step) + (Math.cos(this.radian2 + vRadian) * step),
      z: (Math.cos(this.radian2 + vRadian) * step) + (Math.cos(this.radian2 + vRadian) * step),
    }

    this.x += (gx - this.x) * 0.1;
    this.y += (gy - this.y) * 0.1;
    this.z += (gz - this.z) * 0.1;

    return obj;

  }

  gunya(vRadian,zoff) {

    var angle = Math.PI * 6 * this.v.noise3(Math.abs(this.x / 1500), Math.abs(this.y / 1500), zoff);
    this.vx = Math.cos(angle) * this.step * 0.087;
    this.vy = Math.sin(angle) * this.step * 0.087;
    this.vz = (Math.cos(this.radian + vRadian) * 3) + (Math.cos(this.radian + vRadian) * 3);

    this.x += this.vx;
    this.y += this.vy;

    // wavy
    var step = this.v.noise(gb.up.frame/100, this.seed) * 0.1;
    var wavy = {
      x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
      y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    }

    this.x += wavy.x;
    this.y += wavy.y;

  }

  // sphere(vRadian, i, len) {

  //   // spehre
  //   this.rad += this.vRad;
  //   this.rad2 += this.vRad;

  //   var phi = Math.acos( -1 + ( 2 * i ) / len );
  //   var theta = Math.sqrt( len * Math.PI ) * phi;

  //   this.gx = Math.cos(theta) * Math.sin(phi) * 30;
  //   this.gy = Math.sin(theta) * Math.sin(phi) * 30;
  //   this.gz = Math.sin(phi) * 30;

  //   this.x += (this.gx - this.x) * 0.1;
  //   this.y += (this.gy - this.y) * 0.1;
  //   this.z += (this.gz - this.z) * 0.1;

  // }

  sphere(vRadian, i, len) {

    // spehre
    this.rad += this.vRad * 0.7;
    this.rad2 += this.vRad * 0.7;

    this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
    this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
    this.gz = Math.sin(this.rad) * 30;

    // this.vec.set(this.gx,this.gy,this.gz);
    // this.vec.normalize();
    // this.vec.multiplyScalar(30 + Math.sin(i/Math.PI*2*10 + vRadian / 10) * 30);

    // this.x += (this.vec.x - this.x) * 0.1;
    // this.y += (this.vec.y - this.y) * 0.1;
    // this.z += (this.vec.z - this.z) * 0.1;

    this.x += (this.gx - this.x) * 0.1;
    this.y += (this.gy - this.y) * 0.1;
    this.z += (this.gz - this.z) * 0.1;

  }

  diffusion(vRadian, i, len) {

    // spehre
    this.rad += this.vRad * 0.7;
    this.rad2 += this.vRad * 0.7;

    this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
    this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
    this.gz = Math.sin(this.rad) * 30;

    this.vec.set(this.gx,this.gy,this.gz);
    this.vec.normalize();
    this.vec.multiplyScalar(30 + Math.sin(i/Math.PI*2*10 + vRadian / 10) * this.rr * 30);

    this.x += (this.vec.x - this.x) * 0.1;
    this.y += (this.vec.y - this.y) * 0.1;
    this.z += (this.vec.z - this.z) * 0.1;

  }

  boundary() {

    if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
      return true;
    }

    return false;

  }

}
