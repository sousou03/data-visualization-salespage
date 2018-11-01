//--------------------------------------------------
//
//  Motion01
//
//--------------------------------------------------

export default class Motion01 {

  constructor() {


  }

  layoutCircle() {

    var w = gb.r.W(), h = gb.r.H();

    for (var i = 0; i < this.num; i++) {

      var c = 0.3;
      var r = 0.1 * Math.random();
      
      var radiusOut = Math.min(w, h) * (c + r);
      var radiusIn  = Math.min(w, h) * (c - r);

      var radius = (i%2 == 0)? radiusOut: radiusIn;
      var step = 2 * i * (Math.PI * 2 / this.num) + Math.PI * Math.random();
      var x = Math.sin(step) * radius;
      var y = Math.cos(step) * radius;
      var z = Math.random() * 10.0;

      this.pList[i].pos.x = x;
      this.pList[i].pos.y = y;
      this.pList[i].pos.z = z;
      this.pList[i].radian = step;
      this.pList[i].vRadian = step;
      this.pList[i].radius = radius;

      this.positions[i*3+0] = this.pList[i].pos.x;
      this.positions[i*3+1] = this.pList[i].pos.y;
      this.positions[i*3+2] = this.pList[i].pos.z;

    };

    this.geometry.attributes.position.needsUpdate = true;

    log(this.mesh);

  }

  // 回転の速度と、半径のupdate
  updateCircle() {

    // this.updateRadius();

    var sin = gb.u.sin(100);

    for (var i = 0; i < this.num; i++) {

      // 回転の速度
      // var radian = this.particleData[i].radian;
      var radian = this.particleData[i].radian += this.particleData[i].vradian*0.002;
      // 半径

      // var radius = this.particleData[i].radius += this.particleData[i].vradian*this.vRadius;
      var radius = this.particleData[i].radius = this.particleData[i].vradian * sin;
      radius *= 6;
      // var radius = this.particleData[i].radius;

      this.positions[i*3+0] = Math.sin(radian) * radius;
      this.positions[i*3+1] = Math.cos(radian) * radius;

    };

    this.geometry.attributes.position.needsUpdate = true;

  }

  // 速度ランダムで円形上に回転
  updateCircleSize() {

    var size= (gb.noise.getPerlin()+1)*10;
    this.Particle.material.size = size;


    this.geometry.attributes.position.needsUpdate = true;
  }

  // 球体状を回転 random
  updateSphere() {

    var vRadian = gb.u.radian(gb.up.cnt*2.6);

    for (var i = 0; i < this.num; i++) {

      var p = this.particleData[i];

      p.sphere(vRadian);

      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

      // log(i,p.x);

    };

    this.geometry.attributes.position.needsUpdate = true;

  }

  // ランダムウォーク
  updateRandomWalk() {

    for (var i = 0; i < this.num; i++) {

      var p = this.particleData[i];

      var stepx = gb.u.range(1);
      var stepy = gb.u.range(1);
      
      // var stepsize = this.montecarlo()*10;
      var stepsize = this.montecarlo()*Math.random();
      stepx *= stepsize;
      stepy *= stepsize;

      p.x += stepx;
      p.y += stepy;
      p.z = 0;

      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

    };

    this.geometry.attributes.position.needsUpdate = true;

  }

  // 衛星
  setupSatellite() {

    this.satellitePos = gb.line.Line01.geometry.attributes.position.array;
    this.satelliteNum = Math.ceil(this.num / this.satellitePos.length);

  }

  // 衛星
  updateSatellite() {

    var vRadian = gb.u.radian(gb.up.cnt*2.6);

    for (var i = 0; i < this.satelliteNum; i++) {

      for (var j = 0; j < this.satellitePos.length; j++) {

        var nth = i*this.satellitePos.length+j;
        if (nth>this.num-1) continue;

        var p = this.particleData[nth];
        var gx = this.satellitePos[j*3+0];
        var gy = this.satellitePos[j*3+1];
        var gz = 0;
        var wavy = p.wavy(gx,gy,gz,vRadian);

        this.positions[nth*3+0] = p.x + wavy.x;
        this.positions[nth*3+1] = p.y + wavy.y;
        this.positions[nth*3+2] = p.z + wavy.z;

      };
      
    };

    this.geometry.attributes.position.needsUpdate = true;

  }

  // 半径の大きさを変える
  updateRadius() {

    if (this.vRadius < 1.01) {

      this.vRadiusTarget = 5;

    }

    if (this.vRadius > 4.99) {

      this.vRadiusTarget = 0;
      

    }

    this.vRadius += (this.vRadiusTarget - this.vRadius) * this.easing;

    // var step = gb.u.map(gb.noise.getPerlin(),-1,1,-2,2);

    this.geometry.attributes.position.needsUpdate = true;

  }

  // オブジェクト自体の回転
  updateRotate() {

    var rotateX = gb.u.radian(gb.up.cnt/1);
    // var rotateY = gb.u.radian(gb.up.cnt/1);
    // var rotateZ = gb.u.radian(gb.up.cnt/1);
    var rotateY = 0;
    var rotateZ = 0;

    this.Particle.rotation.set(rotateX, rotateY, rotateZ);

    this.geometry.attributes.position.needsUpdate = true;

  }

  setupUpdateLineShadow() {

    for (var i = 0; i < this.num; i++) {

      var p = this.particleData[i];

      p.x = gb.u.range(40)*0.5*Math.random();
      p.y = gb.u.range(40)*0.5*Math.random();
      p.z = 0;

      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

    }

  }

  resetUpdateLineShadow(i) {

    var p = this.particleData[i];

    p.x = gb.u.range(100)*Math.random();
    p.y = gb.u.range(70)*Math.random();
    p.z = 0;

    this.positions[i*3+0] = p.x;
    this.positions[i*3+1] = p.y;
    this.positions[i*3+2] = p.z;

  }

  // ぐにゃぐにゃ
  updateLineShadow() {

    var vRadian = gb.u.radian(gb.up.cnt*2);
    
    for (var i = 0; i < this.num; i++) {

      var p = this.particleData[i];

      p.softThread(vRadian,this.zoff);
      if (p.boundary()) this.resetUpdateLineShadow(i);

      // if (i < this.num/4) {

      //   this.positions[i*3+0] = p.x;
      //   this.positions[i*3+1] = -70;
      //   this.positions[i*3+2] = p.z;

      // };

      // if (i > this.num/4 && i < this.num/4*2 ) {

      //   this.positions[i*3+0] = p.defRight * gb.camera.valForParticle;
      //   this.positions[i*3+1] = p.y;
      //   this.positions[i*3+2] = p.z;

      // };

      // if (i > this.num/4*2 && i < this.num/4*3 ) {

      //   this.positions[i*3+0] = p.x;
      //   this.positions[i*3+1] = 70;
      //   this.positions[i*3+2] = p.z;

      // };

      // if (i > this.num/4*3 && i < this.num ) {

      //   this.positions[i*3+0] = p.defLeft * gb.camera.valForParticle;
      //   this.positions[i*3+1] = p.y;
      //   this.positions[i*3+2] = p.z;

      // };


      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

    }

    this.zoff += 0.002;

    this.geometry.attributes.position.needsUpdate = true;

  }

}