//--------------------------------------------------
//
//  Modal
//
//--------------------------------------------------
export default class Modal {

  constructor($open,$close,$contents, s){

    this.$open = $open;
    this.$close = $close;
    this.$contents = $contents.add(this.$close);

    this.isShow = false;

    this.$logoB = $('.logo_b');

    this.setEvents();
    this.setup();

  }

  setup() {



  }

  toggle() {

    if (this.$open.hasClass('on')) {

      this.close();

    } else {

      this.open();

    };

    this.$open.toggleClass('on');

  }

  open() {

    if (this.isShow) return;




    // トップページの場合
    if (gb.sceneMgr.current == 0) {

        var tl = new TimelineMax();
        var tl02 = new TimelineMax();

        tl
          // logo
          .to(this.$logoB, 1.2, {
            'top': '0%',
            'margin-top': 54,
            ease: Expo.easeInOut,
          })    
          .to(this.$logoB.find('img'), 1.2, {
            'width': 132,
            ease: Expo.easeInOut,
          },'-=1.2')

        tl02
          .set(this.$contents, {'display': 'block',opacity: 0,delay: 0.65})
          .add(()=>{gb.position.setCenter();}) //位置を中央に
          .to(this.$contents, 0.5, {
            'opacity': 1,
            onComplete: ()=>{
              this.isShow = true;
            }
          });

    } else {

      var tl = new TimelineMax();
      tl
        .set(this.$contents, {'display': 'block',opacity: 0})
        .add(()=>{gb.position.setCenter();}) //位置を中央に
        .to(this.$contents, 0.5, {
          'opacity': 1,
          onComplete: ()=>{
            this.isShow = true;
          }
        });

    }
    

  }

  close() {

    TweenMax.to(this.$contents, 0.5, {
      'opacity': 0,
      onComplete: ()=>{
        TweenMax.set(this.$contents, {'display': 'none'});
        this.isShow = false;
      }
    });

    // トップページの場合
    if (gb.sceneMgr.current == 0) {

        var tl = new TimelineMax();

        tl
          .to(this.$logoB, 1.2, {
            'top': '50%',
            'margin-top': -40,
            ease: Expo.easeInOut,
          })          
          .to(this.$logoB.find('img'), 1.2, {
            'width': 300,
            ease: Expo.easeInOut,
          },'-=1.2')

    }

  }

  onResize () {

    // this.getWindowSize();

  }

  setEvents() {

    this.$open.on('click', this.open.bind(this));
    this.$close.on('click', this.close.bind(this));

  }

  removeEvents() {

    // this.$open.off('click');
    // this.$close.off('click');

  }

}