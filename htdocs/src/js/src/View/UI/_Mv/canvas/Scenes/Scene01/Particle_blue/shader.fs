precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: map = require(glsl-map)

varying vec3 vColor;
varying vec3 vPos;
uniform float opacity;
uniform float opParam;
uniform float opParam2;

uniform float t;

#define PI 3.1415926535897932384626433832795

void main() {

  // Round the point
  vec3 n;
  n.xy = gl_PointCoord * 2.0 - 1.0;
  n.z = 1.0 - dot(n.xy, n.xy);
  if (n.z < 0.0) discard;

  // float op1 = map(sin(index * 2.0 + frame * 2.5), -1.0, 1.0, 0.0, 1.0);
  vec3 p = vPos*0.01;
  p.z = p.z + frame * 0.06;
  float op1 = map(noise3d(p), -1.0, 0.8, 0.0, 1.0);

  p = vPos*0.07;
  p.z = p.z + frame * 1.0;
  float op2 = map(noise3d(p), -1.0, 0.8, 0.0, 1.0);

  float op = mix(op1, op2, opParam2);

  vec4 final = mix(vec4(vColor, 1.0 * opacity), vec4(vColor, op * opacity), opParam);

  vec4 c = mix(final, vec4(1.0,1.0,1.0,1.0), t);

  gl_FragColor = c;

}
