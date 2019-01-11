//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// ui
import Mv from './_Mv/Controller.es6';


export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    gb.mv = new Mv();
    gb.camera.timeline();

    // new Op();

  }

  setEvents() {


  }

}
