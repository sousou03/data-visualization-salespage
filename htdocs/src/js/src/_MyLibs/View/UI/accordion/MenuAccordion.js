//--------------------------------------------------
//
//  MenuAccordion (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function MenuAccordion($target) {

    this.$target = $target;

    this.ready();
    this.run();
    this.setEvents();

  }

  MenuAccordion.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
    },

    run: function() {

      this.$target.each(function(index, el) {

        new gb.MenuAccordionItem($(this));
        
      });

    },

    setEvents: function() {

    },

  }

  // 公開api
  gb.MenuAccordion = MenuAccordion;
  
})();