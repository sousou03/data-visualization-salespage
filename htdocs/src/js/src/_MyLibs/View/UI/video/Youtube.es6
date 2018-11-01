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
        width: '100%', // �ץ�`��`�η�
        height: '100%', // �ץ�`��`�θߤ�
        videoId: videoID, // YouTube��ID
        events: {
          'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
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