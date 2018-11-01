//--------------------------------------------------
//
//  GlContentsTimeline
//
//--------------------------------------------------

import SomeTimes from '_MyLibs/EventMgr/SometimesMgr.es6';

export default class GlContentsTimeline {

  constructor() {

    this.tlMain = new TimelineMax();
    this.setup();
    this.setEvents();

  }

  setup() {

    // タイムラインを止めておく
    this.tlMain.pause();
    
    this.beginning();
    // this.step01();
    // this.step02();
    // this.step03();
    // this.standBy();
    this.sometimes();


    // this.tlMain.play();

  }

  beginning() {

    gb.texts.play();

  }

  step01() {


  }

  step02() {



  }

  step03() {



  }

  standBy() {


  }

  // 時々
  sometimes() {



  }

  onResizse() {

  }

  onClick() {

    // gb.texts.play();

  }


  setEvents() {

    gb.r.add('VoiceOnTestDriveTimeline', this.onResizse.bind(this));
    $(window).on('click', this.onClick);

  }


}