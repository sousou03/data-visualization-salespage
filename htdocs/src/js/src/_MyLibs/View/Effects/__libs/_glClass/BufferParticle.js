//--------------------------------------------------
//
//  BufferParticle
//
//--------------------------------------------------

(function(){

  

  function BufferParticle() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.positions = [];
    this.colors = [];
    this.num = 7000;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;

    this.particleData = [];

    this.setup();
    this.create();
    this.setEvents();
    this.onResize();

  }

  BufferParticle.prototype = {

    setup: function() {


    },

    create: function() {

      log(gb.param.particle_size);

      // geomety,material準備
      this.geometry = new THREE.BufferGeometry();
      this.material = new THREE.PointsMaterial( {
        vertexColors: THREE.VertexColors,
        size: gb.param.particle_size,
        transparent: true,
        // blending: THREE.AdditiveBlending,
        sizeAttenuation: false,
      } );

      // gemetryの頂点セット
      this.setVertex();

      // オブジェクト生成
      this.Particle = gb.Particle = new THREE.Points( this.geometry, this.material);
      this.Particle.position.z = 0;
      this.Particle.material.opacity = 1;
      // オブエジェクトシーンに追加

    },

    setVertex: function() {

      this.positions = new Float32Array( this.num * 3 );
      this.colors = new Float32Array( this.num * 3 );

      var x,y;
      var w = gb.r.W(), h = gb.r.H();
      var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0

      for (var i = 0; i < this.num; i++) {

        var param = {
          x: gb.u.range(40)*0.5*Math.random(),y: gb.u.range(40)*0.5*Math.random(),z: 0,
          radian:gb.u.radian(Math.random()*360),vradian:step,radius:radius,
          rad: gb.u.radian(360*360*i/this.num), rad2: gb.u.radian(360*i/this.num),vRad: gb.u.radian(1.0 + Math.random()*0.5),r: 35,
          rotateX: 0,rotateY: 0,rotateZ: 0,
          noise: (new gb.PerlinNoise(i*1000)),
          stepX:0, stepY: 0,
        }

        var p = new gb.BufferParticleParts(param);
        this.particleData.push(p);

        // positions
        this.positions[ i * 3 ] = this.particleData[i].x;
        this.positions[ i * 3 + 1 ] = this.particleData[i].y;
        this.positions[ i * 3 + 2 ] = this.particleData[i].z;


        // colors
        var h = Math.floor(191 + Math.random()*gb.param.particle_h);
        var s = Math.floor(40 + Math.random()*gb.param.particle_s);
        var b = Math.floor(70 + Math.random()*gb.param.particle_b);

        var color = new THREE.Color('hsl('+h+','+s+'%,'+b+'%)');
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

    },

    // 回転の速度と、半径のupdate
    setupUpdateCircle: function() {

      var x,y;
      var w = gb.r.W(), h = gb.r.H();
      var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0;

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        radiusOut = Math.min(w, h) * (c + r);
        radiusIn  = Math.min(w, h) * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.u.radian(i + step);
        x = Math.sin(radian) * radius;
        y = Math.cos(radian) * radius;

        this.particleData[i].x = x;
        this.particleData[i].y = y;
        this.particleData[i].radian = radian;
        this.particleData[i].vradian = step;
        this.particleData[i].radius = radius;

      };

    },

    // 回転の速度と、半径のupdate
    updateCircle: function() {

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

    },

    // 速度ランダムで円形上に回転
    updateCircleSize: function() {

      var size= (gb.noise.getPerlin()+1)*10;
      this.Particle.material.size = size;


      this.geometry.attributes.position.needsUpdate = true;
    },

    // 球体状を回転 random
    updateSphere: function() {

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

    },

    // ランダムウォーク
    updateRandomWalk: function() {

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

    },

    // 衛星
    setupSatellite: function() {

      this.satellitePos = gb.line.Line01.geometry.attributes.position.array;
      this.satelliteNum = Math.ceil(this.num / this.satellitePos.length);

    },

    // 衛星
    updateSatellite: function() {

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

    },

    // 半径の大きさを変える
    updateRadius: function() {

      if (this.vRadius < 1.01) {

        this.vRadiusTarget = 5;

      }

      if (this.vRadius > 4.99) {

        this.vRadiusTarget = 0;
        

      }

      this.vRadius += (this.vRadiusTarget - this.vRadius) * this.easing;

      // var step = gb.u.map(gb.noise.getPerlin(),-1,1,-2,2);

      this.geometry.attributes.position.needsUpdate = true;

    },

    // オブジェクト自体の回転
    updateRotate: function() {

      var rotateX = gb.u.radian(gb.up.cnt/1);
      // var rotateY = gb.u.radian(gb.up.cnt/1);
      // var rotateZ = gb.u.radian(gb.up.cnt/1);
      var rotateY = 0;
      var rotateZ = 0;

      this.Particle.rotation.set(rotateX, rotateY, rotateZ);

      this.geometry.attributes.position.needsUpdate = true;

    },

    setupUpdateLineShadow: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.x = gb.u.range(40)*0.5*Math.random();
        p.y = gb.u.range(40)*0.5*Math.random();
        p.z = 0;

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      }

    },

    resetUpdateLineShadow: function(i) {

      var p = this.particleData[i];

      p.x = gb.u.range(100)*Math.random();
      p.y = gb.u.range(70)*Math.random();
      p.z = 0;

      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

    },

    // ぐにゃぐにゃ
    updateLineShadow: function() {

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

    },

    montecarlo: function () {
      
      while (true) {  

        var r1 = Math.random(); 
        var probability = Math.pow(1.0 - r1,8);  
      
        var r2 = Math.random(); 
        if (r2 < probability) { 
          return r1;
        }
      }

    },

    toScreenPosition: function (obj) {
        var vector = new THREE.Vector3();

        var widthHalf = 0.5*gb.gl.renderer.context.canvas.width;
        var heightHalf = 0.5*gb.gl.renderer.context.canvas.height;

        obj.updateMatrixWorld();
        vector.setFromMatrixPosition(obj.matrixWorld);
        vector.project(gb.camera.camera);

        vector.x = ( vector.x * widthHalf ) + widthHalf;
        vector.y = - ( vector.y * heightHalf ) + heightHalf;

        return { 
            x: vector.x,
            y: vector.y
        };

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = (val.target!==undefined)? val.target : 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.Particle.material, t, {
        opacity: v,
        ease : e,
      });

    },

    update: function() {


      // this.updateCircleSize();
      // this.updateSphere();
      // this.updateSphere02();
      // this.updateRandomWalk();
      // this.updateRotate();
      


    },

    onResize: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];
        p.right = p.defRight * gb.camera.valForParticle;
        p.left = p.defLeft * gb.camera.valForParticle;

      }

    },

    setEvents: function() {

      gb.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.BufferParticle = BufferParticle;
  
})();