//--------------------------------------------------
//
//  TabAbout
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function TabAbout($contents) {

    this.$contents = $contents;

    this.cur = 0;
    this.isOnce = true;

    this.setup();
    this.setEvents();

  }

  TabAbout.prototype = {

    setup: function() {

      if (gb.u.isResSP) return

      if (gb.u.isResPC && !this.isOnce) return;
      this.isOnce = false;

      this.$contents.each(function(index, el) {

        $bar = $(this).show().find('.scrollBody');
        $area = $(this).show().find('.scrollArea');
        $hidden = $(this).find('.innerHidden');
        $contents = $(this).find('.innerContents');

        new gb.ScrollBar($bar, $area, $hidden, $contents); //スクロールバー
        
      });

      this.run(0);

    },

    run: function(num) {

      var self = this;

      $('.charaWrap_pc .area .item')
        .removeClass('isActive')
        .eq(num).addClass('isActive');

      // コンテンツ表示・非表示
      this.$contents.each(function(index, el) {

        if (index == num) $(this).show();
        else $(this).hide();
        
      });

      this.cur = num;

    },

    onClick: function(e) {

      var num = $('.charaWrap_pc .area .item').index($(e.currentTarget));

      this.run(num);

    },

    onEnter: function(e) {

      var num = $('.charaWrap_pc .area .item').index($(e.currentTarget));
      $('.charaWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive')
        .end().eq(num).addClass('isActive');

    },

    onLeave: function() {

      $('.charaWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive');

    },

    setEvents: function() {

      var self = this;

      gb.r.add(this.setup.bind(this));
      $('.charaWrap_pc .area .item').on('click', function(e) {self.onClick.call(self,e)});
      $('.charaWrap_pc .area .item').on('mouseenter', function(e) {self.onEnter.call(self,e)});
      $('.charaWrap_pc .area .item').on('mouseleave', function(e) {self.onLeave.call(self,e)});
    

    },

  }

  // 公開api
  gb.TabAbout = TabAbout;
  
})();