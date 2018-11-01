//--------------------------------------------------
//
//  HoverEffects01
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function HoverEffects01($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  HoverEffects01.prototype = {

    setup: function() {

    },

    run: function() {

    },

    onEnter : function(that) {

      TweenMax.to($(that), 0.4, {
        color: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '100%',
        ease: Power4.easeOut
      })
      
    },

    onLeave : function(that) {

      TweenMax.to($(that), 0.4, {
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

    },

  }

  gb.HoverEffects01 = HoverEffects01;

})();