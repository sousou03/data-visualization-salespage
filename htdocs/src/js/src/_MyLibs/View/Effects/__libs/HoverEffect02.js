//--------------------------------------------------
//
//  HoverEffects02
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function HoverEffects02($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setup();
    this.setEvents();

  }

  HoverEffects02.prototype = {

    setup: function() {

    },

    run: function() {

    },

    onEnter : function(that) {

      TweenMax.to($(that).find('a'), 0.4, {
        color: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '100%',
        ease: Power4.easeOut
      })
      
    },

    onLeave : function(that) {

      TweenMax.to($(that).find('a'), 0.4, {
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

      this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
      this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

      // iosで遷移したあと、戻るでホバー状態が戻らないバグ対応 強制的にリロード
      window.onpageshow = function(event) {

        if (event.persisted) {window.location.reload();}
                  
      };

    },

  }

  gb.HoverEffects02 = HoverEffects02;

})();