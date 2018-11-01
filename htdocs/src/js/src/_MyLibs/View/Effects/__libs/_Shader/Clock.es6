//--------------------------------------------------
//
//  Clock
//
//--------------------------------------------------

export default class Clock {

  constructor(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: -1.5 },　// progress
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    this.setEvents();
    
  }

  getShaderSrc() {

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

  }

  getVs(){
    var self = this;
    return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Effects/_Shader/Clock.vs', function(data){
      self.vs = data;
    });
  }

  getFs(){
    var self = this;
    return $.get('./ff15/royal/gallery2018/assets/js/_devjs/src/Display/Effects/_Shader/Clock.fs', function(data){
      self.fs = data;
    });
  }

  setResolution(){
  
    this.uniforms.r.value.x = gb.renderer.domElement.width;
    this.uniforms.r.value.y = gb.renderer.domElement.height;

  }

  onResize() {

    this.uniforms.r.value.x = gb.r.w;
    this.uniforms.r.value.y = gb.r.h;


  }

  setEvents(){
  
    gb.r.add('shaderClock', this.onResize.bind(this))

  }

}