// ------------------------------------------------------------
//
//  swipe position
//
// ------------------------------------------------------------

(function(){

  ;

  function SwipeContents() {

    this.sX = null;
    this.eX = null; //startX,endX
        
    this.dis = 0;
    this.minDis = 10;
    this.isLock = false;

    this.isShow = false;

    this.setPrevent();
    this.setEvents();
    this.ready();

  }

  SwipeContents.prototype = {

    ready: function(){

      // スワイプ準備
      TweenMax.set($('#contents'), {'display': 'none','opacity':0,y: 300});

    },

    show: function() {

      var self = this;
      if (this.isLock) return;

      TweenMax.set($('#contents'), {'display': 'block'});
      TweenMax.to($('#contents'), 0.6, {
          y: 0,
          opacity: 1,
          ease: Power3.easeOut,
          onComplete: function() {

            self.isShow = true;
            self.removePrevent();

            TweenMax.to($('#topVisualWrap #topVisual, #topVisualWrap .barL'), 0.5, {opacity: 0});

          }
        });

      $('body').addClass('swipeContentsShow');

      // aboutページならgoogle map表示
      if ($('body').attr('id') == 'about') gb.google = new gb.GoogleMap('東京都港区南青山2-20-4',$('.map')[0]);

    },

    hide: function() {

      var self = this;
      if (this.isLock) return;

      TweenMax.to($('#topVisualWrap #topVisual, #topVisualWrap .barL'), 0.5, {opacity: 1});

      TweenMax.to($('#contents'), 0.6, {
          y: 300,
          opacity: 0,
          ease: Power3.easeOut,
          onComplete: function() {
            TweenMax.set($('#contents'), {'display': 'none','opacity':0,y: 300});
            self.isShow = false;
            self.setPrevent();

          }
        });

      $('body').removeClass('swipeContentsShow');

    },

    setPrevent: function() {

      var self = this;

      $(window).on('touchmove.noScroll', function(e){
        e.preventDefault();
      });

    },

    removePrevent: function() {

      $(window).off('touchmove.noScroll');

    },

    onTouchStart: function (e) {

      this.sX = e.originalEvent.changedTouches[0].pageY;

    },

    onTouchMove: function (e) {

      
    },

    onTouchEnd: function (e) {

      this.dis = this.sX - e.originalEvent.changedTouches[0].pageY;

      // 表示処理
      if( this.minDis < Math.abs(this.dis) && this.dis > 0 && !this.isShow) this.show();

      // 非表示処理
      var st = $('.wrapper').scrollTop();
      if( this.minDis < Math.abs(this.dis) && this.dis < 0 && st <= 0 && this.isShow) this.hide();

      // // 移動量を初期化
      this.dis = 0;

    },


    onScroll: function (e) {

      // var st = $('.wrapper').scrollTop();
      // log(st);

      // if( st < -10 && this.isShow) this.hide();

    },

    setEvents: function(){

      var self = this;

      $(window).on('touchstart.swipeContents', function(e){self.onTouchStart.call(self,e);});
      $(window).on('touchmove.swipeContents', function(e){self.onTouchMove.call(self,e);});
      $(window).on('touchend.swipeContents', function(e){self.onTouchEnd.call(self,e);});

    },
    
  }

  gb.SwipeContents = SwipeContents;
    
})();