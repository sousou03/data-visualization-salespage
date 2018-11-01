//--------------------------------------------------
//
//  HoverShare (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function HoverShare() {

    this.isOpen = false;

    this.ready();
    this.setEvents();

  }

  HoverShare.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$wrap = $('.shareWrap');
      this.$target = this.$wrap.find('.row');
      this.$img = $('.share');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------
      TweenMax.set(this.$target, {display:'none'});

      // ------------------------------------------------------------
      // 画像の事前load
      // ------------------------------------------------------------
      var src = this.$img.attr('src');
      src = gb.u.strReplace(src,'_off','_on');
      $('<img>').attr('src', src);

    },

    switchImg: function() {

      var src = this.$img.attr('src');

      if (this.isOpen) src = gb.u.strReplace(src,'_on','_off');
      else src = gb.u.strReplace(src,'_off','_on');

      this.$img.attr('src',src);

    },

    appear: function() {

      TweenMax.set(this.$target, {display:'block'});
      TweenMax.to(this.$target, 0.3, {
        opacity:1
      });

      this.switchImg();
      this.isOpen = true;

    },

    disappear: function() {

      var self = this;

      TweenMax.set(this.$target, {display:'block'});
      TweenMax.to(this.$target, 0.3, {
        opacity: 0,
        onComplete: function(){
          TweenMax.set(self.$target, {display:'none'});
        }
      });

      this.switchImg();
      this.isOpen = false;

    },

    setEvents: function() {

      this.$wrap.on('mouseenter', this.appear.bind(this));
      this.$wrap.on('mouseleave', this.disappear.bind(this));

    },

  }

  // 公開api
  gb.HoverShare = HoverShare;
  
})();