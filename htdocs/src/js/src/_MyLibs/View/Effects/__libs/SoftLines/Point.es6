// ------------------------------------------------------------
//
//  Point
//
// ------------------------------------------------------------

export default class Point {

	constructor(x, y) {

		this.x = x;
		this.y = y;
		this.vel = 0;
		this.mass = 10;

		this.baseXpos = 0;
		this.baseYpos = 0;

	}

	setPosY(value){

	   this.y = this.baseYPos = value;

	}

}