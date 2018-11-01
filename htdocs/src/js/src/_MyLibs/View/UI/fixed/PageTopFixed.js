//--------------------------------------------------
//
//  PageTopFixed
//
//--------------------------------------------------

// ①スクロールダウン-非表示
// ②スクロールストップ＆スクロールアップ：下からイーズイン

(function(){

  var gb = jp.co.preco;

  function PageTopFixed() {

    this.$target = $('.pageTopWrap');

    this.Timer = null;

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  PageTopFixed.prototype = {

    setup: function() {

      this.hide();

    },

    show: function() {

      TweenMax.to(this.$target, 0.8, {
        y: 0,
        z: 2,
        ease: Power2.easeOut
      })

    },

    hide: function() {

      TweenMax.to(this.$target, 0.8, {
        y: 180,
        z: 2,
        ease: Power2.easeOut
      })

    },

    onEnd: function() {

      var self = this;

      // スワイプダウン
      if (gb.swipe.dis < 0) {

        this.show();

      // スワイプアップ
      } else {

        this.hide();        

      }

      if (self.Timer) clearTimeout(self.Timer);
      self.Timer = setTimeout(function() {

        if ($(window).scrollTop()==0) return;
        self.show();

      }, 1000);

    },

    onEnter: function() {

      this.isLock = true;

    },

    onLeave: function() {

      this.isLock = false;

    },

    setEvents: function () {

      var self = this;

      // for SP
      $(window).on('end.swipe', this.onEnd.bind(this));

    },

  }

  gb.PageTopFixed = PageTopFixed;

})();