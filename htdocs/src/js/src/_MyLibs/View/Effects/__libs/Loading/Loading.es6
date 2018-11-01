//--------------------------------------------------
//
//  Loading
//
//--------------------------------------------------

export default class Loading {

  constructor() {

    this.$wrap = $('#loading');

    this.ballRadius = 2.5;
    this.radius = 140;
    this.lineWidth = 1;
    this.color = '#fff';
    this.curPI = 0;

    this.loopStart = true;
    this.val = 0;

    this.cx = gb.r.w/2;
    this.cy = gb.r.h/2;

    this.setup();
    this.setEvents();

  }

  setup() {

    // canvas要素追加
    var dom = '<canvas id="loadCV"></canvas>';
    this.$wrap.append(dom);
    // 初期設定
    this.canvas = document.getElementById("loadCV");
    gb.stage = this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'absolute',top: 0,left: 0})

    this.create();

    this.onResize();

  }

  create() {

    this.ball = new createjs.Shape();
    this.line01 = new createjs.Shape();
    this.line02 = new createjs.Shape();

    this.ball.graphics
      .beginFill(this.color)
      .drawCircle(this.cx + Math.cos(-Math.PI/2 + this.curPI) * this.radius, this.cy + Math.sin(-Math.PI/2 + this.curPI) * this.radius, this.ballRadius);
    
    this.line01.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke('rgba(255,255,255,0.4)')
      .arc(this.cx, this.cy, this.radius, -Math.PI/2,Math.PI*2);
    
    this.line02.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke(this.color)
      .arc(this.cx, this.cy, this.radius, -Math.PI/2,-Math.PI/2 + this.curPI);
    
    this.stage.addChild(this.ball);
    this.stage.addChild(this.line01);
    this.stage.addChild(this.line02);

  }

  update() {

    var rate = gb.rm.current / 100;
    this.curPI = rate * Math.PI * 2
    
  }

  draw() {

    this.ball.graphics.clear();
    this.line01.graphics.clear();
    this.line02.graphics.clear();

    this.ball.graphics
      .beginFill(this.color)
      .drawCircle(this.cx + Math.cos(-Math.PI/2 + this.curPI) * this.radius, this.cy + Math.sin(-Math.PI/2 + this.curPI) * this.radius, this.ballRadius);
    
    this.line01.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke('rgba(255,255,255,0.4)')
      .arc(this.cx, this.cy, this.radius, -Math.PI/2,Math.PI*2);
    
    this.line02.graphics
      .setStrokeStyle(this.lineWidth)
      .beginStroke(this.color)
      .arc(this.cx, this.cy, this.radius, -Math.PI/2,-Math.PI/2 + this.curPI);

  }

  loop() {

    if (this.loopStart) {

      this.update();
      this.draw();

      this.stage.update();

    };

  }

  play() {

    this.loopStart = true;

  }

  pause() {

    this.loopStart = false;

  }

  debug() {


  }

  onResize() {

    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;

    this.cx = gb.r.w/2;
    this.cy = gb.r.h/2;

  }

  setEvents() {

    gb.r.add('loadCV', this.onResize.bind(this));
    gb.up.add('loadCV', this.loop.bind(this));

  }

  removeEvents() {

    gb.r.remove('loadCV');
    gb.up.remove('loadCV');

  }

}