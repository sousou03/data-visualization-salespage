//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// canvas
import Canvas from './canvas/Controller.es6';

// dom

export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    // canvas
    this.c = new Canvas($('.canvasWrap'));

  }

  update() {


  }

  timeline() {

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}
