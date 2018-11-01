//--------------------------------------------------
//
//  HeaderColor
//
//--------------------------------------------------

export default class HeaderColor {

  constructor(param){

    this.$logo = $('#header .logo svg path');
    this.$subTit = $('#header .subTit svg').eq(0).find('path');
    this.$menu = $('#header .menuBtn01 span');

    this.$nav = $('#nav .link--hover');
    this.$navBar = $('#nav .bar');

    this.isILock = false;
    this.isHLock = false;

    this.adjustH = 50;

    this.setup();
    this.run();
    this.setEvents();

  }

  setup() {


  }

  run() {

    // インタビュー詳細ページか、
    if (gb.pjax.id == 'interview_detail') {

    // スマホのとき処理を実行しない
    if (gb.u.isResSP) return;

      var targetSt = 800 * gb.Layout.size.scale.rate - this.adjustH;

      if (gb.s.st > targetSt && !this.isHLock) {
        this.isHLock = true;

        // 黒に
        this.setColor();

      } else if (gb.s.st <= targetSt && this.isHLock){
        this.isHLock = false;

        // 白に
        this.removeColor();

      }

    }

    // historyの場合下記処理を実行する
    if (gb.pjax.id == 'history') {

      if (gb.u.isResPC) {
        var targetSt = gb.r.h - this.adjustH;
      } else {
        var targetSt = $('.block01').height() * gb.Layout.size.scale.rate - this.adjustH/2;
      }

      if (gb.s.st > targetSt && !this.isHLock) {
        this.isHLock = true;

        // 黒に
        this.setColor();

      } else if (gb.s.st <= targetSt && this.isHLock){
        this.isHLock = false;

        // 白に
        this.removeColor();

      }

    }

  }

  setColor() {

    // logo
    TweenMax.to(this.$logo, 0.4, {
      fill: '#000',
      ease: Power4.easeOut
    });

    // subTit
    TweenMax.to(this.$subTit, 0.4, {
      fill: '#000',
      ease: Power4.easeOut
    });

    // menu
    TweenMax.to(this.$menu, 0.4, {
      backgroundColor: '#000',
      ease: Power4.easeOut
    });

    // nav
    TweenMax.to(this.$nav, 0.4, {
      color: '#000',
      ease: Power4.easeOut
    });

    // navBar
    TweenMax.to(this.$navBar, 0.4, {
      backgroundColor: '#000',
      ease: Power4.easeOut
    });
    
  }

  removeColor() {

    // logo
    TweenMax.to(this.$logo, 0.4, {
      fill: '#fff',
      ease: Power4.easeOut
    });

    // subTit
    TweenMax.to(this.$subTit, 0.4, {
      fill: '#fff',
      ease: Power4.easeOut
    });

    // menu
    TweenMax.to(this.$menu, 0.4, {
      backgroundColor: '#fff',
      ease: Power4.easeOut
    });

    // nav
    TweenMax.to(this.$nav, 0.4, {
      color: '#fff',
      ease: Power4.easeOut
    });

    // navBar
    TweenMax.to(this.$navBar, 0.4, {
      backgroundColor: '#fff',
      ease: Power4.easeOut
    });


  }

  setEvents() {

    gb.s.add('HeaderColor', this.run.bind(this));

  }

  removeEvents() {

    this.removeColor();
    gb.s.remove('HeaderColor');

  }

}