// ------------------------------------------------------------
//
//  vertex shader
//
// ------------------------------------------------------------

uniform float t;
uniform vec2 r;

varying vec3 vPosition;
varying vec2 vTexCoord;

void main() {

  gl_Position = vec4( position, 1.0 );

  vPosition = position;
  vTexCoord = uv;

}
