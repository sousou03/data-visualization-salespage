//--------------------------------------------------
//
//  vimeo
//
//--------------------------------------------------

export default class Youtube {

  constructor(param){

    this.playerList = [];

    this.setEvents();

  }

  createIframe(id,videoID) {

    this.playerList.push(new YTPlayer(id,videoID));

  }

  setEvents() {


  }

}

class YTPlayer {

  constructor(id,videoID) {

    this.player = null;

    this.setEvents();
    this.setup(id,videoID);

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
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          rel: 0,
          enablejsapi: 1,
          iv_load_policy: 3,
          disablekb:1,
          modestbranding: 1,
          start: 2
        }
    });

  }

  onReady () {

    // this.player.playVideo();
    // this.player.pauseVideo();

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