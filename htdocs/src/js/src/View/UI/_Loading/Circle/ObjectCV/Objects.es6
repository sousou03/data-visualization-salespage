// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// object
// import Point from './Basic/Point.es6';
// import Line from './Basic/Line.es6';
// import CurvedLine from './Basic/CurvedLine.es6';
// import Triangle from './Basic/Triangle.es6';
// import Rect from './Basic/Rect.es6';
// import Polygon from './Basic/Polygon.es6';
// import Circle from './Basic/Circle.es6';
// import Img from './Basic/Img.es6';
import Text from './Basic/Text.es6';

// custom
import LoadingCircle from './LoadingCircle.es6';

export default class Objects extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    this.ready();

    // add
    this.add();

    this.loopStart = true;

  }


  ready() {


  }

  add() {

    // this.Point = new Point(this.stage);
    // this.Line = new Line(this.stage);
    // this.CurvedLine = new CurvedLine(this.stage);
    // this.Triangle = new Triangle(this.stage);
    // this.Rect = new Rect(this.stage);
    // this.Polygon = new Polygon(this.stage);
    // this.Circle = new Circle(this.stage);
    // this.Img = new Img(this.stage);
    // this.Text = new Text(this.stage);

    this.LoadingCircle = new LoadingCircle(this.stage);
    

  }

  update() {

  }
　
  draw() {


  }

  show() {


  }

  hide() {

 
  }

}