//--------------------------------------------------
//
//  ObjectsBgLine
//
//--------------------------------------------------

import ObjectsScoreLine from './ObjectsScoreLine.es6';
import ObjectsIntervalLineB from './ObjectsIntervalLineB.es6';
import ObjectsIntervalLineS from './ObjectsIntervalLineS.es6';
import Motion01 from './Motion01.es6';

export default class ObjectsBgLine extends Motion01 {

  constructor() {

    super();

    this.mesh = null;
    this.geometry = null;
    this.material = null;

    this.numB = 18;
    this.numS = 9 * 18;
    this.numScore = 5;
    this.positions = [];
    this.colors = [];

    this.scoreList = [];
    this.pathList = [];
    this.pathList02 = [];
    this.pathList03 = [];

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

    this.ScoreLine = new THREE.Object3D();
    this.IntervalLineB = new THREE.Object3D();
    this.IntervalLineS = new THREE.Object3D();

    this.container.add(this.ScoreLine);
    this.container.add(this.IntervalLineB);
    this.container.add(this.IntervalLineS);

    gb.scene.scene.add(this.container);

    // for (var i = 0; i < this.numScore; i++) {
    for (var i = 0; i < 5; i++) {

      var path = new ObjectsScoreLine(i);
      this.ScoreLine.add(path.mesh);
      this.scoreList.push(path);

    };
    for (var i = 0; i < this.numB; i++) {

      var path = new ObjectsIntervalLineB();
      this.IntervalLineB.add(path.mesh);
      this.pathList.push(path);

    };
    for (var i = 0; i < this.numS; i++) {

      var path02 = new ObjectsIntervalLineS();
      this.IntervalLineS.add(path02.mesh);
      this.pathList02.push(path02);

      var path03 = new ObjectsIntervalLineS();
      this.IntervalLineS.add(path03.mesh);
      this.pathList03.push(path03);

    };
    
    // this.layoutBgLineScore();
    this.layoutBgLineCircle();
    this.layoutBgLineCircle02();
    this.layoutBgLineCircle03();

  }

  layout() {

    this.layoutCircle();

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
