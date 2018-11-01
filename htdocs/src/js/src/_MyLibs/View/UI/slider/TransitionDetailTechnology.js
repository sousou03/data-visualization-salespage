//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function TransitionDetailTechnology(){

    this.isLock = false;
    this.next = false;
    this.isDetail = false;
    this.setEvents();

  }

  TransitionDetailTechnology.prototype = {

    ready: function () {

    },

    getDetail: function(src,next) {

      var self = this;

      $.get(src, function(data){self.onGetDetail.call(self,data,next);});

    },

    switchPageText: function(page,next) {

      if (!next) {

        // page変更
        TweenMax.to($('#header .page'), 0.7, {
            x: -20,
            opacity: 0,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function() {
              var t = page;
              $('#header .page').text(t.toUpperCase());

              TweenMax.to($('#header .page'), 0.7, {
                  x: 0,
                  opacity: 1,
                  ease: Power3.easeOut,
                });
            }
          });

      };

    },

    onGetDetail: function(data,next) {

      var self = this;
      // ------------------------------------------------------------
      //  ready
      // ------------------------------------------------------------
      if (!next) {
        $('.detail')
          .addClass('target')
          .css('z-index', '2')
          .append(data);
      }else{
        var d = $('.target').clone();
            d.addClass('temp')
             .removeClass('target')
             .css('z-index', '1'); 
        $('.target')
          .html('')
          .css('z-index', '2')
          .append(data);
        $('body')
          .append(d);
        var st = $('.target').scrollTop();
        $('.target').scrollTop(0);
        $('.temp').scrollTop(st);
      }

      // 現在のコンテンツ
      TweenMax.set($('.target'), {x: $(window).width()});
      var h = $('.detail .scrollArea').height();
      if (h<=$(window).height()) $('.detail .scrollArea').css('height', '100%');;

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // size
      gb.setImgSPSize($('.target img'));      
      // layout
      var p = new gb.PosCenter();
      $(window).on('resize', function(){p.onResize();});
      p.run();

      // ------------------------------------------------------------
      //  motion
      // ------------------------------------------------------------      
      if (!next) {
      var tl = new TimelineMax();

      tl.to($('#contents'), 0.6, {
          x: -$(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('.target'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
          onComplete: function(){
            self.isLock = false;
            gb.youtube.createIframe();
          }
        },'-=0.8');
      } else {
        var tl = new TimelineMax();

        tl.to($('.temp'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.target'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
            onComplete: function() {
              $('.temp').remove();
              self.isLock = false;
              gb.youtube.createIframe();
            }
          },'-=0.8');
      }

      // ------------------------------------------------------------
      // event再設定
      // ------------------------------------------------------------
      $('.target .detailLink').on('click.detail', function(e){self.onTouch.call(self,e,true);return false;});
      $('.detail .ui__menu_btn_c').on('click.detailClose', function(e){self.onTouchClose.call(self,e);return false;});

    },
    
    onTouch: function(e,next) {

      if (this.isLock) return;
      this.isLock = true;
      this.isDetail = true;

      gb.sc.isLock = true;

      this.switchPageText('detail',next);

      // detailの取得
      var src = $(e.currentTarget).data('url');
      this.getDetail(src,next);

    },
    
    onTouchClose: function(e) {

      if (this.isLock) return;
      this.isLock = true;
      var self = this;

      this.switchPageText('technology',false);

      // detail内コンテンツの削除
      var tl = new TimelineMax();

      tl.to($('.target'), 0.6, {
          x: $(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('#contents'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
          onComplete: function(){
            $('.target')
              .css('z-index', '-1')
              .html('');

            gb.sc.isLock = false;
            self.isLock = false;
            self.isDetail = false;
          }
        },'-=0.8');

    },

    onResize: function(){

      if (this.isDetail) {

        TweenMax.set($('#contents'), {x: -$(window).width()})
        $('.detail .scrollArea').css('height', 'auto');
        var h = $('.detail .scrollArea').height();
        if (h<=$(window).height()) $('.detail .scrollArea').css('height', '100%');

      }

    },

    setEvents: function(){

      var self = this;

      $('.detailLink').on('click.detail', function(e){self.onTouch.call(self,e);return false;});
      $(window).on('resize', function(e){self.onResize.call(self,e);return false;});

    }

  }
  // 公開api
  gb.TransitionDetailTechnology = TransitionDetailTechnology;

}());