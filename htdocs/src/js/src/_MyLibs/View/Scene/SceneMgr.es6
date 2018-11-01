//--------------------------------------------------
//
//  SceneMgr
//
//--------------------------------------------------

//   参考
//     sceneMgr(scroll) ホさん
//       Scenes
//         Actor
//         Scene
//           obj

import Base from '_MyLibs/Util/Base.es6';

import Time from '_MyLibs/Util/Time.es6';
import Profiler from '_MyLibs/Util/Profiler.es6';

export default class SceneMgr extends Base {

  constructor($target) {

    super();

    this.name = 'SceneMgr';

    this.$target = $('html');

    // scene
    this.scenes = [];

    this.status = 'start';

    this.setup();
    this.setEvents();

  }

  setup() {

    this.time = new Time();

    // if (gb.conf.PARAM) new Param();
    if (gb.conf.STATS) new Profiler();

  }

  update() {

    // 時間のupdate
    this.time.update();

    // 経過時間 this.time.s;
    // フレーム gb.up.frame

    // this.timeStatus(this.time.s); // timeによるstatus変更
    // this.frameStatus(gb.up.frame); // frameによるstatus変更

    // log(this.time.s,gb.up.frame,this.status);

  }

  timeStatus(s) {

    // sample
    if (s < 1) $(window).trigger('start');
    else if (s < 2) $(window).trigger('scene01');
    else if (s < 3) $(window).trigger('scene02');
    else if (s < 4) $(window).trigger('scene03');
    else if (s < 5) $(window).trigger('scene04');
    else $(window).trigger('end'); 

  }

  frameStatus(f) {

    if (f < 100) this.status = 'start';
    else if (f < 200) this.status = 'scene01';
    else if (f < 300) this.status = 'scene02';
    else if (f < 400) this.status = 'scene03';
    else if (f < 500) this.status = 'scene04';
    else this.status = 'end;'

  }

  timeline() {

    this.tl = new TimelineMax();

  }

  start() {

    // ループスタート
    this.time.setup();    
    this.loopStart = true;

    // タイムラインスタート
    if (gb.conf.OPENING) this.timeline();
    else this.$target.css('opacity', 1);

  }

  add(nth) {

    var s = new Scene();
    this.scenes.push(s);
    
  }

  remove() {


  }

  setEvents() {

    super.setEvents();

    // $(window).one('start', (event)=>{log('start')});
    // $(window).one('scene01', (event)=>{log('scene01')});
    // $(window).one('scene02', (event)=>{log('scene02')});
    // $(window).one('scene03', (event)=>{log('scene03')});
    // $(window).one('scene04', (event)=>{log('scene04')});
    // $(window).one('end', (event)=>{log('end')});

  }
  
  removeEvents() {

    super.removeEvents();


  }
  
}