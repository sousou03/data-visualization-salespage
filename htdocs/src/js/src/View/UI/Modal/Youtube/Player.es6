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

    // yt.player��load����Ƥ��ʤ����Ϥ򿼑]����
    if((typeof YT !== "undefined") && YT && YT.Player){

        gb.player = this.player = new YT.Player(this.id, {
            width: '100%', // �ץ�`��`�η�
            height: '100%', // �ץ�`��`�θߤ�
            videoId: this.videoID, // YouTube��ID
            events: {
              'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
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
    // �����K�ˤ����Ȥ�
    if (status == window.YT.PlayerState.ENDED) {
        console.log('�����K��');
        // �ӻ�����
        e.target.playVideo();
    }
    // // �����ФΤȤ�
    // if (status == window.YT.PlayerState.PLAYING) {
    //     // e.target.pauseVideo();
    // }
    // // ֹͣ�ФΤȤ�
    // if (status == window.YT.PlayerState.PAUSED) {
    //     console.log('ֹͣ��');
    // }
    // // �Хåե�����ФΤȤ�
    // if (status == window.YT.PlayerState.BUFFERING) {
    //     console.log('�Хåե������');
    // }
    // // �^�����g�ߤΤȤ�
    // if (status == window.YT.PlayerState.CUED) {
    //     console.log('�^�����g��');
    // }

  }

  setEvents() {

    // ����
    // $('.detail .playBox').click(()=>{this.player.playVideo();});
    // // һ�rֹͣ
    // $('#pause').click(()=>{this.player.pauseVideo();});
    // // 1��ǰ��
    // $('#prev').click(()=>{
    //     // �F�ڤ������r�gȡ��
    //     var currentTime = this.player.getCurrentTime();
    //     // ���`���Щ`���Ƅ�
    //     this.player.seekTo(currentTime - 60);
    // });
    // // 1���Ȥ�
    // $('#next').click(()=>{
    //     // �F�ڤ������r�gȡ��
    //     var currentTime = this.player.getCurrentTime();
    //     // ���`���Щ`���Ƅ�
    //     this.player.seekTo(currentTime + 60);
    // });
    // // �������å�(+10)
    // $('#volup').click(()=>{
    //     // �F�ڤ�����ȡ��
    //     var currentVol = this.player.getVolume();
    //     this.player.setVolume(currentVol + 10);
    // });
    // // ����������(-10)
    // $('#voldown').click(()=>{
    //     // �F�ڤ�����ȡ��
    //     var currentVol = this.player.getVolume();
    //     this.player.setVolume(currentVol - 10);
    // });
    // // �ߥ�`��
    // $('#mute').click(()=>{
    //     // �ߥ�`�Ȥ���Ƥ��뤫�ɤ���
    //     if(this.player.isMuted()) {
    //         // �ߥ�`�Ȥν��
    //         this.player.unMute();
    //     } else {
    //         // �ߥ�`��
    //         this.player.mute();
    //     }
    // });

  }

}