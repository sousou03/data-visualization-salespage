//--------------------------------------------------
//
//  ObjectsIntervalLineB
//
//--------------------------------------------------

import Particle from './Particle/Particle.es6';
import MotionPath01 from './MotionPath01.es6';

export default class ObjectsIntervalLineB extends MotionPath01 {

  constructor() {

    super();

    this.mesh = null;
    this.geometry = null;
    this.material = null;

    this.num = 2;
    this.positions = [];
    this.colors = [];

    this.pList = [];

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

    this.matParam = {
      vertexColors: THREE.VertexColors,
      linewidth: 1,
      transparent: true,
      blending: THREE.AdditiveBlending,
      // sizeAttenuation: false,
      depthTest: false
    }

    this.container = new THREE.Object3D();
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.LineBasicMaterial(this.matParam);

    // オブジェクト生成
    this.mesh = new THREE.Line( this.geometry, this.material);
    // gb.scene.scene.add(this.mesh);

    // gemetryの頂点セット
    this.setVertex();
    this.layout();

  }

  setVertex() {

    this.positions = new Float32Array( this.num * 3 );
    this.colors = new Float32Array( this.num * 3 );

    for (var i = 0; i < this.num; i++) {

      var p = new Particle();
      this.pList.push(p);

      // positions
      this.positions[ i * 3 ] = this.pList[i].pos.x;
      this.positions[ i * 3 + 1 ] = this.pList[i].pos.y;
      this.positions[ i * 3 + 2 ] = this.pList[i].pos.z;

      // colors
      var h = Math.floor(191 + Math.random()*20);
      var s = Math.floor(40 + Math.random()*20);
      // var b = Math.floor(70 + Math.random()*20);
      var b = Math.floor(100);
      var color = new THREE.Color('hsl('+h+','+s+'%,'+b+'%)');

      this.pList[i].c = color;

      this.colors[ i * 3 ] = this.pList[i].c.r;
      this.colors[ i * 3 + 1 ] = this.pList[i].c.g;
      this.colors[ i * 3 + 2 ] = this.pList[i].c.b;

    };

    this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
    this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

  }

  layout() {

    this.layoutLine();

  }

  update() {


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
