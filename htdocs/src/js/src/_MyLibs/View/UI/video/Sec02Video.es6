//--------------------------------------------------
//
//  Sec02Video
//
//--------------------------------------------------

import YoutubeForSec02 from './YoutubeForSec02.es6';
import StaffCredit from './_compornents/StaffCredit.es6';
import MenuBtnClose from './_compornents/MenuBtnClose.es6';
import VolumeBar from './_parts/VolumeBar.es6';
import Modal from './Sec02VideoSPModal.es6';

export default class Sec02Video {

  constructor(id,videoID) {


    this.isPlaying = false;
    this.defZindex = 0;

    this.isResize = (gb.in.u.isResPC)? true: false;


    this.setup(id,videoID);
    this.setEvents();

  }

  setup() {

    // video UI���󥹥��󥹻�
    // pc�ΤȤ��ȡ�sp�ΤȤ������������䤨��
    if (gb.in.u.isPC) {
      this.video = new YoutubeForSec02('sec02Video', gb.in.conf.youtubeID02);  
    } else {
      this.video = new YoutubeForSec02('sec02VideoForSP', gb.in.conf.youtubeID02);  
      new Modal($('.play'),$('.sec02VideoForSPWrap'),$('.sec02VideoForSPWrap'));
    }
    

    // staff creditUI ���󥹥��󥹻�
    this.staffCredit = new StaffCredit($('.videoUI .credit'),$('.videoUI .menuBtn'),$('.videoUI .creditWrap'));
    this.menuBtn = new MenuBtnClose($('.videoUI .menuBtn'),'02');

    gb.in.volumeBar = new VolumeBar();

  }

  onPlay() {

    // ���ޥۤ��ä���I���ʤ�
    if (gb.in.u.isSP) return;

    this.isPlaying = true;
    gb.in.m.endTime = 2000;
    gb.in.Sec02Bg.pause();

    // UI wrap���ʾ
    $('.videoUI').show();
    // myminute ����
    var tl = new TimelineMax();
    tl
      .set($('#header .subTit'), {display: 'block'})
      .to($('#header .subTit'), 0.5, {opacity: 1})

    // sideR scroll������
    $('#sideR .next').hide();

    // sideL sns���¤�
    this.defZindex = $('#sideL').css('z-index');
    $('#sideL').css('z-index', $('#wrapper').css('z-index'));

    // staff credit��ʾ


    // frame��Ǳ�ʾ
    $('.frame').hide();


    // ����UI��ʾ
    gb.in.volumeBar.on();

    // youtube iframe�α�ʾ
    TweenMax.set($('#sec02VideoWrap'), {width: '100%',opacity: 0});
    TweenMax.to($('#sec02VideoWrap'), 0.5, {opacity: 1,ease:Power3.easeOut});
    // ����
    this.video.player.playVideo();

    // ���`���Щ` �����`��
    gb.in.up.add('Sec02Video',this.video.seek.bind(this.video));
    // close �ޥ��������`��
    gb.in.up.add('Sec02VideoMouse',this.video.mouse.bind(this.video));

    // �ޥ�����λ��
    this.video.isMouseShow = (gb.in.m.y < gb.in.r.ws.h / 5 * 4)? true: false;

  }

  onStop() {

    if (!this.isPlaying) return;
    this.isPlaying = false;

    // UI wrap���ʾ
    $('.videoUI').hide();

    // myminute ����
    var tl = new TimelineMax();
    tl.to($('#header .subTit'),0.5,{
      opacity:0,
      onComplete:()=>{
        $('#header .subTit').hide();    
      }
    })
    
    // sideR scroll������
    $('#sideR .next').show();

    $('#sideL').css('z-index', this.defZindex);

    $('.frame').show();

    gb.in.up.remove('Sec02Video');
    gb.in.up.remove('Sec02VideoMouse');

    this.video.player.pauseVideo();

    gb.in.m.endTime = 10;

    // ����UI��ʾ
    gb.in.volumeBar.off();


    // youtube iframe�α�ʾ
    TweenMax.to($('#sec02VideoWrap'), 0.5, {
      opacity: 0,ease:Power3.easeOut,
      onComplete:()=>{
        TweenMax.set($('#sec02VideoWrap'), {width: '0%'});    
      }
    });


    gb.in.Sec02Bg.play();

  }

  onResize() {

    if (gb.in.u.isResSP && this.isResize) {
      this.isResize = false;

      // UI wrap���ʾ
      $('.videoUI').hide();
      // myminute ����
      $('#header .subTit').hide();

      // this.onStop();
      // this.video.onMouseMoveEnd(true);

    } else if (gb.in.u.isResPC && !this.isResize && this.isPlaying) {

      this.isResize = true;

      // UI wrap���ʾ
      $('.videoUI').show();
      // myminute ����
      $('#header .subTit').show();

    }
    

  }

  removeEvents() {

    // play�ܥ����Ѻ������
    $('.section02 .play').off('click');
    // �ӻ�stop�ܥ��� ���٥��
    $('.section02 .stopWrap').off('click');
    gb.in.r.remove('sec02Video');

    gb.in.up.remove('Sec02Video');
    gb.in.up.remove('Sec02VideoMouse');

    this.video.removeEvents();


  }

  setEvents() {

    // play�ܥ����Ѻ������
    $('.section02 .play').on('click', this.onPlay.bind(this));

    // �ӻ�stop�ܥ��� ���٥��
    $('.section02 .stopWrap').on('click', this.onStop.bind(this));

    gb.in.r.add('sec02Video', this.onResize.bind(this));

  }

}