#pragma glslify: import('../../../GLSL/common_var.vs')
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: curlNoise = require(glsl-curl-noise)

varying vec3 vColor;
varying vec3 vPos;
uniform float power;
uniform float power2;
uniform float power3;

uniform float psize;

attribute float paramDiff;
attribute float spd;
uniform float index;

mat4 calcRotateMat4X(float radian) {
  return mat4(
    1.0, 0.0, 0.0, 0.0,
    0.0, cos(radian), -sin(radian), 0.0,
    0.0, sin(radian), cos(radian), 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}

mat4 calcRotateMat4Y(float radian) {
  return mat4(
    cos(radian), 0.0, sin(radian), 0.0,
    0.0, 1.0, 0.0, 0.0,
    -sin(radian), 0.0, cos(radian), 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}

mat4 calcRotateMat4Z(float radian) {
  return mat4(
    cos(radian), -sin(radian), 0.0, 0.0,
    sin(radian), cos(radian), 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}

mat4 calcRotateMat4(vec3 radian) {
  return calcRotateMat4X(radian.x) * calcRotateMat4Y(radian.y) * calcRotateMat4Z(radian.z);
}

void main() {

  vec3 pos = position;


  // motion curl
    // 大きい移動を作る
  // float noise1 = cnoise3(
  vec3 noise1 = curlNoise(
      vec3(
        pos.x * 0.006 + frame * 0.1,
        pos.y * 0.012,
        pos.z * 0.006
      )
    );
  // float noise2 = cnoise3(
  vec3 noise2 = curlNoise(
      vec3(
        pos.x * 0.02,
        pos.y * 0.016 + frame * 0.05,
        pos.z * 0.02
      )
    );

  // rotate
  vec3 radian = mix(vec3(radians(0.0)), vec3(radians(sin(frame * 0.4)*40.0), radians(sin(frame * 1.0)*10.0), radians(sin(frame * 1.0)*20.0)), paramDiff);
  mat4 rotateMat = calcRotateMat4(radian);

  // pos
  float dis = length(pos);
  pos.y = pos.y + sin(dis * 0.15 + frame*3.0) * 3.0 * power;
  // pos.y += sin(pos.x * 0.1 + frame*0.001) * 5.0;

  pos.x = pos.x + sin(index * 3.0 + frame*2.0) * 3.0 * power2;
  pos.z = pos.z + cos(index * 3.0 + frame*2.0) * 3.0 * power2;

  vec3 n = normalize(pos);
  vec3 newPos = n * dis * (1.0 + (sin(index * 10.0 + frame * (1.5 + spd)) + 1.0) / 2.0 * 0.1); // sphere radius
  pos = mix(pos, newPos, power3);

  vec4 mvPosition = modelViewMatrix * rotateMat * vec4(pos, 1.0);
  // vec4 noisePosition = vec4(pos * 2.0 + (normalize(pos) * (300.0 * noise1)), 1.0);
  // vec4 noisePosition = vec4(pos + (normalize(pos) * (5.0 * noise1)), 1.0);
  // vec4 mvPosition = modelViewMatrix * noisePosition;

  // size
  float size = mix(psize, 500.0 / length(mvPosition.xyz), paramDiff);

  vColor = color;
  vPos = (projectionMatrix * mvPosition).xyz;

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;

}
