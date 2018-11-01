//--------------------------------------------------
//
//  BufferDotParts
//
//--------------------------------------------------

(function(){

  

  function BufferDotParts() {

    this.dot;
    this.geometry = null;
    this.material = null;

    this.radius = 1;
    this.segment = 32;

    this.r = 33;
    this.g = 33;
    this.b = 33;

    this.color = new THREE.Color('rgb('+this.r+','+this.g+','+this.b+')');
    this.transparent = true;

    this.setup();
    this.create();

  }

  BufferDotParts.prototype = {

    setup: function() {


    },

    create: function() {

      // dot
      this.geometry = new THREE.CircleGeometry( this.radius, this.segment );
      this.material = new THREE.MeshBasicMaterial({color: this.color,transparent: this.transparent});
      this.dot = new THREE.Mesh( this.geometry, this.material );

    },

    setTransparent: function(val) {


    },

    setSize: function(val) {


    },

    tweenTransparent: function(val) {


    },

    tweenTransparent2: function(val,time) {


    },

    changeColors: function(r,g,b){



    },

    // lineオブジェクト自体の回転
    updateScaleWavy: function() {

      // var vRadian = gb.u.radian(gb.up.cnt*2);

      // for (var i = 0; i < this.num; i++) {

      //   var p = this.particleData[i];
      //   var scale = Math.sin(p.radian + vRadian) * p.scale;

      //   // scale
      //   this.Dot.children[i].scale.set(scale,scale,scale);

      //   // wavy
      //   this.Dot.children[i].position.x = p.x + (Math.sin(p.radian + vRadian) * 3) + (Math.sin(p.radian + vRadian) * 3);
      //   this.Dot.children[i].position.y = p.y + (Math.cos(p.radian + vRadian) * 3) + (Math.cos(p.radian + vRadian) * 3);
      //   this.Dot.children[i].position.z = p.z + (Math.tan(p.vZRadian*1) * 100);

      // };

    },

    update: function() {


    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferDotParts = BufferDotParts;
  
})();