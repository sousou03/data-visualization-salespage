//--------------------------------------------------
//
//  QAAccordionItem (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function QAAccordionItem($target) {

    this.$target = $target;
    this.isOpen = false;

    this.h = 0;

    this.ready();
    this.setEvents();

  }

  QAAccordionItem.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$arrow = this.$target.find('.arrow');
      this.$detail = this.$target.find('.itemDetail');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
      this.h = this.$detail.height();
      TweenMax.set(this.$detail, {overflow: 'hidden',height: 0});

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
      this.$arrow.addClass('isActive');

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
      this.$arrow.removeClass('isActive');

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
  gb.QAAccordionItem = QAAccordionItem;
  
})();