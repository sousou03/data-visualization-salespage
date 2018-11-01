// ------------------------------------------------------------
//
//  Point
//
// ------------------------------------------------------------

export default class Point {

  constructor(x,y) {

    this.sx = 0;
    this.sy = 0;

    this.w = 0;
    this.h = 0;

    this.ex = 0;
    this.ex = 0;

    this.x = x || 0; //previous mouse x
    this.y = y || 0; //previous mouse y
    this.vx = 0; //center x
    this.vy = 0; //center y

    this.defX = x || 0;
    this.defY = y || 0;

    this.px = 0; //previous mouse x
    this.py = 0; //previous mouse y

    this.radius = 0;    // 半径
    this.color = null;  // 色
    this.isRemove = false;// 消去フラグ

    // this.GRAVITY = 0.4;
    this.GRAVITY = 0;
    this.SPRING = 0.08;  // バネ係数
    this.FRICTION = 0.97;  // 摩擦係数
    this.MAX_DIS = 100;  // ボールがマウスに反応する最大距離

    this.top = 0;
    this.left = 0;

  }

  create() {


  }

  update() {


  }

  draw() {

    
    
  }

  loop() {

  }


}