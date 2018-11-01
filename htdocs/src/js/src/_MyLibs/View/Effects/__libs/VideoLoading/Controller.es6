//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Contents from './GlContents.es6';
import Percent from './Percent.es6';

export default class Controller {

  constructor() {

    this.cb = ()=>{};

    this.$wrap = $('.section.loading');
    this.setup(this.$wrap);
    this.setEvents();

  }

  setup($wrap) {

    this.c = new Contents($wrap);
    this.p = new Percent();
    // サイズ調整
    this.c.onResize();
    this.c.cb = this.cb;

    // this.play();

    // this.$wrap.hide();

  }

  play() {

    // show
    TweenMax.to(this.$wrap.find('#loadingCV'), 2.5, {opacity: 1});
    TweenMax.to(this.$wrap.find('#percentCV'), 2.5, {opacity: 1});

    // timeline start
    // loop start
    this.c.play();
    this.p.play();

  }

  pause() {


  }

  end(cb) {

    // hide
    TweenMax.to($('.section.loading canvas'), 1, {
      opacity: 0,
      onComplete: ()=>{

        // timeline pause
        // loop pause
        this.c.pause();
        this.p.pause();
        cb();
        gb.video_main.play();
        gb.video_main.pause();
        
      }
    });

  }

  setEvents () {


  }

}