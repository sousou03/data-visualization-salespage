// ------------------------------------------------------------
//
//  UIBase
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIBase extends Base {

  constructor() {

    super();

    this.$target = $('.target');

  }

  show() {

    this.$target.css('opacity', 0);
    this.$target.show();

    $('html').addClass('is-hidden');

    TweenMax.to(this.$target, .8, {
      opacity: 1,
      ease: Expo.easeOut,
    })

  }

  hide() {

    $('html').removeClass('is-hidden');

    TweenMax.to(this.$target, .8, {
      opacity: 0,
      ease: Expo.easeOut,
      onComplete: ()=>{
        this.$target.hide();        
      }
    })

  }

}