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

    // yt.playerがloadされていない��栽を深�]して
    if((typeof YT !== "undefined") && YT && YT.Player){

        gb.player = this.player = new YT.Player(this.id, {
            width: '100%', // プレ�`ヤ�`の嫌
            height: '100%', // プレ�`ヤ�`の互さ
            videoId: this.videoID, // YouTubeのID
            events: {
              'onReady': this.onReady.bind(this), // プレ�`ヤ�`の���笋�できたときに�g佩
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
    // 壅伏�K阻したとき
    if (status == window.YT.PlayerState.ENDED) {
        console.log('壅伏�K阻');
        // �啝�壅伏
        e.target.playVideo();
    }
    // // 壅伏嶄のとき
    // if (status == window.YT.PlayerState.PLAYING) {
    //     // e.target.pauseVideo();
    // }
    // // 唯峭嶄のとき
    // if (status == window.YT.PlayerState.PAUSED) {
    //     console.log('唯峭嶄');
    // }
    // // バッファリング嶄のとき
    // if (status == window.YT.PlayerState.BUFFERING) {
    //     console.log('バッファリング嶄');
    // }
    // // �^竃し�gみのとき
    // if (status == window.YT.PlayerState.CUED) {
    //     console.log('�^竃し�gみ');
    // }

  }

  setEvents() {

    // 壅伏
    // $('.detail .playBox').click(()=>{this.player.playVideo();});
    // // 匯�r唯峭
    // $('#pause').click(()=>{this.player.pauseVideo();});
    // // 1蛍念へ
    // $('#prev').click(()=>{
    //     // �F壓の壅伏�r�g函誼
    //     var currentTime = this.player.getCurrentTime();
    //     // シ�`クバ�`の卞��
    //     this.player.seekTo(currentTime - 60);
    // });
    // // 1蛍枠へ
    // $('#next').click(()=>{
    //     // �F壓の壅伏�r�g函誼
    //     var currentTime = this.player.getCurrentTime();
    //     // シ�`クバ�`の卞��
    //     this.player.seekTo(currentTime + 60);
    // });
    // // 咄楚アップ(+10)
    // $('#volup').click(()=>{
    //     // �F壓の咄楚函誼
    //     var currentVol = this.player.getVolume();
    //     this.player.setVolume(currentVol + 10);
    // });
    // // 咄楚ダウン(-10)
    // $('#voldown').click(()=>{
    //     // �F壓の咄楚函誼
    //     var currentVol = this.player.getVolume();
    //     this.player.setVolume(currentVol - 10);
    // });
    // // ミュ�`ト
    // $('#mute').click(()=>{
    //     // ミュ�`トされているかどうか
    //     if(this.player.isMuted()) {
    //         // ミュ�`トの盾茅
    //         this.player.unMute();
    //     } else {
    //         // ミュ�`ト
    //         this.player.mute();
    //     }
    // });

  }

}