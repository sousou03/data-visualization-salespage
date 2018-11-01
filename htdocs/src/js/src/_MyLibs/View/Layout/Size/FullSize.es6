//--------------------------------------------------
//
//  FullSize
//
//--------------------------------------------------

export default class FullSize {

  constructor($Wrap, $Target, mode='cover', dir='center', oh=false) {

    this.$wrap = $Wrap;
    this.$target = $Target;

    this.W = this.$wrap.width();
    this.H = this.$wrap.height();
    this.targetW;
    this.targetH;
    this.targetDefW;
    this.targetDefH;
    this.ratioW;
    this.ratio;
    this.ml;
    this.mt;

    this.ra = 0; //ratio;
    this.oh = (oh==undefined)? true : false;

    this.minW = 0;
    this.minWW = 0;
    this.maxW = 99999;
    this.minH = 0;
    this.maxH = 99999;

    this.mode = mode || 0;
    this.dir = dir || 'center';

    this.init();
    this.run();
    this.setEvents();

  }

  setStyle() {

    if (this.oh) this.$wrap.css({'overflow': 'hidden',});
    this.$target.css('position', 'absolute');

  }

  getDef() {

    // this.targetDefW = this.$target.get(0).clientWidth || this.$target.get(0).width || this.$target.width(),
    // this.targetDefH = this.$target.get(0).clientHeight || this.$target.get(0).height  || this.$target.height();
    this.targetDefW = 2560,
    this.targetDefH = 2160;

  }

  getSize() {

    this.W = this.$wrap.width();
    this.H = this.$wrap.height(); 

    this.ratioW = this.H / this.W;
    this.ratio = this.targetDefH / this.targetDefW,

    this.ml = - (this.targetDefW * (this.H / this.targetDefH)) / 2;
    this.mt = - (this.targetDefH * (this.W / this.targetDefW)) / 2;

  }

  setPos(){

      if (this.mode == 'cover' || this.mode == 0) {

        //--------------------------------------------------
        //  枠にピッタリになるように background-size cover
        //--------------------------------------------------

        if (this.ratioW > this.ratio) {

          log(1);

          if (this.H<this.minH) this.H = this.minH;
          // if (this.H<this.minH) return;
          this.w = (this.H / this.targetDefH) * this.targetDefW;
          this.ra = this.H / this.targetDefH;

          this.ml = - (this.targetDefW * (this.H / this.targetDefH)) / 2;

          this.$target
            .attr({'height': this.H,'width':this.w})
            .css({'margin-top': 0,'margin-left': this.ml,'top':0,'left':'50%'});

        } else if ( this.ratioW <= this.ratio) {

          log(2);

          if (this.W<this.minW) this.W = this.minW;
          // if (this.W<this.minW) return;
          this.h = (this.W / this.targetDefW) * this.targetDefH;
          this.ra = this.W / this.targetDefW;

          this.mt = - (this.targetDefH * (this.W / this.targetDefW)) / 2;

          this.$target
            .attr({'width': this.W,,'height':this.h})
            .css({'margin-top': this.mt,'margin-left': 0,'top':'50%','left':0});

          // details用
          if (this.minW<this.W && this.W<this.minWW) {

            this.ra = 1;

            this.$target
              .css({'width': this.minWW})
              .css({'margin-top': 0,'margin-left': -this.minWW/2,'top':'0%','left':'50%','height':'auto'});

          };

        }

      } else if (this.mode == 'contain' || this.mode == 1){

        //--------------------------------------------------
        //  枠内にピッタリ収まるように background-size contain
        //--------------------------------------------------

        if (this.ratioW < this.ratio) {

            this.$target
              .css({'height': this.H})
              .css({'margin-top': 0,'margin-left': this.ml,'top':0,'left':'50%','width':'auto'});

        } else if ( this.ratioW >= this.ratio) {

            this.$target
              .css({'width': this.W})
              .css({'margin-top': this.mt,'margin-left': 0,'top':'50%','left':0,'height':'auto'});

        }

      } 

  }

  setPosW(){

    if (this.mode == 'cover' || this.mode == 0) {

      //--------------------------------------------------
      //  枠にピッタリになるように background-size cover
      //--------------------------------------------------

      var h = (this.W / this.targetDefW) * this.targetDefH;

      this.$target
        .css({'width': this.W})
        .css({'margin-top': this.mt,'margin-left': 0,'top':'50%','left':0,'height':h});


    } else if (this.mode == 'contain' || this.mode == 1){

      //--------------------------------------------------
      //  枠内にピッタリ収まるように background-size contain
      //--------------------------------------------------

      this.$target
        .css({'width': this.W})
        .css({'margin-top': this.mt,'margin-left': 0,'top':'50%','left':0,'height':'auto'});

    } 

  }

  setPosH(){

    if (this.mode == 'cover' || this.mode == 0) {

      //--------------------------------------------------
      //  枠にピッタリになるように background-size cover
      //--------------------------------------------------

      var w = (this.H / this.targetDefH) * this.targetDefW;

        this.$target
          .css({'height': this.H})
          .css({'margin-top': 0,'margin-left': this.ml,'top':0,'left':'50%','width':w});

    } else if (this.mode == 'contain' || this.mode == 1){

      //--------------------------------------------------
      //  枠内にピッタリ収まるように background-size contain
      //--------------------------------------------------
      this.$target
        .css({'height': this.H})
        .css({'margin-top': 0,'margin-left': this.ml,'top':0,'left':'50%','width':'auto'});

    } 

  }

  init() {

    this.getDef();

  }

  run() {

    this.setStyle();
    this.getSize();
    if (this.dir=='center') this.setPos();
    if (this.dir=='w') this.setPosW();
    if (this.dir=='h') this.setPosH();

  }

  setEvents() {

    gb.r.add('fullsize', this.run.bind(this));

  }

}