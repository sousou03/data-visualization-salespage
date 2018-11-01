//--------------------------------------------------
//
//  ShowContents
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function ShowContents($contents) {

    this.$contents = $contents

    this.topList = [];

    this.setup();
    this.setEvents();

  }

  ShowContents.prototype = {

    setup: function() {

      var self = this;

      // コンテンツ消す
      TweenMax.set(this.$contents, {
        y: 100,
        opacity: 0,
      });

      this.$contents.each(function(index, el) {

        var obj = {val: $(this).offset().top,isLock: false}

        self.topList.push(obj);
        
      });

      // 帯を消す
      TweenMax.set(this.$contents.find('.categoryParts'), {
        x: -20,
        y: 20,
        rotationZ: -45,
        opacity: 0,
      });

    },

    run: function(index) {

      var self = this;

      var tl = new TimelineMax();

      tl
        // コンテンツ
        .to(this.$contents.eq(index), 0.8, {
          y: 0,
          z: 1,
          opacity: 1,
          delay: 0.08 * index,
          ease: Power2.easeOut
        })
        // 帯
        .to(this.$contents.eq(index).find('.categoryParts'), 0.8, {
          x: 0,
          y: 0,
          rotationZ: -45,
          opacity: 1,
          ease: Power2.easeOut
        },'-=0.0')

    },

    runAll: function() {

      var self = this;

      $.each(this.topList, function(index, obj) {

          self.run(index);

      });

    },

    start: function() {

      this.isInViewport($(window).scrollTop() + $(window).height());
      
    },

    isInViewport: function(sb) {

      var self = this;

      $.each(this.topList, function(index, obj) {

        if (sb > obj.val && !obj.isLock) {
          obj.isLock = true;
          self.run(index);
        }

      });

    },

    onScroll: function() {

      var sb = gb.s.sb;

      this.isInViewport(sb);

    },

    setEvents: function() {

      gb.s.add(this.onScroll.bind(this))

    },


  }

  gb.ShowContents = ShowContents;

})();