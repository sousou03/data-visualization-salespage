//--------------------------------------------------
//
//  ZoomBlur
//
//--------------------------------------------------

(function(){

  

  function ZoomBlur(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      tDiffuse: { type: "t", value: null },
      strength:   { type: "f", value: 0 },
      nFrag:   { type: "f", value: 1.0 / 89.0 },
      texture: {type: "t", value: null},
      texture01: {type: "t", value: null},
      opacity: {type: "f", value: 1.0},
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    // this.setResolution();
    this.getShaderSrc();
    
  }

  ZoomBlur.prototype = {

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
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Effects/_Shader/ZoomBlur.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Effects/_Shader/ZoomBlur.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.renderer.domElement.width;
      this.uniforms.r.value.y = gb.renderer.domElement.height;

    },

  }

  // 公開api
  gb.ZoomBlur = ZoomBlur;
  
})();