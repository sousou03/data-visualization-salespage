//--------------------------------------------------
//
//  Line
//
//--------------------------------------------------

(function(){

  

  function Line() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.num = 720;

    this.setup();

  }

  Line.prototype = {

    setup: function() {

      // cube
      this.geometry = new THREE.Geometry();
      this.material = new THREE.LineBasicMaterial( { linewidth: 0.5, color: 0x000000 } );

      this.setVertex();


      this.Line = gb.Line = new THREE.Line( this.geometry, this.material);




      gb.scene.add(this.Line);

    },

    setVertex: function() {

      var x,y;
      var w = gb.r.W(), h = gb.r.H();
      var radius,radiusOut,radiusIn,radian,step

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        // r = 0.05;

        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        radiusOut = Math.min(w, h) * (c + r);
        radiusIn  = Math.min(w, h) * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.u.radian(i + step);
        x = Math.sin(radian) * radius;
        y = Math.cos(radian) * radius;


        this.geometry.vertices.push(new THREE.Vector3(x, y, 0));

      };      

    },

    update: function() {




    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Line = Line;
  
})();