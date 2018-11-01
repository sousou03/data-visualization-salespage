//--------------------------------------------------
//
//  MenuHover
//
//--------------------------------------------------
(function(){

  var gb = jp.co.preco;

  function MenuHover($target) {

    this.$target = $target;
    this.len = this.$target.length;

    // motion
    this.tl = new TimelineMax();

    this.setEvents();
    this.setup();
    this.run();

  }

  MenuHover.prototype = {

    setup: function() {

    },

    run: function() {


    },

    onEnter: function(that) {

      var self = this;

      var num = this.$target.index($(that));

      this.$target.each(function(index, el) {

        // ホバーされたものは、opacity 1のまま
        if (index == num) return;

        TweenMax.to($(this), 0.6, {opacity: 0.4, ease: Power3.easeOut});
        
      });

    },

    onLeave: function() {

      this.$target.each(function(index, el) {

        TweenMax.to($(this), 0.6, {opacity: 1, ease: Power3.easeOut});
        
      });

    },

    setEvents: function() {

      var self = this;

      this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
      this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

    },

  }

  gb.MenuHover = MenuHover;

})();