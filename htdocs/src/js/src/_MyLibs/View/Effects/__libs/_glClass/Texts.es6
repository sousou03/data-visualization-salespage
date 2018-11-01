//--------------------------------------------------
//
//  Texts
//
//--------------------------------------------------

import Text from './Text.es6';

export default class Texts {

  constructor() {

    this.num = 100;

    this.textList = [];

    this.loopStart = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    var j = 0;

    for (var i = 0; i < this.num; i++) {

      j = i % 10;
 
      for (var k = 0; k < 3; k++) {

        var tag = gb.loadMgr.data[j].tagword[k];
        
        var t = new Text(tag);
        this.textList.push(t);

      }

    };

  }

  update() {

    for (var i = 0; i < this.num; i++) {
      
      for (var k = 0; k < 3; k++) {

        var l = i * 3 + k;

        var t = this.textList[l];
        t.motionUp();  

      }

    };

  }

  draw() {


  }

  loop() {

    if (this.loopStart) {

      this.update();
      this.draw();

    };

  }

  play() {

    this.loopStart = true;

  }

  pause(){

    this.loopStart = false;

  }

  setEvents() {


    gb.up.add('Texts', this.loop.bind(this));

  }


}