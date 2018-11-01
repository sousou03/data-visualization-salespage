//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import PageTransition from './PageTransition.es6';

export default class Controller {

  constructor($wrap) {

    this.cb = ()=>{};

    this.$wrap = $wrap;
    this.setup($wrap);
    this.setEvents();

  }

  setup($wrap) {

    this.effect = new PageTransition($wrap);
    // サイズ調整
    this.effect.onResize();

    this.effect.cb = this.cb;

    // this.$wrap.hide();

    // 最初からcanvasの黒を見せる
    this.effect.isStart = true;
    this.effect.setParamInEf(); // 最初から黒幕設定のためのパラム

    // canvasの黒を見せたら、loadingの黒は無くす
    TweenMax.to($('#loading'), 0.3, {
      backgroundColor: 'rgba(0,0,0,0)',
      ease: Power2.easeOut,
    })

  }

  play() {

    // show

    // timeline start

    // loop start
    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.openingEffect();

  }

  pause() {

    // timeline pause

    // loop pause

    this.$wrap.hide();
    this.effect.isStart = false;
    // this.effect.timeline();

  }

  end() {

    // hide

    // timeline pause

    // loop pause
    // this.$wrap.show();
    // this.effect.isStart = true;
    // this.effect.openingEffect();

  }

  setEvents () {


  }

}