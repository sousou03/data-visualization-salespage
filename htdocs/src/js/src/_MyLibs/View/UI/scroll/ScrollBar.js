//--------------------------------------------------
//
//  ScrollBar
//
//--------------------------------------------------

// スクロールバーも動く

(function(){

  var gb = jp.co.mie

  function ScrollBar($bar, $area, $hidden, $contents) {

    this.$bar = $bar;
    this.$area = $area;
    this.$contents = $hidden;
    this.$inner = $contents;


    this.target = 0;
    this.cur = 0;

    this.range = 0;
    this.max = 0
    this.min = 0;

    this.sY = 0;
    this.isDown = false;

    this.barPos = 0;
    this.barAreaRange = 0
    this.barAreaMax = 0
    this.barAreaMin = 0;

    this.rate = 0;

    // インスタンス化を阻止
    this.isActive = true;

    this.setup();
    this.setEvents();

  }

  ScrollBar.prototype = {

    setup: function() {

      // ------------------------------------------------------------
      //  コンテンツの範囲
      // ------------------------------------------------------------
      this.min = this.range = this.$contents.height() - this.$inner.height();
      this.range = -1 * this.range;
      

      // ------------------------------------------------------------
      //  スクロールバーの動けるの範囲
      // ------------------------------------------------------------
      this.barAreaRange = this.$area.height() - this.$bar.height();
      this.barAreaMax = this.barAreaRange;

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------


      // ------------------------------------------------------------
      // コンテンツが一つの場合は、スクローバーを非表示 about
      // ------------------------------------------------------------
      if (this.$inner.find('.box').length < 2) this.$area.hide();

      // ------------------------------------------------------------
      // コンテンツが短い場合は、透明度を上げて、使えないように top
      // ------------------------------------------------------------
      if (this.min>=0) {
        this.$bar.css('opacity', '0.3');
        this.isActive = false;
      };


    },

    onDown: function(e) {

      if (e.offsetX==undefined) { // this works for Firefox
         this.y = e.pageY - this.$target.offset().top;
       } else { // works in Google Chrome
         this.y = e.pageY;
       }

      this.sY = this.y;

    },

    onDownBar: function(e) {

      this.isDown = true;

    },

    onMove: function(e) {

      if (!this.isDown) return

      if (e.offsetY==undefined) { // this works for Firefox
         this.y = e.pageY - this.$target.offset().top;
      } else { // works in Google Chrome
         this.y = e.pageY;
      }

      var dis = this.y - this.sY;
      this.cur = dis;
      var barPos = this.barPos + dis;

      if (barPos < this.barAreaMin) barPos = this.barAreaMin;
      if (barPos > this.barAreaMax) barPos = this.barAreaMax;

      var rate = barPos / this.barAreaRange;

      if (this.cur < this.min) this.cur = this.min;
      if (this.cur > this.max) this.cur = this.max;

      TweenMax.to(this.$inner, 0.8, {
        y:  - this.range * rate,
        ease: Power2.easeOut
      })
      TweenMax.set(this.$bar, {
        y: barPos,
      })

    },

    onUp: function(e) {

      this.isDown = false;

    },

    onWheel: function(e,delta,deltaX,deltaY) {

      if (deltaY < 0) {

        this.cur -= 10;
        if (this.cur < this.min) this.cur = this.min;

        TweenMax.to(this.$inner, 0.8, {
          y: this.cur,
          ease: Power2.easeOut
        })

      } else {

        this.cur += 10;
        if (this.cur > this.max) this.cur = this.max;

        TweenMax.to(this.$inner, 0.8, {
          y: this.cur,
          ease: Power2.easeOut
        })

      }


      this.rate = Math.abs(this.cur/this.range);

      TweenMax.to(this.$bar, 0.8, {
        y: this.barAreaRange * this.rate,
        ease: Power2.easeOut
      })
      TweenMax.to(this, 0.8,{
        barPos: this.barAreaRange * this.rate,
      })

      e.preventDefault();

    },

    onEnter: function() {

      // gb.u.disableScroll();

      // log('enter');

    },

    onResize: function() {

      this.min = this.range = this.$contents.height() - this.$inner.height();

    },

    setEvents: function() {

      if (!this.isActive) return;

      var self = this;

      this.$bar.on('mousedown', function(e){self.onDownBar.call(self,e)});
      $(window).on('mousedown', function(e){self.onDown.call(self,e)});
      $(window).on('mousemove', function(e){self.onMove.call(self,e)});
      $(window).on('mouseup', function(e){self.onUp.call(self,e)});
      this.$contents.on('mousewheel', function(e,delta,deltaX,deltaY){self.onWheel.call(self,e,delta,deltaX,deltaY)});
      $('.detailBlock').on('mouseover', this.onEnter.bind(this));
      gb.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.ScrollBar = ScrollBar;
  
})();