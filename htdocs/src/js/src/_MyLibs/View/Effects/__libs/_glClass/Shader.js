//--------------------------------------------------
//
//  Shader
//
//--------------------------------------------------

(function(){

  

  function Shader() {

    this.mesh;
    this.geometry = null;
    this.material = null;

    this.shader = null;

    this.setup();
    // this.setupForWebCamara(); //独自shader
    this.setEvents();

  }

  Shader.prototype = {

    setup: function() {

      // this.shader = new gb.Shape(this.create.bind(this));
      // this.shader = new gb.Plasma(this.create.bind(this));
      this.shader = new gb.Color(this.create.bind(this));

    },

    create: function() {

      // this.geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      this.geometry = new THREE.BoxGeometry(10, 10, 10);
      this.material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      gb.scene.scene.add(this.mesh);

    },

    setupForWebCamara: function() {

      var self = this;

      var rtc = new gb.WebRTC();
      rtc.getStream()
        .then(function(){

          gb.video = self.video = new gb.Video(rtc.videoSrc);
          gb.video.cb = self.createForWebCamara.bind(self);
          self.video.setup();

        })

    },

    createForWebCamara: function() {

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

      this.shader = new gb.WebCamera(this.create.bind(this),texture);

      // videoのサイズ設定
      this.geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      this.material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      gb.scene.scene.add(this.mesh);

      $(window).trigger('videoLoaded');

    },


    update: function() {

      this.shader.uniforms.t.value += 0.01;

    },

    onResize: function() {

      this.shader.setResolution();

    },

    setEvents: function() {

      gb.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.Shader = Shader;
  
})();