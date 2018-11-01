//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import RenderBase from './RenderBase.es6';

import Youtube from './Youtube/Controller.es6';

export default class Render extends RenderBase {

  constructor($target, parent) {

    super();

    this.$target = $target;

    // this.setup();
    this.setEvents();

  }

  setup() {

    gb.rm.setup();
    new Youtube('video', 'rGwOwAHEGUo');

  }

  setEvents() {


  }
  
}