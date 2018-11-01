//--------------------------------------------------
//
//  TabSection04
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function TabSection04($contents) {

    this.$contents = $contents;

    this.cur = 0;
    this.isOnce = true;

    this.setup();
    this.setEvents();

  }

  TabSection04.prototype = {

    setup: function() {

      if (gb.u.isResSP) return

      if (gb.u.isResPC && !this.isOnce) return;
      this.isOnce = false;

      this.$contents.each(function(index, el) {

        $bar = $(this).show().find('.scrollBody');
        $area = $(this).show().find('.scrollArea');
        $hidden = $(this);
        $contents = $(this).find('.inner');

        new gb.ScrollBar($bar, $area, $hidden, $contents); //スクロールバー
        
      });

      this.run(0);

    },

    run: function(num) {

      var self = this;

      $('.infoWrap_pc .area .item')
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

      var num = $('.infoWrap_pc .area .item').index($(e.currentTarget));

      this.run(num);

    },

    onEnter: function(e) {

      var num = $('.infoWrap_pc .area .item').index($(e.currentTarget));
      $('.infoWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive')
        .end().eq(num).addClass('isActive');

    },

    onLeave: function() {

      $('.infoWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive');

    },

    onClickSelectArea: function(that) {

      var num = $(that).data('num');

      this.run(num);

      log(that);

    },

    setEvents: function() {

      var self = this;

      $('.infoWrap_pc .area .item').on('click', function(e) {self.onClick.call(self,e)});
      $('.link_svg').on('click', function(){
        self.onClickSelectArea.call(self,this)
        return false;
      });
      gb.r.add(this.setup.bind(this));

      $('.infoWrap_pc .area .item').on('mouseenter', function(e) {self.onEnter.call(self,e)});
      $('.infoWrap_pc .area .item').on('mouseleave', function(e) {self.onLeave.call(self,e)});
    

    },

  }

  // 公開api
  gb.TabSection04 = TabSection04;
  
})();