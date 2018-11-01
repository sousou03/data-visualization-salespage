// ------------------------------------------------------------
//
//  Spiral
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Spiral(x,y,ctx,cw,ch,mode) {

    this.x = x || 0;
    this.y = y || 0;
    this.ctx = ctx;
    this.cw = cw;
    this.ch = ch;
    this.num = 80
    this.pList = [];
    this.bgColor = "rgba(0,0,0,.3)",
    this.pos = {
          x:0,
          y:0,
        };
    this.isClick = true;

    this.mode = mode || 'circle';
    this.setTimer = null;

    if (this.mode !== 'line') this.setEvents();

  }

  Spiral.prototype = {

    setup: function() {

      for (var i = 0; i < this.num; i++) {
        var p = new gb.Vec2(0,0,2*Math.PI * Math.random(),360 * Math.random());
        this.pList.push(p);
      };

    },

    update: function() {

      if (this.isClick) {

      for (var i = 0; i < this.pList.length; i++) {

        var p = this.pList[i];

        if (p.isRemove) {
            
            this.pList.splice(i,1)
            var p = new gb.Vec2(0,0,2*Math.PI * Math.random(),360 * Math.random());
            this.pList.push(p);

        };

        p.update(i,this.num,this.x,this.y,this.mode);
        // p.update(i,num,pos.x,pos.y);
        
      };

      } else {

        for (var i = 0; i < this.pList.length; i++) {

          var p = this.pList[i];

          p.burst(i,this.num,this.x,this.y,this.mode);
          
        };

      } 

    },

    draw: function() {

      for (var i = 0; i < this.pList.length; i++) {

        var p = this.pList[i];
        p.draw(this.ctx,this.isClick);

      };

    },

    onStart: function() {

      this.isClick = true;

    },

    onEnd: function() {

      var self = this;

      var gb = jp.co.sjPlus;   

      if (gb.url == 'undefined') {

        self.isClick = false;  

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){
          self.isClick = false;  
        },1000);

      }

    },

    setEvents: function() {

      var self = this;

      $(window).on('start', function(){
        self.onStart.call(self);
      });
      $(window).on('end', function(){
        self.onEnd.call(self);
      });

    },

  };

  gb.Spiral = Spiral;

})();