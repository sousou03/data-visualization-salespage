//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

export default class Cube {

  constructor() {

    this.setup();
    this.create();
    this.setEvents();

  }

  setup() {


  }

  create() {

    this.geometry = new THREE.BoxGeometry(12,12,12);
    this.material = new THREE.MeshPhongMaterial( { color: '#ffffff' } );
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.position.set(0, 0, 0);

    gb.scene.scene.add(this.cube);

    this.layout();

  }

  layout() {

    // this.cube.position.set(0,0,2000);

  }

  update() {

    this.cube.rotation.set(gb.up.cnt/100,gb.up.cnt/50,0);

  }

  draw() {


  }

  loop() {

    this.update();
    this.draw();

  }

  setEvents() {

    // gb.glLoop.add('cube', this.loop.bind(this));

  }

}