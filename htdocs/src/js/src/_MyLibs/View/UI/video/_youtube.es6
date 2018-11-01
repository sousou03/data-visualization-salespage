//--------------------------------------------------
//
//  Sec01Video
//
//--------------------------------------------------
import YoutubeForSec01 from './YoutubeForSec01.es6';

export default class Sec01Video {

  constructor(param){

    this.setup();
    this.setEvents();

  }

  setup() {

    // var id = 'xW2oNpNrKd0';
    var videoList = [];
    // // var id = 'VbfpW0pbvaU';

    // if (gb.conf.RELEASE) {

    //   if (gb.time.isState == 'morning') {
        
    //     id = 'fBKPkTq-qZs';
    //     videoList = [
    //       'dKkvR-ZOeQA',
    //       'MfQ-zqrf29g',
    //     ].join(',')

    //   } else if (gb.time.isState == 'afternoon') {

    //     id = 'EcFM37GnuMA';
    //     videoList = [
    //       'X6yBpyyzRA4',
    //       'wxS4xeBhp4Q',
    //     ].join(',')

    //   } else if (gb.time.isState == 'night') {

    //     id = '7agAKPJY-10';
    //     videoList = [
    //       'ANgcR7t2GxQ',
    //       'KkGPdREmj0A',
    //     ].join(',')

    //   }

    // } else {

    //   id = 'fBKPkTq-qZs';
    //   videoList = [
    //     'dKkvR-ZOeQA',
    //     'MfQ-zqrf29g',
    //     'EcFM37GnuMA',
    //     'X6yBpyyzRA4',
    //     'wxS4xeBhp4Q',
    //     '7agAKPJY-10',
    //     'ANgcR7t2GxQ',
    //     'KkGPdREmj0A',
    //   ].join(',')

    // }

    // // debug
    // if (gb.conf.movie == 'morning') {
    //   id = 'fBKPkTq-qZs';
    //   videoList = [
    //     'dKkvR-ZOeQA',
    //     'MfQ-zqrf29g',
    //   ].join(',')
    // };
    // if (gb.conf.movie == 'afternoon') {
    //   id = 'EcFM37GnuMA';
    //   videoList = [
    //     'X6yBpyyzRA4',
    //     'wxS4xeBhp4Q',
    //   ].join(',')
    // };
    // if (gb.conf.movie == 'night') {
    //   id = '7agAKPJY-10';
    //   videoList = [
    //     'ANgcR7t2GxQ',
    //     'KkGPdREmj0A',
    //   ].join(',')
    // };


    // 一本の長い動画
    // videoList.push('V7Q73letvGM');
    videoList.push('xW2oNpNrKd0');

    this.video = new YoutubeForSec01('sec01Video', gb.conf.youtubeID01, videoList);
    
  }

  onSection01(cur,prev) {

    if (cur == 'top') {

      gb.sec01Video.video.player.playVideo();

    } else {

      gb.sec01Video.video.player.pauseVideo();

    }

  }

  setEvents() {

    // gb.hash.onChangeFuncList.push(this.onSection01.bind(this));

  }

}