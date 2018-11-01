//--------------------------------------------------
//
//  GlContentsTimeline
//
//--------------------------------------------------

// import SomeTimes from '_MyLibs/EventMgr/SometimesMgr.es6';

// 線のカーブが出てくる → showBgLine
//   BgLine

//     点を配置

//     つなぐ

//     回転

//       → 長谷川さん
//       → ice

// noteの線が円形状にくる回る - showLine
//   Line

//   点を配置

//   つなぐ

//   回転

// パーティクルが球体上部回る - showParticle
//   particle

//   点を配置

//   モーション

// ロード終わる → end

// 100%になる → プレイボタン出る - showPlay
//   フラッシュ

// 徐々にパーティクルが(球体上から)円形状になる - waitPlay_particle
// カーブの線が、円形に、かつ五線譜の状態になる - waitPlay_bgLine
// noteの線の動きが落ち着く - waitPlay_line

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

    // gb.texts.play();

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