//--------------------------------------------------
//
//  Bg
//
//--------------------------------------------------

(function(){

  

  function Bg() {

    this.Bg;
    this.geometry = null;
    this.material = null;

    this.video = null;
    this.plane = null;

    this.defWW = 1920;
    this.defHH = 1080;
    this.defW = 305;
    this.rate = 0;
    this.rateW = 0;

    this.lb = null; //layout background

    this.setup();

  }

  Bg.prototype = {

    setup: function() {

      var self = this;

      var rtc = new gb.WebRTC();
      rtc.getStream()
        .then(function(){

          gb.video = self.video = new gb.Video(rtc.videoSrc);
          gb.video.cb = self.create.bind(self);
          self.video.setup();

        })

    },

    create: function() {

      // videoをテクスチャとして使う
      texture = new THREE.VideoTexture(gb.video.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;

      // ie11の場合
      // ctx = canvas.getContext('2d');
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // // 生成したcanvasをtextureとしてTHREE.Textureオブジェクトを生成
      // texture = new THREE.Texture(canvas);

      // videoのサイズ設定
      gb.rate = this.rate = gb.video.h/gb.video.w;
      this.defW = 305;var h = this.defW * this.rate;

      this.geometry = new THREE.PlaneGeometry( this.defW, h, 32 );
      this.material = new THREE.MeshBasicMaterial( {map: texture, transparent: true} );
      // this.material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true} );

      this.plane = new THREE.Mesh( this.geometry, this.material );
      gb.scene.scene.add( this.plane );

      // 透明度設定
      this.plane.position.z = -1;
      // this.plane.material.opacity = 0.195;
      this.plane.material.opacity = 1;

      $(window).trigger('videoLoaded');


      this.onResize();
      this.setEvents();

      

    },

    setVideoSize: function() {

      // videoのセットサイズ          
      this.lb = new gb.LayoutBackground($('body'),$(this.video.video));
      this.setEvents();

    },

    setTransparent: function(val) {

      this.plane.material.opacity = val;

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = val.target || 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.plane.material, t, {
        opacity: v,
        ease : e,
      });

    },

    update: function() {




    },

    onResize: function() {

      var w = window.innerWidth;
      var h = window.innerHeight;

      var rateW = window.innerHeight / window.innerWidth;
      var r = w/h;

      if (rateW < this.rate) {

        this.plane.scale.set(r*0.58,r*0.58,r*0.58)

      } else {

        // log(2,scaleY);

        this.plane.scale.set(1,1,1);

      }

    },

    setEvents: function() {

      if (!gb.u.isIe11Under()) {

        gb.r.add(this.onResize.bind(this));

      } else {

        gb.r.add(this.lb.run.bind(this.lb));

      }
      

    },

  }

  // 公開api
  gb.Bg = Bg;
  
})();