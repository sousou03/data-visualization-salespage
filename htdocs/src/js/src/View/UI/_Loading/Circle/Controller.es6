//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import ContentCV from './ContentCV.es6';

export default class Controller {

  constructor($wrap=$('body')) {

    this.cb = ()=>{};

    this.$wrap = $wrap;
    this.id = 'cv';

    this.isToggle = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    // ContentCV
    gb.c = this.c = new ContentCV(this.$wrap, this.id);

  }

  setEvents () {


  }

}