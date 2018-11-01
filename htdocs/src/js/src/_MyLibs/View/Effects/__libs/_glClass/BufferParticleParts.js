//--------------------------------------------------
//
//  BufferParticleParts
//
//--------------------------------------------------

(function(){

  

  function BufferParticleParts(param) {

    this.x = param.x || 0;
    this.y = param.y || 0;
    this.z = param.z || 0;

    this.defx = gb.u.range(100)*Math.random();
    this.defy = gb.u.range(70)*Math.random();
    this.defz = 0;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;

    // circle用
    this.radian = param.radian || 0;
    this.vradian = param.vradian || 0;
    this.radius = param.radius || 0

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
    this.stepX = param.stepX || 0;
    this.stepY = param.stepY || 0;

    this.step = 5 + Math.random() * 8;

    this.top = -70;
    this.right = 130;
    this.bottom = 70;
    this.left = -130;

    this.defRight = 130;
    this.defLeft = -130;

    this.isEasingStop = false;

  }

  BufferParticleParts.prototype = {

    wavy: function(gx,gy,gz,vRadian) {

      var step = this.noise.getPerlin() * 4;

      var obj = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }

      this.x += (gx - this.x) * 0.08;
      this.y += (gy - this.y) * 0.08;
      this.z += (gz - this.z) * 0.08;

      return obj;

    },

    softThread: function(vRadian,zoff) {

      var angle = Math.PI * 6 * this.noise.getPerlinCustom(Math.abs(this.x / 1300), Math.abs(this.y / 1300),zoff);
      this.vx = Math.cos(angle) * this.step * 0.1;
      this.vy = Math.sin(angle) * this.step * 0.1;
      this.vz = (Math.cos(this.radian + vRadian) * 3) + (Math.cos(this.radian + vRadian) * 3);
      
      // if (!this.isEasingStop) {
      //   this.x += (this.defx - this.x) * 0.08;
      //   this.y += (this.defy - this.y) * 0.08;
      //   this.z += (this.defz - this.z) * 0.08;
      //   if ((Math.abs(this.defx - this.x) < 0.01) && (Math.abs(this.defy - this.y) < 0.01) && (Math.abs(this.defz - this.z) < 0.01)) {
      //     this.isEasingStop=true;
      //   };
      // }

      this.x += this.vx;
      this.y += this.vy;

      // wavy
      var step = this.noise.getPerlin() * 0.1;
      var wavy = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }
      
      this.x += wavy.x;
      this.y += wavy.y;

    },

    repulse: function() {

      // var dis = gb.u.dist()
      // if (this.minDis) {};

    },

    boundary: function() {

      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
        return true;
      }

      return false;

    },

    sphere: function(vRadian) {

      // spehre
      this.rad += this.vRad;
      this.rad2 += this.vRad;

      // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * this.r;
      // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * this.r;
      // this.gz = Math.sin(this.rad) * this.r;
      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * gb.param.particle_radius;
      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * gb.param.particle_radius;
      this.gz = Math.sin(this.rad) * gb.param.particle_radius;

      // wavy
      var step = this.noise.getPerlin() * 0.3;
      var wavy = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }

      this.x += (this.gx - this.x) * 0.08 + wavy.x;
      this.y += (this.gy - this.y) * 0.08 + wavy.y;
      this.z += (this.gz - this.z) * 0.08 + wavy.z;

    },

  }

  // 公開api
  gb.BufferParticleParts = BufferParticleParts;
  
})();