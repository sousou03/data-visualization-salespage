//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// ui
// import Modal from './Modal/Controller.es6';
import ToScroll from './ToScroll/Controller.es6';
import Modal from './Modal/Controller.es6';
import Slider from './Slider/Controller.es6';

import FakeScroll from './FakeScroll/Controller.es6';
import TargetScroll from './TargetScroll/Controller.es6';
import Move from './Move/Controller.es6';

import Play from './Play/Controller.es6';
// import Cover1 from './Cover1/Controller.es6';
// import Cover2 from './Cover2/Controller.es6';
import Cover3 from './Cover3/Controller.es6';
// import Cover4 from './Cover4/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.isREv = true;

    this.setup()
    this.setup_op();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    new ToScroll();
    new Modal();
    new Modal($('.hagaki_toggle_modal'),$('.hagaki_open_modal'),$('.hagaki_close_modal'),$('.hagaki_modal_contents'));
    this.slider = new Slider();

    // pc
    if (gb.u.dv.isPC) {

      $(window).scrollTop(0);

      // new FakeScroll();
      gb.ts = new TargetScroll();

      $('.imgInnerWrap').each((index, el)=>{
        var pos = gb.ts.list[index].pos;
        new Move($(el), pos);        
      });

      new Play();

      // if (gb.urlp.pattern_cover=='1') new Cover1(gb.ts.listPlane);
      // if (gb.urlp.pattern_cover=='2') new Cover2(gb.ts.listPlane);
      // if (gb.urlp.pattern_cover=='3') new Cover3(gb.ts.listPlane);
      // if (gb.urlp.pattern_cover=='4') new Cover4(gb.ts.listPlane);

      new Cover3(gb.ts.listPlane);

    // sp        
    } else {

      $('#wrapper').scrollTop(0);

      gb.ts = new TargetScroll();
      // if (gb.urlp.pattern_cover=='1') new Cover1(gb.ts.listPlane);
      // if (gb.urlp.pattern_cover=='2') new Cover2(gb.ts.listPlane);
      // if (gb.urlp.pattern_cover=='3') new Cover3(gb.ts.listPlane);
      // if (gb.urlp.pattern_cover=='4') new Cover4(gb.ts.listPlane);

      new Cover3(gb.ts.listPlane);

    }
    
  }

  setup_op() {

    this.$logoO = $('.section01 .logo .overlay');
    this.$logoBG = $('.section01 .logo .bg');
    this.$logoSVG = $('.section01 .logo svg');
    this.$SAHARA = $('.section01 .SAHARA');
    this.$share = $('.section01 .share');
    this.$shareItem = $('.section01 .share .item');
    this.$logo_bigO = $('.section01 .logo_big .overlay');
    this.$logo_bigImg = $('.section01 .logo_big img');
    this.$indicatorItem = $('.section01 .indicator .item .bar');
    this.$banner = $('.section01 .banner');

    TweenMax.set(this.$SAHARA, {x: -50});
    TweenMax.set(this.$shareItem, {x: -50});
    TweenMax.set(this.$banner, {scale: 0.85});

  }

  timeline() {

    var ease = CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1");

    if (gb.r.w<=768) {
      var obj = {height: '100%', ease: ease}
    } else {
      var obj = {width: '100%', ease: ease}
    }

    gb.u.o.disableScroll($(window));
    $(window).scrollTop(0);
    $('html').css('opacity', 1);

    // scroll
    var $t = $('.site-header')
    var h = $t.innerHeight();

    // animation
    TweenMax.to($('body,html'), 1.2, {
      scrollTop: h,
      ease: Power2.easeInOut,
    });
    TweenMax.to($t, 1.2, {
      y: -h,
      ease: Power2.easeInOut,
    });


    var tl = new TimelineMax({delay: 0.0});

    tl
      // header
      .to(this.$share, 1.0, {
        width: '100vw',
        ease: ease,
      }, 0.0)
      .add(()=>{

        this.$shareItem.each(function(index, el) {

          TweenMax.to($(el), 1.0, {
            opacity: 1,
            x: 0,
            ease: ease,
            delay: index * 0.1
          })
          
        });

      }, 0.0)

      // logo
      .to(this.$logoO, .8, {
        width: '100%',
        ease: ease,
      }, .8)
      .set(this.$logoSVG, {opacity: 1}, .8 + 0.80)
      .set(this.$logoBG, {opacity: 1}, .8 + 0.80)
      .to(this.$logoO, .8, {
        x: '100%',
        ease: ease,
      }, .8 + 0.85)

      // big logo
      .to(this.$logo_bigO, .8, {
        width: '100%',
        ease: ease,
      }, .8)
      .set(this.$logo_bigImg, {opacity: 1}, .8 + 0.80)
      .to(this.$logo_bigO, .8, {
        x: '100%',
        ease: ease,
        onComplete: ()=>{
          this.$logo_bigO.css('background', 'rgba(0,0,0,0)');
        }
      }, .8 + 0.85)

      // indicator
      .to(this.$indicatorItem, .8, obj, .8 + 0.85)

      // slider
      .add(()=>{

        this.slider.autoSwitch();

      }, 1.2)
      .to(this.$SAHARA, 1.0, {
        x: 0,
        opacity: 1,
        ease: ease,
      }, 1.6)

      // banner
      .to(this.$banner, .6, {
        opacity: 1.0,
        ease: ease,
      }, 2.35)
      .to(this.$banner, 1.5, {
        scale: 1.0,
        ease: Elastic.easeOut.config(1.1, 0.45),
      }, 2.35)

      .add(()=>{

        TweenMax.to($('body,html'), 1.2, {
          scrollTop: 0,
          ease: ease,
        });
        TweenMax.to($t, 1.2, {
          y: 0,
          ease: ease,
        });

        // imgのappend
        var len = 0;
        var cnt = 0;
        $('img').each((index, el)=>{

          if ($(el).data('src')==undefined) return;
          len++;
          var src = $(el).data('src');
          $(el).on('load', ()=>{
            cnt++;
            if (len==cnt) $(window).trigger('loadAll');            
          });
          $(el).attr('src', src);
          
        });


        $(document).one('mousewheel', (event)=>{
          
          TweenMax.killTweensOf($('body,html'));
          gb.u.o.enableScroll($(window));

        });

      }, 3.0)

  }

  update() {

 
  }

  onResize() {

    if (gb.r.w<=768) {
      this.$indicatorItem.css('height', '100%');     
      TweenMax.set(this.$indicatorItem, {clearProps: 'width'});
    }
    if (gb.r.w>768) {
      this.$indicatorItem.css({'width': '100%'});
      TweenMax.set(this.$indicatorItem, {clearProps: 'height'});
    }

  }

  setEvents() {

    super.setEvents();

  }

}