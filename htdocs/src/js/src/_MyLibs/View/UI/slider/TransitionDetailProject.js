//--------------------------------------------------
//
//  Transition
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function TransitionDetailProject(){

    this.isLock = false;
    this.next = false;
    this.isDetail = false;
    this.setEvents();

  }

  TransitionDetailProject.prototype = {

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
          .addClass('nextDetail')
          .css('z-index', '2')
          .append(data);
      }else{
        $('.nextDetail')
          .addClass('curDetail')
          .removeClass('nextDetail');
        var d = $('.curDetail').clone();
        d.addClass('nextDetail')
         .removeClass('curDetail')
         .css('z-index', '2')
         .scrollTop(0)
         .html('')
         .append(data)
        $('body').append(d);

      }

      // 現在のコンテンツ
      TweenMax.set($('.nextDetail').find('.content'), {x: $(window).width()});

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // size
      gb.setImgSPSize($('.nextDetail img'));
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
          .to($('.nextDetail').find('.content'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
          },'-=0.8')
          .fromTo($('.ui__menu_btnC'), 0.5, {
            'display':'block',
            opacity: 0,
          },{
            opacity: 1,
            ease: Power3.easeInOut,
            onComplete: function(){
              self.isLock = false;
              gb.youtube.createIframe();
            }
          });

      } else {

        var tl = new TimelineMax();

        tl.to($('.curDetail'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.nextDetail').find('.content'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
            onComplete: function() {
              $('.curDetail').remove();
              self.isLock = false;
              gb.youtube.createIframe();
            }
          },'-=0.8');
      }


      // ------------------------------------------------------------
      // event再設定
      // ------------------------------------------------------------
      $('.nextDetail .detailLink').on('click.detail', function(){self.onTouch.call(self,this,true);return false;});
      $('.ui__menu_btnC').on('click.detailClose', function(e){self.onTouchClose.call(self,e);return false;});

    },
    
    onTouch: function(that,next) {

      if (this.isLock) return;
      this.isLock = true;
      this.isDetail = true;

      gb.sc.isLock = true;

      this.switchPageText('detail',next);

      // detailの取得
      var src = $(that).data('url');
      this.getDetail(src,next);

      // hashのセット
      var hash = $(that).data('hash');
      gb.util.setHash(hash);

      // ログ
      gb.log.send02(location.href);

    },
    
    onTouchClose: function(e) {

      if (this.isLock) return;
      this.isLock = true;
      var self = this;

      this.switchPageText('project',false);

      // detail内コンテンツの削除
      var tl = new TimelineMax();

      tl.to($('.nextDetail').find('.content'), 0.6, {
          x: $(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('#contents'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
        },'-=0.8')
        .to($('.ui__menu_btnC'), 0.5, {
          'display':'block',
          opacity: 0,
          onComplete: function(){
            $('.nextDetail')
              .css('z-index', '-1')
              .html('');

            gb.sc.isLock = false;
            self.isLock = false;
            self.isDetail = false;
          }
        });

        // ハッシュの削除
        gb.util.setHash('');

    },

    onResize: function(){

      if (this.isDetail) {

        TweenMax.set($('#contents'), {x: -$(window).width()});
        
      }

    },

    setEvents: function(){

      var self = this;

      $('.detailLink').on('click.detail', function(){self.onTouch.call(self,this);return false;});
      $(window).on('resize', function(e){self.onResize.call(self,e);return false;});

    }

  }
  // 公開api
  gb.TransitionDetailProject = TransitionDetailProject;

}());