//--------------------------------------------------
//
//  Plane02
//
//--------------------------------------------------

import ClockShader from '../../../_Shader/Clock.es6';

export default class Plane {

  constructor() {

    this.Plane02;
    this.geometry = null;
    this.material = null;

    this.video = null;
    this.plane02 = null;

    this.defWW = 1920;
    this.defHH = 1080;
    this.defW = 305;
    this.rate = 0;
    this.rateW = 0;

    this.lb = null; //layout background

    this.setup();

  }

  setup() {

    var shaders = [];
    var shaderLoadList = [
                       ClockShader,
                       // gb.Color,
                       // gb.Plasma,
                       // gb.Sepia,
                       // gb.Mosaic,
                       // gb.ZoomBlur,
                       // gb.Transition01,
                       // gb.Transition02,
                       // gb.Transition03,
                       // gb.Transition04,
                       // gb.Transition05,
                     ];

    var shaderSerialLoad = (len, cb)=>{

        var shader,cnt=0;

        var load = (i)=>{
          shader = new shaderLoadList[i](comp);
          shaders.push(shader);
        };

        var comp = function(){
          cnt++;
          if(cnt == len) cb(shaders);
          else load(cnt);
        };

        load(cnt);

    }

    shaderSerialLoad(shaderLoadList.length,(shaders)=>{

      this.shader = shaders[shaders.length-1];
      // this.create();

      var geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
      // var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
      var material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.plane02 = new THREE.Mesh(geometry, material);
      this.plane02.scale.x = this.plane02.scale.y = 1100.0;

      gb.scene.scene.add( this.plane02 );

      // log()

      // this.onResize();
      this.setEvents();


      // タイムラインのsetup
      gb.ClockEf.timeline.setup();
      // シェーダーをロード完了したらloopは開始しておく
      gb.ClockEf.loop.start();

    })

  }

  create() {

    // var textureList = [
    //   './ff15/royal/gallery2018/assets/img/blue.png',
    //   './ff15/royal/gallery2018/assets/img/brown.png'
    // ];      
    // var textures = [];

    // var textureSerialLoad = (len, cb)=>{

    //     var texture,cnt=0;

    //     var load = (i)=>{
    //       texture = THREE.ImageUtils.loadTexture(textureList[i], null ,comp);
    //       textures.push(texture);
    //     };

    //     var comp = function(){
    //       cnt++;
    //       if(cnt == len) cb(textures);
    //       else load(cnt);
    //     };

    //     load(cnt);

    // }

    // textureSerialLoad(textureList.length, (textures)=>{

    //   var w = textures[0].image.width / textures[0].image.width;
    //   var h = textures[0].image.height / textures[0].image.width;

    //   var geometry = new THREE.PlaneGeometry(w, h, 1, 1);
    //   // var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
    //   var material = new THREE.ShaderMaterial( {
    //                         uniforms: this.shader.uniforms,
    //                         vertexShader: this.shader.vs,
    //                         fragmentShader: this.shader.fs
    //                       });

    //   this.plane02 = new THREE.Mesh(geometry, material);
    //   this.plane02.scale.x = this.plane02.scale.y = 1100.0;

    //   gb.scene.scene.add( this.plane02 );

    //   // this.onResize();
    //   this.setEvents();

      // var vFOV = gb.camera.fov * Math.PI / 180;  // convert vertical fov to radians
      // var dist = gb.camera.camera.position.z - this.plane02.position.z;//The distance from the camera to the front face (important!) of the cube is 750 - 500 - 50 = 200. 
      // var height = 2 * Math.tan( vFOV / 2 ) * dist;
      // var width = height / h * w;

      // テクスチャをuniform変数に追加
      // this.shader.uniforms.from.value = textures[0];
      // this.shader.uniforms.to.value = textures[1];
      // this.shader.uniforms.r.value.x = textures[0].image.width;
      // this.shader.uniforms.r.value.y = textures[0].image.height;
      // log(width,height);

      // this.plane02.scale.z = 1.2,
      // this.plane02.scale.y = 1.2,
      // this.plane02.scale.x = 1.2;

    // })
    
  }

  setVideoSize() {

    // videoのセットサイズ          
    // this.lb = new gb.LayoutBackground($('body'),$(this.video.video));
    // this.setEvents();

  }

  setTransparent(val) {

    // this.plane02.material.opacity = val;

  }

  tweenTransparent(time,val) {

    // var t = time || 1.0;
    // var v = val.target || 1.0;
    // var e = val.ease || Power2.easeOut;

    // TweenMax.to(this.plane02.material, t, {
    //   opacity: v,
    //   ease : e,
    // });

  }

  update() {




  }

  onResize() {

    // var w = window.innerWidth;
    // var h = window.innerHeight;

    // var rateW = window.innerHeight / window.innerWidth;
    // var r = w/h;

    // if (rateW < this.rate) {

    //   this.plane02.scale.set(r*0.58,r*0.58,r*0.58)

    // } else {

    //   // log(2,scaleY);

    //   this.plane02.scale.set(1,1,1);

    // }

  }

  setEvents() {

    // if (!gb.u.isIe11Under()) {

    //   gb.r.add(this.onResize.bind(this));

    // } else {

    //   gb.r.add(this.lb.run.bind(this.lb));

    // }
    

  }

}
