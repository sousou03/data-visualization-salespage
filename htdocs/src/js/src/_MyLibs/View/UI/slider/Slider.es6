//--------------------------------------------------
//
//  Slider
//
//--------------------------------------------------

import Swipe from './SwipeForSlider.es6';

export default class Slider {

  constructor($target) {

    // dom
    this.$img = $('.slider img');

    this.$arrowL = $('.sliderWrap .arrowL');
    this.$arrowR = $('.sliderWrap .arrowR');

    this.$text = $('.product .details .detail');
    this.$price = $('.product .details .price');
    this.$indicator = $('.product .indicator .item');

    this.current = 0;
    this.old = null;
    this.next = 1;
    this.prev = null;
    this.len = this.$img.length;

    this.isAutoStop = false;

    this.textList = [
      'ライトグレーとペールピンクの組み合わせがフェミニン。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）',
      'ブラウンにローズゴールドの組み合わせがトラッド。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">18KRG×レザー（37×22mm）',
      'クリーンな雰囲気が漂う、潔いブルーの組み合わせ。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、３気圧防水（30m），<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）',
      '黒と白のシックな配色に、ゴールドのインデックスと<br class="pc">ブルーの針がアクセント。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）',
      'グレーのストラップにティファニーブルーのクールな配色。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）'
    ];
    this.priceList = [
      '￥469,800',
      '￥1,020,600',
      '￥469,800',
      '￥469,800',
      '￥469,800'
    ];

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.switchDetails();

    this.s = new Swipe();
    this.s.onNext = this.right.bind(this);
    this.s.onPrev = this.left.bind(this);

  }

  // 右へ
  right() {

    // if (this.current == this.len - 1) return;

    // img next
    TweenMax.set(this.$img.eq(this.next), {x: 40});
    TweenMax.to(this.$img.eq(this.next), 0.6, {x: 0,opacity: 1});

    // cur
    TweenMax.to(this.$img.eq(this.current), 0.6, {x: -40,opacity: 0});

    // currentの計算
    this.calculateOrder('right');

    // textの変更
    this.switchDetails();

    // indicatorの変更
    this.switchIndicator();

  }

  // 左へ
  left() {

    // if (this.current == 0) return;

    // next
    TweenMax.set(this.$img.eq(this.prev), {x: -40});
    TweenMax.to(this.$img.eq(this.prev), 0.6, {x: 0,opacity: 1});

    TweenMax.to(this.$img.eq(this.current), 0.6, {x: 40,opacity: 0});

    // currentの計算
    this.calculateOrder('left');

    // textの変更
    this.switchDetails();

    // indicatorの変更
    this.switchIndicator();

  }

  // 右へ
  rightByIndicator() {

    // if (this.current == this.len - 1) return;

    // img next
    TweenMax.set(this.$img.eq(this.next), {x: 40});
    TweenMax.to(this.$img.eq(this.next), 0.6, {x: 0,opacity: 1});

    // cur
    TweenMax.to(this.$img.eq(this.old), 0.6, {x: -40,opacity: 0});

    // currentの計算
    this.calculateOrder('right');

    // textの変更
    this.switchDetails();

    // indicatorの変更
    this.switchIndicator();

  }

  // 左へ
  leftByIndicator() {

    // if (this.current == 0) return;

    // next
    TweenMax.set(this.$img.eq(this.prev), {x: -40});
    TweenMax.to(this.$img.eq(this.prev), 0.6, {x: 0,opacity: 1});

    TweenMax.to(this.$img.eq(this.old), 0.6, {x: 40,opacity: 0});

    // currentの計算
    this.calculateOrder('left');

    // textの変更
    this.switchDetails();

    // indicatorの変更
    this.switchIndicator();

  }

  swicthArrow() {

    // 右端
    if (this.current == this.len - 1) {

      var src = this.$arrowR.attr('src');
      src = gb.u.strReplace(src, '_on', '_off');
      this.$arrowR.attr('src',src);

    // 左端
    } else if (this.current == 0) {

      var src = this.$arrowL.attr('src');
      src = gb.u.strReplace(src, '_on', '_off');
      this.$arrowL.attr('src',src);

    } else {

      var src = this.$arrowL.attr('src');
      src = gb.u.strReplace(src, '_off', '_on');
      this.$arrowL.attr('src',src);

      var src = this.$arrowR.attr('src');
      src = gb.u.strReplace(src, '_off', '_on');
      this.$arrowR.attr('src',src);

    }

  }

  switchDetails() {

    var t = this.textList[this.current];
    var p = this.priceList[this.current];

    this.$text.html(t);
    this.$price.text(p);

  }

  switchIndicator() {

    this.$indicator
      .removeClass('isActive')
      .eq(this.current).addClass('isActive');

  }

  calculateOrder(dir) {

    // 端で止める
    // if (dir=='right') {

    //   this.current++;
    //   if (this.current>this.len-1) this.current=this.len-1;
    //   this.next = this.current+1;
    //   this.prev = this.current-1;

    // } else {

    //   this.current--;
    //   if (this.current<0) this.current=0;  
    //   this.next = this.current+1;
    //   this.prev = this.current-1;

    // }

    // ループ
    if (dir=='right') {

      this.current++;

      if (this.current>this.len-1) {

        this.current=0;
        this.next=this.current+1;
        this.prev=this.len-1;

      } else {

        this.next = this.current+1;
        this.prev = this.current-1;

      }

      if (this.current==this.len-1) {

        this.next=0;
        this.prev=this.current-1;

      }

    } else {

      this.current--;
      if (this.current<0) {

        this.current=this.len-1;
        this.next = 0;
        this.prev = this.current-1;

      } else {

        this.next = this.current+1;
        this.prev = this.current-1;

      }

    }

    // this.old = this.current;

  }

  autoSwicth() {

    if (!this.isAutoStop) this.right();

    setTimeout(()=>{

      this.autoSwicth();

    },5000)

  }

  onIndicator(that) {

    var num = this.$indicator.index(that);

    if (this.current < num) {

      this.old = this.current;
      this.current = num-2;
      this.calculateOrder('right');

      this.rightByIndicator();

    }

    if (this.current > num) {

      this.old = this.current;
      this.current = num + 2;
      this.calculateOrder('left');

      this.leftByIndicator();

    }

  }

  onEnter() {

    this.isAutoStop = true;

  }

  onLeave() {

    this.isAutoStop = false;

  }

  setEvents() {

    var self = this;

    this.$arrowL.on('click', this.left.bind(this));
    this.$arrowR.on('click', this.right.bind(this));
    $('.arrowWrap').on('mouseenter', this.onEnter.bind(this));
    $('.arrowWrap').on('mouseleave', this.onLeave.bind(this));
    this.$indicator.on('click', function(){self.onIndicator.call(self,this)});
    this.autoSwicth();

  }
  
}