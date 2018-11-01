//--------------------------------------------------
//
//  GNav
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function GNav() {

    this.isOnce = true;
    this.isLock = false;
    this.defPdList = [40,40,40,40,40,40,40,20];

    this.fixedPdList = [40,40,40,40,40,40,40,20];
    this.unFixedPdList = [40,40,40,40,40,40,40,20];

    this.baseW = 1100;

    this.page = $('body').attr('id');

    // motion
    this.tl = new TimelineMax();

    this.setEvents();
    this.setup();
    this.onResize();
    this.onScroll();

  }

  GNav.prototype = {

    setup: function() {

      if (gb.u.isResSP) return

      if (gb.u.isResPC && !this.isOnce) return;
      this.isOnce = false;

      this.targetST = $('.gNav_pc').offset().top;

      var st = $(window).scrollTop();
      if (st > this.targetST) {
        this.isFixed = true;
      } else if (st <= this.targetST) {
        this.isFixed = false;
      }

    },

    fixed: function() {

      var self = this;

      this.isFixed = true;

       // トップページ以外はpaddingに imgWrapにpaddingかmarginをつけることで、ガクッとならないように
      if (this.page == 'top') $('.section01 .imgWrap').css('margin-bottom', 90);
      else $('.imgWrap').css('padding-bottom', 90);

      $('.gNav_pc').addClass('fixed');

      TweenMax.to($('.logo_gNav'), 0.5, {
        opacity: 1,
        ease: Power3.easeOut,
        onComplete: function() {
          $('.logo_gNav').css('z-index', '3');
        }
      })
      TweenMax.to($('.category_pc'), 0.4, {
        'padding-left': '213px',
        ease: Power3.easeOut
      })

      $('.category_pc .item .inner').each(function(index, el) {
        TweenMax.to($(this), 0.4, {
          'padding-right': self.fixedPdList[index],
          'padding-left': self.fixedPdList[index],
          ease: Power3.easeOut,
        })
      });

    },

    unFixed: function() {

      var self = this;

      this.isFixed = false;

       // トップページ以外はpaddingに imgWrapにpaddingかmarginをつけることで、ガクッとならないように
      if (this.page == 'top') $('.section01 .imgWrap').css('margin-bottom', 0);
      else $('.imgWrap').css('padding-bottom', 0);

      $('.gNav_pc').removeClass('fixed');

      TweenMax.to($('.logo_gNav'), 0.5, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: function() {
          $('.logo_gNav').css('z-index', '1');
        }
      })
      TweenMax.to($('.category_pc'), 0.4, {
        'padding-left': 0,
        ease: Power3.easeOut
      })

      $('.category_pc .item .inner').each(function(index, el) {

        if (index==$('.category_pc .item').length-1) {

          TweenMax.to($(this), 0.4, {
            'padding-right': self.unFixedPdList[index],
            'padding-left': self.unFixedPdList[index],
            ease: Power3.easeOut,
            onComplete: function() {
              self.isLock = false;
            }
          })

        } else {

          TweenMax.to($(this), 0.8, {
            'padding-right': self.unFixedPdList[index],
            'padding-left': self.unFixedPdList[index],
            ease: Power3.easeOut
          })

        }

      });
        
    },

    reset: function() {

       // トップページ以外はpaddingに imgWrapにpaddingかmarginをつけることで、ガクッとならないように
      if (this.page == 'top') $('.section01 .imgWrap').css('margin-bottom', 0);
      else $('.imgWrap').css('padding-bottom', 0);

    },

    onScroll : function() {

      // sp状態だったら実行しない
      if (gb.u.isResSP) {
        this.reset();
        return
      }

      var st = $(window).scrollTop();

      if (st > this.targetST && !this.isLock) {
        this.isLock = true;
        this.fixed();
      } else if (st <= this.targetST && this.isLock) {
        this.isLock = false;
        this.unFixed();
      }

    },

    onResize : function() {

      var self = this;

      var w = gb.r.W();
      if (w > this.baseW) w = this.baseW;
      var rate = w / this.baseW;

      if (gb.u.isResSP) return;

      $('.category_pc .item .inner').each(function(index, el) {

        if (self.isFixed) {

          var pd = 20;

          pd *= rate;
          pd *= rate;
          pd *= rate;
          pd *= rate;
          pd *= rate;

        } else {

          var pd = self.defPdList[index]

          pd *= rate;
          pd *= rate;
          pd *= rate;

        }

        TweenMax.set($(this), {
          'padding-right': pd,
          'padding-left': pd,
        })

        var pd = 20;
        pd *= rate;
        pd *= rate;
        pd *= rate;
        pd *= rate;
        pd *= rate;

        self.fixedPdList[index] = pd;

        var pd = self.defPdList[index]
        pd *= rate;
        pd *= rate;
        pd *= rate;

        self.unFixedPdList[index] = pd;

      })

    },

    onEnter : function(that) {

      TweenMax.to($(that).find('path'), 0.4, {
        fill: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('span'), 0.4, {
        color: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '100%',
        ease: Power4.easeOut
      })
      
    },

    onLeave : function(that) {

      TweenMax.to($(that).find('path'), 0.4, {
        fill: '#51ab11',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('span'), 0.4, {
        color: '#000',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '0%',
        ease: Power4.easeOut
      })

    },

    setEvents: function() {

      var self = this;

      $(window).on('scroll.GNav', this.onScroll.bind(this));
      $('.gNav_pc .category_pc .item').on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $('.gNav_pc .category_pc .item').on('mouseleave', function(e) {self.onLeave.call(self,this)});
      gb.r.add(this.setup.bind(this));
      gb.r.add(this.onResize.bind(this));

    },

    removeEvents: function() {

      $(window).off('scroll.GNav');

    },

  }

  gb.GNav = GNav;

})();