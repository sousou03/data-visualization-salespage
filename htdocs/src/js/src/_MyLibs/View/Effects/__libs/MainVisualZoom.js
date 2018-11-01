//--------------------------------------------------
//
//  MainVisualZoom
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function MainVisualZoom() {

    this.$target = $('.section01 .mainVisual');
    this.cur = 0;
    this.next = 1;
    this.imgZIndex = 10000;
    // this.img02ZIndex = 10000;

    this.setup();
    this.run();
    this.setEvents();

  }

  MainVisualZoom.prototype = {

    setup: function() {

      TweenMax.set(this.$target.eq(0), {'z-index': this.imgZIndex})
      TweenMax.set(this.$target.eq(1), {'z-index': this.imgZIndex})

    },

    run: function() {

      var tl01 = new TimelineMax();
      var tl02 = new TimelineMax();
      var self = this;

      tl01
        .set(this.$target.eq(0), {scale: 1})
        .to(this.$target.eq(0),15, {
          scale: 1.2,
          ease: Power0.easeNone,
        })
        .to(this.$target.eq(0), 4, {
          opacity: 0,
          ease: Power2.easeOut,
          onStart: function() {
            self.imgZIndex--;
            TweenMax.set(self.$target.eq(1), {scale: 1,opacity: 1,'z-index': self.imgZIndex})
            tl02.play(0);
          }
        },'-=4.0')

      tl02
        .set(this.$target.eq(1), {scale: 1})
        .to(this.$target.eq(1),15, {
          scale: 1.2,
          ease: Power0.easeNone,
        })
        .to(this.$target.eq(1), 4, {
          opacity: 0,
          ease: Power2.easeOut,
          onStart: function() {
            self.imgZIndex--;
            TweenMax.set(self.$target.eq(0), {scale: 1,opacity: 1,'z-index': self.imgZIndex})
            tl01.play(0);
          }
        },'-=4.0')

      tl01.stop();
      tl02.play();

    },

    getFront: function() {

      if (this.isFront == 'tl01') ;

    },

    calcurateOrder: function() {

      // this.cur++
      // this.cur = this.cur % 2;
      // this.next++;
      // this.next = this.next % 2;

    },

    onResize: function() {

      TweenMax.set(this.$target.eq(0), {y: '-50%'})
      TweenMax.set(this.$target.eq(1), {y: '-50%'})

    },

    setEvents: function() {

      gb.r.add(this.onResize.bind(this));


    },


  }

  gb.MainVisualZoom = MainVisualZoom;

})();