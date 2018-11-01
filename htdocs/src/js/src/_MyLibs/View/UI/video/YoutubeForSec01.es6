//--------------------------------------------------
//
//  YoutubeForSec01
//
//--------------------------------------------------

export default class YoutubeForSec01 {

  constructor(id,videoID,videoList) {

    this.player = null;

    this.isFirst = true;
    this.isSeekLock = false;
    this.isSeekLock02 = false;

    this.setup(id,videoID,videoList);

  }

  setup(id,videoID,videoList) {

    // yt.playerがloadされていない場合を考慮して
    if((typeof YT !== "undefined") && YT && YT.Player){

        this.player = new YT.Player(id, {
            width: '100%', // プレーヤーの幅
            height: '100%', // プレーヤーの高さ
            videoId: videoID, // YouTubeのID
            events: {
              'onReady': this.onReady.bind(this), // プレーヤーの準備ができたときに実行
              'onStateChange': this.onPlayerStateChange.bind(this)
            },
            playerVars: {
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              autohide: 1,
              rel: 0,
              enablejsapi: 1,
              iv_load_policy: 3,
              disablekb:1,
              modestbranding: 1,
              start: 2,
              loop: 1,
              // playlist: videoList
            }
        });

    }else{

        setTimeout(this.setup.bind(this,id,videoID,videoList), 100);

    }


  }

  onReady (e) {

    // 高解像度に
    e.target.setPlaybackQuality('highres');

    // this.player.playVideo();

    this.setEvents();

  }

  onPlayerStateChange (e) {

    var status = e.data;

    // 再生終了したとき 0
    if (status == window.YT.PlayerState.ENDED) {
     
        // 動画再生
        this.player.playVideo();
        
    }

    // // 再生中のとき 1
    if (status == window.YT.PlayerState.PLAYING) {

      if (this.isFirst) {
        this.isFirst = false;
        gb.in.rm.completed++;
      }

      // e.target.pauseVideo();

    }

    // // 停止中のとき 2
    // if (status == window.YT.PlayerState.PAUSED) {
    //     console.log('停止中');
    // }

    // // バッファリング中のとき 3
    // if (status == window.YT.PlayerState.BUFFERING) {
    //     console.log('バッファリング中');
    // }

    // // 頭出し済みのとき 5 5で止まるときあるから、ここでもplay
    if (status == window.YT.PlayerState.CUED) {

        this.playByNYTime();

    }


    // for safari ファイルサイズ重い用
    if (gb.in.u.isSafari() && status == window.YT.PlayerState.BUFFERING) this.player.seekTo(this.player.getCurrentTime() + 0.1);

  }

  playByNYTime() {

    var h = gb.in.time.nyH;

    if (h >= 5 && h < 13) {

      this.player.seekTo(0);

    } else if (h >= 13 && h < 18) {

      this.player.seekTo(36);

    } else {

      this.player.seekTo(66);

    }

    this.player.playVideo();


  }

  onSeek() {

    var now = this.player.getCurrentTime();    

    if (now < 1.0) {
      this.isSeekLock = false;
      this.isSeekLock02 = false;
    };

    if (now > 90 && !this.isSeekLock) {
    this.isSeekLock = true;

      TweenMax.to($('.bgOverlayImg'), 3.0, {
          opacity: 1, 
          ease:Power3.easeInOut,
        })

    }
    
    if (now > 1.0 && !this.isSeekLock02) {
    this.isSeekLock02 = true;

      TweenMax.to($('.bgOverlayImg'), 3.0, {
          opacity: 0, 
          ease:Power3.easeInOut,
        })

    }
    
  }

  setEvents() {

    gb.in.up.add('YoutubeForSec01',this.onSeek.bind(this));

  }

  removeEvents() {

    gb.in.up.remove('YoutubeForSec01');

  }

}