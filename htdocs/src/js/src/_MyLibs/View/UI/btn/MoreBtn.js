// ------------------------------------------------------------
//
//  MoreBtn
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function MoreBtn($target) {

    this.$target = $target;

    this.run();
    this.setEvents();

  }

  MoreBtn.prototype = {

    run: function () {


    },

    onDown: function() {

      var self = this;

      var src = this.$target.attr('src');
      src = gb.u.strReplace(src, '_off', '_on');

      this.$target.on('load', function(event) {
        self.$target.css('top', 4);
      });
      this.$target.attr('src',src);

      

    },

    onUp: function() {

      var self = this;

      var src = this.$target.attr('src');
      src = gb.u.strReplace(src, '_on', '_off');
      this.$target.attr('src',src);

      this.$target.on('load', function(event) {
        self.$target.css('top', 0);
      });

    },

    onClick: function() {



    },

    setEvents: function () {

      // this.$target.on('mouseup', this.onUp.bind(this));
      this.$target.on('mouseenter', this.onDown.bind(this));
      this.$target.on('mouseleave', this.onUp.bind(this));
      this.$target.on('click', this.onClick.bind(this));

    },

  }

  gb.MoreBtn = MoreBtn;

})();