//--------------------------------------------------
//
//  Cv2dMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function Cv2dMotion() {

    this.tlMain = new TimelineMax();


    this.setup();
    this.run();
    this.setEvents();

  }

  Cv2dMotion.prototype = {

    setup: function() {

      gb.dmLibs = new gb.Cv2dMotionLibs();

    },

    run: function() {

      // 最初
      gb.opening = new gb.Opening();
      
      gb.section01 = new gb.Section01();
      gb.section02 = new gb.Section02();
      gb.section03 = new gb.Section03();
      gb.section04 = new gb.Section04();
      gb.section05 = new gb.Section05();

    },

    setEvents: function() {

      // hover
      new gb.HoverShare();
      // hover
      gb.applyBtn = new gb.ApplyBtn();
      // click
      new gb.QAAccordion();


    },

  }

  // 公開api
  gb.Cv2dMotion = Cv2dMotion;
  
})();