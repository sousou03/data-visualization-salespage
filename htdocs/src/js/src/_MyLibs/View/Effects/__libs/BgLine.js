//--------------------------------------------------
//
//  BgLine
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function BgLine() {

    this.$target = $('.lineWrap .line');
    this.cur = 0;
    this.next = 1;
    this.imgZIndex = 10000;

    this.isFlag = true;

    this.setup();
    this.setEvents();

  }

  BgLine.prototype = {

    setup: function() {


    },

    run: function() {

      if (gb.up.cnt % 10 !== 0) return;

      if (this.isFlag) {

        TweenMax.set(this.$target.eq(0), {x: '-50%', opacity: 0, scale: 1 + (Math.random() * 2 - 1) * 0.03})
        TweenMax.set(this.$target.eq(1), {x: '-50%', opacity: 1, scale: 1 + (Math.random() * 2 - 1) * 0.03})

      } else {

        TweenMax.set(this.$target.eq(0), {x: '-50%', opacity: 1, scale: 1 + (Math.random() * 2 - 1) * 0.03})
        TweenMax.set(this.$target.eq(1), {x: '-50%', opacity: 0, scale: 1 + (Math.random() * 2 - 1) * 0.03})

      }

      this.isFlag = !this.isFlag;
      
    },

    setEvents: function() {

      gb.up.add(this.run.bind(this));

    },

  }

  gb.BgLine = BgLine;

})();