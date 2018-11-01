//--------------------------------------------------
//
//  BufferLineParts
//
//--------------------------------------------------

(function(){

  

  function BufferLineParts() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.points = [
      {x:0,y:0,z:0}, //startPoint
      {x:0,y:0,z:0}, //endPoint
    ]

    this.positions = [];
    this.colors = [];
    this.num = 2;


    this.setup();
    this.create();

  }

  BufferLineParts.prototype = {

    setup: function() {


    },

    create: function() {

    },

    setVertex: function() {



    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferLineParts = BufferLineParts;
  
})();