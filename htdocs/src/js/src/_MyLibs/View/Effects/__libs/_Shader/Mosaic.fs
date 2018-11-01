// ------------------------------------------------------------
//
//  fragment shader
//
// ------------------------------------------------------------

varying vec2 vUv;

uniform vec2 r;
uniform float t;
uniform sampler2D tDiffuse;
uniform sampler2D texture;
uniform vec2 vScreenSize;
uniform float fMosaicScale;

const float R_LUMINANCE = 0.298912;
const float G_LUMINANCE = 0.586611;
const float B_LUMINANCE = 0.114478;


void main() {

    // mosaic
    vec2 vUv2 = vUv;

    vUv2.x = floor(vUv2.x * r.x / fMosaicScale) / (r.x / fMosaicScale) + (fMosaicScale/2.0) / r.x;
    vUv2.y = floor(vUv2.y * r.y / fMosaicScale) / (r.y / fMosaicScale) + (fMosaicScale/2.0) / r.y;

    // vec4 color = texture2D(tDiffuse vUv2);
    vec4 color = texture2D(texture, vUv2);

    // sepia
    float v = color.x * R_LUMINANCE + color.y * G_LUMINANCE + color.z * B_LUMINANCE;

    color.x = v * 0.9;
    color.y = v * 0.7;
    color.z = v * 0.4;

    gl_FragColor = color;

}