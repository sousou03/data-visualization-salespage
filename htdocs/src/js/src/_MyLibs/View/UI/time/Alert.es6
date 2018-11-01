//--------------------------------------------------
//
//  Alert
//
//--------------------------------------------------

// 500px以下になったら表示
//   時計count
//   canvas表示

export default class Alert {

  constructor(){

    this.$target = $('#alert');
    this.$h01 = this.$target.find('.h01');
    this.$h02 = this.$target.find('.h02');
    this.$m01 = this.$target.find('.m01');
    this.$m02 = this.$target.find('.m02');

    this.isAlert = (gb.r.h < 500)? true: false;

    this.setup();
    if (gb.u.isPC) this.setEvents();

  }

  setup() {


  }

  update() {

    gb.u.time();

    log(gb.u.hour,gb.u.minute,gb.u.second);

    var h = gb.u.add0(gb.u.hour).split('');
    var m = gb.u.add0(gb.u.minute).split('');
    var s = gb.u.add0(gb.u.second).split('');

    this.$h01.text(h[0])
    this.$h02.text(h[1])
    this.$m01.text(m[0])
    this.$m02.text(m[1])

    // this.$h01.text(s[0])
    // this.$h02.text(s[1])
    // this.$m01.text(s[0]);
    // this.$m02.text(s[1]);

  }

  run() {


  }

  onResize() {

    // alert画面表示
    if (gb.r.h <= 500 && this.isAlert) {
  
      this.isAlert = false;

      gb.up.add('time', this.update.bind(this));

      // alert UI表示
      this.$target.show();

      // コンマの表示非表示
      var tl = new TimelineMax({repeat: -1});

      tl
        .set(this.$target.find('.colon'), {opacity: 0})
        .to(this.$target.find('.colon'), 0.5, {opacity: 1,ease: Power2.easeInOut})
        .to(this.$target.find('.colon'), 0.5, {opacity: 0,ease: Power2.easeInOut})

    }

    // alert画面非表示
    if (gb.r.h > 500 && !this.isAlert) {
  
      this.isAlert = true;

      gb.up.remove('time');

      TweenMax.killTweensOf(this.$target.find('.colon'));

      // alert UI非表示
      this.$target.hide();

    }

  }


  setEvents() {

    gb.r.add('alert',this.onResize.bind(this));


  }

}