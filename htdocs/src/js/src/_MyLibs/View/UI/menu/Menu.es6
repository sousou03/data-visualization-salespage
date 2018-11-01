//--------------------------------------------------
//
//  Menu
//
//--------------------------------------------------

import SoundUI from '../../SoundUI/SoftLines.es6';
import Modal from './Modal.es6';

export default class Menu {

  constructor(){

    this.toggleSound = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    var $wrap = $('#header .menu02')
    this.SoundUI = new SoundUI($wrap);

    this.Modal = new Modal($('#header .logo'), $('#about .closeWrap'), $('#about'));

  }

  onResize () {


  }

  onFull() {

    gb.u.o.full();

  }

  onSound() {

    if (this.toggleSound) {

      if (gb.video_top && gb.video_top.isPlay) gb.video_top.tweenVolume (0, 1);
      if (gb.video_main && gb.video_main.isPlay) gb.video_main.tweenVolume (0, 1);
      this.SoundUI.wave.onClick();

    } else {

      if (gb.video_top && gb.video_top.isPlay) gb.video_top.tweenVolume (1, 1);
      if (gb.video_main && gb.video_main.isPlay) gb.video_main.tweenVolume (1, 1);
      this.SoundUI.wave.onClick();

    }

    this.toggleSound = !this.toggleSound;

  }

  setEvents() {

    gb.r.add('menu', this.onResize.bind(this));

    $('.menu02').on('click', this.onSound.bind(this));
    // fullscreen
    $('.menu03').on('click', this.onFull.bind(this));

  }

}