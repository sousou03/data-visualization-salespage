// ------------------------------------------------------------
//
//  Vec2
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Vec2(x, y, rad, hue){

    this.x = x || 0;
    this.y = y || 0;
    this.vx = 0;
    this.vy = 0;

    this.r = 1 + 0.5*Math.random();
    this.freq = 0;
    this.radius = 0;
    this.rad = rad;
    this.hue = hue;
    this.h = 191 + Math.random()*90;
    this.s = 40 + Math.random()*60;
    this.b = 60 + Math.random()*40;

    this.life = 0;

    this.isRemove = false;

  }

  // プロパティとメソッド
  Vec2.prototype = {

    update: function (index,num,mx,my,mode) {

        // this.radius += 0.5;
        if (index<30) index = 30 + Math.random()*70;
        // this.radius += 0.8 * index/num;
        this.radius += 1.2 * index/num;
        this.freq += 0.8 * index/(num*5);

        this.x = mx + Math.cos(this.freq+this.rad) * this.radius;
        this.y = my + Math.sin(this.freq+this.rad) * this.radius;

        if (mode == 'line') {
          if (this.life > 5) {
              this.isRemove = true;
          };        
        } else {
          if (this.life > 30) {
              this.isRemove = true;
          };
        }
        this.life = this.radius;

    },

    burst: function (index,num,mx,my) {

        if (index<30) index = 30 + Math.random()*70;
        this.radius += 0.8 * index/num * 1;
        this.freq += 0.8 * index/(num*5) * 2;

        this.x = mx + Math.cos(this.freq+this.rad) * this.radius;
        this.y = my + Math.sin(this.freq+this.rad) * this.radius;

        if (this.life > 60) {
            this.isRemove = true;
        };
        this.life = this.radius * 1;

    },

    draw: function (ctx,isClick) {

        if (isClick) {
          ctx.fillStyle = "hsla("+this.h+", "+this.s+"%,"+this.b+"%,"+(1-this.life/30)+")";  
        } else {
          ctx.fillStyle = "hsla("+this.h+", "+this.s+"%,"+this.b+"%,"+(1-this.life/60)+")";  
        }
        // ctx.fillStyle = "hsla("+this.hue+", 99%,50%,"+(1-this.life/100)+")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();

    },

  };

  gb.Vec2 = Vec2;

})();