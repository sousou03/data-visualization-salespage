//--------------------------------------------------
//
//  Effect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Effect extends Base {

  constructor(isEffect=false, isGUI=false, renderer, scene, camera) {

    super();

    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.isEffect = isEffect;
    this.isGUI = isGUI;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isControl = true;

    if (this.isEffect) this.EffectCompose();

  }
  
  EffectCompose() {

    // effect composer
    this.composer = new THREE.EffectComposer(this.renderer);
    // add render pass
    this.renderPass = new THREE.RenderPass(this.scene, this.camera)
    this.composer.addPass(this.renderPass);
    this.copyPass = new THREE.ShaderPass(THREE.CopyShader); // last pass

    // ------------------------------------------------------------
    //  各Pass
    // ------------------------------------------------------------
    this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);


    // ------------------------------------------------------------
    //  各Pass param
    // ------------------------------------------------------------
    // 初期値設定
    this.p = {

          // RGBShift
          RGBShiftPass_show: true,
          RGBShiftPass_angle: 0.0,
          RGBShiftPass_amount: 0.013,
          RGBShiftPass_brightness: 3.0,

        };
    this.onParamsChange()
    this.onTogglePass();

    if (this.isGUI) this.GUISetting();
    
  }

  onParamsChange() {
    
    this.RGBShiftPass.uniforms.angle.value = this.p.RGBShiftPass_angle;
    this.RGBShiftPass.uniforms.amount.value = this.p.RGBShiftPass_amount;
    this.RGBShiftPass.uniforms.brightness.value = this.p.RGBShiftPass_brightness;

  }

  onTogglePass(){
    //Add Shader Passes to Composer
    //order is important 
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(gb.r.w * window.devicePixelRatio, gb.r.h * window.devicePixelRatio);
    this.composer.addPass(this.renderPass);

    // ------------ add pass start ------------ 
    if (this.p.RGBShiftPass_show) this.composer.addPass(this.RGBShiftPass);



    // ------------ add pass end ------------ 
    this.composer.addPass(this.copyPass);
    this.copyPass.renderToScreen = true;

  }

  GUISetting() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    var f2 = gui.addFolder('RGBShift');
    f2.add(this.p, 'RGBShiftPass_show').onChange(this.onTogglePass.bind(this));
    f2.add(this.p, 'RGBShiftPass_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f2.add(this.p, 'RGBShiftPass_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

  }

  setEvents() {

  }

}