//--------------------------------------------------
//
//  Position
//
//--------------------------------------------------

export default class Position {

  constructor() {

    this.setup();
    this.setEvents();

  }

  setup() {

    // 上下中央寄せ
    this.setCenter();

  }

  setCenter() {

    $('.posCenter').each(function(index, el) {

      $(this).adjust();
      
    });
    $('.posCenterW').each(function(index, el) {

      $(this).adjustW();
      
    });
    $('.posCenterH').each(function(index, el) {

      $(this).adjustH();
      
    });

  }

  onResize() {

    this.setCenter();

  }

  setEvents() {

    gb.r.add('setCenter', this.onResize.bind(this));

  }

}