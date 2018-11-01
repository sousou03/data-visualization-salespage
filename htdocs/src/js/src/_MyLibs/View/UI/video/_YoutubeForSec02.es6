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
      width: '100%', // �ץ�`��`�η�
      height: '100%', // �ץ�`��`�θߤ�
      videoId: videoID, // YouTube��ID
      events: {
        'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
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

  onMouseMoveStart() {

    // ��������Ƥ�����I����
    if (!gb.in.sec02Video.isPlaying) return;

    // ������ɥ��I���4/5���¤˥ޥ�����֤äƤ��ä����τI��
    if (gb.in.m.y < gb.in.r.ws.h / 5 * 4 || this.isShow) return;
    this.isShow = true;

    // bgovelry���ʾ
    TweenMax.to($('.videoUI .bgOverlay'), 0.6, {opacity: 1,ease: Power3.easeOut});

    // stop���ʾ
    this.showStop();

    // bar�θߤ���ߤ�
    TweenMax.to($('.videoUI .indicator'), 0.3, {height: 5,ease: Power3.easeOut});

  }

  onMouseMoveEnd(flag=false) {

    if (!flag) {

      // ��������Ƥ�����I����
      if (!gb.in.sec02Video.isPlaying) return;

      if (gb.in.m.y >= gb.in.r.ws.h / 5 * 4 || !this.isShow) return;
      this.isShow = false;

    };

    // bgovelry���ʾ
    TweenMax.to($('.videoUI .bgOverlay'), 0.6, {opacity: 0,ease: Power3.easeOut});

    // stop��Ǳ�ʾ
    this.hideStop();

    // bar�θߤ���ߤ�
    TweenMax.to($('.videoUI .indicator'), 0.3, {height: 1,ease: Power3.easeOut});

  }

  showStop() {

    TweenMax.killTweensOf($('.stopWrap svg circle'));
    TweenMax.killTweensOf($('.stopWrap .circle'));

    // stop UI���ʾ
    $('.stopWrap').show();

    // ����cricle ��
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

    // ������
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

    // ����cricle ��
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

    // ������
    TweenMax.to($('.stopWrap .circle'), 1, {
      opacity: 0,
      ease:Power3.easeOut,
      onComplete: ()=>{

        TweenMax.killTweensOf('.stopWrap .circle');

        // stop UI��Ǳ�ʾ
        // �ٶ� mousestart���Ƥʤ��ä���
        if(gb.in.m.isStart) $('.stopWrap').hide();

      }
    })

  }

  setEvents() {

    // �ޥ����Ӥ�ʼ�ᥤ�٥��
    //   ui�󤭤��ʤ�
    //   stop��������
    gb.in.m.add('onMouseMoveStart',this.onMouseMoveStart.bind(this));
    gb.in.m.add('onMouseMoveEnd',this.onMouseMoveEnd.bind(this));
    
    // �����֤Ȥ᤿�ꡢС����������
    $('.volume').on('click', this.tweenVolume.bind(this));
 
  }

}