//--------------------------------------------------
//
//  Btn
//
//--------------------------------------------------

export default class Btn {

  constructor($wrap){

    this.$wrap = $wrap;
    this.$bar = $wrap.find('.bar');

    this.isOpen = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$bar.eq(0), {scaleX: 0.0, rotation: -45})  
    TweenMax.set(this.$bar.eq(1), {scaleX: 0.0, rotation: 45})  

  }

  show() {

    log('enter');

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      var rot = -45;
      if (index==1) rot = 45;

      tl
        // .set($(el), {'transform-origin': '100% 50%'})
        .to($(el), 0.4, {
          scaleX: 1.0,
          z: 0,
          rotation: rot,
          ease: Expo.easeOut
        })  
        // .set($(el), {'transform-origin': '0% 50%'})  
        // .to($(el), 0.9, {
        //   scaleX: 1.0,
        //   z: 0,
        //   ease: Expo.easeOut
        // })  
      
    });

  }

  hide() {

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      var rot = -45;
      if (index==1) rot = 45;

      tl
        // .set($(el), {'transform-origin': '100% 50%'})
        .to($(el), 0.4, {
          scaleX: 0.0,
          z: 0,
          rotation: rot,
          ease: Expo.easeOut
        })  
        // .set($(el), {'transform-origin': '0% 50%'})  
        // .to($(el), 0.9, {
        //   scaleX: 1.0,
        //   z: 0,
        //   ease: Expo.easeOut
        // })  
      
    });

 

  }

  onEnter() {


  }

  onLeave() {
 

  }

  setEvents() {

    this.$wrap.on('mouseenter', this.onEnter.bind(this));
    this.$wrap.on('mouseleave', this.onLeave.bind(this));

  }

}