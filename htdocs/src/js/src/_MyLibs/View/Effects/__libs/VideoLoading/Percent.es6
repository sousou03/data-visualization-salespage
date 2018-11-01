//--------------------------------------------------
//
//  Percent
//
//--------------------------------------------------

export default class Percent {

  constructor() {

    this.$wrap = $('.section.loading');

    this.text = 0;
    this.font = '48px Cardo';
    this.color = '#fff';

    this.loopStart = true;
    this.val = 0;

    this.setup();
    this.setEvents();

  }

  setup() {

    // canvas要素追加
    var dom = '<canvas id="percentCV"></canvas>';
    this.$wrap.append(dom);
    // 初期設定
    this.canvas = document.getElementById("percentCV");
    gb.stage = this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'absolute',top: 0,left: 0})

    this.text = new createjs.Text(this.text, this.font, this.color);
    this.text.textAlign = 'right';
    this.text.textBaseline = 'middle';
    this.text.x = gb.r.w / 2 + 25;
    this.text.y = gb.r.h / 2;
    this.stage.addChild(this.text);

    this.text02 = new createjs.Text('%', '24px Cardo', this.color);
    this.text02.textAlign = 'center';
    this.text02.textBaseline = 'middle';
    this.text02.x = this.text.x + 15;
    this.text02.y = this.text.y + 8;
    this.stage.addChild(this.text02);

    // this.debug();
    this.onResize();

  }

  update() {

    // pos
    this.text.x = gb.r.w / 2 + 25;
    this.text.y = gb.r.h / 2;
    this.text02.x = this.text.x + 15;
    this.text02.y = this.text.y + 8;

    if (gb.rm) this.val = Math.floor(gb.rm.readyPercent.percent);
    this.text.text = this.val;
    
  }

  draw() {


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

  }

  setEvents() {

    gb.r.add('Percent', this.onResize.bind(this));
    gb.up.add('Percent', this.loop.bind(this));

  }

}