precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

uniform float opacity;

// main
void main() {

  gl_FragColor = color - vec4(0.0,0.0,0.0,1.0-opacity);

}