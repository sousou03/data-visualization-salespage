uniform sampler2D from;
uniform sampler2D to;
uniform float progress;
uniform vec2 r;
 
uniform float size;
uniform float zoom;
uniform float colorSeparation;

varying vec2 vUv;

void main() {
    vec2 p = gl_FragCoord.xy / r.xy;
    // vec2 p = (gl_FragCoord.xy * 2.0 - r) / min(r.x, r.y) + vec2(0.5,0.5);
    float inv = 1. - progress;
    vec2 disp = size*vec2(cos(zoom*p.x), sin(zoom*p.y));
    vec4 texTo = texture2D(to, vUv + inv*disp);
    vec4 texFrom = vec4(
      texture2D(from, vUv + progress*disp*(1.0 - colorSeparation)).r,
      texture2D(from, vUv + progress*disp).g,
      texture2D(from, vUv + progress*disp*(1.0 + colorSeparation)).b,
    1.0); 

    gl_FragColor = texTo*progress + texFrom*inv;
    // gl_FragColor = texture2D(from, vUv);
}