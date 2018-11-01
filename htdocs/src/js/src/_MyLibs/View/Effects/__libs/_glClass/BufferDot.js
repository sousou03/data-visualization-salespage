//--------------------------------------------------
//
//  BufferDot
//
//--------------------------------------------------

(function(){

  

  function BufferDot() {

    this.Dot;
    this.geometry = null;
    this.material = null;

    this.particleData = [];

    this.num = 360;

    this.setup();
    this.create();

  }

  BufferDot.prototype = {

    setup: function() {


    },

    create: function() {

      this.group = new THREE.Object3D();
      var pos = gb.line.Line01.geometry.attributes.position.array;

      for (var i = 0; i < this.num; i++) {

        // dot        
        var dot = new gb.BufferDotParts();
        dot = dot.dot;

        dot.position.x = pos[i*3+0];
        dot.position.y = pos[i*3+1];
        dot.position.z = 0;

        this.particleData.push({
                          x: pos[i*3+0],y: pos[i*3+1],z:0,
                          scale:0.4+Math.random()*0.5,
                          radian:gb.u.radian(Math.random()*360),
                          vZRadian: gb.u.radian(89),
                          // vZRadian: gb.u.radian(0),
                        });

        this.group.add(dot);

      };

      this.Dot = this.group;
      gb.scene.scene.add(this.group);

    },

    setTransparent: function(val) {

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].material.opacity = val;

      };

    },

    setSize: function(val) {

      var pos = gb.line.Line01.geometry.attributes.position.array;

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].scale.set(val,val,val);

        this.group.children[i].position.x = pos[i*3+0];
        this.group.children[i].position.y = pos[i*3+1];

      };

    },

    tweenTransparent: function(val) {

      for (var i = 0; i < this.num; i++) {

        TweenMax.to(this.group.children[i].material, 6, {
          opacity: val,
          delay: 0.003 * i,
          ease : Power3.easeOut,
        });

        var p = this.particleData[i];

        TweenMax.to(p, 3, {
          vZRadian: gb.u.radian(0),
          delay: 0.002 * i,
          ease : Power2.easeOut,
        });

      };

    },

    tweenTransparent2: function(val,time) {

      for (var i = 0; i < this.num; i++) {

        TweenMax.to(this.group.children[i].material, time, {
          opacity: val,
          ease : Power2.easeOut,
        });

      };

    },

    changeColors: function(r,g,b){

      // colors
      var color = new THREE.Color('rgb('+r+','+g+','+b+')');

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].material.color.r = color.r;
        this.group.children[i].material.color.g = color.g;
        this.group.children[i].material.color.b = color.b;

        // this.group.children[i].material.needsUpdate = true;
      };

    },

    // lineオブジェクト自体の回転
    updateRotate: function() {

      // var rotateX = gb.u.radian(gb.up.cnt/1);
      // var rotateY = gb.u.radian(gb.up.cnt/1);
      var rotateZ = gb.u.radian(gb.up.cnt/25);

      var rotateX = 0;
      var rotateY = 0;
      // var rotateZ = 0;

      this.Dot.rotation.set(rotateX, rotateY, rotateZ);

    },

    // lineオブジェクト自体の回転
    updateScaleWavy: function() {

      var vRadian = gb.u.radian(gb.up.cnt*1);

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];
        var scale = Math.sin(p.radian + vRadian) * p.scale;

        // scale
        this.Dot.children[i].scale.set(scale * gb.param.dot_size,scale * gb.param.dot_size,scale * gb.param.dot_size);

        // wavy
        this.Dot.children[i].position.x = p.x + (Math.sin(p.radian + vRadian) * 0.7) + (Math.sin(p.radian + vRadian) * 0.7);
        this.Dot.children[i].position.y = p.y + (Math.cos(p.radian + vRadian) * 0.7) + (Math.cos(p.radian + vRadian) * 0.7);
        this.Dot.children[i].position.z = p.z + (Math.tan(p.vZRadian*1) * 100);

      };

    },

    update: function() {


      this.updateRotate();
      this.updateScaleWavy();

    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferDot = BufferDot;
  
})();