//--------------------------------------------------
//
//  heightLine
//
//--------------------------------------------------

export default class HeightLine {

  constructor($obj_get, $obj_target, line, opt=false) {

    this.optInner = opt;

    this.line = line;

    this.$obj_get = $obj_get;
    this.$target = $obj_target;

    this.setup();
    this.setEvents();

    this.run($obj_get, $obj_target, line);
 
  }

  setup() {

  }
  
  run() {

    var $list = [];
    var len = this.$obj_get.length;
    var times = Math.floor(len / this.line); // ループ回数算出
    var rest = len % this.line; // 余り算出

    // 通常ループ
    for (var i = 0; i < times; i++) {
        for (var j = i * this.line; j < i * this.line + this.line; j++) {
          $list.push(this.$obj_get.eq(j));
        };      
        this.heightLine($list);
        $list = [];
    };

    // 余りループ
    for (var k = this.line * times; k < this.line * times + rest; k++) {
        $list.push(this.$obj_get.eq(k));
        this.heightLine($list);
    };

  }

  heightLine($list){

    var h = [],maxH;

    var self = this;
    $.each($list, function(i) {
      if (self.optInner) h.push($(this).innerHeight());
      else h.push($(this).height());
    });

    // 最大値取得
    maxH = Math.max.apply(null, h);

    log(maxH);

    // 適用
    this.$target.css('height', maxH);

  }
         
  setEvents() {

    // gb.up.add(this.update.bind(this));

  }

}
