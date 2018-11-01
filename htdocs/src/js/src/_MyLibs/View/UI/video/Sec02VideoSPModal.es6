//--------------------------------------------------
//
//  Modal
//
//--------------------------------------------------

export default class Modal {

  constructor($btn,$close,$contents) {

    this.$btn = $btn;
    this.$close = $close;
    this.$contents = $contents;

    this.setEvents();
    this.setup();

  }

  setup() {


  }

  toggle() {

    if (this.$btn.hasClass('on')) {

      this.hide();

    } else {

      this.show();

    };

    this.$btn.toggleClass('on');

  }

  show() {

    var H = $('.section02').height();
    this.$contents.css('height', H);
    this.$contents.find('.inner').css('height', gb.in.r.ws.h / gb.in.Layout.size.scale.rate);

    // ??????ʾ
    this.$contents.show();

    this.$contents.find('#sec02VideoForSP').adjustH();
    
  }

  hide() {

    // ?????????
    this.$contents.hide();

    if (gb.in.sec02Video.video.isFirstTouch){
      gb.in.sec02Video.video.player.pauseVideo();
    }

    log(gb.in.sec02Video.video.status,window.YT.PlayerState.PLAYING,gb.in.sec02Video.video.status==window.YT.PlayerState.PLAYING,gb.in.sec02Video.video.isFirstTouch);

  }


  onResize () {


  }

  setEvents() {

    this.$btn.on('click', this.show.bind(this));
    this.$close.on('click', this.hide.bind(this));

  }

}
