//--------------------------------------------------
//
//  MultiVideo s
//
//--------------------------------------------------

import VideoMgr from '_MyLibs/EventMgr/VideoMgr.es6';
import FullSizeVideoList from '../_MyLibs/Display/Layout/FullSizeVideoList.es6';

export default class MultiVideo {

  constructor() {

    this.$wrap = $('.section01');
    this.$item= $('.section01 .time .item span');

    this.videoNum = 7;
    this.videoSrcList = [
      './ff15/royal/gallery2018/assets/resource/video/01_good.mp4',
      './ff15/royal/gallery2018/assets/resource/video/02_good.mp4',
      './ff15/royal/gallery2018/assets/resource/video/03_good.mp4',
      './ff15/royal/gallery2018/assets/resource/video/04_good.mp4',
      './ff15/royal/gallery2018/assets/resource/video/05_good.mp4',
      './ff15/royal/gallery2018/assets/resource/video/06_good.mp4',
      './ff15/royal/gallery2018/assets/resource/video/07_good.mp4',
    ]
    this.videoList = [];

    this.videoLoadCnt = 0;

    this.sumTime = 0;

    this.setEvents();
    this.setup();

  }

  setup() {


    // var cb = ()=>{

    //   this.videoLoadCnt++;
    //   if (this.videoLoadCnt == this.videoNum) {

    //     // 全て同時再生
    //     $.each(this.videoList,(index, el)=>{

    //       this.videoList[index].play();
          
    //     });

    //     gb.up.add('VideoMgr', this.loop.bind(this));
        
    //   };

    // };

    // loaderじゃなくてこちらでload
    // for (var i = 0; i < this.videoNum; i++) {
      
    //   var $wrap = $('.videoList .item').eq(i);
    //   var src = this.videoSrcList[i];
    //   var v = new VideoMgr(src, cb, $wrap);
    //   this.videoList.push(v);

    // };
    // log(this.videoList);



    // layout
    // 高さを設定
    $('.section01').height(gb.r.h);

    new FullSizeVideoList($('.section01'),$('.videoList'),1);


  }

  onResize() {

    $('.section01').height(gb.r.h);

  }

  loop() {

    // var cur = this.videoList[0].video.currentTime;

    // log(gb.up.cnt);

    // 全ての動画を同じ秒数で再生する
    // this.nowTime = Date.now();
    // var diffTime = (this.nowTime - this.lastTime) / 1000;
    // this.sumTime += diffTime;
    // this.lastTime = this.nowTime;
    // if (this.sumTime > 29 / 1000) {

      // for (var i = 0; i < this.videoList.length; i++) {
        
      //   if (i==0) continue;
      //   this.videoList[i].video.currentTime = this.videoList[0].video.currentTime;

      // };

        
        // log(this.videoList[0].video.currentTime);
        // this.videoList[0].video.currentTime += diffTime;

        // log(diffTime);

        // this.videoList[0].video.currentTime += this.sumTime;
        

        // this.sumTime = 0;

    // }; 

    if (gb.up.cnt % 30 == 0) {

      // append
      for (var i = 0; i < this.videoList.length; i++) {
        
        this.$item.eq(i).html(this.videoList[i].video.currentTime);

      };

      // log

      // log('1',this.videoList[0].video.currentTime);
      // log('2',this.videoList[1].video.currentTime);
      // log('3',this.videoList[2].video.currentTime);
      // log('4',this.videoList[3].video.currentTime);
      // log('5',this.videoList[4].video.currentTime);
      // log('6',this.videoList[5].video.currentTime);
      // log('7',this.videoList[6].video.currentTime);

    };

  }

  play() {

    // videomgrインスタンスにセット
    $.each(gb.loadMgr.videoLoader.videoList,(index, el)=>{

      var $wrap = $('.videoList .item').eq(index);
      var v = new VideoMgr(null, null, $wrap);
      v.video = gb.loadMgr.videoLoader.videoList[index];
      v.append();
      this.videoList.push(v);
      
    });

    // 同時再生 1秒後に
    setTimeout(()=>{

      this.$wrap.css('opacity', 1);

      $.each(gb.loadMgr.videoLoader.videoList,(index, el)=>{

        this.videoList[index].play();
        
      });

      this.nowTime = Date.now();
      this.lastTime = this.nowTime;
      gb.up.add('VideoMgr', this.loop.bind(this));

    },1000);

    // setTimeout(()=>{

    //   $.each(gb.loadMgr.videoLoader.videoList,(index, el)=>{

    //     this.videoList[index].video.currentTime = 30;
        
    //   });

    // },5000);

  }

  setEvents () {

    gb.r.add('VideoMgr', this.onResize.bind(this));


    $(window).on('click', (event)=>{
      
        $.each(gb.loadMgr.videoLoader.videoList,(index, el)=>{

          this.videoList[index].video.currentTime = 0;
          
        });

    });


  }

}
