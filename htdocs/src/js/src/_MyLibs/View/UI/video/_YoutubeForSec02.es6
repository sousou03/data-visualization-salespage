//--------------------------------------------------
//
//  YoutubeForSec02
//
//--------------------------------------------------

export default class YoutubeForSec02 {

  constructor(id,videoID) {

    this.player = null;
    this.isFirst = true;

    this.volume = {def:0,val:0};
    this.isMute = false;

    this.isShow = false;
    this.cur = 0;

    this.setup(id,videoID);
    this.setEvents();

  }

  setup(id,videoID) {

    this.player = new YT.Player(id, {
      width: '100%', // プレーヤーの幅
      height: '100%', // プレーヤーの高さ
      videoId: videoID, // YouTubeのID
      events: {
        'onReady': this.onReady.bind(this), // プレーヤーの準備ができたときに実行
        'onStateChange': this.onPlayerStateChange.bind(this)
      },
      playerVars: {
        autoplay: 0,
        controls: 0,
        showinfo: 0,
        autohide: 1,
        rel: 0,
        enablejsapi: 1,
        iv_load_policy: 3,
        disablekb:1,
        modestbranding: 0,
        start: 2
      }
    });

  }

  tweenVolume(e,dur = 0.6,ease = Power2.easeInOut) {

    // 音の上げ下げ

    var val = 0;

    if (this.isMute) val = this.volume.def;
    else val = 0;

    TweenMax.to(this.volume, dur, {
      val:val,
      ease: ease,
      onUpdate: (e)=>{

        var v = e.target.val;
        this.player.setVolume(v);

      },
      onUpdateParams: ["{self}"]
    });

    // UI変更
    if (this.isMute) gb.in.volumeBar.on();
    else gb.in.volumeBar.off();


    // muteフラグ変更
    this.isMute = !this.isMute;

  }

  seek() {

    // if (this.status !== window.YT.PlayerState.PLAYING) return;

    var now = this.player.getCurrentTime();
    var rate = now / this.dur;
    var goal = gb.in.r.ws.w * rate;

    this.cur += (goal - this.cur) * 0.1;

    // TweenMax.set($('.videoUI .indicator'), {width: gb.in.r.ws.w * rate});
    TweenMax.set($('.videoUI .indicator'), {width: this.cur});
    
  }

  onReady () {

    // this.player.playVideo();
    // this.player.pauseVideo();

    gb.in.rm.completed++;

    this.volume.def = this.player.getVolume();
    this.volume.val = this.volume.def;
    this.dur = this.player.getDuration();

  }

  onPlayerStateChange (e) {

    this.status = e.data;
    // 再生終了したとき
    if (this.status == window.YT.PlayerState.ENDED) {
        console.log('再生終了');
        // 動画再生
        e.target.playVideo();
    }
    // // 再生中のとき
    // if (status == window.YT.PlayerState.PLAYING) {
    //     // e.target.pauseVideo();
    // }
    // // 停止中のとき
    // if (status == window.YT.PlayerState.PAUSED) {
    //     console.log('停止中');
    // }
    // // バッファリング中のとき
    // if (status == window.YT.PlayerState.BUFFERING) {
    //     console.log('バッファリング中');
    // }
    // // 頭出し済みのとき
    // if (status == window.YT.PlayerState.CUED) {
    //     console.log('頭出し済み');
    // }

  }

  onMouseMoveStart() {

    // 再生されていたら処理する
    if (!gb.in.sec02Video.isPlaying) return;

    // ウィンドウ領域の4/5以下にマウスを持っていった場合処理
    if (gb.in.m.y < gb.in.r.ws.h / 5 * 4 || this.isShow) return;
    this.isShow = true;

    // bgovelryを表示
    TweenMax.to($('.videoUI .bgOverlay'), 0.6, {opacity: 1,ease: Power3.easeOut});

    // stopを表示
    this.showStop();

    // barの高さを高く
    TweenMax.to($('.videoUI .indicator'), 0.3, {height: 5,ease: Power3.easeOut});

  }

  onMouseMoveEnd(flag=false) {

    if (!flag) {

      // 再生されていたら処理する
      if (!gb.in.sec02Video.isPlaying) return;

      if (gb.in.m.y >= gb.in.r.ws.h / 5 * 4 || !this.isShow) return;
      this.isShow = false;

    };

    // bgovelryを表示
    TweenMax.to($('.videoUI .bgOverlay'), 0.6, {opacity: 0,ease: Power3.easeOut});

    // stopを非表示
    this.hideStop();

    // barの高さを高く
    TweenMax.to($('.videoUI .indicator'), 0.3, {height: 1,ease: Power3.easeOut});

  }

  showStop() {

    TweenMax.killTweensOf($('.stopWrap svg circle'));
    TweenMax.killTweensOf($('.stopWrap .circle'));

    // stop UIを表示
    $('.stopWrap').show();

    // 背景cricle 線
    var tl = new TimelineMax({repeat:-1});

    TweenMax.delayedCall( 0.2, ()=>{

      tl
        .set($('.stopWrap svg circle'), {drawSVG: '0% 0%'})
        .to($('.stopWrap svg circle'), 1, {
          drawSVG: '0% 100%', 
          ease:Power3.easeInOut,
        })
        .to($('.stopWrap svg circle'), 1, {
          drawSVG: '100% 100%', 
          ease:Power3.easeInOut,
        })

    });


    // bar
    TweenMax.to($('.stopWrap .bar').eq(0), 1, {
      height: 20,
      ease:Power3.easeOut,
    })
    TweenMax.to($('.stopWrap .bar').eq(1), 1, {
      height: 20,
      ease:Power3.easeOut,
    })

    // 背景円
    TweenMax.delayedCall( 0.4, ()=>{
      
      var tl = new TimelineMax({repeat:-1});
      tl
        .set($('.stopWrap .circle'), {
          scale: 0, 
          opacity: 1,
        })
        .to($('.stopWrap .circle'), 1, {
          scale: 1.2, 
          opacity: 0,
          ease:Power3.easeOut,
        })

    });

  }

  hideStop() {

    TweenMax.killTweensOf($('.stopWrap svg circle'));
    TweenMax.killTweensOf($('.stopWrap .circle'));

    // 背景cricle 線
    TweenMax
      .to($('.stopWrap svg circle'), 1, {
        drawSVG: '100% 100%', 
        ease:Power3.easeOut,
      })

    // bar
    TweenMax.to($('.stopWrap .bar').eq(0), 1, {
      height: 0,
      ease:Power3.easeOut,
    })
    TweenMax.to($('.stopWrap .bar').eq(1), 1, {
      height: 0,
      ease:Power3.easeOut,
    })

    // 背景円
    TweenMax.to($('.stopWrap .circle'), 1, {
      opacity: 0,
      ease:Power3.easeOut,
      onComplete: ()=>{

        TweenMax.killTweensOf('.stopWrap .circle');

        // stop UIを非表示
        // 再度 mousestartしてなかったら
        if(gb.in.m.isStart) $('.stopWrap').hide();

      }
    })

  }

  setEvents() {

    // マウス動き始めイベント
    //   ui大きくなる
    //   stop出て来る
    gb.in.m.add('onMouseMoveStart',this.onMouseMoveStart.bind(this));
    gb.in.m.add('onMouseMoveEnd',this.onMouseMoveEnd.bind(this));
    
    // 音部分とめたり、小さくしたり
    $('.volume').on('click', this.tweenVolume.bind(this));
 
  }

}