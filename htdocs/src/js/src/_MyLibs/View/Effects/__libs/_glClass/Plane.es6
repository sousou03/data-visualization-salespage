//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

export default class Plane {

  constructor() {

    this.geometry = null;
    this.material = null;

    this.video = null;
    this.plane = null;

    this.defWW = 1920;
    this.defHH = 1080;
    this.defW = 305;
    this.rate = 0;
    this.rateW = 0;

    this.lb = null; //layout background

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  create(cb) {

    var textures = this.textures  = gb.loadMgr.textures;

    var w = textures[0].image.width / textures[0].image.width;
    var h = textures[0].image.height / textures[0].image.width;

    // plane01

    var geometry = new THREE.PlaneGeometry(w, h, 1, 1);
    var material = new THREE.ShaderMaterial( {
                          uniforms: gb.loadMgr.shaders[0].uniforms,
                          vertexShader: gb.loadMgr.shaders[0].vs,
                          fragmentShader: gb.loadMgr.shaders[0].fs,
                          transparent: true,
                        });

    this.plane = new THREE.Mesh(geometry, material);
    this.plane.scale.x = this.plane.scale.y = 2000.0;

    // plane02

    var w = textures[1].image.width / textures[1].image.width;
    var h = textures[1].image.height / textures[1].image.width;

    var geometry = new THREE.PlaneGeometry(w, h, 1, 1);
    var material = new THREE.ShaderMaterial( {
                          uniforms: gb.loadMgr.shaders[1].uniforms,
                          vertexShader: gb.loadMgr.shaders[1].vs,
                          fragmentShader: gb.loadMgr.shaders[1].fs,
                          transparent: true,
                        });

    this.plane02 = new THREE.Mesh(geometry, material);
    this.plane02.scale.x = this.plane02.scale.y = 600.0;

    gb.loadMgr.shaders[0].uniforms.opacity.value = 1;
    gb.loadMgr.shaders[1].uniforms.opacity.value = 0;

    this.plane02.position.z = -1;

    gb.scene.scene.add( this.plane );
    gb.scene.scene.add( this.plane02 );

    // this.onResize();
    // this.setEvents();

    // テクスチャをuniform変数に追加
    gb.loadMgr.shaders[0].uniforms.texture.value = textures[0];
    gb.loadMgr.shaders[0].uniforms.texture01.value = textures[1];

    gb.loadMgr.shaders[1].uniforms.texture.value = textures[1];
    gb.loadMgr.shaders[1].uniforms.texture01.value = textures[1];

    cb();

  }

  update() {




  }

  onResize() {


  }

  setEvents() {

    // gb.rm.total += 1; // load数のtotalを計算
    $(window).on('onSection04ProductImg', this.create.bind(this,()=>{
      //gb.rm.completed++;
    }));

  }

}