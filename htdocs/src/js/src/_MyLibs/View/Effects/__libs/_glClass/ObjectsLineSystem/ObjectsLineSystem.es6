//--------------------------------------------------
//
//  ObjectsLineSystem
//
//--------------------------------------------------

import ObjectsPath from './ObjectsPath.es6';
import Motion01 from './Motion01.es6';

export default class ObjectsLineSystem extends Motion01 {

  constructor() {

    super();

    this.mesh = null;
    this.geometry = null;
    this.material = null;

    this.num = 40;
    this.positions = [];
    this.colors = [];

    this.pathList = [];

    this.setup();
    this.create();
    this.setEvents();

  }

  setup() {

    this.load();

  }

  load() {


  }

  create() {

    this.container = new THREE.Object3D();
    gb.scene.scene.add(this.container);

    for (var i = 0; i < this.num; i++) {

      var path = new ObjectsPath();
      this.container.add(path.mesh);
      this.pathList.push(path);

      // path.updateRotate();

    };
    
    // this.layout();

  }

  layout() {

    this.layoutCircle();

  }

  update() {

    // for (var i = 0; i < this.num; i++) {

    //   this.pathList[i].updateRotate();

    // };


  }

  draw() {


  }

  loop() {

    this.update();
    this.draw();

  }

  onResize() {


  }

  setEvents() {

    // gb.r.add(this.onResize.bind(this));

  }

}
