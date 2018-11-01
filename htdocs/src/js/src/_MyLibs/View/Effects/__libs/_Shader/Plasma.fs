// ------------------------------------------------------------
//
//  fragment shader
//
// ------------------------------------------------------------

// uniform vec2 resolution;
// uniform float time;
 
// void main() {
//   vec2 pos = (gl_FragCoord.xy*2.0 -resolution) / resolution.y;
 
//   gl_FragColor = vec4(pos, 0.0, 1.0);
// }

uniform vec2 r;
uniform float t;
 
float plasma(vec2 p) {
  p*=10.0;
  return (sin(p.x)*0.25+0.25)+(sin(p.y)*0.25+0.25);
}
 
void main() {
  vec2 pos = (gl_FragCoord.xy*2.0 -r) / r.y;
 
  gl_FragColor = vec4(plasma(pos));
}