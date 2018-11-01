//--------------------------------------------------
//
//  Color
//
//--------------------------------------------------

(function(){

  

  function Color(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Color.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Motion/Shader/Color.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Motion/Shader/Color.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.renderer.domElement.width;
      this.uniforms.r.value.y = gb.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Color = Color;
  
})();