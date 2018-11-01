//--------------------------------------------------
//
//  Particle
//
//--------------------------------------------------

import Vector3 from '../Vector3.es6';
import Motion01 from './Motion01.es6';

export default class Particle extends Motion01 {

  constructor(x, y, z) {

    super();

    this.pos = new Vector3(x, y, z);
    this.ppos = new Vector3(x, y, z);
    this.ac = new Vector3();
    this.vel = new Vector3();
    this.c = ''; // color

    this.rad = 0;
    this.radius = 0;
    this.defRad = Math.random() * Math.PI * 2;
    this.vRad = Math.random();
    this.rotate = new Vector3();
    this.noise = new Vector3();

    this.alpha = 1;

    this.FRICTION = gb.u.m.map(Math.random(),0.97, 0.99, 0, 1);

    this.setup();

  }

  setup() {

    this.vel.x = gb.u.m.map(Math.random(), -3.9, 3.9, 0, 1);
    this.vel.y = gb.u.m.map(Math.random(), -3.9, 3.9, 0, 1);

  }

  boundary() {

    if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
      return true;
    }

    return false;

  }

}