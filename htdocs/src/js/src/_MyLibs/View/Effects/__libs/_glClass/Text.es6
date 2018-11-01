//--------------------------------------------------
//
//  Text
//
//--------------------------------------------------

export default class Text {

  constructor(tag) {

    this.tag = tag;

    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.radiusPos = 300 + 500 * Math.random();
    this.rotateLag = Math.PI * 2 * Math.random();
    this.rotateSpeed = 1 + 5 * Math.random();

    this.scale = 1;

    this.text = null;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.geo = new THREE.TextGeometry( this.tag, {
    //                 size: 5, height: 3, curveSegments: 12,
    //                 font: "helvetiker", weight: "normal", style: "normal",
    //                 bevelEnabled: false, bevelThickness: 2, bevelSize: 2,
    // });
    this.geo = new THREE.TextGeometry( this.tag, {
                    size: 5, height: 3, curveSegments: 12,
                    // font: "NotoSansCJKJP",
                    font: "WebSubsetFont",
                    weight: "normal", style: "normal",
                    bevelEnabled: false, bevelThickness: 2, bevelSize: 2,
    });
    this.geo.center();

    
    // var mat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    // var mat = new THREE.MeshNormalMaterial( { wireframe: true } );
    // var mat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    this.mat = new THREE.MeshPhongMaterial({color: 0xff0000, shininess: 30, side: THREE.DoubleSide});
    
    this.text = new THREE.Mesh(this.geo, this.mat);

    gb.scene.scene.add(this.text);

  }

  motionUp() {

    // 中央
    this.x = 0 + Math.cos(this.rotateLag + this.rotateSpeed * gb.up.cnt/3000) * this.radiusPos;
    this.z = 0 + Math.sin(this.rotateLag + this.rotateSpeed * gb.up.cnt/3000) * this.radiusPos;
    this.y += 0 + this.rotateSpeed * 0.05;

    // 一番上にいって見えなくなったら、下に戻す
    if (this.y > 500) this.y = -500;

    this.text.position.set(this.x,this.y,this.z);

  }

  update() {



  }

  draw() {


  }

  run() {


  }

  setEvents() {


  }


}