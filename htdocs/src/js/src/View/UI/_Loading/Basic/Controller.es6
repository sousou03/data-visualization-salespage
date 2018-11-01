//--------------------------------------------------
//
//  ReadyMgr
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Events from './Events.es6';
import Render from './Render_def.es6';

export default class ReadyMgr extends Base {

  constructor() {

    super();

    this.name = 'ReadyMgr';

    this.completed = 0;
    this.total = 1; // 最初に0で割られるのを防ぐ
    this.current = 0;

    this.$wrap = $('#wrapper');

    if (gb.conf.LOADING) this.setup(); // loading有り
    else this.setup_not_loading(); // loading無し

    this.setEvents();

  }

  setup() {

    this.e = new Events(this);
    this.r = new Render();

    // this.r.add();
    // this.r.show();

  }

  setup_not_loading() {

    // this.$wrap.css('opacity', 1);
    this.onComplete();

  }

  update() {

    this.e = this.e.update();
    this.r.update(this.e);

  }

  onComplete() {

    // update処理をやめる
    this.offU();

    // this.r.hide();

    var $mask = $('#loading .mask');

    var tl = new TimelineMax();

    tl
      .to($mask.eq(0), 1.2, {
          width: '102%',
          ease: Power3.easeInOut,
      }, 0.2 * 0)
      .to($mask.eq(1), 1.2, {
          width: '102%',
          ease: Power3.easeInOut,
      }, 0.2 * 1)
      .to($mask.eq(2), 1.2, {
          width: '102%',
          ease: Power3.easeInOut,
          onComplete: ()=>{
            $('#loading').remove();
          }
      }, 0.2 * 2)
      .add(()=>{

        $(window).trigger('loadingEnd');

      }, 0.0)
    

 }

}