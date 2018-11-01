//--------------------------------------------------
//
//  TopTime
//
//--------------------------------------------------

// 500px以下になったら表示
//   時計count
//   canvas表示

export default class TopTime {

  constructor(){

    this.$target = $('.timeWrap');
    this.$h01 = this.$target.find('.h01');
    this.$h02 = this.$target.find('.h02');
    this.$m01 = this.$target.find('.m01');
    this.$m02 = this.$target.find('.m02');

    this.nyH = 0;

    this.isAlert = (gb.r.h < 500)? true: false;

    this.dis = 14; //時差

    this.run();
    this.setup();
    this.setEvents();

  }

  setup() {


  }

  update() {

    // 間引き
    if (gb.up.cnt%60!==0) return;


    gb.u.time();

    var h = gb.u.hour - this.dis;
    if (h<0) h = 24 + h;

    this.nyH = h;

    h = gb.u.add0(h).split('');
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

    gb.up.add('TopTime', this.update.bind(this));

    // コンマの表示非表示
    var tl = new TimelineMax({repeat: -1});

    tl
      .set(this.$target.find('.colon'), {opacity: 0})
      .to(this.$target.find('.colon'), 0.5, {opacity: 1,ease: Power2.easeInOut})
      .to(this.$target.find('.colon'), 0.5, {opacity: 0,ease: Power2.easeInOut})

  }

  setEvents() {



  }

  removeEvents() {

    gb.up.remove('TopTime');

  }

}