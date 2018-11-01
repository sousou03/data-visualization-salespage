//--------------------------------------------------
//
//  Motion01
//
//--------------------------------------------------

export default class Motion01 {

  constructor() {

    this.angle = 0;


  }

  layoutLine() {

    var w = gb.r.W(), h = gb.r.H();
    var stepDef = Math.PI * 2 * Math.random();

    for (var i = 0; i < this.num; i++) {

      var c = 0.3;
      var r = 0.1 * Math.random();
      
      var radiusOut = Math.min(w, h) * (c + r);
      var radiusIn  = Math.min(w, h) * (c - r);

      var radius = (i%2 == 0)? radiusOut: radiusIn;
      var step = stepDef + Math.PI / 10 * Math.random();
      var x = Math.sin(step) * radius;
      var y = Math.cos(step) * radius;
      var z = -50 + Math.random() * 100.0;

      this.pList[i].pos.x = x;
      this.pList[i].pos.y = y;
      this.pList[i].pos.z = z;
      this.pList[i].radian = step;
      this.pList[i].vRadian = step;
      this.pList[i].radius = radius;

      this.positions[i*3+0] = this.pList[i].pos.x;
      this.positions[i*3+1] = this.pList[i].pos.y;
      this.positions[i*3+2] = this.pList[i].pos.z;

    };

    this.geometry.center();
    this.mesh.position.set(this.pList[0].pos.x, this.pList[0].pos.y, this.pList[0].pos.z);

    this.geometry.attributes.position.needsUpdate = true;

  }

  // layoutLine() {

  //   var w = gb.r.W(), h = gb.r.H();
  //   var stepDef = Math.PI * 2 * Math.random();

  //   for (var i = 0; i < this.num; i++) {

  //     var c = 0.3;
  //     var r = 0.1 * Math.random();
      
  //     var radiusOut = Math.min(w, h) * (c + r);
  //     var radiusIn  = Math.min(w, h) * (c - r);

  //     var radius = (i%2 == 0)? radiusOut: radiusIn;
  //     var step = stepDef + Math.PI / 10 * Math.random();
  //     var x = Math.sin(step) * radius;
  //     var y = Math.cos(step) * radius;
  //     var z = -50 + Math.random() * 100.0;

  //     this.pList[i].pos.x = x;
  //     this.pList[i].pos.y = y;
  //     this.pList[i].pos.z = z;
  //     this.pList[i].radian = step;
  //     this.pList[i].vRadian = step;
  //     this.pList[i].radius = radius;

  //     this.positions[i*3+0] = this.pList[i].pos.x;
  //     this.positions[i*3+1] = this.pList[i].pos.y;
  //     this.positions[i*3+2] = this.pList[i].pos.z;

  //   };

  //   this.geometry.attributes.position.needsUpdate = true;

  // }

  // 回転の速度と、半径のupdate
  updateRotate() {

    var tl = new TimelineMax();

    tl
      .to(this.mesh.rotation, 2, {
        x: Math.PI * 2 * Math.random(),
        y: Math.PI * 2 * Math.random(),
        z: Math.PI * 2 * Math.random(),
        ease: Expo.easeOut,
        delay: 10 * Math.random(),
        onComplete: ()=>{
          this.updateRotate();
        }
      })


    // 1. 回転させたいObjectのQuaternionを取得する
    // var quaternion = this.mesh.quaternion;

    // // 2. 回転を加えるためのQuaternionを作成する
    // var target = new THREE.Quaternion();
    // var axis = new THREE.Vector3(0, 1, 0).normalize();
    // target.setFromAxisAngle(axis, Math.sin(gb.up.cnt/1000) * Math.PI * 2);

    // // 3. 回転させる
    // quaternion.multiply(target);

    //適用したいオブジェクトに回転を適用
    // this.mesh.rotation.setFromQuaternion(target);

    // var axis = new THREE.Vector3(0,1,0).normalize();
    // this.angle += Math.PI / 180;
    // var q = new THREE.Quaternion();
    // q.setFromAxisAngle(axis,this.angle);
    // this.mesh.quaternion.copy(q);

    
  }

}