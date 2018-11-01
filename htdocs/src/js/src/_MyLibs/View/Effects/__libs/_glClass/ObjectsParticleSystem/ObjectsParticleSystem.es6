//--------------------------------------------------
//
//  ObjectsParticleSystem
//
//--------------------------------------------------

import Particle from './Particle/Particle.es6';
import Motion01 from './Motion01.es6';

export default class ObjectsParticleSystem extends Motion01 {

  constructor() {

    super();

    this.mesh = null;
    this.geometry = null;
    this.material = null;

    this.num = 80;
    this.positions = [];
    this.colors = [];

    this.pList = [];

    this.setup();
    this.create();
    this.setEvents();

  }

  setup() {

    this.load();

  }

  load() {


    // var tex = new THREE.Texture(createCircleCanvas());
    this.tex = new THREE.TextureLoader().load('./ff15/royal/gallery2018/assets/resource/img/loading/circle.png');
    this.tex.needsUpdate = true;

    this.uniforms = {
                  texture: { type: 't', value: this.tex},
                  psColor : { type: 'c', value: new THREE.Color( 0xeeeeee ) },
                  opacity : { type: 'f', value: 1.0 },
                  offsetRepeat : { type: 'v4', value: new THREE.Vector4( 0, 0, 1, 1 ) },
                };

    this.material = new THREE.ShaderMaterial( {

            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
            uniforms: this.uniforms,
            transparent: true,
            depthTest: false,

          });
    // var material = new THREE.PointsMaterial( { size: 20, map: tex,transparent: true,fog: false,depthTest: false} );


  }

  create() {

    this.matParam = {
      map: this.texture,
      // vertexColors: THREE.VertexColors,
      size: 10,
      transparent: true,
      // blending: THREE.AdditiveBlending,
      sizeAttenuation: false,
      depthTest: false
    }

    this.container = new THREE.Object3D();
    this.geometry = new THREE.BufferGeometry();
    // this.material = new THREE.PointsMaterial(this.matParam);



    // オブジェクト生成
    this.mesh = new THREE.Points( this.geometry, this.material);
    this.container.add(this.mesh);
    gb.scene.scene.add(this.container);

    // gemetryの頂点セット
    this.setVertex();
    this.layout();

  }

  setVertex() {

    this.sizes = new Float32Array( this.num );
    this.positions = new Float32Array( this.num * 3 );
    this.colors = new Float32Array( this.num * 3 );

    for (var i = 0; i < this.num; i++) {

      var p = new Particle();
      this.pList.push(p);

      // size
      this.sizes[i] = Math.random();

      // positions
      this.positions[ i * 3 ] = this.pList[i].pos.x;
      this.positions[ i * 3 + 1 ] = this.pList[i].pos.y;
      this.positions[ i * 3 + 2 ] = this.pList[i].pos.z;

      // colors
      var h = Math.floor(191 + Math.random()*20);
      var s = Math.floor(40 + Math.random()*20);
      var b = Math.floor(70 + Math.random()*20);
      var color = new THREE.Color('hsl('+h+','+s+'%,'+b+'%)');

      this.pList[i].c = color;

      this.colors[ i * 3 ] = this.pList[i].c.r;
      this.colors[ i * 3 + 1 ] = this.pList[i].c.g;
      this.colors[ i * 3 + 2 ] = this.pList[i].c.b;

    };

    // log(this.sizes);

    this.geometry.addAttribute( 'size', new THREE.BufferAttribute( this.sizes, 1 ) );
    this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
    this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

  }

  layout() {

    this.layoutCircle();

  }

  toScreenPosition (obj) {

      var vector = new THREE.Vector3();

      var widthHalf = 0.5*gb.gl.renderer.context.canvas.width;
      var heightHalf = 0.5*gb.gl.renderer.context.canvas.height;

      obj.updateMatrixWorld();
      vector.setFromMatrixPosition(obj.matrixWorld);
      vector.project(gb.camera.camera);

      vector.x = ( vector.x * widthHalf ) + widthHalf;
      vector.y = - ( vector.y * heightHalf ) + heightHalf;

      return { 
          x: vector.x,
          y: vector.y
      };

  }

  update() {


  }

  draw() {


  }

  loop() {

    this.update();
    this.draw();

  }

  onResize() {


  }

  setEvents() {

    // gb.r.add(this.onResize.bind(this));

  }

}
