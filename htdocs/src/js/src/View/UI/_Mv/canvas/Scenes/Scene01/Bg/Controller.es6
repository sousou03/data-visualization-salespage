//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Plane extends Base {

  constructor(scene, camera) {

    super();

    this.scene = scene;
    this.camera = camera;

    this.setup();
    this.setEvents();

    this.timeline();

  }

  setup() {

    this.isUEv = true;
    // this.isREv = true;

    this.ready();

  }

  ready() {

    // this.container = new THREE.Object3D();

    this.w = 10;
    this.h = 10;
    this.scale = 10;

    var geo = new THREE.PlaneGeometry(this.w, this.h, 1, 1);
    var mat = new THREE.MeshBasicMaterial({transparent: true, color: 0x092241});
    // var mat = new THREE.MeshBasicMaterial({side: THREE.DoubleSide ,transparent: true, color: 0xff0000, opacity: 0.3});
    this.mesh = new THREE.Mesh(geo, mat);
    var scale = 1;
    this.mesh.scale.set(scale, scale , 1);

    // add
    this.add();

    this.vec = new THREE.Vector3();

    this.onResize();

    // var color = new THREE.Color(0xffffff);
    // TweenMax.to(this.mesh.material.color, 1.0, {
    //     r: color.r,
    //     g: color.g,
    //     b: color.b,
    //     ease: Expo.easeInOut,
    // })

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);
    if (this.mesh) {

      this.vec.x = 0 - this.camera.position.x;
      this.vec.y = 0 - this.camera.position.y;
      this.vec.z = 0 - this.camera.position.z;
      this.vec.normalize(1);
      this.vec.multiplyScalar(this.camera.position.z + 500);
      this.mesh.position.set(this.camera.position.x + this.vec.x, this.camera.position.y + this.vec.y, this.camera.position.z + this.vec.z);

      this.mesh.quaternion.copy(this.camera.quaternion);

    }

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

    this.ratioW = gb.r.h / gb.r.w;
    this.ratio = this.h / this.w;

    // // size cover
    if (this.ratioW > this.ratio) {

      var scale = gb.r.h / this.h;
      this.mesh.scale.set(scale * this.scale, scale * this.scale, 1);

    } else if ( this.ratioW <= this.ratio) {

      var scale = gb.r.w / this.w * 1.01;
      this.mesh.scale.set(scale * this.scale, scale * this.scale, 1);

    }

  }

}
