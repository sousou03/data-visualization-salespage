// ------------------------------------------------------------
//
//  Paths
//
// ------------------------------------------------------------

import Path from './Path.es6';

export default class Paths {

	constructor(defW, defH) {

    this.shape = new createjs.Shape();
    gb.stage.addChild(this.shape);

    this.pathList =[];
    this.bgCol ="#333";

    this.defW = defW;
    this.defH = defH;

    this.xPos01 = this.defW * Math.random();
    this.yPos01 = this.defH * Math.random();
    this.xPos02 =this.defW * Math.random();
    this.yPos02 = this.defH * Math.random();
    this.xPos03 =this.defW * Math.random();
    this.yPos03 = this.defH * Math.random();
    this.xPos04 =this.defW * Math.random();
    this.yPos04 = this.defH * Math.random();
    this.kigoHeight01 = 1;
    this.kigoHeight02 = 1;
    this.kigoHeight03 = 1;
    this.kigoHeight04 = 1;
    this.kigoWidth01 = 1;
    this.kigoWidth02 = 1;
    this.kigoWidth03 = 1;
    this.kigoWidth04 = 1;
    this.num = 1;
    this.rad = 30;

    this.kankakuHeight = 50;
    this.kankakuHeightNum = 1;
    // this.kankakuHeightNum = parseInt(this.defH/this.kankakuHeight);

    this.setup();

	}

  setup() {

    for(var i = 0; i < this.kankakuHeightNum; i++){

        var path = new Path(this.shape, this.defW, this.defH);
        path.pointsY = this.kankakuHeight * (i + 1);
        // path.pointsY = this.defH/2;
        path.setup();
        this.pathList.push(path);

    }

    this.pulse01 = new createjs.Shape();
    this.pulse02 = new createjs.Shape();
    this.pulse03 = new createjs.Shape();
    this.pulse04 = new createjs.Shape();
    gb.stage.addChild(this.pulse01);
    gb.stage.addChild(this.pulse02);
    gb.stage.addChild(this.pulse03);
    gb.stage.addChild(this.pulse04);

  }

  update() {

    this.shape.graphics.clear();

    this.pathList.forEach(function(element){
      
      element.update();

    });

  }

  initImpulse(force, num) {

    var strength = force + Math.random() * force;
    var radius = 100;

    for (var i = 0; i < num; i++) {

        // 上
        this.xPos01 += this.kigoWidth01 * 30;
        if(this.xPos01 > this.defW) {
            this.xPos01 = this.defW;
            this.kigoWidth01  = -1;
        }
        if(this.xPos01 < 0) {
            this.xPos01 = 0;
            this.kigoWidth01 = 1;
        }

        var xPos = this.xPos01;
        var yPos = this.defH/8;

        this.pathList[0].setCircle(xPos, yPos, strength, radius);

        // 右
        this.yPos01 += this.kigoHeight01 * 50; //= (this.yPos01 + 50) % height;

        if(this.yPos01 > this.defH ) {
            this.yPos01 = this.defH;
            this.kigoHeight01  = -1;
        }
        if(this.yPos01 < 0) {
            this.yPos01 = 0;
            this.kigoHeight01 = 1;
        }

        var xPos = this.defW/8*7;
        var yPos = this.yPos01;

        this.pathList[0].setCircle(xPos, yPos, strength, radius);

        // 下
        this.xPos02 -= this.kigoWidth02 * 30;
        if(this.xPos02 > this.defW) {
            this.xPos02 = this.defW;
            this.kigoWidth02  = 1;
        }
        if(this.xPos02 < 0) {
            this.xPos02 = 0;
            this.kigoWidth02 = -1;
        }

        //
        var xPos = this.xPos02;
        var yPos = this.defH/8*7;

        this.pathList[0].setCircle(xPos, yPos, strength, radius);

        // 左
        this.yPos02 -= this.kigoHeight02 * 50; //= (this.yPos02 + 50) % height;

        if(this.yPos02 > this.defH ) {
            this.yPos02 = this.defH;
            this.kigoHeight02  = 1;
        }
        if(this.yPos02 < 0) {
            this.yPos02 = 0;
            this.kigoHeight02 = -1;
        }

        var xPos = this.defW/8;
        var yPos = this.yPos02;

        this.pathList[0].setCircle(xPos, yPos, strength, radius);

    }

    // this.pulse01.graphics.clear();
    // this.pulse01.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

  addImpulse01() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.xPos01 += this.kigoWidth01 * 200;
    if(this.xPos01 > this.defW) {
        this.xPos01 = this.defW;
        this.kigoWidth01  = -1;
    }
    if(this.xPos01 < 0) {
        this.xPos01 = 0;
        this.kigoWidth01 = 1;
    }

        //
    var xPos = this.xPos01;
    var yPos = this.defH/8;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }

    // this.pulse01.graphics.clear();
    // this.pulse01.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

   addImpulse02() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.yPos01 += this.kigoHeight01 * 50; //= (this.yPos01 + 50) % height;

    if(this.yPos01 > this.defH ) {
        this.yPos01 = this.defH;
        this.kigoHeight01  = -1;
    }
    if(this.yPos01 < 0) {
        this.yPos01 = 0;
        this.kigoHeight01 = 1;
    }

    var xPos = this.defW/8*7;
    var yPos = this.yPos01;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }
  
    // this.pulse02.graphics.clear();
    // this.pulse02.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

  addImpulse03() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.xPos02 -= this.kigoWidth02 * 200;
    if(this.xPos02 > this.defW) {
        this.xPos02 = this.defW;
        this.kigoWidth02  = 1;
    }
    if(this.xPos02 < 0) {
        this.xPos02 = 0;
        this.kigoWidth02 = -1;
    }

    //
    var xPos = this.xPos02;
    var yPos = this.defH/8*7;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }

    // this.pulse03.graphics.clear();
    // this.pulse03.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

  addImpulse04() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.yPos02 -= this.kigoHeight02 * 50; //= (this.yPos02 + 50) % height;

    if(this.yPos02 > this.defH ) {
        this.yPos02 = this.defH;
        this.kigoHeight02  = 1;
    }
    if(this.yPos02 < 0) {
        this.yPos02 = 0;
        this.kigoHeight02 = -1;
    }

    var xPos = this.defW/8;
    var yPos = this.yPos02;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }

    // this.pulse04.graphics.clear();
    // this.pulse04.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

  addImpulse05() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.xPos03 += this.kigoWidth03 * 200;
    if(this.xPos03 > this.defW) {
        this.xPos03 = this.defW;
        this.kigoWidth03  = -1;
    }
    if(this.xPos03 < 0) {
        this.xPos03 = 0;
        this.kigoWidth03 = 1;
    }

    var xPos = this.xPos03;
    var yPos = this.defH/8;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }

    // this.pulse01.graphics.clear();
    // this.pulse01.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

   addImpulse06() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.yPos03 += this.kigoHeight03 * 50; //= (this.yPos03 + 50) % height;

    if(this.yPos03 > this.defH ) {
        this.yPos03 = this.defH;
        this.kigoHeight03  = -1;
    }
    if(this.yPos03 < 0) {
        this.yPos03 = 0;
        this.kigoHeight03 = 1;
    }

    var xPos = this.defW/8*7;
    var yPos = this.yPos03;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }
  
    // this.pulse02.graphics.clear();
    // this.pulse02.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

  addImpulse07() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.xPos04 -= this.kigoWidth04 * 200;
    if(this.xPos04 > this.defW) {
        this.xPos04 = this.defW;
        this.kigoWidth04  = 1;
    }
    if(this.xPos04 < 0) {
        this.xPos04 = 0;
        this.kigoWidth04 = -1;
    }

    var xPos = this.xPos04;
    var yPos = this.defH/8*7;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }

    // this.pulse03.graphics.clear();
    // this.pulse03.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }

  addImpulse08() {

    var strength = 20 + Math.random() * 20;
    var radius = 100;

    this.yPos04 -= this.kigoHeight04 * 50; //= (this.yPos04 + 50) % height;

    if(this.yPos04 > this.defH ) {
        this.yPos04 = this.defH;
        this.kigoHeight04  = 1;
    }
    if(this.yPos04 < 0) {
        this.yPos04 = 0;
        this.kigoHeight04 = -1;
    }

    var xPos = this.defW/8;
    var yPos = this.yPos04;

    // xPos, yPos
    for(var jj = 0; jj < this.pathList.length; jj++){
        this.pathList[jj].setCircle(xPos, yPos, strength, radius);
    }
  
    // this.pulse04.graphics.clear();
    // this.pulse04.graphics
    //     .beginFill('rgba(255,0,0,.3)')
    //     .drawCircle(xPos, yPos, radius);

  }


}