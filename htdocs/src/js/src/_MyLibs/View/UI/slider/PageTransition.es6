//--------------------------------------------------
//
//  PageTransition
//
//--------------------------------------------------

export default class PageTransition {

  constructor($target) {

    // dom
    this.$pages = $('.section');

    // variable
    this.current = 0;
    this.old = null;
    this.next = 1;
    this.prev = null;
    this.len = this.$pages.length;

    this.isSwitch = true;

    this.pageList = [
      'top',
      'movie',
      'interview',
      'product',
    ];

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  switch() {


    var val = 50;

    //ホイールが0以上 かつ currentが一番最初でない かつ switch可能状態であれば
    if (this.STAmount > val && this.current > 0 && this.isSwitch) {
    this.isSwitch = false;
    gb.hash.state = 'transitionTo0' + (this.current);
      
      this.prevPage();

    //ホイールが0以下 かつ currentが一番最後でない かつ switch可能状態であれば
    } else if(this.STAmount < -val && this.current < this.len-1 && this.isSwitch) {
    this.isSwitch = false;
    gb.hash.state = 'transitionTo0' + (this.current + 2);
      
      this.nextPage();

    };


  }

  // 右へ
  nextPage() {

    // next
    TweenMax.set(this.$pages.eq(this.next), {display: 'block'});
    TweenMax.to(this.$pages.eq(this.next), 0.5, {opacity: 1});

    // cur
    TweenMax.to(this.$pages.eq(this.current), 0.6, {
      opacity: 0,
      onComplete:()=>{

        this.$pages.eq(this.current).hide();

        // currentの計算
        this.calculateOrder('next');

        this.isSwitch = true;

        this.eachPageRun();

        gb.hash.state = 'static';

      }
    });

  }

  // 左へ
  prevPage() {

    // next
    TweenMax.set(this.$pages.eq(this.prev), {display: 'block'});
    TweenMax.to(this.$pages.eq(this.prev), 0.5, {opacity: 1});

    // cur
    TweenMax.to(this.$pages.eq(this.current), 0.6, {
      opacity: 0,
      onComplete:()=>{

        this.$pages.eq(this.current).hide();

        // currentの計算
        this.calculateOrder('prev');

        this.isSwitch = true;

        this.eachPageRun();

        gb.hash.state = 'static';

      }
    });

  }

  calculateOrder(dir) {

    this.old = this.current;

    if (dir=='next') {

      this.current++;
      if (this.current>this.len-1) this.current=this.len-1;
      this.next = this.current+1;
      this.prev = this.current-1;

    } else {

      this.current--;
      if (this.current<0) this.current=0;  
      this.next = this.current+1;
      this.prev = this.current-1;

    }     

  }

  // 各ページの処理
  eachPageRun() {

    $('body').removeClass(this.pageList.join(' '));
    $('body').addClass(this.pageList[this.current]);

    if (this.current == 0) this.page01();
    if (this.current == 1) this.page02();
    if (this.current == 2) this.page03();
    if (this.current == 3) this.page04();

  }

  page01() {

    // nextボタン
    TweenMax.to($('.nextBtn'), 0.6, {opacity: 1});

    // videoUI
    TweenMax.to($('.videoUI'), 0.6, {
      opacity: 0,
      onComplete: ()=>{
        TweenMax.set($('.videoUI'), {'display': 'none'});
      }
    });

    gb.hash.switchHash('top');

  }

  page02() {

    // nextボタン
    TweenMax.to($('.nextBtn'), 0.6, {opacity: 0});

    // videoUI
    TweenMax.set($('.videoUI'), {'display': 'block'});
    TweenMax.to($('.videoUI'), 0.6, {opacity: 1});

    gb.hash.switchHash('movie');

  }

  page03() {

    // nextボタン
    TweenMax.to($('.nextBtn'), 0.6, {opacity: 0});

    // videoUI
    TweenMax.to($('.videoUI'), 0.6, {
      opacity: 0,
      onComplete: ()=>{
        TweenMax.set($('.videoUI'), {'display': 'none'});
      }
    });

    gb.hash.switchHash('interview');

  }

  page04() {

    gb.hash.switchHash('product');

  }

  onMouseWheel(e, delta, deltaX, deltaY) {

    this.STAmount = gb.s.STAmount;

    // res spのときは処理しない
    if (gb.u.isResSP) return
    
    this.switch();

  }

  setEvents() {


    gb.s.add('pageTransition', this.onMouseWheel.bind(this));


  }
  
}