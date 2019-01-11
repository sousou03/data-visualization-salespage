//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import _Scene from './_Objects_common/_Scene.es6';
import _Camera from './_Objects_common/_Camera.es6';
import _Light from './_Objects_common/_Light.es6';
import Objects from './Objects.es6';

import Effect from './Effect.es6';
import Control from './Control.es6';

export default class Scene extends Base {

  constructor(renderer) {

    super();

    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isEffect = false;
    this.isGUI = false;
    this.isControl = false;

    // obj???
    this.add();

  }

  add() {

    // scene
    this.scene = new _Scene();
    this.scene = this.scene.scene;
    // this.scene.fog = new THREE.FogExp2( 0x000000, 0.0004 );

    // camera
    this.cameraC = gb.camera = new _Camera(this.scene);
    this.camera = gb.camera.camera;

    // light
    this.light = new _Light(this.scene);

    // objects
    gb.obj = this.obj = new Objects(this.scene, this.camera, this.renderer);

    // effect
    this.e = new Effect(this.isEffect, this.isGUI, this.renderer, this.scene, this.camera);

    // control
    this.c = new Control(this.isControl, this.renderer, this.camera);

  }

  update() {

    this.cameraC.update();

    this.obj.updateObj();

  }

  draw() {

    if (this.e.isEffect) {

      this.e.composer.render();

    } else {

      this.renderer.render(this.scene, this.camera);

    }

  }

  show() {

  }

  hide() {

  }

  state() {

  }

  onResize(w, h) {

    gb.camera.onResize();

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

  }

  setEvents() {

  }

}
