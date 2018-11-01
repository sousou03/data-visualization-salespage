//--------------------------------------------------
//
//  EditorTitMorph
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function EditorTitMorph($target) {

    this.$targets = $target.find('.tit .svg_chiefEditor');
    this.$targetDef = $target.find('.tit .svg_chiefEditorDef');
    this.$target01 = $target.find('.tit .svg_chiefEditor01');
    this.$target02 = $target.find('.tit .svg_chiefEditor02');
    this.$target03 = $target.find('.tit .svg_chiefEditor03');
    this.$target04 = $target.find('.tit .svg_chiefEditor04');
    this.$target05 = $target.find('.tit .svg_chiefEditor05');
    this.$target06 = $target.find('.tit .svg_chiefEditor06');

    this.$targetPathDef = this.$targetDef.find('path');
    this.$targetPath01 = this.$target01.find('path');
    this.$targetPath02 = this.$target02.find('path');
    this.$targetPath03 = this.$target03.find('path');
    this.$targetPath04 = this.$target04.find('path');
    this.$targetPath05 = this.$target05.find('path');
    this.$targetPath06 = this.$target06.find('path');

    this.$targetPathList = [
      this.$targetPath01,
      this.$targetPath02,
      this.$targetPath03,
      this.$targetPath04,
      this.$targetPath05,
      this.$targetPath06
    ]

    this.lenList = [
      this.$targetPath01.length,
      this.$targetPath02.length,
      this.$targetPath03.length,
      this.$targetPath04.length,
      this.$targetPath05.length,
      this.$targetPath06.length
    ]

    this.$basis = this.$targetDef;

    this.cur = 0;
    this.next = 1;

    this.setup();
    this.start();
    this.setEvents();

  }

  EditorTitMorph.prototype = {

    setup: function() {

      this.$basis.attr('class', function(index, classNames) {return classNames + ' svg01';});

      this.s = new gb.SomeTimes(0,0);

    },

    start: function() {

      var self = this;
      this.s.add(function(){

        self.runFade.call(self,self.cur,self.next);

        self.cur++;
        self.cur = self.cur % 6;
        self.next++;
        self.next = self.next % 6;

      },3,3);
      this.s.start();

    },

    run: function() {

      var tl = new TimelineMax();
      var self = this;

      this.$targetPathDef.each(function(index, el) {

        // 余ったやつは消す
        if (self.lenList[self.next] < index + 1) {

          TweenMax
            .to($(this), 1, {
              opacity: 0
            })

        } else {

          // 各pathへクラスの付加
          var cls = self.$targetPathList[self.next].eq(index).attr('class'); //class
          $(this)
            .removeAttr('class')
            .attr('class', cls);

          // // モーフィング
          TweenMax
            .to($(this), 1.2, {
              morphSVG:{
                shape: self.$targetPathList[self.next].eq(index),
                // shapeIndex: 10
              },
              opacity: 1,
              ease: Power4.easeOut,
            })

        }
        
      });

      // svg全体のスタイルのためのクラス付加
      var removeAttr = ' svg0' + (this.cur + 1);
      var addAttr = ' svg0' + (this.next + 1);

      this.$basis
        .attr('class', function(index, classNames) {return classNames.replace(removeAttr, '');})
        .attr('class', function(index, classNames) {return classNames + addAttr;});

    },

    runFade: function(cur,next) {

      var tl = new TimelineMax();
      var self = this;

      // 現在のをフェードアウト
      TweenMax
        .to(this.$targets.eq(cur), 1.2, {
          opacity: 0,
          ease: Power2.easeOut,
        })

      // 次のをフェードイン
      TweenMax
        .to(this.$targets.eq(next), 1.2, {
          opacity: 1,
          ease: Power2.easeOut,
        })

    },

    setEvents: function() {

      var self = this;

      // gb.r.add(function(){

      //   // pcの横幅のときのみ
      //   if (gb.u.isResPC) self.run();        

      // })

    },


  }

  gb.EditorTitMorph = EditorTitMorph;

})();