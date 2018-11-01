//--------------------------------------------------
//
//  vimeo
//
//--------------------------------------------------
(function(){

  function Vimeo($obj,$btn) {

    var iframe = $obj[0];
    this.player = $f(iframe);

    this.$btn = $btn;

    this.setEvents();
    this.ready();

  }

  Vimeo.prototype = {

    ready: function() {


    },

    onPause: function () {

    },

    onFinish: function () {

    },

    onPlayProgress: function (data) {

    },

    setEvents: function() {

      var self = this;

      this.player.addEvent('ready', function() {          
          self.player.addEvent('pause', self.onPause);
          self.player.addEvent('finish', self.onFinish);
          self.player.addEvent('playProgress', self.onPlayProgress);
      });

      this.$btn.on('click', function() {
          self.player.api('play');
      });

    },

  }

  gb.Vimeo = Vimeo;

})();