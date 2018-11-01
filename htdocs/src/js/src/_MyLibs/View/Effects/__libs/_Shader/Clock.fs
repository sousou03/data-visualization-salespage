#define PI 3.141592653589
uniform sampler2D tDiffuse;
uniform float progress;
uniform vec2 r;
uniform float t;

void main() {

    vec2 p = gl_FragCoord.xy / r.xy; //-1〜1に正規化
    vec2 rp = p*2.0-1.0; //0〜1に正規化
    float a = atan(rp.y, rp.x);


    // float time = pr


    float t = t * 2.0 - 1.0; // -1〜1に正規化
    // // float pa = progress*PI*2.5-PI*1.25;
    // float pa = t*PI*2.5-PI*1.25;
    // float pa = -t*1.5*PI;
    float pa = -progress*1.5*PI;
    // float pa = 0.25*PI;

    float circle = PI * 2.0; // -PI〜PIで 1周

    t = t * 0.5; // -0.5〜0.5に正規化

    vec4 red = vec4(1.0,0.0,0.0,1.0);
    vec4 green = vec4(0.0,1.0,0.0,1.0);
    vec4 tiffanyblue = vec4(0.5,0.84,0.81,1.0);
    vec4 bgBlack = vec4(0.0,0.0,0.0,1.0);
    vec4 bgOpacity = vec4(0.0,0.0,0.0,0.0);
    
    // // // vec4 fromc = texture2D(tDiffuse, p);
    // // // vec4 fromc = vec4(0.0,0.0,0.0,0.0);
    // // // vec4 toc = vec4(1.0,0.0,0.0,0.0);
    // // vec4 fromc = vec4(1.0,0.0,0.0,0.0);
    // // vec4 toc = texture2D(tDiffuse, p);



    // gl_FragColor = bgBlack;
    // gl_FragColor = mix(tiffanyblue, bgBlack, smoothstep(0.8, 1.0, a*-0.6));


    // if(a > circle * t) {

    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a-(circle * (t+0.005)))));
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, 0.2);
    //   gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a+2.0)/2.0));
    //   // gl_FragColor = tiffanyblue

    // } 

    // if(a > circle * (t + 0.03)) {

    //   // gl_FragColor = mix(toc, fromc, smoothstep(0.0, 1.0, (a-pa)));
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, 0.7));
    //   // gl_FragColor = mix(tiffanyblue, bgBlack, smoothstep(0.0, 1.0, 0.2);
    //   gl_FragColor = bgBlack;

    // } 


    // if(a > circle * 0.0) {

    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a-(circle * (t+0.005)))));
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, 0.2);
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a+2.0)/2.0));
    //   gl_FragColor = mix(tiffanyblue, bgBlack, smoothstep(0.0, 1.0, a * 0.1));
    //   // gl_FragColor = mix(tiffanyblue, bgBlack, smoothstep(0.0, 1.0, -0.6);
    //   // gl_FragColor = tiffanyblue;

    // } 

    // 一本目
    // gl_FragColor = bgOpacity;
    gl_FragColor = bgBlack;
    // gl_FragColor = mix(red, bgBlack, smoothstep(1.0, 0.0, a - pa));

    // if(a < circle * 0.5) {

    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a-(circle * (t+0.005)))));
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, 0.2);
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a+2.0)/2.0));
    //   // gl_FragColor = mix(tiffanyblue, bgBlack, smoothstep(0.0, 1.0, (a+2.0)/2.0));
    //   // gl_FragColor = tiffanyblue;
    //   // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 0.05, a*15.0))
    //   gl_FragColor = mix(bgOpacity, bgBlack, smoothstep(1.0, 0.0, a - pa));
    //   // gl_FragColor = mix(red, bgBlack, smoothstep(1.0, 0.0, a - PI*0.2));


    // } 

    if(a < circle * 0.5) {

      // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a-(circle * (t+0.005)))));
      // gl_FragColor = mix(bgBlack, tiffanyblue, 0.2);
      // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 1.0, (a+2.0)/2.0));
      // gl_FragColor = mix(tiffanyblue, bgBlack, smoothstep(0.0, 1.0, (a+2.0)/2.0));
      // gl_FragColor = tiffanyblue;
      // gl_FragColor = mix(bgBlack, tiffanyblue, smoothstep(0.0, 0.05, a*15.0))
      gl_FragColor = mix(bgOpacity, bgBlack, smoothstep(1.0, 0.0, a - pa));
      // gl_FragColor = mix(red, bgBlack, smoothstep(1.0, 0.0, a - PI*0.2));


    } 





}