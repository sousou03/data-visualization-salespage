//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Order from './Order.es6';

import Render from './Render/Render.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.$wrap = $('.slider');
    this.$item = this.$wrap.find('.indicator').find('.item');

    this.isAuto = true;
    this.isSetCur = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.isUEv = true;

    this.len = this.$item.length;

    this.o = new Order(this.len);
    this.r = new Render(this.$wrap, this.len);

    // this.autoSwitch();

  }


  next() {

    this.r.next(this.o.current, this.o.prev);

    this.o.go();

  }

  prev() {

    this.r.prev(this.o.current);

    this.o.back();

  }

  update() {

    if (gb.up.frame % 120 !== 0) return;

    if (gb.s.st > 100) {

      if (this.isAuto) {
        this.isAuto = false;
        if (this.tl) this.tl.kill();
      }

    } else {

      if (!this.isAuto) {
        this.isAuto = true;
        this.autoSwitch();
      }      

    }

  }

  autoSwitch() {

    this.isAuto = true;

    this.next();

    if(this.tl) this.tl.kill()
    this.tl = new TimelineMax();
    this.tl
      .add(()=>{

        this.autoSwitch();

      }, 3.0 + 3.0)

  }

  onClick(that) {


    var num = this.$item.index(that);
    if(this.isSetCur) var pre = this.o.current;
    else var pre = this.o.prev;

    this.r.setCur(num, pre);
    this.o.setCur(num);

    this.isSetCur = true;

    if(this.tl) this.tl.kill()
    this.tl = new TimelineMax();
    this.tl
      .add(()=>{

        this.isSetCur = false;

        this.o.go();

        this.autoSwitch();

      }, 3.0 + 3.0)

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$item.on('click', function(){self.onClick.call(self, this)});

  }

}
