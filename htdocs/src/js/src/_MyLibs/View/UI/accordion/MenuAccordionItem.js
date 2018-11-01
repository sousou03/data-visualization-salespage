//--------------------------------------------------
//
//  MenuAccordionItem (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function MenuAccordionItem($target) {

    this.$target = $target;
    this.isOpen = false;

    this.h = 0;

    this.ready();
    this.setEvents();

  }

  MenuAccordionItem.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$detail = this.$target.next();

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // accordionの準備
      // ------------------------------------------------------------
      this.h = this.$detail.height();
      TweenMax.set(this.$detail, {overflow: 'hidden',height: 0});

      gb.layout.size.scale.run();

    },

    toggle: function() {

      if (this.isOpen) {

        this.hide();

      } else {

        this.show();

      }

    },

    show: function() {

      // arrow
      this.$target.addClass('on');

      // detail
      TweenMax.to(this.$detail, 0.5, {
        height: this.h,
        ease: Power4.easeOut,
        onComplete: function(){
          gb.layout.size.scale.run();
        }
      });

      this.isOpen = true;

    },

    hide: function() {

      var self = this;

      // arrow
      this.$target.removeClass('on');

      // detail
      TweenMax.to(this.$detail, 0.5, {
        height: 0,
        ease: Power4.easeOut,
        onComplete: function(){
          gb.layout.size.scale.run();
        }
      });


      this.isOpen = false;

    },

    setEvents: function() {

      this.$target.on('click', this.toggle.bind(this));

    },

  }

  // 公開api
  gb.MenuAccordionItem = MenuAccordionItem;
  
})();