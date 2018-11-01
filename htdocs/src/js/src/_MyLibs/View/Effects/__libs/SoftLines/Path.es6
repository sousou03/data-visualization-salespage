// ------------------------------------------------------------
//
//  Path ssss
//
// ------------------------------------------------------------

import Point from './Point.es6';

export default class Path {

    constructor(shape ,defW, defH) {

        this.shape = shape;
        // gb.stage.addChild(this.shape);

        // this.K = 0.42; // 定数
        this.K = 0.2; // 定数
        this.num = 800; // ポイント数
        this.lineWidth = 1.1;

        this.particleSprings = [];
        this.points = [];

        this.x = 0;
        this.y = 0;
        this.pointsY = 0;
        // this.col = "#ff0000";
        this.col = "rgba(255,255,255,.4)";

        this.defW = defW;
        this.defH = defH;

    }

    setup() {

        // logo画像
        this.img = new Image();
        this.imgSrc = './ff15/royal/gallery2018/assets/resource/img/common/logo_b_forCanvas.png';
        this.img.onload = ()=>{
            this.bmp = new createjs.Bitmap(this.imgSrc);

            // 基準点を中央に
            this.bmp.regX = this.bmp.image.width / 2;
            this.bmp.regY = 0;

            // this.bmp.x = gb.r.w/2;
            this.bmp.x = this.defW/2;
            this.bmp.y = 57 - 13;

            gb.stage.addChild(this.bmp); 
                
        }
        this.img.src = this.imgSrc;

        // this.setPoint4Corner();
        this.setPoint5Corner();

    }

    setPoint4Corner() {

        var width = gb.r.w;
        var height = gb.r.h;

        for(var i = 0; i < this.num; i++){

            var p = new Point();

            if (i < Math.floor(this.num/4*1)) {

              var x = (width/8 + width / 8 * 6 * (i / Math.floor(this.num/4))) >> 0;
              var y = height / 8;
              p.baseXPos = p.x = x;
              p.baseYPos = p.y = y;

            } else if (i < Math.floor(this.num/4*2)) {

              var index = i - Math.floor(this.num/4*1);
              var x = (width / 8 * 7) >> 0;
              var y = height / 8 + height / 8 * 6 * (index / Math.floor(this.num/4));
              p.baseXPos = p.x = x;
              p.baseYPos = p.y = y;

            } else if (i < Math.floor(this.num/4*3)) {

              var index = i - Math.floor(this.num/4*2);
              var x = (width/8 * 7 - width / 8 * 6 * (index / Math.floor(this.num/4))) >> 0;
              var y = height / 8 * 7;
              p.baseXPos = p.x = x;
              p.baseYPos = p.y = y;

            } else if (i < Math.floor(this.num/4*4)) {

              var index = i - Math.floor(this.num/4*3);
              var x = (width/8 * 1) >> 0;
              var y = height / 8 * 7 - height / 8 * 6 * (index / Math.floor(this.num/4));
              p.baseXPos = p.x = x;
              p.baseYPos = p.y = y;

            };

            // if (i==0 || i==this.num-1) {
            //     var x = width / 8;
            //     var y = height / 8;
            //     p.baseXPos = p.x = x;
            //     p.baseYPos = p.y = y;
            // };

            this.points.push( p );

        }

        for(var i = 0; i < this.num; i++){

            // var spring = {iLengthY: this.points[(i+1)%this.num].y - this.points[i].y };
            var spring = {iLengthY: 0 };
            this.particleSprings.push( spring );

        }

    }

    setPoint5Corner() {

        // var width = gb.r.w;
        // var height = gb.r.h;
        var width = this.defW;
        var height = this.defH;
        var intervalW = width/8;
        var intervalH = height/8;
        
        var topRightNum = Math.ceil(this.num/5);
        var rightNum = this.num/5;
        var bottomNum = this.num/5;
        var leftNum = this.num/5;
        var topLeftNum = Math.floor(this.num/5);

        var startPoint = new Point(635, 102 - 13);
        var rt = new Point(intervalW * 7, intervalH); //right top
        var rb = new Point(intervalW * 7, intervalH * 7); //right bottom
        var lb = new Point(intervalW, intervalH * 7); //left bottom
        var lt = new Point(intervalW, intervalH); //left top
        var endPoint = new Point(519, 105 - 13);

        // log(startPoint);

        for(var i = 0; i < this.num; i++){

            var p = new Point();


            if (i < topRightNum) {

                var targetX = intervalW * 7 - startPoint.x;
                var targetY = intervalH - startPoint.y;

                var x = startPoint.x + targetX * (i / topRightNum);
                var y = startPoint.y + targetY * (i / topRightNum);

            } else if (i < (topRightNum + rightNum)) {

                var targetY = intervalH * 7 - intervalH;

                var index = i - topRightNum;
                var x = intervalW * 7;
                var y = intervalH + targetY * (index / rightNum);

            } else if (i < topRightNum + rightNum + bottomNum) {

                var targetX = intervalW - intervalW * 7;

                var index = i - (topRightNum + rightNum);
                var x = intervalW * 7 + targetX * (index / bottomNum);
                var y = intervalH * 7;

            } else if (i < topRightNum + rightNum + bottomNum + leftNum) {

                var targetY = intervalH - intervalH* 7;

                var index = i - (topRightNum + rightNum + bottomNum);
                var x = intervalW * 1;
                var y = intervalH * 7 + targetY * (index / leftNum);

            } else if (i < topRightNum + rightNum + bottomNum + leftNum + topLeftNum) {

                var targetX = endPoint.x - intervalW;
                var targetY = endPoint.y - intervalH;

                var index = i - (topRightNum + rightNum + bottomNum + leftNum);
                var x = intervalW + targetX * (index / topLeftNum);
                var y = intervalH + targetY * (index / topLeftNum);

            }

            // if (i==0 || i==this.num-1) {
            //     var x = intervalW;
            //     var y = height / 8;
            //     p.baseXPos = p.x = x;
            //     p.baseYPos = p.y = y;
            // };

            p.baseXPos = p.x = x;
            p.baseYPos = p.y = y;

            this.points.push( p );

        }

        for(var i = 0; i < this.num; i++){

            // var spring = {iLengthY: this.points[(i+1)%this.num].y - this.points[i].y };
            var spring = {iLengthY: 0 };
            this.particleSprings.push( spring );

        }
        

        this.rt = topRightNum;
        this.rb = topRightNum + rightNum;
        this.lb = topRightNum + rightNum + bottomNum;
        this.lt = topRightNum + rightNum + bottomNum + leftNum;

    }

    updatePos () {

        // log(gb.m.x,gb.m.y);

        var pts = this.points;

        for(var i = 0; i < pts.length; i++){

            var fExtensionY = 0;
            var fForceY     = 0;

            if (i==0) {
                fExtensionY = pts[pts.length-1].y - pts[0].y - this.particleSprings[pts.length-1].iLengthY;
                fForceY += - this.K * fExtensionY;
            };
            if(i > 0){
                fExtensionY = pts[i - 1].y - pts[i].y - this.particleSprings[i-1].iLengthY;
                fForceY += - this.K * fExtensionY;
            }

            if( i < pts.length - 1){
                fExtensionY = pts[i].y - pts[i+1].y - this.particleSprings[i].iLengthY;
                fForceY += this.K * fExtensionY;
            }
            if( i == pts.length - 1){
                fExtensionY = pts[i].y - pts[(i+1)%pts.length].y - this.particleSprings[i].iLengthY;
                fForceY += this.K * fExtensionY;
            }

            fExtensionY = pts[i].y - pts[i].baseYPos;
            fForceY     += this.K/2 * fExtensionY;

            pts[i].acl = - fForceY;
            pts[i].vel += pts[i].acl;

            pts[i].acl = - fForceY;
            pts[i].vel += pts[i].acl;

            // ４隅＋startpointとendpointは固定
            pts[0].vel = 0; // startpoint

            pts[this.rt].vel = 0;
            pts[this.rb].vel = 0;
            pts[this.lb].vel = 0;
            pts[this.lt].vel = 0;

            pts[pts.length-1].vel = 0; // endpoint

            // if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4) return
            // log(i==0);

            pts[i].y   += pts[i].vel;
            pts[i].y   += 0.4 * (pts[i].baseYPos - pts[i].y);
            pts[i].x   -= pts[i].vel;
            pts[i].x   += 0.4 * (pts[i].baseXPos - pts[i].x);

            pts[i].vel *= 0.998;

        }


    }

    update() {

        // calculation
        this.updatePos();

        // ================

        this.shape.graphics
            .setStrokeStyle(this.lineWidth)
            .beginStroke(this.col)

            var pts = this.points;

            // moveto
            // this.shape.graphics.moveTo((pts[pts.length-1].x+pts[0].x)/2, (pts[pts.length-1].y+pts[0].y)/2);
            this.shape.graphics.moveTo(pts[0].x, pts[0].y);

            for(var i = 0; i < this.num-1; i++ ) {

                var x = (pts[i].x + pts[i + 1].x)/2;
                var y = (pts[i].y + pts[i + 1].y)/2;
                // var x = (pts[i].x + pts[(i+1)%pts.length].x)/2;
                // var y = (pts[i].y + pts[(i+1)%pts.length].y)/2;
                
                this.shape.graphics.quadraticCurveTo( pts[i].x, pts[i].y, x, y);

                // this.shape.graphics.drawCircle(x, y, 2);

            }

        // moveto 完全な曲線
        // this.shape.graphics.moveTo((pts[pts.length-1].x+pts[0].x)/2, (pts[pts.length-1].y+pts[0].y)/2);

        // for(var i = 0; i < this.num-1; i++ ) {

        //     var x = (pts[i].x + pts[(i+1)%pts.length].x)/2;
        //     var y = (pts[i].y + pts[(i+1)%pts.length].y)/2;
            
        //     this.shape.graphics.quadraticCurveTo( pts[i].x, pts[i].y, x, y);

        //     // this.shape.graphics.drawCircle(x, y, 2);

        // }

        this.shape.graphics.endStroke();

    }

    setCircle (xPos, yPos, strength, radius){

        for(var i = 0; i < this.points.length; i++){

            var dx = xPos - this.x - this.points[i].x;
            var dy = yPos - this.y - this.points[i].y;

            var dis = Math.sqrt(dx * dx + dy * dy);


            if(dis < radius){

                // startpointとendpointを揺れを無くす
                if (i==0 || i == this.points.length -1) return;

                this.points[i].y += strength;
                if (this.points[i+2]) this.points[i+2].y -= strength;
                // x
                // if (i%2==0) this.points[i].x -= strength * (1.02 + (Math.random() * 0.2));
                // if (i%2==1) this.points[i].x -= strength * (1.24 + (Math.random() * 0.2));

                this.points[i].x -= strength * (0.98 - (Math.random() * 0.2));
                if (this.points[i+1]) this.points[i+1].x += strength * (1.24 + (Math.random() * 0.2));

            }

        }

        // this.shape.graphics
        //     .beginFill('rgba(255,0,0,.3)')
        //     .drawCircle(xPos, yPos, 100);

    }


}