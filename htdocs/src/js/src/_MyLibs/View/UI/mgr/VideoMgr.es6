//--------------------------------------------------
//
//  VideoMgr
//
//--------------------------------------------------

import FullSize from '..//Display/Layout/FullSize.es6';

export default class VideoMgr {

  constructor(src, cb, $wrap) {

    this.$wrap = $wrap || $('body');

    this.video = null;
    this.src = src; //'./ff15/royal/gallery2018/assets/resource/video/bg.mp4';
    this.state = '';


    // param
    this.w = 0;
    this.h = 0;
    this.duration = 0; 
    this.currentTime = 0;
    this.volume = 1;
    this.loop = false;
    this.autoplay = false;
    this.muted = false;
    this.controls = false;

    this.isLoad = false;
    this.isPlay = false;

    // コールバック
    this.cb = cb || (()=>{});

    this.setup();

  }

  ready() {

    this.video.src = this.src;
    this.getAttr();
    this.video.loop = true;
    // this.video.controls = true;
    // append
    this.prepend();

    log('ready');

  }

  setup() {

    // dom生成
    this.video = document.createElement('video');

    // type確認
    var type = this.support(this.video);
    if (type == "") {
      return;
    }

    // videoのload
    this.load();

    // gb.u.d.start();

  }

  load() {

    // this.video.addEventListener("canplay", ()=>{
    this.video.addEventListener("canplaythrough", ()=>{

      if (!this.isLoad) {

        this.isLoad = true;
        this.getAttr();
        this.cb();

        // this.video.loop = true;
        // this.video.controls = true;

        // append
        this.prepend();
        // this.append();
        // this.play();

      };

    }, false);

    this.video.src = this.src;

  }

  append() {

    this.$wrap.append(this.video);

  }

  prepend() {

    this.$wrap.prepend(this.video);

  }

  fullsize($wrap, eventName, w, h) {

    var l = new FullSize($wrap, $(this.video), 0, 'center');
    l.targetDefW = w;
    l.targetDefH = h;
    l.run();

  }

  support() {

    var ext = "";
    if (this.video.canPlayType("video/webm") == "probably" || this.video.canPlayType("video/webm") == "maybe") {
      ext = "webm";
    } else if(this.video.canPlayType("video/mp4") == "probably" || this.video.canPlayType("video/mp4") == "maybe") {
      ext = "mp4";
    } else if(this.video.canPlayType("video/ogg") == "probably" || this.video.canPlayType("video/ogg") == "maybe") {
      ext = "ogg";
    }

    return ext;
  }

  getAttr() {

    this.w = this.video.videoWidth;
    this.h = this.video.videoHeight;
    this.duration = this.video.duration;
    this.currentTime = this.video.currentTime;
    this.volume = this.video.volume;
    this.loop = this.video.loop;
    this.autoplay = this.video.autoplay;
    this.muted = this.video.muted;
    this.controls = this.video.controls;

    log(this);
    
  }

  setAttr() {

    
  }

  seekTo(toTime) {

    this.video.currentTime = toTime;

  }

  play() {

    this.video.play();
    this.isPlay = true;

  }

  pause() {
    
    this.video.pause();
    this.isPlay = false;
    
  }

  volUp() {
    
    this.video.volume = this.video.volume + 0.25;

  }

  volDown() {
    
    this.video.volume = this.video.volume - 0.25;

  }

  tweenVolume (val,dur = 0.5,ease = Power4.easeIn){ 

    // 0.0（無音）～ 1.0（最大）

    TweenMax.to(this.video, dur, {volume:val, ease: ease});

  }

  onLoadStart() {

    log('loadstart');

  }

  onProgress() {

    log('progress');

    if (this.video.buffered.length > 0 && this.video.buffered.end && this.video.duration) {
        var percent = this.video.buffered.end(0) / this.video.duration;
    } else if (this.video.bytesTotal != undefined && this.video.bytesTotal > 0 && this.video.bufferedBytes != undefined) {
        var percent = this.video.bufferedBytes / this.video.bytesTotal;
    }

    log(percent);

  }

  onSuspend() {

    log('suspend');

  }

  onLoadedmetadata() {

    log('loadedmetadata');

  }

  onCanplaythrough() {

    log('canplaythrough');

  }

  onLoop() {

    if (this.video.buffered.length > 0 && this.video.buffered.end && this.video.duration) {
        var percent = this.video.buffered.end(0) / this.video.duration;
    } else if (this.video.bytesTotal != undefined && this.video.bytesTotal > 0 && this.video.bufferedBytes != undefined) {
        var percent = this.video.bufferedBytes / this.video.bytesTotal;
    }

    log(percent);

    if(percent>=1 && !isLock){
      isLock = true;
      log(gb.u.d.s());
    }

  }

  setEvents() {

    var self = this;

    // this.video.addEventListener("timeupdate", function () {
    //   if(self.video.currentTime >= 6.0) {
    //     self.video.currentTime = 5.0;
    //     // self.video.pause();
    //   }
    // });

    // 再生完了
    // v.addEventListener("ended", function(){
    //   document.getElementById("kanryou").innerHTML = "動画の再生が完了しました。";
    // }, false);


    // this.video.addEventListener("loadstart", this.onLoadStart.bind(this), false);
    // this.video.addEventListener("progress", this.onProgress.bind(this), false);
    // this.video.addEventListener("suspend", this.onSuspend.bind(this), false), false);
    // this.video.addEventListener("loadedmetadata", this.onLoadedmetadata.bind(this), false);
    // this.video.addEventListener("canplaythrough", this.onCanplaythrough.bind(this), false);
    // gb.up.add('video', this.onLoop.bind(this));

  }

}