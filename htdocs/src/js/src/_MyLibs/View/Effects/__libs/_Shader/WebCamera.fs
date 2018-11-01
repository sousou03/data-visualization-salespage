// ------------------------------------------------------------
//
//  fragment shader
//
// ------------------------------------------------------------

// precision mediump float; // → three.jsはこれを定義するとエラー

uniform float t;
uniform vec2 r;
uniform sampler2D texture;

varying vec3 vPosition;
varying vec2 vTexCoord;

float wave(float x, float amount) {

  return (sin(x * amount + t*10.0) + 1.0) * 0.5;

}

void main() {

  // 色取得
  vec4 color  = texture2D(texture, vTexCoord);

  // normal
  // gl_FragColor  = vec4(color.r,1.0-color.g,1.0-color.b,1.0);

  // gray
  // float ave = (color.r + color.g + color.b) / 3.0;
  // gl_FragColor  = vec4(ave,ave,ave,1.0);

  // wave
  // gl_FragColor.r  = wave(color.r,10.0);
  // gl_FragColor.g  = wave(color.g,20.0);
  // gl_FragColor.b  = wave(color.b,40.0);
  // gl_FragColor.a  = 1.0;

  // 逆
  // vec2 p = vTexCoord;
  // p.x = 1.0 - p.x;
  // gl_FragColor = texture2D(texture, p);

  // 中央から同じ
  // vec2 p = vTexCoord;
  // p.x = abs(p.x - 0.5) + 0.5;
  // gl_FragColor = texture2D(texture, p);

  // 横一線同じpixel
  // vec2 p = vTexCoord;
  // p.x = 0.5;
  // gl_FragColor = texture2D(texture, p);

  // 横一線同じpixel(move)
  // vec2 p = vTexCoord;
  // p.x = fract(t*0.1);
  // gl_FragColor = texture2D(texture, p);

  // くにやくにや
  // vec2 p = vTexCoord;
  // p.x = p.x + sin(p.y*80.)*0.01;
  // gl_FragColor = texture2D(texture, p);

  // くにやくにや(move)
  // vec2 p = vTexCoord;
  // p.x = p.x + sin(p.y*80.0+t*70.0)*(0.05*sin(t));
  // gl_FragColor = texture2D(texture, p);

  // 分割
  // vec2 p = vTexCoord;
  // p = fract(p * 6.0);
  // gl_FragColor = texture2D(texture, p);

  // モザイク
  vec2 p = vTexCoord;
  p = floor(p * 100.0)/100.0;
  gl_FragColor = texture2D(texture, p);

}