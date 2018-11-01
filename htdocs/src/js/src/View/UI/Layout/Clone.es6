//--------------------------------------------------
//
//  Clone
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Clone extends Base {

  constructor() {

    super();

    this.$wrap = $('.section03');
    this.$target = $('.planeWrap02');
    this.$clone = this.$target.clone();
       
    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;

    this.$wrap.append(this.$clone);
    this.$clone.addClass('clone')

    this.run();

  }

  run () {

    // var offset = this.$target.offset();
    // this.$clone.css({
    //   position: 'absolute',
    //   left: offset.left,
    //   top: offset.top,
    // });

  }

  onResize() {

    this.run();

  }
       
}