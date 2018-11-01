//--------------------------------------------------
//
//  Slider sss
//
//--------------------------------------------------

export default class Slider {

  constructor($wrap) {

    // dom
    this.$img = $wrap.find('.slider .item');
    this.$overlay = $wrap.find('.overlay');

    this.current = 0;
    this.old = null;
    this.next = 1;
    this.prev = null;
    this.len = this.$img.length;

    this.Timer = null;

    this.setup();
    // this.setEvents();

  }

  setup() {

    // this.switchDetails();

    // this.s = new Swipe();
    // this.s.onNext = this.right.bind(this);
    // this.s.onPrev = this.left.bind(this);

  }

  // 右へ
  right() {

    // if (this.current == this.len - 1) return;

    var tl = new TimelineMax();

    // flash
    // tl
    //   // 白く
    //   .set(this.$overlay, {opacity: 1})
    //   .to(this.$overlay, 1.0, {
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     onStart: ()=>{

    //       // next
    //       TweenMax.set(this.$img.eq(this.next), {opacity: 1});

    //       // current
    //       TweenMax.set(this.$img.eq(this.current), {opacity: 0});
          
    //     }
    //   })

    tl
      .set(this.$img.eq(this.next), {x: 60})
      .to(this.$img.eq(this.next), 0.6, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
      })
      .to(this.$img.eq(this.current), 0.6, {
        opacity: 0,
        x: -60,
        ease: Power3.easeOut,
      },'-=0.3')

    // currentの計算
    this.calculateOrder('right');

    // textの変更
    // this.switchDetails();

    // indicatorの変更
    // this.switchIndicator();

  }

  // 左へ
  left() {

    // if (this.current == 0) return;

    var tl = new TimelineMax();

    // tl
    //   // 白く
    //   .set(this.$overlay, {opacity: 1})
    //   .to(this.$overlay, 0.6, {
    //     opacity: 0,
    //     onStart: ()=>{

    //       // next
    //       TweenMax.set(this.$img.eq(this.prev), {opacity: 1});

    //       // current
    //       TweenMax.set(this.$img.eq(this.current), {opacity: 0});
          
    //     }
    //   })
    
    tl
      .set(this.$img.eq(this.prev), {x: -60})
      .to(this.$img.eq(this.prev), 0.6, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
      })
      .to(this.$img.eq(this.current), 0.6, {
        opacity: 0,
        x: 60,
        ease: Power3.easeOut,
      },'-=0.3')

    // currentの計算
    this.calculateOrder('left');

    // textの変更
    // this.switchDetails();

    // indicatorの変更
    // this.switchIndicator();

  }

  swicthArrow() {

    // 右端
    if (this.current == this.len - 1) {

      var src = this.$arrowR.attr('src');
      src = gb.u.strReplace(src, '_on', '_off');
      this.$arrowR.attr('src',src);

    // 左端
    } else if (this.current == 0) {

      var src = this.$arrowL.attr('src');
      src = gb.u.strReplace(src, '_on', '_off');
      this.$arrowL.attr('src',src);

    } else {

      var src = this.$arrowL.attr('src');
      src = gb.u.strReplace(src, '_off', '_on');
      this.$arrowL.attr('src',src);

      var src = this.$arrowR.attr('src');
      src = gb.u.strReplace(src, '_off', '_on');
      this.$arrowR.attr('src',src);

    }

  }

  switchDetails() {

    var t = this.textList[this.current];
    var p = this.priceList[this.current];

    this.$text.html(t);
    this.$price.text(p);

  }

  switchIndicator() {

    this.$indicator
      .removeClass('isActive')
      .eq(this.current).addClass('isActive');

  }

  calculateOrder(dir) {

    this.old = this.current;

    // 端で止める
    // if (dir=='right') {

    //   this.current++;
    //   if (this.current>this.len-1) this.current=this.len-1;
    //   this.next = this.current+1;
    //   this.prev = this.current-1;

    // } else {

    //   this.current--;
    //   if (this.current<0) this.current=0;  
    //   this.next = this.current+1;
    //   this.prev = this.current-1;

    // }

    // ループ
    if (dir=='right') {

      this.current++;

      if (this.current>this.len-1) {

        this.current=0;
        this.next=this.current+1;
        this.prev=this.len-1;
        log(this.current);
        log(this.next);

      } else {

        this.next = this.current+1;
        this.prev = this.current-1;

      }

      if (this.current==this.len-1) {

        this.next=0;
        this.prev=this.current-1;

      }

    } else {

      this.current--;
      if (this.current<0) {

        this.current=this.len-1;
        this.next = 0;
        this.prev = this.current-1;

      } else {

        this.next = this.current+1;
        this.prev = this.current-1;

      }

    }

    // avtiveにするかしないかの処理    
    // arrow
    // this.swicthArrow();

  }

  autoSwicth() {

    this.right();

    this.Timer = setTimeout(()=>{

      this.autoSwicth();

    },5000)

  }

  setEvents() {

    // this.$arrowL.on('click', this.left.bind(this));
    // this.$arrowR.on('click', this.right.bind(this));
    this.autoSwicth();

  }
  
  removeEvents() {

    clearTimeout(this.Timer);
    this.right();

  }
  
}