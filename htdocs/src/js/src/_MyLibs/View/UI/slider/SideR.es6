//--------------------------------------------------
//
//  SideR
//
//--------------------------------------------------

// ページ 指標を持つ gb.u.page
//    ページリストの配列かな list = [top,movie,,,
// 番号変更
// ページ名変更
// スクロール表示・非表示
//     blurで消えるなどはあり

export default class SideR {

  constructor(param){

    this.cur = -1;
    this.$cur = $('#sideR .indicator .current');

    this.$pageName = $('#sideR .tit')

    this.$next = $('#sideR .next');

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  run() {

    this.changeCur();
    this.changePageName();
    this.changeNext();

  }

  // ページから離れるとき
  outNum() {

    TweenMax.to(this.$cur, 0.9, {opacity: 0, ease: Power3.easeOut});
    log('out!!!!');

  }

  // ページへ入るとき
  inNum() {

    this.changeNum();

  }

  changeNum() {

    var id = gb.pjax.id;

    switch (id) {

      case 'top':

        this.cur = 1;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

      case 'movie':
        
        this.cur = 2;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

      case 'interview':
        
        this.cur = 3;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

      case 'interview_detail':
        
        this.$cur.hide();

        break;

      case 'history':
        
        this.cur = 4;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

    }

    TweenMax
      .to(this.$cur, 0.6, {
        opacity: 1, 
        ease: Power3.easeOut,
      });
    
  }

  // ページから離れるとき
  outPageName() {

    TweenMax.to(this.$pageName, 0.9, {x: 100, rotationZ: -90, opacity: 0, ease: Power3.easeOut});

  }

  // ページへ入るとき
  inPageName() {

    this.changePageName();

  }

  changePageName() {

    var id = gb.pjax.id;

    switch (id) {

      case 'top':

        this.$pageName.text('');

        break;

      case 'movie':
        
        this.$pageName.text('Movie');
        

        break;

      case 'interview':
        
        this.$pageName .text('Interview');
        

        break;

      case 'interview_detail':
        
        this.$pageName .text('Interview');
        

        break;

      case 'history':
        
        this.$pageName .text('Watch & History');
        

        break;

    }

    TweenMax.to(this.$pageName, 0.6, {x: 0, rotationZ: -90, opacity: 1, ease: Power3.easeOut});

  }

  // ページから離れるとき
  outNext() {

    TweenMax.to(this.$next, 0.9, {x: 100, opacity: 0, ease: Power3.easeOut});
    
  }

  // ページへ入るとき
  inNext() {

    this.changeNext();

  }

  changeNext() {

    var id = gb.pjax.id;

    switch (id) {

      case 'top':

        this.$next.hide();

        break;

      case 'movie':
        
        this.$next.find('.text').text('Interview');
        this.$next.parent().attr({'href':'/brand-special/161121-tiffany/interview/'});
        this.$next.show();

        break;

      case 'interview':
        
        this.$next.find('.text').text('Watch & History');
        this.$next.parent().attr({'href':'/brand-special/161121-tiffany/history/'});
        this.$next.show();

        break;

      case 'interview_detail':
        
        this.$next.find('.text').text('SCROLL');
        this.$next.parent().attr({'href':'#contentsStart'});
        this.$next.show();

        break;

      case 'history':
        
        this.$next.find('.text').text('SCROLL');
        this.$next.parent().attr({'href':'#contentsStart'});
        this.$next.show();

        break;

    }

    TweenMax.to(this.$next, 0.6, {x: 0, opacity: 1, ease: Power3.easeOut});

  }

  setEvents() {


  }

}