//--------------------------------------------------
//
//  Transition02
//
//--------------------------------------------------

(function(){

  

  function Transition02(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.0 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      strength: { type: "f", value: 0.6 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    // this.setResolution();
    this.getShaderSrc();
    
  }

  Transition02.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          // log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Effects/_Shader/Transition02.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Effects/_Shader/Transition02.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.renderer.domElement.width;
      this.uniforms.r.value.y = gb.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition02 = Transition02;
  
})();