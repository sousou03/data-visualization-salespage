//--------------------------------------------------
//
//  Motion01
//
//--------------------------------------------------

export default class Motion01 {

  constructor() {


  }

  layoutBgLineCircle() {

    var w = gb.r.W(), h = gb.r.H();
    var stepDef = Math.PI * 2 * Math.random();

    for (var i = 0; i < this.numB; i++) {

      for (var j = 0; j < 2; j++) {

        var c = 0.3;
        var r = 0.035;
        
        var radiusOut = Math.min(w, h) * (c + r);
        var radiusIn  = Math.min(w, h) * (c - r);

        var radius = (j%2 == 0)? radiusOut: radiusIn;
        var step = Math.PI * 2 * i / this.numB;
        var x = Math.sin(step) * radius;
        var y = Math.cos(step) * radius;
        var z = 0;

        this.pathList[i].pList[j].pos.x = x;
        this.pathList[i].pList[j].pos.y = y;
        this.pathList[i].pList[j].pos.z = z;
        this.pathList[i].pList[j].radian = step;
        this.pathList[i].pList[j].vRadian = step;
        this.pathList[i].pList[j].radius = radius;

        this.pathList[i].positions[j*3+0] = this.pathList[i].pList[j].pos.x;
        this.pathList[i].positions[j*3+1] = this.pathList[i].pList[j].pos.y;
        this.pathList[i].positions[j*3+2] = this.pathList[i].pList[j].pos.z;

      }

    };

  }

  layoutBgLineCircle02() {

    var w = gb.r.W(), h = gb.r.H();
    

    for (var i = 0; i < this.numS; i++) {

      for (var j = 0; j < 2; j++) {

        var c = 0.325;
        var r = 0.003;
        
        var radiusOut = Math.min(w, h) * (c + r - 0.002);
        var radiusIn  = Math.min(w, h) * (c - r - 0.002);

        var radius = (j%2 == 0)? radiusOut: radiusIn;
        var step = Math.PI * 2 * i / this.numS;
        var x = Math.sin(step) * radius;
        var y = Math.cos(step) * radius;
        var z = 0;

        this.pathList02[i].pList[j].pos.x = x;
        this.pathList02[i].pList[j].pos.y = y;
        this.pathList02[i].pList[j].pos.z = z;
        this.pathList02[i].pList[j].radian = step;
        this.pathList02[i].pList[j].vRadian = step;
        this.pathList02[i].pList[j].radius = radius;

        this.pathList02[i].positions[j*3+0] = this.pathList02[i].pList[j].pos.x;
        this.pathList02[i].positions[j*3+1] = this.pathList02[i].pList[j].pos.y;
        this.pathList02[i].positions[j*3+2] = this.pathList02[i].pList[j].pos.z;

      }

    };

  }

  layoutBgLineCircle03() {

    var w = gb.r.W(), h = gb.r.H();
    

    for (var i = 0; i < this.numS; i++) {

      for (var j = 0; j < 2; j++) {

        var c = 0.275;
        var r = 0.003;
        
        var radiusOut = Math.min(w, h) * (c + r + 0.002);
        var radiusIn  = Math.min(w, h) * (c - r + 0.002);

        var radius = (j%2 == 0)? radiusOut: radiusIn;
        var step = Math.PI * 2 * i / this.numS;
        var x = Math.sin(step) * radius;
        var y = Math.cos(step) * radius;
        var z = 0;

        this.pathList03[i].pList[j].pos.x = x;
        this.pathList03[i].pList[j].pos.y = y;
        this.pathList03[i].pList[j].pos.z = z;
        this.pathList03[i].pList[j].radian = step;
        this.pathList03[i].pList[j].vRadian = step;
        this.pathList03[i].pList[j].radius = radius;

        this.pathList03[i].positions[j*3+0] = this.pathList03[i].pList[j].pos.x;
        this.pathList03[i].positions[j*3+1] = this.pathList03[i].pList[j].pos.y;
        this.pathList03[i].positions[j*3+2] = this.pathList03[i].pList[j].pos.z;

      }

    };

  }

  // layoutBgLineCircle02() {

  //   var w = gb.r.W(), h = gb.r.H();
    

  //   for (var i = 0; i < this.num; i++) {

  //     var stepDef =  Math.PI * 2 * i / this.num;

  //     for (var j = 0; j < 20; j++) {

  //       var c = 0.3;
  //       var r = 0.05;
        
  //       var radiusOut = Math.min(w, h) * (c + r);
  //       var radiusIn  = Math.min(w, h) * (c - r);

  //       var radius = (j%2 == 0)? radiusOut: radiusIn;
  //       var step = stepDef + Math.floor(j/2) / 10 * Math.PI*2/18;
  //       var x = Math.sin(step) * radius;
  //       var y = Math.cos(step) * radius;
  //       var z = 0;

  //       this.pathList02[i].pList[j].pos.x = x;
  //       this.pathList02[i].pList[j].pos.y = y;
  //       this.pathList02[i].pList[j].pos.z = z;
  //       this.pathList02[i].pList[j].radian = step;
  //       this.pathList02[i].pList[j].vRadian = step;
  //       this.pathList02[i].pList[j].radius = radius;

  //       this.pathList02[i].positions[j*3+0] = this.pathList02[i].pList[j].pos.x;
  //       this.pathList02[i].positions[j*3+1] = this.pathList02[i].pList[j].pos.y;
  //       this.pathList02[i].positions[j*3+2] = this.pathList02[i].pList[j].pos.z;

  //     }

  //   };

  // }


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