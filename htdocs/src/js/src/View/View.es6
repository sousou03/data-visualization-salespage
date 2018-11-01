//--------------------------------------------------
//
//  ViewTop sss
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

import Sns from './Func/Sns.es6';

import Responsive from './UI/Layout/ResponsiveSwitchImg.es6';
import Size from './UI/Layout/Size.es6';
import Clone from './UI/Layout/Clone.es6';
import UIController from './UI/Controller.es6';

export default class ViewCommon extends Base {

  constructor(){

    super();

    this.name = 'ViewCommon';

    this.isUEv = false; // update
    this.isREv = true; // resize
    this.isSEv = false; // scroll
    this.isMEv = false; // mouse

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  onLoad() {

    // new Responsive();

    // gb.f.SPH($('#wrapper, .section01, .slider, #hagaki_modal .inner'));
    // gb.f.SPH($('.section01, .slider, #hagaki_modal .inner'));

    // ------------------------------------------------------------
    //  Util
    // ------------------------------------------------------------
    // new Sns();

    // ------------------------------------------------------------
    //  layout
    // ------------------------------------------------------------
    // new Size();
    // new Clone();
    // this.setPos();

    // ------------------------------------------------------------
    //  ui
    // ------------------------------------------------------------
    // this.uic = new UIController();

    // ------------------------------------------------------------
    // timeline
    // ------------------------------------------------------------
    // var cnt = 0;
    // var len = 4;
    // for (var i = 0; i < len; i++) {
    //   var img = new Image();
    //   img.onload = ()=>{
    //     cnt++;
    //     log(cnt);
    //     if(cnt==len) this.uic.timeline();
    //   }
    //   img.src = 'https://sahara.jp/wp/wp-content/themes/sahara2017/img/aisaretiger/img0'+(i+1)+'.jpg';
    // }
    // this.uic.timeline();
    
  }

  onLoadingEnd() { 

    // ------------------------------------------------------------
     //  Util
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     //  layout
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     //  ui
     // ------------------------------------------------------------
          

     // ------------------------------------------------------------
     // effect
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     // Scene / timeline
     // ------------------------------------------------------------


  }

  update() {


  }

  onResize() {


  }

  onLoadAll() {

    // new Responsive();

  }

  setEvents() {

    super.setEvents();

    $(window).on('load', this.onLoad.bind(this));
    $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
    $(window).on('loadAll', this.onLoadAll.bind(this));

  }

}