// ------------------------------------------------------------
//
//  fragment shader
//
// ------------------------------------------------------------

// const float nFrag = 1.0 / 10.0;
const vec2  centerOffset = vec2(0.5, 0.5);

varying vec2 vUv;

uniform float strength;
uniform float nFrag;
uniform float opacity;
uniform sampler2D tDiffuse;
uniform sampler2D texture;

float rnd(vec3 scale, float seed){
    return fract(sin(dot(gl_FragCoord.stp + seed, scale)) * 43758.5453 + seed);
}

void main() {

    vec3  destColor = vec3(0.0);
    float random = rnd(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2  fc = vec2(vUv.x, vUv.y);
    vec2  fcc = fc - centerOffset;
    float totalWeight = 0.0;

    for(float i = 0.0; i <= 10.0; i++){
        float percent = (i + random) * nFrag;
        float weight = percent - percent * percent;
        vec2  t = fc - fcc * percent * strength * nFrag;
        destColor += texture2D(texture, t).rgb * weight;
        totalWeight += weight;
    }

    gl_FragColor = vec4(destColor / totalWeight, 1.0);
    gl_FragColor.a = opacity;

}