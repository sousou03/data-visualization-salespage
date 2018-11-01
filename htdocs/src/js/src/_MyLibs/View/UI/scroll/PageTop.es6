//--------------------------------------------------
//
//  PageTop
//
//--------------------------------------------------

export default class PageTop {

  constructor() {

    this.setEvents();
    this.ready();

  }

  ready() {


  }

  pagetop() {

    // スクロール
    TweenMax.to($('body,html'), 0.8, {
      scrollTop: 0,
      ease: Power3.easeOut,
      onComplete: ()=>{


      }
    });

  }

  setEvents () {

    var self = this;

    $('.toTop').on('click',this.pagetop.bind(this));

  }

}