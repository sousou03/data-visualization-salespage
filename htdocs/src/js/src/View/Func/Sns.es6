// ------------------------------------------------------------
//
//  SNS
//
// ------------------------------------------------------------

import metaData from "../../../../ejs/inc/metaData.json";

export default class SNS {

  constructor($fb=$('.fbShare'),$tw=$('.twShare'),$line=$('.lineShare'),$mail=$('.onMail')){

    // data
    var dataC = metaData['common'];

    this.fb = {
      $target: $fb,
      tit: dataC.fb.tit,
      des: dataC.fb.des,
      img: dataC.fb.img,
      url: dataC.fb.url,
      // url: location.href,
    }

    this.tw = {
      $target: $tw,
      tit: dataC.tw.tit,
      text: dataC.tw.text,
      url: dataC.tw.url,
      // url: location.href,
      hash: dataC.tw.hash,
    }

    this.line = {
      $target: $line,
      tit: dataC.tit,
      des: dataC.des,
      img: dataC.img,
      url: dataC.line.url,
      // url: location.href,
      text: dataC.line.text,
    }

    this.mail = {
      $target: $mail,
      tit: dataC.mail.tit,
      des: dataC.mail.des,
      address: dataC.address,
    }

    this.setEvents();

  }

  runFB(that) {

    var share = $(that).data('share');
    if (share=='index') {
      var file = 'https://sahara.jp/feature/share/';
    } else {
      var file = 'https://sahara.jp/feature/share-campaign/';
    }

    this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + file);

    return false;

  }


  runTW(that) {

    var share = $(that).data('share');
    if (share=='index') {
      this.tw.url = 'https://sahara.jp/feature/share/';
      this.tw.text = 'ずっと前からあるものを新しい目で見ること。そのとき世界は彩りを増し、人生はもっと豊かになる。タイガー魔法瓶が贈る、LOVE TIGER COLLECTION。';
    } else {
      this.tw.url = 'https://sahara.jp/feature/share-campaign/';
      this.tw.text = 'SAHARAステンレスボトルをご購入の方から抽選で300名様に、LOVE TIGER COLLECTIONのオリジナルグッズが当たる！';
    }

    this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + encodeURIComponent(this.tw.text) + '&hashtags=' + this.tw.hash);
    // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);

    return false;

  }

  runLINE(that) {

    var share = $(that).data('share');
    if (share=='index') {
      this.line.url = 'https://sahara.jp/feature/share/';
      this.line.text = 'ずっと前からあるものを新しい目で見ること。そのとき世界は彩りを増し、人生はもっと豊かになる。タイガー魔法瓶が贈る、LOVE TIGER COLLECTION。';
    } else {
      this.line.url = 'https://sahara.jp/feature/share-campaign/';
      this.line.text = 'SAHARAステンレスボトルをご購入の方から抽選で300名様に、LOVE TIGER COLLECTIONのオリジナルグッズが当たる！';
    }

    this.openWindow('http://line.me/R/msg/text/?' + this.line.text + '%0A' + this.line.url);

    return false;

  }

  runMail() {

    location.href = 'mailto:' + this.mail.address + '?subject=' + this.mail.tit + '&body=' + this.mail.des + this.mail.url;

    return false;

  }

  openWindow(url, w, h) {

      if(w === undefined) w = 600;
      if(h === undefined) h = 600;

      var l = Number((window.screen.width-w)/2);
      var t = Number((window.screen.height-h)/2);

      window.open(url,'new_window',
                'menubar=no,' +
                'toolbar=no,' +
                'resizable=yes,' +
                'scrollbars=yes,' +
                'height=' + h + ',' +
                'width=' + w + ',' +
                'left=' + l + ',' +
                'top=' + t
              );

  }

  setEvents() {

    var self = this;

    if (this.fb.$target) this.fb.$target.on('click', function(){self.runFB.call(self, this)});
    if (this.tw.$target) this.tw.$target.on('click', function(){self.runTW.call(self, this)});
    if (this.line.$target) this.line.$target.on('click', function(){self.runLINE.call(self, this)});
    if (this.mail.$target) this.mail.$target.on('click', ()=>{this.runMail();return false;});

  }

  removeEvents() {

    if (this.fb.$target) this.fb.$target.off('click');
    if (this.tw.$target) this.tw.$target.off('click');
    if (this.line.$target) this.line.$target.off('click');
    if (this.mail.$target) this.mail.$target.off('click');

  }

}