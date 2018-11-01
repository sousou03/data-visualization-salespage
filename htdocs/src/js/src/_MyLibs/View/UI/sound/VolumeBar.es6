//--------------------------------------------------
//
//  VolumeBar
//
//--------------------------------------------------

export default class VolumeBar {

  constructor(){

    this.$target = $('.volume .bar');

    this.setup();
    this.setEvents();

  }

  setup() {
    

  }

  on() {

    this.$target.each(function(index, el) {

      // 2にセット
      TweenMax
        .set($(this), {
          height: 2,
          ease: Power3.easeInOut,
        })

      // 動き
      TweenMax.delayedCall( 0.12 * index, ()=>{

        var tl = new TimelineMax({repeat: -1});

        tl
          .to($(this), 0.8, {
            height: 18,
            ease: Power2.easeInOut,
          })
          .to($(this), 0.7, {
            height: 2,
            ease: Power3.easeOut,
          });

      });

      // 透明だったら、表示
      TweenMax
        .to($(this), 0.6, {
          opacity: 1,
          ease: Power3.easeInOut,
        })
      
    });

  }

  off() {

    this.$target.each(function(index, el) {

      // 動きの停止
      TweenMax.killTweensOf(this)

      TweenMax
        .to($(this), 0.6, {
          height: 2,
          // opacity: 0,
          ease: Power3.easeInOut,
        })
      
    });

  }

  setEvents() {


  }

}