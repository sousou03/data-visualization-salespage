// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../Object_Point/Point.es6';

import Params from '../../UtilCV/Params_Cover/Params.es6';

export default class Line extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.p = new Params();

    // ready
    this.ready();

    this.loopStart = true;

  }


  ready() {

    this.img = new Image();
    this.img.onload = this.add.bind(this);
    this.img.src = './ff15/royal/gallery2018/assets/resource/img/img1.png';

  }

  add() {

    // layer, object
    this.container = new createjs.Container();
    this.bmp = new createjs.Bitmap(this.img);

    // Bitmapの中心座標を取得
    var x = this.bmp.getBounds().width / 2;
    var y = this.bmp.getBounds().height / 2;

    // 画像の中心に基準点を
    this.bmp.x = x;
    this.bmp.y = y;
    this.bmp.regX = x;
    this.bmp.regY = y;
    this.bmp.rotation = 25;
    this.bmp.scaleX = 0.5;
    this.bmp.scaleY = 0.5;

    // pos
    this.container.x = gb.r.w/2 - x;
    this.container.y = gb.r.h/2 - y;
    
    // add
    this.container.addChild(this.bmp);
    this.stage.addChild(this.container);

  }

  update() {

  }
　
  draw() {

  }

  show() {

  }

  hide() {

  }

}