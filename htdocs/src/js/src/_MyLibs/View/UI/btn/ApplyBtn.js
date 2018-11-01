//--------------------------------------------------
//
//  ApplyBtn
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function ApplyBtn() {

    this.ready();
    this.setEvents();

  }

  ApplyBtn.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$btnAppMid = $('.applicationMid');
      this.$btnAppNew = $('.applicationNew');
      this.$midBg = $('.midBg');
      this.$newBg = $('.newBg');

      this.rDef01 = parseInt(this.$btnAppMid.css('right'));
      this.rDef02 = parseInt(this.$btnAppNew.css('right'));
      this.tDef01 = parseInt(this.$btnAppMid.css('top'));
      this.tDef02 = parseInt(this.$btnAppNew.css('top'));


      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------

      this.onResize();

    },

    onMousemove: function(e) {

      var mx = e.pageX - $(window).scrollLeft(),my = e.pageY - $(window).scrollTop();
      var midX = this.$btnAppMid.offset().left - $(window).scrollLeft() + this.$btnAppMid.width()/2;
      var midY = this.$btnAppMid.offset().top - $(window).scrollTop() + this.$btnAppMid.height()/2;
      var newX = this.$btnAppNew.offset().left - $(window).scrollLeft() + this.$btnAppNew.width()/2;
      var newY = this.$btnAppNew.offset().top - $(window).scrollTop() + this.$btnAppNew.width()/2;

      var radMid = Math.atan2(mx-midX,my-midY)
      var radNew = Math.atan2(mx-newX,my-newY)

      var angMid = 360 - gb.u.degree(radMid)+180;
      var angNew = 360 - gb.u.degree(radNew)+180;

      TweenMax.set(this.$midBg, {rotationZ: angMid});
      TweenMax.set(this.$newBg, {rotationZ: angNew});


      // for 下側へのshadow

      // var radius = 800;

       // x = ((mx - midX) / radius).toFixed(3) - 0,
      // y = Math.sin(Math.acos(x)).toFixed(3) - 0;

      // TweenMax.set(this.$midBg, {
      //   'box-shadow': 10 * -x + 'px ' + 10 * y + 'px 3px rgba(0,0,0,1)'
      // });
      // this.$midBg.css('box-shadow', 10 * -x + 'px ' + 10 * y + 'px 3px rgba(0,0,0,1)');


    },

    onEnter: function(that) {

      var tl = new TimelineMax();

      tl
        .to($(that), 0.3, {scale: 1.2 * this.rate ,ease: Power3.easeOut})
        .to($(that), 0.8, {
          scale: 1 * this.rate,
          ease: Elastic.easeOut.config(1.2, 0.3),
        },'-=0.1')

    },

    onLeave: function() {


    },

    someTimesMid: function() {

      var tl = new TimelineMax();

      tl
        .to(this.$btnAppMid, 0.4, {scale: 1.2 * this.rate,ease: Power3.easeIn})
        .to(this.$btnAppMid, 0.8, {
          scale: 1 * this.rate,
          ease: Elastic.easeOut.config(1.2, 0.3),
        })

      setTimeout(this.someTimesMid.bind(this),10000);

    },

    someTimesNew: function() {

      var tl = new TimelineMax();

      tl
        .to(this.$btnAppNew, 0.4, {scale: 1.2 * this.rate,ease: Power3.easeIn})
        .to(this.$btnAppNew, 0.8, {
          scale: 1 * this.rate,
          ease: Elastic.easeOut.config(1.2, 0.3),
        })

      setTimeout(this.someTimesNew.bind(this),10000);

    },

    onResize: function() {

      this.rate = gb.layout.size.scale.rate;
      if (this.rate > 1) this.rate=1;

      TweenMax.set($('.applicationNew, .applicationMid'), {
        scale: this.rate,
        z: 1,
        'transform-origin':'50% 50%',
        '-webkit-transform-origin':'50% 50%'
      });

      TweenMax.set($('.applicationMid'), {
        top: this.tDef01 * this.rate,
        right: this.rDef01 * this.rate,
      });

      TweenMax.set($('.applicationNew'), {
        top: this.tDef02 * this.rate,
        right: this.rDef02 * this.rate,
      });

    },

    onResizeInit: function() {

      this.rate = gb.layout.size.scale.rate;

      TweenMax.set($('.applicationMid'), {
        top: this.tDef01 * this.rate,
        right: this.rDef01 * this.rate,
      });

      TweenMax.set($('.applicationNew'), {
        top: this.tDef02 * this.rate,
        right: this.rDef02 * this.rate,
      });

    },

    setEvents: function() {

      var self = this;

      $(window).on('mousemove', function(e){self.onMousemove.call(self,e)});
      this.$btnAppMid.add(this.$btnAppNew).on('mouseenter', function(e){self.onEnter.call(self,this)});

      gb.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.ApplyBtn = ApplyBtn;
  
})();