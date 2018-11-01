//--------------------------------------------------
//
//  Particle
//
//--------------------------------------------------

import Vector3 from './Vector3.es6';
import Motion01 from './Motion01.es6';

export default class Particle extends Motion01 {

  constructor() {

    super();

    this.pos = new Vector3();
    this.ac = new Vector3();
    this.vel = new Vector3();
    this.c = ''; // color

    this.rotate = new Vector3();
    this.noise = new Vector3();

  }

  setup() {



  }
  
  tweenTransparent(time,val) {

    var t = time || 1.0;
    var v = (val.target!==undefined)? val.target : 1.0;
    var e = val.ease || Power2.easeOut;

    TweenMax.to(this.Particle.material, t, {
      opacity: v,
      ease : e,
    });

  }
  
  montecarlo () {
    
    while (true) {  

      var r1 = Math.random(); 
      var probability = Math.pow(1.0 - r1,8);  
    
      var r2 = Math.random(); 
      if (r2 < probability) { 
        return r1;
      }
    }

  }

  boundary() {

    if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
      return true;
    }

    return false;

  }

}