// useful uniform
uniform float time;
uniform float frame;
uniform vec2 resolution;
uniform vec2 imageResolution;
uniform vec2 mouse;

// useful attributte

// useful varying
varying vec2 vUv;

// // func
// #pragma glslify: map = require(glsl-map)
// #pragma glslify: random = require(glsl-random)
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)

// // easing
// #pragma glslify: ease = require(glsl-easings/back-in-out) 
// #pragma glslify: ease = require(glsl-easings/back-in) 
// #pragma glslify: ease = require(glsl-easings/back-out) 
// #pragma glslify: ease = require(glsl-easings/bounce-in-out) 
// #pragma glslify: ease = require(glsl-easings/bounce-in) 
// #pragma glslify: ease = require(glsl-easings/bounce-out) 
// #pragma glslify: ease = require(glsl-easings/circular-in-out) 
// #pragma glslify: ease = require(glsl-easings/circular-in) 
// #pragma glslify: ease = require(glsl-easings/circular-out) 
// #pragma glslify: ease = require(glsl-easings/cubic-in-out) 
// #pragma glslify: ease = require(glsl-easings/cubic-in) 
// #pragma glslify: ease = require(glsl-easings/cubic-out) 
// #pragma glslify: ease = require(glsl-easings/elastic-in-out) 
// #pragma glslify: ease = require(glsl-easings/elastic-in) 
// #pragma glslify: ease = require(glsl-easings/elastic-out) 
// #pragma glslify: ease = require(glsl-easings/exponential-in-out) 
// #pragma glslify: ease = require(glsl-easings/exponential-in) 
// #pragma glslify: ease = require(glsl-easings/exponential-out) 
// #pragma glslify: ease = require(glsl-easings/linear) 
// #pragma glslify: ease = require(glsl-easings/quadratic-in-out) 
// #pragma glslify: ease = require(glsl-easings/quadratic-in) 
// #pragma glslify: ease = require(glsl-easings/quadratic-out) 
// #pragma glslify: ease = require(glsl-easings/quartic-in-out) 
// #pragma glslify: ease = require(glsl-easings/quartic-in) 
// #pragma glslify: ease = require(glsl-easings/quartic-out) 
// #pragma glslify: ease = require(glsl-easings/quintic-in-out) 
// #pragma glslify: ease = require(glsl-easings/quintic-in) 
// #pragma glslify: ease = require(glsl-easings/quintic-out) 
// #pragma glslify: ease = require(glsl-easings/sine-in-out) 
// #pragma glslify: ease = require(glsl-easings/sine-in) 
// #pragma glslify: ease = require(glsl-easings/sine-out) 

// const float interval = 5.0;

// void main() {

//   float now = mod(time, interval);
//   float val = now / interval; // intervalの時間ごとに、0 〜 1 

//   // このグラフ頭の中でイメージできたいいな。 0から1にすぐなって、1が続き、0.8秒地点から0になって、0.1秒0が続く、それが再度繰り返される
//   float val = (smoothstep(0.0, 0.1, now / interval) * (1.0 - smoothstep(0.8, 0.9, now / interval)));

// }