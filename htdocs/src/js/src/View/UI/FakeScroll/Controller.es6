//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Controller extends Base {

  constructor($target=$('#wrapper')) {

    super();

    this.$wrap = $('body');
    this.$target = $target;
    // if (gb.u.dv.isPC) this.$target = $target;
    // else this.$target = $('#inner');
    this.target = this.$target.get(0);

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;
    this.isUEv = true;
    this.isRun = false;

    this.speed = 0.12;

    this.scrollY = gb.s.st;
    this.y = 0;
    this.oldy = 0;

    if (gb.u.dv.isPC) {
      this.$wrap.height(this.$target.height());
    } else {
      var html = '<div class="fakeHeight"></div>'
      $('#wrapper').append(html)
      $('.fakeHeight').height(this.$target.height());
      $('.fakeHeight').css({'position': 'relative','z-index': '999999','pointer-events': 'none'});
    }
    this.$target.css({position: 'fixed',width: '100%'});

  }

  update() {

    // update
    this.y += (this.scrollY-this.y)*this.speed;
    this.y = Number(this.y.toFixed(1));

    // draw
    this.drawPos();

    // constrain
    var dis = (this.scrollY - this.y);
    if(dis < 1 && dis > -1) {
      this.isRun = false;
      this.offU();
    }

    this.oldy = this.y;

  }

  drawPos() {

    this.target.style.transform ="translate3d(0, " + (-this.y) + "px, 0)";

  }

  onScroll() {

    this.scrollY = gb.s.st;
    if (!this.isRun) {
      this.isRun = true;
      this.offU();
      this.onU();
    }

  }

  onResize() {

    // if (gb.u.dv.isPC) this.$wrap.height(this.$target.height());
    // else $(html).height(this.$target.height());

    this.$wrap.height(this.$target.height());

  }

  setEvents() {

    super.setEvents();

    gb.sl.add('FakeScroll', this.onScroll.bind(this));

  }

}