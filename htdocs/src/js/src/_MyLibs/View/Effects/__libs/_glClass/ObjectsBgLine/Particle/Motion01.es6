//--------------------------------------------------
//
//  Motion01
//
//--------------------------------------------------

export default class Motion01 {

  constructor() {


  }

  wavy(gx,gy,gz,vRadian) {

    log('wave');

    // var step = this.noise.getPerlin() * 4;

    // var obj = {
    //   x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
    //   y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    //   z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    // }

    // this.x += (gx - this.x) * 0.08;
    // this.y += (gy - this.y) * 0.08;
    // this.z += (gz - this.z) * 0.08;

    // return obj;

  }

  softThread(vRadian,zoff) {

    // var angle = Math.PI * 6 * this.noise.getPerlinCustom(Math.abs(this.x / 1300), Math.abs(this.y / 1300),zoff);
    // this.vx = Math.cos(angle) * this.step * 0.1;
    // this.vy = Math.sin(angle) * this.step * 0.1;
    // this.vz = (Math.cos(this.radian + vRadian) * 3) + (Math.cos(this.radian + vRadian) * 3);
    
    // // if (!this.isEasingStop) {
    // //   this.x += (this.defx - this.x) * 0.08;
    // //   this.y += (this.defy - this.y) * 0.08;
    // //   this.z += (this.defz - this.z) * 0.08;
    // //   if ((Math.abs(this.defx - this.x) < 0.01) && (Math.abs(this.defy - this.y) < 0.01) && (Math.abs(this.defz - this.z) < 0.01)) {
    // //     this.isEasingStop=true;
    // //   };
    // // }

    // this.x += this.vx;
    // this.y += this.vy;

    // // wavy
    // var step = this.noise.getPerlin() * 0.1;
    // var wavy = {
    //   x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
    //   y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    //   z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    // }
    
    // this.x += wavy.x;
    // this.y += wavy.y;

  }

  sphere(vRadian) {

    // // spehre
    // this.rad += this.vRad;
    // this.rad2 += this.vRad;

    // // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * this.r;
    // // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * this.r;
    // // this.gz = Math.sin(this.rad) * this.r;
    // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * gb.param.particle_radius;
    // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * gb.param.particle_radius;
    // this.gz = Math.sin(this.rad) * gb.param.particle_radius;

    // // wavy
    // var step = this.noise.getPerlin() * 0.3;
    // var wavy = {
    //   x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
    //   y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    //   z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
    // }

    // this.x += (this.gx - this.x) * 0.08 + wavy.x;
    // this.y += (this.gy - this.y) * 0.08 + wavy.y;
    // this.z += (this.gz - this.z) * 0.08 + wavy.z;

  }

}