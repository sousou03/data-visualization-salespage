//--------------------------------------------------
//
//  Line
//
//--------------------------------------------------

(function(){

  

  function BufferLine() {

    this.Line01;
    this.Line02;
    this.Line03;
    this.Line04;
    this.Line05;
    this.geometry = null;
    this.material = null;

    this.positions = [];
    this.colors = [];
    this.num = 720;
    this.cnt = 0;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;

    this.timer01=null;
    this.timer02=null;
    this.timer03=null;
    this.timer04=null;
    this.timer05=null;

    this.particleData = [];

    this.setup();
    this.create();

  }

  BufferLine.prototype = {

    setup: function() {


    },

    create: function() {

      this.geometry = new THREE.BufferGeometry();
      this.material01 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material02 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material03 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material04 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material05 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });

      this.setVertex();

      this.Line01 = new THREE.Line( this.geometry, this.material01);
      this.Line02 = this.Line01.clone();
      this.Line03 = this.Line01.clone();
      this.Line04 = this.Line01.clone();
      this.Line05 = this.Line01.clone();

      this.Line02.material = this.material02
      this.Line03.material = this.material03
      this.Line04.material = this.material04
      this.Line05.material = this.material05

      gb.scene.scene.add(this.Line01);
      gb.scene.scene.add(this.Line02);
      gb.scene.scene.add(this.Line03);
      gb.scene.scene.add(this.Line04);
      gb.scene.scene.add(this.Line05);

      this.Line01.position.z = -90;
      this.Line02.position.z = -90;
      this.Line03.position.z = -90;
      this.Line04.position.z = -90;
      this.Line05.position.z = -90;

      this.Line01.material.opacity = 0.0;
      this.Line02.material.opacity = 0.0;
      this.Line03.material.opacity = 0.0;
      this.Line04.material.opacity = 0.0;
      this.Line05.material.opacity = 0.0;

    },

    setVertex: function() {

      this.positions = new Float32Array( this.num * 3 );
      this.colors = new Float32Array( this.num * 3 );

      var x,y;
      var w = gb.r.W(), h = gb.r.H();
      var radius,radiusOut,radiusIn,radian,step

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        // r = 0.05;

        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        // radiusOut = Math.min(w, h) * (c + r);
        // radiusIn  = Math.min(w, h) * (c - r);
        radiusOut = 1000 * (c + r);
        radiusIn  = 1000 * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.u.radian(i + step);
        x = Math.sin(radian) * radius * 0.1 * 1;
        y = Math.cos(radian) * radius * 0.1 * 1;

        this.particleData.push({
                          radian:radian,vradian:step,radius:radius,step:step,
                          x: x,y: y,z: 0,
                          // rad: gb.u.random(0,360), rad2: gb.u.random(0,360),vRad: gb.u.radian(gb.u.random(1, 2)),r:3,
                          // rad: gb.u.radian(360*i/this.num), rad2: gb.u.radian(360*100*i/this.num),vRad: gb.u.radian(gb.u.random(1, 2)),r:3,
                          rad: gb.u.radian(360*360*i/this.num), rad2: gb.u.radian(360*i/this.num),vRad: gb.u.radian(Math.random()*3),r:3,
                          rotateX: 0,rotateY: 0,rotateZ: 0,
                          noise: (new gb.PerlinNoise(i*1000))
                        });

        // positions
        this.positions[ i * 3 ] = this.particleData[i].x;
        this.positions[ i * 3 + 1 ] = this.particleData[i].y;
        this.positions[ i * 3 + 2 ] = this.particleData[i].z;

        var color = new THREE.Color('rgb('+155+','+155+','+155+')');

        // colors
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

    },

    changeColors: function(r,g,b){

      for (var i = 0; i < this.num; i++) {

        // colors
        var color = new THREE.Color('rgb('+r+','+g+','+b+')');
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      // log(color.r);

      // this.Line01.geometry.attributes.color.dynamic = true;
      // this.Line02.geometry.attributes.color.dynamic = true;
      // this.Line03.geometry.attributes.color.dynamic = true;
      // this.Line04.geometry.attributes.color.dynamic = true;
      // this.Line05.geometry.attributes.color.dynamic = true;

      this.Line01.geometry.attributes.color.needsUpdate = true;
      this.Line02.geometry.attributes.color.needsUpdate = true;
      this.Line03.geometry.attributes.color.needsUpdate = true;
      this.Line04.geometry.attributes.color.needsUpdate = true;
      this.Line05.geometry.attributes.color.needsUpdate = true;


    },

    changeRadius: function(val){

      var x,y;

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        x = p.x * val;
        y = p.y * val;

        // positions
        this.positions[ i * 3 ] = x;
        this.positions[ i * 3 + 1 ] = y;
        this.positions[ i * 3 + 2 ] = 0;

      };

      this.Line01.geometry.attributes.position.needsUpdate = true;
      this.Line02.geometry.attributes.position.needsUpdate = true;
      this.Line03.geometry.attributes.position.needsUpdate = true;
      this.Line04.geometry.attributes.position.needsUpdate = true;
      this.Line05.geometry.attributes.position.needsUpdate = true;

      // this.Line01.position.z = val-5000;
      // this.Line02.position.z = val-5000;
      // this.Line03.position.z = val-5000;
      // this.Line04.position.z = val-5000;
      // this.Line05.position.z = val-5000;


    },

    changeLineWidth: function(val){

      this.Line01.material.lineWdith = val;
      this.Line02.material.lineWdith = val;
      this.Line03.material.lineWdith = val;
      this.Line04.material.lineWdith = val;
      this.Line05.material.lineWdith = val;

      this.Line01.material.needsUpdate = true;
      this.Line02.material.needsUpdate = true;
      this.Line03.material.needsUpdate = true;
      this.Line04.material.needsUpdate = true;
      this.Line05.material.needsUpdate = true;

      this.Line01.material.name = 'test';

      log(this.Line01);

    },

    // lineオブジェクト自体の回転
    updateRotate: function() {

      // var rotateX = gb.u.radian(gb.up.cnt/1);
      // var rotateY = gb.u.radian(gb.up.cnt/1);
      // this.cnt++;
      var rotateZ = gb.u.radian(gb.up.cnt/25);

      // var rotateX = 0;
      // var rotateY = 0;
      // var rotateZ = 0;

      this.Line01.rotation.z = rotateZ;
      this.Line02.rotation.z = rotateZ;
      this.Line03.rotation.z = rotateZ;
      this.Line04.rotation.z = rotateZ;
      this.Line05.rotation.z = rotateZ;

    },

    // lineオブジェクト自体の回転
    showRotate: function() {

      var self = this;

      var tlMain = new TimelineMax();

      var tl01 = new TimelineMax();
      var tl02 = new TimelineMax();
      var tl03 = new TimelineMax();
      var tl04 = new TimelineMax();
      var tl05 = new TimelineMax();

      var r01 = gb.u.random(1,2);
      var r02 = gb.u.random(1,2);
      var r03 = gb.u.random(1,2);
      var r04 = gb.u.random(1,2);
      var r05 = gb.u.random(1,2);

      // tl01
      //   .to(this.Line01.rotation, 2 + 6 * Math.random(), {
      //     x: gb.u.radian(360*r01),
      //     y: gb.u.radian(360*r01),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl02
      //   .to(this.Line02.rotation, 2 + 6 * Math.random(), {
      //     x: gb.u.radian(360*r02),
      //     y: gb.u.radian(360*r02),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl03
      //   .to(this.Line03.rotation, 2 + 6 * Math.random(), {
      //     x: gb.u.radian(360*r03),
      //     y: gb.u.radian(360*r03),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl04
      //   .to(this.Line04.rotation, 2 + 6 * Math.random(), {
      //     x: gb.u.radian(360*r04),
      //     y: gb.u.radian(360*r04),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl05
      //   .to(this.Line05.rotation, 2 + 6 * Math.random(), {
      //     x: gb.u.radian(360*r05),
      //     y: gb.u.radian(360*r05),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })

      tlMain
        // ------------------------------------------------------------
        // fadein
        // ------------------------------------------------------------
        // .to(this.Line01.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line01.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=0.0')
        // .to(this.Line02.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line02.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line03.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line03.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line04.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line04.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line05.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line05.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')

        // ------------------------------------------------------------
        // rotate
        // ------------------------------------------------------------
        .to(this.Line01.rotation, 2.0, {
          x: gb.u.radian(360*gb.u.random(2,2)),
          y: 0,
          z: 0,
          delay: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line01.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   

          }
        })
        .to(this.Line02.rotation, 2.0, {
          x: 0,
          y: gb.u.radian(360*gb.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line02.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line03.rotation, 2.0, {
          x: gb.u.radian(-360*gb.u.random(2,2)),
          y: 0,
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line03.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line04.rotation, 2.0, {
          x: 0,
          y: gb.u.radian(-360*gb.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line04.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line05.rotation, 2.0, {
          x: gb.u.radian(360*gb.u.random(2,2)),
          y: gb.u.radian(360*gb.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line05.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   

          },
          onComplete: function(){

            gb.gl.stateLineRotate = true;
          }
        },'-=1.7')
        .add(function(){
          TweenMax.to(gb.line.Line01.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.line.Line02.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.line.Line03.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.line.Line04.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.line.Line05.position, 1.2, {z: 0,ease: Power4.easeInOut,onComplete:function(){}});
        },'-=0.6')

    },

    sometimesRotate: function() {

      var self = this;

      var paramList = [
        {
          x: gb.u.radian(360),
          y: 0,
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
        {
          x: 0,
          y: gb.u.radian(360),
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
        {
          x: gb.u.radian(360),
          y: gb.u.radian(360),
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
      ]

      this.timer01 = setTimeout(rotate01,4000 * Math.random());
      this.timer02 = setTimeout(rotate02,4000 * Math.random());
      this.timer03 = setTimeout(rotate03,4000 * Math.random());
      this.timer04 = setTimeout(rotate04,4000 * Math.random());
      this.timer05 = setTimeout(rotate05,4000 * Math.random());

      function rotate01() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.line.Line01.rotation, 4, paramList[i])

        self.timer01=setTimeout(rotate01,5000 + 2000 * Math.random());

      }
      function rotate02() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.line.Line02.rotation, 4, paramList[i])

        self.timer02=setTimeout(rotate02,5000 + 2000 * Math.random());
      }
      function rotate03() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.line.Line03.rotation, 4, paramList[i])

        self.timer03=setTimeout(rotate03,5000 + 2000 * Math.random());
      }
      function rotate04() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.line.Line04.rotation, 4, paramList[i])

        self.timer04=setTimeout(rotate04,5000 + 2000 * Math.random());
      }
      function rotate05() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.line.Line05.rotation, 4, paramList[i])

        self.timer05=setTimeout(rotate05,5000 + 2000 * Math.random());
      }

    },

    clearRotate: function() {

      var self = this;

      clearTimeout(this.timer01);
      clearTimeout(this.timer02);
      clearTimeout(this.timer03);
      clearTimeout(this.timer04);
      clearTimeout(this.timer05);

    },

    createCircleCanvas: function() {
        var canvas = document.createElement('canvas');
        var SIZE = 20;
        var HALF = SIZE / 2;
        var CENTER = SIZE / 2;
        canvas.width = SIZE;
        canvas.height = SIZE;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,SIZE,SIZE);
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(CENTER, CENTER, HALF, 0, 2 * Math.PI, false);
        var grad = ctx.createRadialGradient(CENTER, CENTER, 0, CENTER, CENTER, HALF);

        var h = Math.floor(191 + Math.random()*90);
        var s = Math.floor(40 + Math.random()*60);
        var b = Math.floor(60 + Math.random()*40);

        grad.addColorStop(0,'hsla('+h+','+s+'%,'+b+'%,1)');
        grad.addColorStop(0.6,'hsla(0,0%,0%,0)');

        // grad.addColorStop(0,'rgba(255,0,0,1)');
        // grad.addColorStop(0.6,'rgba(0,0,0,0)');
        // ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.closePath();
        // return canvas.toDataURL("image/png");
        return canvas;
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

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = (val.target!==undefined)? val.target : 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.Line01.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line02.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line03.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line04.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line05.material, t, {
        opacity: v,
        ease : e,
      });

    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferLine = BufferLine;
  
})();