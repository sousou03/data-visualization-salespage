//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

export default class Scene {  

  constructor() {

    this.scene;

    this.setup();
    this.create();

  }

  setup() {


  }

  create() {

    this.scene = new THREE.Scene();

  }

  updateRotate() {

    var rotateX = gb.u.radian(gb.up.cnt/1);
    var rotateY = gb.u.radian(gb.up.cnt/1);
    var rotateZ = gb.u.radian(gb.up.cnt/1);
    // var rotateY = 0;
    // var rotateZ = 0;

    this.scene.rotation.set(rotateX, rotateY, rotateZ);

  }

  // オブジェクト
  tweenPos(time,target) {


  }

  update() {


  }


  setEvents() {


  }

}
