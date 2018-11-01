//--------------------------------------------------
//
//  BgSVGMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function BgSVGMotion($target) {

    this.$target = $target;

    this.tlMain = new TimelineMax();

    this.setup();
    this.setEvents();

  }

  BgSVGMotion.prototype = {

    setup: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------      
      // this.$svg02 = $('.svg_ise01_02');
      // this.$svg03 = $('.svg_ise01_03');
      // this.$svg04 = $('.svg_ise01_04');
      // this.$svg05 = $('.svg_ise01_05');
      // this.$svg06 = $('.svg_ise02_01');

      this.runReady();

      // ------------------------------------------------------------
      // スクロール値の設定
      // ------------------------------------------------------------

      this.stInfo = {isLock: false,st: 0}
      // this.stInfoStep02 = {isLock: false,st: 0}
      // this.stInfoStep03 = {isLock: false,st: 0}

      this.getST();

    },

    getST: function() {

      this.stInfo.st = this.$target.offset().top + this.$target.height() * 2;

      // this.stInfoStep02.st = this.$svg01.offset().top + this.$svg01.height()/2;
      // this.stInfoStep03.st = this.$svg01.offset().top + this.$svg01.height()/2;

    },

    runReady: function() {

      // TweenMax.killTweensOf(this.$titImg);
      TweenMax.killTweensOf(this.$target.find('path'));

      TweenMax.to(this.$target.find('path'), 0.4, {drawSVG:0,fill: 'none',stroke: '#737270'});
      // TweenMax.set(this.$target.find('path'), {drawSVG:0,fill: 'none',stroke: 'red'});

    },

    run: function(sb) {

      // 特定のスクロールトップ値を超えた時に一度だけ処理をする
      if (this.stInfo.isLock && this.stInfo.st > sb) {
        this.runReady();
        this.stInfo.isLock = false;
      }
      if (!this.stInfo.isLock && this.stInfo.st < sb) this.stInfo.isLock = true;
      else return


      this.tlMain.kill();
      this.tlMain
        // svgの描画
        .to(this.$target.find('path'), 5.0, {
          drawSVG: '100%', 
          ease:Power2.easeInOut,
        })
        .to(this.$target.find('path'), 1.5, {
          fill: '#737270',
          stroke: 'none',
          ease:Power2.easeInOut,
        },'-=4.0')

    },

    onScroll: function() {

      var sb = gb.s.sb;

      this.getST();

      this.run(sb);

    },

    setEvents: function() {

      gb.s.add(this.onScroll.bind(this))

    },

  }

  // 公開api
  gb.BgSVGMotion = BgSVGMotion;
  
})();