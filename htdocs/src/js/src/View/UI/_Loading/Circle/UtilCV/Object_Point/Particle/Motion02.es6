//--------------------------------------------------
//
//  Motion01
//
//--------------------------------------------------

export default class Motion02 {

  constructor() {


  }

  attract(m, index) {

    // log(m);

    var frc = m.clone();
    frc.sub(this.pos);
    frc.normalize(); // dir
    
    this.vel.add(frc.multiplyScalar(0.75)); // speed
    this.vel.multiplyScalar(this.FRICTION);

    // this.ppos.copy(this.pos); // prev
    this.pos.add(this.vel);

  }

  repel(m, index, n, v ,strength, repelStrength, attraceStrength) {

    // log(m);

    var frc = m.clone();
    frc.sub(this.pos);
    var dist = frc.length(); // dir
    frc.normalize(); 
    
    if( dist < 0 + v * strength){
      this.vel.add(frc.multiplyScalar(-1 * repelStrength)); // speed
    }else{
      // frc.x = n;
      // frc.y = n;
      // this.vel.add(frc.multiplyScalar(0.04)); // speed

      this.vel.add(frc.multiplyScalar(attraceStrength)); // speed
    }
    this.vel.multiplyScalar(this.FRICTION);



    // this.ppos.copy(this.pos); // prev
    this.pos.add(this.vel);

  }

  circle(m, index) {

    var dist = 100;
    var vRad = Math.PI * 2 / 100;
    var curRad = Math.atan2(this.pos.y - m.y, this.pos.x - m.x);

    if (index==0) {
      log(curRad);
    }
    

    var dis = m.distanceTo(this.pos);
    if(dis < dist) {

      this.pos.x = m.x + Math.cos(curRad + vRad) * dis;
      this.pos.y = m.y + Math.sin(curRad + vRad) * dis;

    }

  }

  walker() {

    this.x = width/2;
    this.y = height/2;
    var easing = 0.2;
    
  }

  step(v, strength) {
    
    var stepx = gb.u.m.map(Math.random(), -1, 1, 0, 1);
    var stepy = gb.u.m.map(Math.random(), -1, 1, 0, 1);
    
    var stepsize = this.montecarlo() * (v * strength + 10);
    stepx *= stepsize;
    stepy *= stepsize;
    
    this.pos.x += stepx;
    this.pos.y += stepy;
    // this.pos.x = constrain(this.pos.x, 0, width-1);
    // this.pos.y = constrain(this.pos.y, 0, height-1);
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

}