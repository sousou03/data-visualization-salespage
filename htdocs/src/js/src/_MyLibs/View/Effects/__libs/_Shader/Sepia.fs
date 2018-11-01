// ------------------------------------------------------------
//
//  fragment shader
//
// ------------------------------------------------------------

varying vec2 vUv; 
const float R_LUMINANCE = 0.298912;
const float G_LUMINANCE = 0.586611;
const float B_LUMINANCE = 0.114478;

uniform sampler2D tDiffuse;
uniform sampler2D texture;

void main() {

    vec4 color = texture2D(texture, vUv);
    // vec4 color = texture2D(tDiffuse, vUv);
    // vec4 color = vec4(1.0,1.0,1.0,1.0);

    float v = color.x * R_LUMINANCE + color.y * G_LUMINANCE + color.z * B_LUMINANCE;

    color.x = v * 0.9;
    color.y = v * 0.7;
    color.z = v * 0.4;

    gl_FragColor = vec4(color);
}