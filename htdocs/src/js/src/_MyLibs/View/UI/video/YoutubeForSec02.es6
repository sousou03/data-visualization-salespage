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

    this.isMouseShow = false;
    this.cur = 0;

    this.mx = 0;
    this.my = 0;

    this.status = null;
    this.isFirstTouch = false;

    this.isPlay = true;
    this.isClickLock = false;
    this.isClickLock02 = false;

    this.easing = 0.12;

    this.setup(id,videoID);
    this.setEvents();

  }

  setup(id,videoID) {

    if (gb.in.u.isAndroid) {
      
      var param = {
                  autoplay: 0,
                  controls: 1,
                  showinfo: 1,
                  autohide: 1,
                  rel: 0,
                  fs: 1,
                  enablejsapi: 1,
                  iv_load_policy: 3,
                  disablekb:1,
                  modestbranding: 0,
                  start: 2
                }

    } else {

      var param = {
                  autoplay: 0,
                  controls: 0,
                  showinfo: 0,
                  autohide: 1,
                  rel: 0,
                  fs: 1,
                  enablejsapi: 1,
                  iv_load_policy: 3,
                  disablekb:1,
                  modestbranding: 0,
                  start: 2
                }

    }

    if (gb.in.u.isPC) {

      var param = {
                  autoplay: 0,
                  controls: 0,
                  showinfo: 0,
                  autohide: 1,
                  rel: 0,
                  fs: 1,
                  enablejsapi: 1,
                  iv_load_policy: 3,
                  disablekb:1,
                  modestbranding: 0,
                  start: 2
                }

    };

    this.player = new YT.Player(id, {
      width: '100%', // �ץ�`��`�η�
      height: '100%', // �ץ�`��`�θߤ�
      videoId: videoID, // YouTube��ID
      events: {
        'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
        'onStateChange': this.onPlayerStateChange.bind(this)
      },
      playerVars: param
    });

  }

  tweenVolume(e,dur = 0.6,ease = Power2.easeInOut) {

    // �����Ϥ��¤�

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

    // UI���
    if (this.isMute) gb.in.volumeBar.on();
    else gb.in.volumeBar.off();


    // mute�ե饰���
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

  mouse() {

    var gx = gb.in.m.x + 30;
    var gy = gb.in.m.y + -30;

    this.mx += (gx - this.mx) * this.easing;
    this.my += (gy - this.my) * this.easing;

    TweenMax.set($('.ui_close'), {x: this.mx, y: this.my});
    
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
    // �����K�ˤ����Ȥ�
    if (this.status == window.YT.PlayerState.ENDED) {
        console.log('�����K��');
        // �ӻ�����
        if (gb.in.u.isPC) e.target.playVideo();
    }
    // // �����ФΤȤ�
    if (this.status == window.YT.PlayerState.PLAYING) {
        this.isFirstTouch = true;
    }
    // // ֹͣ�ФΤȤ�
    // if (status == window.YT.PlayerState.PAUSED) {
    //     console.log('ֹͣ��');
    // }
    // �Хåե�����ФΤȤ�
    if (this.status == window.YT.PlayerState.BUFFERING) {
        this.isFirstTouch = true;
    }
    // // �^�����g�ߤΤȤ�
    // if (status == window.YT.PlayerState.CUED) {
    //     console.log('�^�����g��');
    // }

  }

  onMouseMoveStart() {

    log(gb.in.m.y < gb.in.r.ws.h / 5 * 4,this.isMouseShow);

    // ��������Ƥ�����I����
    if (!gb.in.sec02Video.isPlaying) return;

    // ������ɥ��I���4/5���¤˥ޥ�����֤äƤ��ä����τI��
    if (gb.in.m.y < gb.in.r.ws.h / 5 * 4 || this.isMouseShow) return;
    this.isMouseShow = true;

    // bgovelry���ʾ
    TweenMax.to($('.videoUI .bgOverlay'), 0.6, {opacity: 1,ease: Power3.easeOut});

    // stop���ʾ
    this.showStop();

    // bar�θߤ���ߤ�
    TweenMax.to($('.videoUI .indicator'), 0.3, {height: 5,ease: Power3.easeOut});

    

    $('.bgOverlay').off('click');
    TweenMax.to($('.ui_close'), 0.5, {opacity: 0,ease: Power3.easeOut});

  }

  onMouseMoveEnd(flag=false) {

    if (!flag) {

      // ��������Ƥ�����I����
      if (!gb.in.sec02Video.isPlaying) return;

      if (gb.in.m.y >= gb.in.r.ws.h / 5 * 4 || !this.isMouseShow) return;
      this.isMouseShow = false;

    };

    // bgovelry���ʾ
    TweenMax.to($('.videoUI .bgOverlay'), 0.6, {opacity: 0,ease: Power3.easeOut});

    // stop��Ǳ�ʾ
    this.hideStop();

    // bar�θߤ���ߤ�
    TweenMax.to($('.videoUI .indicator'), 0.3, {height: 1,ease: Power3.easeOut});

    $('.bgOverlay').on('click', gb.in.sec02Video.onStop.bind(gb.in.sec02Video));
    TweenMax.to($('.ui_close'), 0.5, {opacity: 1,ease: Power3.easeOut});

  }

  showStop() {

    TweenMax.killTweensOf($('.ui_stop'));

    if (!this.isPlay) {

      $('.ui_play').css({opacity: 0,display: 'block'});
      TweenMax
        .to($('.ui_play'), 1, {
          opacity: 1,
          scale: 1,
          ease:Power3.easeOut,
        })

    } else {

      $('.ui_stop').css({opacity: 0,display: 'block'});
      TweenMax
        .to($('.ui_stop'), 1, {
          opacity: 1,
          scale: 1, 
          ease:Power3.easeOut,
        })

    }


  }

  hideStop() {

    TweenMax.killTweensOf($('.ui_stop'));

    if (!this.isPlay) {

      TweenMax.to($('.ui_play'), 0.6, {
        opacity: 0, 
        ease:Power3.easeOut,
        onComplete:()=>{
          $('.ui_play').hide();
        }
      });

    } else {

      TweenMax
        .to($('.ui_stop'), 1, {
          opacity: 0, 
          ease:Power3.easeOut,
          onComplete:()=>{
            $('.ui_stop').hide();
          }
        })

    }

  }

  btnToPlay() {

    if (this.isClickLock) return;
    this.isClickLock = true;

    this.isPlay = false;

    var tl = new TimelineMax();

    // �ܥ����䤨��
    TweenMax
      .to($('.ui_stop'), 0.5, {
        opacity: 0, 
        scale: 1.5, 
        ease:Power3.easeOut,
        onComplete:()=>{
          $('.ui_stop').hide();
          this.isClickLock02 = false;          
        }
      })

    tl
      .set($('.ui_play'), {display: 'block',scale: 1.5})
      .to($('.ui_play'), 0.5, {
        opacity: 1, 
        scale: 1, 
        delay: 0.2,
        ease:Power3.easeOut,
      })
  
    // �ӻ���ֹ���
    this.player.pauseVideo();

  }

  btnToStop() {

    if (this.isClickLock02) return;
    this.isClickLock02 = true;
    
    this.isPlay = true;

    var tl = new TimelineMax();

    // �ܥ����䤨��
    tl
      .set($('.ui_stop'), {display: 'block',scale:1.5})
      .to($('.ui_stop'), 0.5, {
        opacity: 1, 
        scale: 1, 
        ease:Power3.easeOut,
      })

    TweenMax
      .to($('.ui_play'), 0.5, {
        opacity: 0,
        scale: 1.5,
        delay: 0.2,
        ease:Power3.easeOut,
        onComplete:()=>{
          $('.ui_play').hide();
          this.isClickLock = false
        }
      })


    // �ӻ��򥹥��`��
    this.player.playVideo();

  }

  removeEvents() {

    gb.in.m.remove('onMouseMoveStart');
    gb.in.m.remove('onMouseMoveEn');
    
    // �����֤Ȥ᤿�ꡢС����������
    $('.volume').off('click');

    // play�ܥ�����Ф��椨
    $('.ui_stop').off('click');
    $('.ui_play').off('click');

    $('.bgOverlay').off('click');
  
  }

  setEvents() {

    // �ޥ����Ӥ�ʼ�ᥤ�٥��
    //   ui�󤭤��ʤ�
    //   stop��������
    gb.in.m.add('onMouseMoveStart',this.onMouseMoveStart.bind(this));
    gb.in.m.add('onMouseMoveEnd',this.onMouseMoveEnd.bind(this));
    
    // �����֤Ȥ᤿�ꡢС����������
    $('.volume').on('click', this.tweenVolume.bind(this));

    // play�ܥ�����Ф��椨
    $('.ui_stop').on('click', this.btnToPlay.bind(this));
    $('.ui_play').on('click', this.btnToStop.bind(this));
 
  }

}