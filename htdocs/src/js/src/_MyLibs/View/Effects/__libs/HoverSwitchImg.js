// ------------------------------------------------------------
//
//  HoverSwitchImg
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function HoverSwitchImg($wrap, selector) {

    this.$wrap = $wrap;
    this.selector = selector;

    this.run();
    this.setEvents();

  }

  HoverSwitchImg.prototype = {

    run: function () {


    },

    onEnter: function(that) {

      var $target = $(that).find(this.selector);

      var src = $target.attr('src');
      src = gb.u.strReplace(src, '_off', '_on');
      $target.attr('src',src);

    },

    onLeave: function(that) {

      var $target = $(that).find(this.selector);

      var src = $target.attr('src');
      src = gb.u.strReplace(src, '_on', '_off');
      $target.attr('src',src);

    },

    setEvents: function () {

      var self = this;

      this.$wrap.each(function(index, el) {

        $(this).on('mouseenter', self.onEnter.bind(self,this));
        $(this).on('mouseleave', self.onLeave.bind(self,this));
        
      });

      

    },

  }

  gb.HoverSwitchImg = HoverSwitchImg;

})();