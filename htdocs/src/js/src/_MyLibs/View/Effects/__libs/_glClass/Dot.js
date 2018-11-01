//--------------------------------------------------
//
//  Dot
//
//--------------------------------------------------

(function(){

  function Dot() {

    this.Dot;
    this.geometry = null;
    this.material = null;

    this.num = 720;

    this.setup();

  }

  Dot.prototype = {

    setup: function() {

      this.group = new THREE.Object3D();
      var pos = gb.Line.geometry.vertices;

      for (var i = 0; i < this.num; i++) {

        // dot
        var geometry = new THREE.CircleGeometry( 3, 32 );
        var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var circle = new THREE.Mesh( geometry, material );

        circle.position.x = pos[i].x;
        circle.position.y = pos[i].y;

        this.group.add(circle);

      };

      gb.scene.scene.add(this.group);

    },

    update: function() {




    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Dot = Dot;
  
})();