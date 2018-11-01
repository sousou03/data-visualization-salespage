//--------------------------------------------------
//
//  StaffCredit
//
//--------------------------------------------------
export default class StaffCredit {

  constructor($btn,$close,$contents){

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

      this.close();

    } else {

      this.open();

    };

    this.$btn.toggleClass('on');

  }

  open() {

    $('#sideR').css('z-index', 3);

    // モーダル表示
    this.$contents.show();

    
  }

  close() {

    $('#sideR').css('z-index', 7);
    
    // モーダル非表示
    this.$contents.hide();


  }

  onResize () {

    // this.getWindowSize();

  }

  setEvents() {

    this.$btn.on('click', this.open.bind(this));
    this.$close.on('click', this.close.bind(this));

  }

}