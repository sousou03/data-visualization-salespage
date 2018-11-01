//--------------------------------------------------
//
//  GlContents
//
//--------------------------------------------------
import Loop from './GlContentsLoop.es6';
import Timeline from './GlContentsTimeline.es6';
import Param from '../../Param.es6';
import Profiler from '../../Profiler.es6';

import Scene from '../../_glClass/Scene.es6';
import Camera from '../../_glClass/Camera.es6';
import Texts from '../../_glClass/Texts.es6';

export default class GlContents {

  constructor($wrap = $('body')) {

    this.renderer;
    this.camera;
    this.scene;
    this.light;

    this.state = 'initial';
    this.adjustParam = true;
    this.stateLineRotate = false;
    this.sometimesState = 'initial';

    this.isControl = false;
    this.controls;

    this.$wrap = $wrap;
    this.cb = ()=>{};

    this.setup();
    this.create($wrap);
    this.setEvents();
    // loop
    this.loop = new Loop();
    // timeline
    this.timeline = new Timeline();

  }

  setup() {


  }

  create($wrap) {

    // render setting
    gb.renderer = this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setSize( gb.r.W(), gb.r.H() );
    // this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setClearColor(0xffffff, 1.0);
    $wrap.append(this.renderer.domElement)
    // document.body.appendChild(  );
    $(this.renderer.domElement).css({position: 'absolute',top: 0,left: 0,'z-index': 1,});

    // オブジェクト追加
    this.addObjects();

    // ui追加(コントローラー、profilerなど)
    // this.addUI();

  }

  addObjects() {

    // scene
    gb.scene = new Scene();
    this.scene = gb.scene.scene;

    // camera
    gb.camera = new Camera();
    this.camera = gb.camera.camera;

    // light
    this.light = new THREE.DirectionalLight( 0xffffff, 1 );
    this.light.position.z = 100;
    this.light.position.y = 100;
    this.scene.add(this.light);    

    // 3dオブジェクト
    gb.texts = this.texts = new Texts();

    // log(gb.daeList[0]);
    // gb.scene.scene.add(gb.daeList[0]);

  }

  addUI() {

    // controls
    gb.controls = this.controls = new THREE.TrackballControls(this.camera);
    this.controls.zoomSpeed = 0.8;
    this.controls.rotateSpeed = 3;

    // profiler設定
    gb.profiler = new Profiler();
    // paramrter調整
    gb.param = new Param();

  }

  onResize() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

  }

  play() {

    this.loop.start();
    this.timeline.tlMain.play();
    
  }

  pause() {

    this.loop.pause();
    this.timeline.tlMain.pause();

  }

  setEvents() {

    gb.r.add('glContents',this.onResize.bind(this));

  }

}