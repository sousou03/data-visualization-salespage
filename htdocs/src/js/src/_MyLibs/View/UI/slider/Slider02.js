//--------------------------------------------------
//
//  Slider
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function Slider() {

    this.current = 0;
    this.next = 1;
    this.len = null;

    this.ready();
    this.setEvents();

  }

  Slider.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$img = $('.slider img');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      TweenMax.set(this.$img.eq(1), {display:'none'});
      TweenMax.set(this.$img.eq(2), {display:'none'});

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
      TweenMax.set(this.$img.eq(1), {opacity:0});
      TweenMax.set(this.$img.eq(2), {opacity:0});

      this.len = this.$img.length;

    },

    run: function() {

      TweenMax.set(this.$img.eq(1), {display:'block'});
      TweenMax.set(this.$img.eq(2), {display:'block'});

      // 今の画像を消す
      this.disappear();

      // 次のの画像を表示
      this.appear();

      // 番号計算
      this.calculateOrder();

      // 何秒後かにこれを繰り返す
      setTimeout(this.run.bind(this),4000);

    },

    appear: function() {

      TweenMax.to(this.$img.eq(this.next), 3, {opacity: 1,ease: Power3.easeOut});

    },

    disappear: function() {

      var self = this;

      TweenMax.to(this.$img.eq(this.current), 3, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: function() {

          self.onComplete();

        }
      });

    },

    calculateOrder: function() {

      this.current++;
      if (this.current>this.len-1) this.current=0;
      
      this.next = this.current+1;
      if (this.next>this.len-1) this.next=0;

    },

    onComplete: function() {

      TweenMax.set(this.$img.eq(this.next), {'z-index':2,'opacity':0});
      for (var i = 0; i < this.len; i++) {
        if (i==this.next) continue;
        TweenMax.set(this.$img.eq(i), {'z-index':1});
      };

    },

    onResize: function() {


    },

    setEvents: function() {

      gb.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.Slider = Slider;
  
})();