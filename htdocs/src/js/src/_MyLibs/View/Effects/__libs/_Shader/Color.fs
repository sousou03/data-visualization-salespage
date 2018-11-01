// ------------------------------------------------------------
//
//  fragment shader
//
// ------------------------------------------------------------

// precision mediump float; // → three.jsはこれを定義するとエラー

uniform float t;
uniform vec2 r;

varying vec3 vPosition;

void main() {

  // gl_FragColor = vec4(1.0, 0.2, 1.0, 1.0);
  // gl_FragColor = vec4(vPosition.x, 0.0, 0.0, 1.0);
  // gl_FragColor = vec4(gl_FragCoord.y / r.y, 0.0, 0.0, 1.0);
  // gl_FragColor = vec4(gl_FragCoord.y / r.y, gl_FragCoord.x / r.x, 0.0, 1.0);
  // gl_FragColor = vec4(gl_FragCoord.y / r.y, gl_FragCoord.x / r.x, gl_FragCoord.y / r.y, 1.0);


  gl_FragColor = vec4(1.0 - gl_FragCoord.y / r.y, 0.0, 0.0, 1.0);
  // gl_FragColor = vec4(1.0 - gl_FragCoord.y / r.y, 1.0 - gl_FragCoord.x / r.x, 0.0, 1.0);

}