//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scene01 from './Scenes/Scene01/Scene.es6';
// import Scene02 from './Scenes/Scene02/Scene.es6';

export default class Content extends Base {

  constructor($wrap=$('body'), id='cv') {

    super();

    this.isUEv = true; // update
    this.isREv = true; // update

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();

  }

  setup() {

    // canvas size
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isRetina = false;

    // renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(gb.r.w, gb.r.h);
    this.renderer.setClearColor(0x092241, 0.0);
    // this.renderer.setClearColor(0xffffff, 1.0);

    // append
    this.$wrap.prepend(this.renderer.domElement)
    // set style
    $(this.renderer.domElement)
      .css({position: 'absolute',top: 0,left: 0,'z-index': 1,opacity: 1})
      .attr('id', this.id);

    // obj
    this.add();

  }

  add() {

    this.scene01 = new Scene01(this.renderer);
    // this.scene02 = new Scene02(this.renderer);

  }

  update() {

    this.scene01.update();
    // this.scene02.update();

  }

  draw() {

    this.scene01.draw();
    // this.scene02.draw();

  }

  timeline() {


  }

  onResizeCustomSP(dur=0) {

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{

      var w = window.innerWidth;
      var h = window.innerHeight;

      this.scene01.onResize(w, h);

      this.renderer.setSize(w, h);
      if (this.scene01.isEffectComposer) {
        this.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
      }

    }, dur);

  }

  onResizeCustomPC() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    this.scene01.onResize(w, h);

    this.renderer.setSize(w, h);
    if (this.scene01.isEffectComposer) {
      this.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
    }

  }

  setEvents() {

    super.setEvents();

    // if (gb.r.w<=767) $(window).on('orientationchange', this.onResizeCustomSP.bind(this, 200));
    // else $(window).on('resize', this.onResizeCustomPC.bind(this));

    $(window).on('resize', this.onResizeCustomPC.bind(this));

  }

}
