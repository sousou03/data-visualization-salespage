//--------------------------------------------------
//
//  Player
//
//--------------------------------------------------

import Resize from './Resize.es6';

export default class Player {

  constructor(id, videoID) {

    this.player = null;

    this.id = id;
    this.videoID = videoID;

    this.setup();
    this.setEvents();

  }

  setup() {

    // yt.playerがloadされていない場合を考慮して
    if((typeof YT !== "undefined") && YT && YT.Player){

        gb.player = this.player = new YT.Player(this.id, {
            width: '100%', // プレーヤーの幅
            height: '100%', // プレーヤーの高さ
            videoId: this.videoID, // YouTubeのID
            events: {
              'onReady': this.onReady.bind(this), // プレーヤーの準備ができたときに実行
              'onStateChange': this.onPlayerStateChange.bind(this)
            },
            playerVars: {
              autoplay: 0,
              controls: 1,
              showinfo: 0,
              autohide: 1,
              rel: 0,
              enablejsapi: 1,
              iv_load_policy: 3,
              disablekb:1,
              modestbranding: 1,
              start: 0
            }
        });

    }else{

      setTimeout(this.setup.bind(this), 100);

    }

  }

  onReady () {

    // this.player.playVideo();
    // this.player.pauseVideo();
    new Resize();

  }

  onPlayerStateChange (e) {

    var status = e.data;
    // 再生終了したとき
    if (status == window.YT.PlayerState.ENDED) {
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

  setEvents() {

    // 再生
    // $('.detail .playBox').click(()=>{this.player.playVideo();});
    // // 一時停止
    // $('#pause').click(()=>{this.player.pauseVideo();});
    // // 1分前へ
    // $('#prev').click(()=>{
    //     // 現在の再生時間取得
    //     var currentTime = this.player.getCurrentTime();
    //     // シークバーの移動
    //     this.player.seekTo(currentTime - 60);
    // });
    // // 1分先へ
    // $('#next').click(()=>{
    //     // 現在の再生時間取得
    //     var currentTime = this.player.getCurrentTime();
    //     // シークバーの移動
    //     this.player.seekTo(currentTime + 60);
    // });
    // // 音量アップ(+10)
    // $('#volup').click(()=>{
    //     // 現在の音量取得
    //     var currentVol = this.player.getVolume();
    //     this.player.setVolume(currentVol + 10);
    // });
    // // 音量ダウン(-10)
    // $('#voldown').click(()=>{
    //     // 現在の音量取得
    //     var currentVol = this.player.getVolume();
    //     this.player.setVolume(currentVol - 10);
    // });
    // // ミュート
    // $('#mute').click(()=>{
    //     // ミュートされているかどうか
    //     if(this.player.isMuted()) {
    //         // ミュートの解除
    //         this.player.unMute();
    //     } else {
    //         // ミュート
    //         this.player.mute();
    //     }
    // });

  }

}