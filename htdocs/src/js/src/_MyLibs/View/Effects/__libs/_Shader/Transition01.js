//--------------------------------------------------
//
//  Transition01
//
//--------------------------------------------------

(function(){

  

  function Transition01(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.5 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      size: { type: "f", value: 0.04 },
      zoom: { type: "f", value: 30 },
      colorSeparation: { type: "f", value: 0.3 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Transition01.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Motion/Shader/Transition01.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Motion/Shader/Transition01.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.renderer.domElement.width;
      this.uniforms.r.value.y = gb.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition01 = Transition01;
  
})();