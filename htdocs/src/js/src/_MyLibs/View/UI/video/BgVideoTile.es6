//--------------------------------------------------
//
//  BgVideoTile
//
//--------------------------------------------------

export default class BgVideoTile {

  constructor(param){


    this.setup();
    this.setEvents();

  }

  setup() {

    var id = 'UAWcs5H-qgQ';

    $('.videoTile').each(function(index, el) {

      var i = gb.u.add0(index + 1);
      // if (index > 8) return;

      gb.youtube.createIframe('videoTile'+i, id);
      
    });

  }

  setEvents() {


  }

}