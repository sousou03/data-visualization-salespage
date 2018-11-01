//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SetSpan from './SetSpan.es6';

export default class Render extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;
    this.$textWrap = this.$wrap.find('.textWrap');
    this.$tit = this.$wrap.find('.tit');
    this.$text = this.$wrap.find('.text');
    this.$bar = this.$wrap.find('.bar');

    this.setup()
    this.setEvents();

  }

  setup() {

    this.ready_tit();
    this.ready_text();
    this.ready_bar();

  }

  ready_tit() {

    // spanで1文字1文字囲む
    var s = new SetSpan(this.$tit);

    // // 各spanを取得
    this.$titspan = this.$tit.find('div span');
    this.$titspan.css({'display': 'inline-block', 'backface-visibility': 'hidden'}); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.$titspan.parent().css('display', 'inline-block');
    this.len = this.$titspan.length;
    // this.$tit.css('display', 'flex');

    // ready
    this.$titspan.each((index, el)=>{

      var w = $(el).width();
      var h = $(el).height();

      TweenMax.set($(el), {y: h, opacity: 0});
      TweenMax.set($(el).parent(), {y: h / 2});
      
    });

  }

  ready_text() {

    // spanで1文字1文字囲む
    var s = new SetSpan(this.$text);

    // // 各spanを取得
    this.$textspan = this.$text.find('div span');
    this.$textspan.css({'display': 'inline-block', 'backface-visibility': 'hidden'}); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.$textspan.parent().css('display', 'inline-block');
    this.len = this.$textspan.length;
    // this.$text.css('display', 'flex');

    // ready
    this.$textspan.each((index, el)=>{

      var w = $(el).width();
      var h = $(el).height();

      TweenMax.set($(el), {y: h, opacity: 0});
      TweenMax.set($(el).parent(), {y: h / 2});
      
    });

  }

  ready_bar() {

    TweenMax.set(this.$bar, {scaleX: 0, 'transform-origin': '0% 50%'});

  }


  show(delay) {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.$titspan.each((index, el)=>{

          TweenMax.to($(el), .9, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: index * 0.05
          });
          TweenMax.to($(el).parent(), .9, {
            y: 0,
            ease: Power2.easeOut,
            delay: index * 0.05
          });
          
        });

      }, 0.0)
      .add(()=>{

        this.$textspan.each((index, el)=>{

          TweenMax.to($(el), .9, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: index * 0.03
          });
          TweenMax.to($(el).parent(), .9, {
            y: 0,
            ease: Power2.easeOut,
            delay: index * 0.03
          });
          
        });

      }, 0.4)
      .to(this.$bar, 1.2, {
        scaleX: 1,
        ease: Expo.easeOut,
      }, 0.8)

  }

  onResize() {


  }

}