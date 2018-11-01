//--------------------------------------------------
//
//  MenuBtn
//
//--------------------------------------------------

export default class MenuBtn {

  constructor($wrap,id,closeFlag = false){

    this.$wrap = $wrap;
    this.id = id;

    this.closeFlag = closeFlag;

    this.isStop = true;
    this.isOpen = false;

    this.onClose = ()=>{};

    this.setup();

  }

  setup(param) {

    if (!this.closeFlag) {

    this.dom = '<div class="icon-animation type-4 menuBtn'+this.id+'">' + 
                  '<span class="top"></span>' + 
                  '<span class="middle"></span>' + 
                  '<span class="bottom"></span>' + 
               '</div>';

    } else {

    this.dom = '<div class="icon-animation type-4 menuBtn'+this.id+' is-open">' + 
                  '<span class="top"></span>' + 
                  '<span class="middle"></span>' + 
                  '<span class="bottom"></span>' + 
               '</div>';

    }

    this.$wrap.append(this.dom);
    this.$target = $('.menuBtn'+this.id);

    this.setEvents();

  }

  toggle() {

    // if (this.isStop) return;

    // 閉じる
    this.$target.toggleClass('is-open');

    // 開いていたらコールバック処理
    if (this.isOpen) this.onClose();

    // flag変更
    this.isOpen = !this.isOpen;

  }

  close() {
    
    // 閉じる
    this.$target.removeClass('is-open');

    // flag変更
    this.isOpen = false;

  }

  setEvents() {

    this.$target.on('click', this.toggle.bind(this))

  }

}