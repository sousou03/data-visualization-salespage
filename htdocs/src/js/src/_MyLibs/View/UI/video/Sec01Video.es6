//--------------------------------------------------
//
//  Sec01Video
//
//--------------------------------------------------
import YoutubeForSec01 from './YoutubeForSec01.es6';

export default class Sec01Video {

  constructor(param){

    // sec01video用
    gb.rm.total++;
    if (gb.u.isSP) gb.rm.completed++;

    if (gb.u.isPC) this.setup();
    this.setEvents();

  }

  setup() {

    this.video = new YoutubeForSec01('sec01Video', gb.conf.youtubeID01, null);
    
  }

  setEvents() {


  }

}