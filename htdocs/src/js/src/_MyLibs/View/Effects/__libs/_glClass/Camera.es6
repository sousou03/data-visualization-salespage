//--------------------------------------------------
//
//  Cube
//
//-------------------------------

export default class Scene {  

  constructor() {

    this.camera;

    this.fov    = 80;
    this.aspect = gb.r.W() / gb.r.H();
    this.near   = 1;
    this.far    = 10000;

    this.defAspect = 1080/1920;
    this.winAspect = gb.r.H()/gb.r.W();
    this.val = this.winAspect / this.defAspect;
    this.valForParticle = this.defAspect / this.winAspect;

    this.setup();
    this.create();
    // this.createForShader();
    // this.createOrthographic();
    this.setEvents();
    this.onResize();

  }

  setup() {


  }

  create() {

    this.camera = new THREE.PerspectiveCamera( this.fov, this.aspect, this.near, this.far );

    this.layout();

  }

  layout() {

    this.camera.position.z = 20;
    // this.camera.position.z = 800;
    this.camera.position.y = 20;

  }

  createForShader() {

    this.camera = new THREE.Camera();
    this.camera.position.z = 1;

  }

  createOrthographic() {

    var w = gb.renderer.domElement.width;
    var h = gb.renderer.domElement.height;

    this.camera = new THREE.OrthographicCamera( w/-4, w/4, h/4, h/-4, 1, 1000 );
    this.camera.position.z = 1;

  }

  updateControll() {

    // this.camera.position.x += ( - gb.m.cx * 0.01 * this.val - this.camera.position.x ) * 0.08;
    // this.camera.position.y += ( - gb.m.cy * 0.01 * this.val - this.camera.position.y ) * 0.08;
    this.camera.lookAt( gb.scene.scene.position );

  }

  // オブジェクト
  tweenPos(time,target) {

    var tX = target.x || 0;
    var tY = target.y || 0;
    var tZ = target.z || 0;
    var delay = target.delay || 0;
    var e = target.ease || Power2.easeOut;

    var t = time || 1.0;

    TweenMax.to(this.camera.position, t, {
      x: tX,
      y: tY,
      z: tZ,
      delay: delay,
      ease: e,
    });

  }

  update() {


  }

  onResize() {

    this.winAspect = gb.r.H()/gb.r.W();
    this.val = (this.winAspect / this.defAspect) * 0.4;
    this.valForParticle = (this.defAspect / this.winAspect) * 1;

  }

  setEvents() {

    gb.r.add('glCamera',this.onResize.bind(this));

  }

}
