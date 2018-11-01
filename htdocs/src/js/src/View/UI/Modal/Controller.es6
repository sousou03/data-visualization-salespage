//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Render from './Render.es6';
import Btn_close from './Btn_close.es6';

export default class Controller extends Base {

  constructor($toggle=$('.toggle_modal'),$open=$('.open_modal'),$close=$('.close_modal'),$contents=$('.modal_contents')) {

    super();

    this.name = 'Modal';

    // this.$toggle = $toggle;
    this.$open = $open;
    this.$close = $close;
    this.$contents = $contents;

    this.isOpen = false;
    this.isFirst = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.b_c = new Btn_close(this.$close);
    this.r = new Render(this.$contents, this);

  }

  toggle() {

    if (this.isOpen) {

      this.close();

    } else {

      this.open();

    };

    this.isOpen = !this.isOpen;

  }

  open(num) {

    if (this.isFirst&&this.$contents.hasClass('modal_contents')) {
      this.isFirst = false;
      this.r.setup();
    }
    this.r.show(num);

  }

  close() {

    this.r.hide();

    if (gb.player) gb.player.pauseVideo();

  }

  setEvents() {

    var self = this;

    this.$open.on('click', function(){
      var num = $('.open_modal').index(this);
      self.open.call(self, num);
    });
    this.$contents.find('.innerWrap').on('click', (e)=>{
      e.stopPropagation()
    });
    this.$contents.on('click', this.close.bind(this));

  }

}