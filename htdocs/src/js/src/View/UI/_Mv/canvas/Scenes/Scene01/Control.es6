//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Scene extends Base {

  constructor(isControl=false, renderer, camera) {

    super();

    this.renderer = renderer;
    this.camera = camera;
    this.isControl = isControl;

    this.setup();
    this.setEvents();

  }

  setup() {

    if (this.isControl) {
      this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
      this.setting();
    }

  }

  setting() {

    this.controls.rotateSpeed = 3.0; //?????????????٤?
    this.controls.zoomSpeed = 1.2; //???`?ह??????٤?
    this.controls.panSpeed = 0.3; //?ѥ󤹤?????٤?

    this.controls.staticMoving = false;
    this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
     
    this.controls.noRotate = false; //true?ǻ??????򲻿ɤˤ???    
    this.controls.noZoom = false; //true?ǥ??`????򲻿ɤˤ???    
    this.controls.noPan = true; //true?ǥѥ?????򲻿ɤˤ???
    this.controls.minDistance = 0; //???Ť??????????
    this.controls.maxDistance = Infinity; //?????????x?????
    // this.controls.maxDistance = 100; //?????????x?????

  }

  setEvents() {

  }

}