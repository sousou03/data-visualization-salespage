uniform sampler2D from, to;
uniform float progress;
uniform vec2 r;

varying vec2 vUv;

float interpolationPower = 40.0;
// uniform float interpolationPower;

void main() {
  vec2 p = gl_FragCoord.xy / r.xy;
  vec4 fTex = texture2D(from,vUv);
  vec4 tTex = texture2D(to,vUv);
  gl_FragColor = mix(
                    distance(fTex,tTex)>progress?fTex:tTex,
                    tTex,
                    pow(progress,interpolationPower)
                    );
}