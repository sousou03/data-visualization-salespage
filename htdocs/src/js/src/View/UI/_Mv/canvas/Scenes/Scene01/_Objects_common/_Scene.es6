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

    var rotateX = gb.in.u.radian(gb.in.up.frame/1);
    var rotateY = gb.in.u.radian(gb.in.up.frame/1);
    var rotateZ = gb.in.u.radian(gb.in.up.frame/1);
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
