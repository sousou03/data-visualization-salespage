//--------------------------------------------------
//
//  MenuBtnClose
//
//--------------------------------------------------

export default class MenuBtnClose {

  constructor($wrap,id){

    this.$wrap = $wrap;
    this.id = id;

    this.isStop = true;
    this.isOpen = false;

    this.onClose = ()=>{};

    this.setup();

  }

  setup(param) {

    this.dom = '<div class="icon-animation type-4 menuBtn'+this.id+' is-open">' + 
                  '<span class="top"></span>' + 
                  '<span class="middle"></span>' + 
                  '<span class="bottom"></span>' + 
               '</div>';

    this.$wrap.append(this.dom);
    this.$target = $('.menuBtn'+this.id);

    this.setEvents();

  }

  run() {


  }

  setEvents() {

    

  }

}