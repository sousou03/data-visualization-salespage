// ------------------------------------------------------------
//
//  SwipeForSlider sss
//
// ------------------------------------------------------------

export default class SwipeForSlider {

  constructor() {

    this.$wrap = $('.sliderWrap');

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
    this.dis = 0;this.minDis = 50;

    // time
    this.sT=0;this.eT=0;this.minT = 300; //startTime,ellapsedTime,

    this.onNext = ()=>{};
    this.onPrev = ()=>{};

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  onTouchStart (e) {

    // targetX
    this.sX = e.originalEvent.changedTouches[0].pageX;

  }

  onTouchMove (e) {

    this.dis = this.sX - e.originalEvent.changedTouches[0].pageX;

    if (this.minDis < Math.abs(this.dis)) gb.u.setPrevent();

  }

  onTouchEnd (e) {

    gb.u.removePrevent();

    this.dis = this.sX - e.originalEvent.changedTouches[0].pageX;

    if( this.minDis > Math.abs(this.dis)) return;

    if (this.dis>0) {

      this.onNext();

    } else {

      this.onPrev();

    }
    
    // 移動量を初期化
    this.dis = 0;

  }

  setEvents(){

    var self = this;

    this.$wrap.on('touchstart.Swipe', (e)=>{this.onTouchStart(e);});
    this.$wrap.on('touchmove.Swipe', (e)=>{this.onTouchMove(e);});
    this.$wrap.on('touchend.Swipe', (e)=>{this.onTouchEnd(e);});

  }
       
}