//--------------------------------------------------
//
//  modal (detail)
//
//--------------------------------------------------
(function(){

  function Modal($btn,$close) {

    this.$btn = $btn;
    this.$close = $close;
    this.$menu = $('.detail');

    this.dur = 2000,
    this.ease = 'easeOutQuad';

    this.W = $(window).width(),
    this.H = $(window).height();

    this.scrollY = 0;

    this.setEvents();
    this.setup();

  }

  Modal.prototype = {

    setup: function() {

      this.html = '<div class="overlay"></div>';
      $('body').append(this.html);

    },

    toggle: function() {

      if (this.$btn.hasClass('on')) {

        this.close();

      } else {

        this.open();

      };

      $btn.toggleClass('on');

    },

    open: function() {

      // gb.Vimeo($('#player'),$('.playBox'));

      // 背景固定
      this.scrollY = $('.contentsWrap').scrollTop(); 

      $('.pjaxWrap').css( {
        position: 'fixed',
        width: '100%',
        top: -1 * this.scrollY
      } );

      // モーダル表示
      this.$menu.show();
      
    },

    close: function() {

      // 背景固定解除
      $('.pjaxWrap').attr( { style: '' } ).css({opacity: 1});
      $( '.bodyInner, .contentsWrap' ).scrollTop(this.scrollY);

      // モーダル非表示
      this.$menu.hide();

    },

    getWindowSize: function() {

      W = $(window).width();
      H = $(window).height();

    },

    onResize : function() {

      this.getWindowSize();

    },

    setEvents: function() {

      var self = this;

      this.$btn.on('click', function(){self.open.call(self);});
      this.$close.on('click', function(){self.close.call(self);});

    },

  }

  gb.Modal = Modal;

})();