//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Objects from './ObjectCV/Objects.es6';

import Base from '_MyLibs/Util/Base.es6';

export default class Content extends Base {

  constructor($wrap, id) {

    super();

    this.$wrap = $wrap;
    this.id = id;

    // canvas size
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isRetina = true;

    this.setup();
    this.setEvents();
    // this.timeline();

  }

  setup() {

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.append(dom);
    // style, layout
    this.canvas = document.getElementById(this.id);
    this.canvas.style.backgroundColor = "#000000";
    this.ctx = this.canvas.getContext("2d");
    this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'fixed',top: 0,left: 0,'z-index':10000,opcaity:1})

    if (this.isRetina) {
      // this.ctx.scale(2,2);
      this.stage.scaleX = 2;
      this.stage.scaleY = 2;
    }

    this.onResize();

    // obj生成
    this.add();

    this.loopStart = true;

  }

  add() {

    // obj生成
    this.c = new Objects(this.stage);

  }

  update() {

    this.stage.update();

  }

  timeline() {


  }

  onResize() {

    if (this.isRetina) {
      // attribute
      this.canvas.width = gb.r.w * 2;
      this.canvas.height = gb.r.h * 2;

      // css
      $(this.canvas).width(gb.r.w);
      $(this.canvas).height(gb.r.h);
    } else {

      this.canvas.width = gb.r.w;
      this.canvas.height = gb.r.h;      
      
    }

  }

}