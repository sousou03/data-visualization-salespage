// ------------------------------------------------------------
//
//  UrlMgr
//
// ------------------------------------------------------------

import metaData from "../../../ejs/inc/metaData.json";

import PushState from './PushState.es6';
import Query from './Query.es6';

import HistoryMgr from './HistoryMgr.es6';

export default class UrlMgr {

  constructor(){

    this.p = new PushState();
    this.q = new Query(this.p);
    this.hs = new HistoryMgr();

    this.$target = $('.urlm');
    this.$menu = $('#menu .list .item');
    
    this.setup();
    this.setEvents();

  }

  setup() {

    // 初回時 add history
    this.hs.add({path: gb.u.u.path(), query: this.q.parse()})
    // this.log();


    this.p.cb = this.onTransitionByBrowser.bind(this);

  }

  switchMeta(page) {

    var d = metaData[page];
    var dc = metaData['common'];

    $('title').text(d.tit);
    $('.metaDes').attr({'content': d.des});
    $('.metaKey').attr({'content': d.keyword});

    $('.fbTit').attr({'content': dc.fb.tit});
    $('.fbDes').attr({'content': dc.fb.des});
    $('.fbImg').attr({'content': dc.fb.img});
    $('.fbUrl').attr({'content': dc.fb.url});

    $('.twTit').attr({'content': dc.tw.tit});
    $('.twDes').attr({'content': dc.tw.des});
    $('.twImg').attr({'content': dc.tw.img});
    $('.twUrl').attr({'content': dc.tw.url});

  }

  // switchMeta2() {

  //   // jquery-pjaxから借りた
  //   var $newPageHead = jQuery( '<head />' ).html(
  //      jQuery.parseHTML(
  //         newPageRawHTML.match( /<head[^>]*>([\s\S.]*)<\/head>/i )[ 0 ],
  //         document,
  //         true
  //      )
  //   );
  //   // 変更したいタグ(ご自身の環境に合わせて適宜変更してください)
  //   var headTags = [
  //      "link[rel='canonical']",
  //      "link[rel='shortlink']",
  //      "link[rel='alternate']",
  //      "meta[name='description']",
  //      "meta[property^='og']",
  //      "meta[name^='twitter']",
  //      "meta[name='robots']"
  //   ].join( ',' );
  //   jQuery('head').find(headTags).remove(); // タグを削除する
  //   $newPageHead.find(headTags).appendTo('head'); // タグを追加する
    
  // }

  // // https://qiita.com/resistance_gowy/items/533628e129ff3d2a90df
  // updateSNS() {

  //   twttr.widgets.load();
  //   FB.XFBML.parse();

  //   // twttr.widgets.load($("#detailSns")[0]);
  //   // FB.XFBML.parse($("#detailSns")[0]);

  // }

  // updateGA() {

  //   // Analyticsにヒットを送信(Google Analyticsを導入している場合)
  //   if (typeof ga === 'function') {
  //      ga('send', 'pageview', location.pathname);
  //   }

  // }

  // runScript() {

  //   // 外部ファイルを任意の場所に追加して実行する(オプション)
  //   // 外部ファイルにdocument.write()が書かれていると、それは無視されますので正常に表示されません。
  //   var script = document.createElement('script');
  //   script.src = 'http://example.com/hoge.js';
  //   // document.body.appendChild(script);

  //   // インラインに書いたjsを実行する(オプション)
  //   var temp = document.createElement('div');
  //   temp.innerHTML = newPageRawHTML;
  //   var hoge = temp.querySelector('.hoge script');
  //   if(hoge != null){
  //      eval(hoge.innerHTML);
  //   }

  // }

  switchURL(by, link) {

    this.p.removeEvents(); // ハッシュ追加でpopstateが呼ばれるのを防ぐため、url変更のためにremoveEvents

    switch (by){
      case 'pushstate':
        this.p.set(link);
        break;
      case 'hash':
        // this.h.switchHash(link);
        break;
      case 'query':
        this.q.set(link);
        break;
    }

    // meta情報の変更
    // this.switchMeta('link');

    // hisotryの積み上げ
    this.hs.add({path: gb.u.u.path(), query: this.q.parse()})

    this.p.setEvents();

    var obj = this.checkURL();
    // イベント発行
    $(window).trigger('switchURL', [obj.page[0],obj.page[1],obj.img[0],obj.img[1]]);

    // this.log();

  }

  onTransitionByBrowser() {

    // this.hs.add(newUrl);

    // add history
    this.hs.add({path: gb.u.u.path(), query: this.q.parse()})


    // switch url
     // show/hide contents
    var obj = this.checkURL();

    // current
    this.$menu.removeClass('current');

    // responsive sp
    if (gb.r.w<=750) {

      switch (obj.page[0]){
       case '/':
         if (obj.page[1]=='profile') {
           gb.profile.close(true, true);
           gb.menu.close(true, true);
         }
         if (obj.page[1]=='overview') {
           gb.overview.close(true, true);
           gb.menu.close(true, true);
         }
         if (obj.page[1]=='modal') gb.modal.close();

         this.$menu.eq(0).addClass('current');
         break;
       case 'profile':
         if (obj.page[1]=='/') gb.profile.open(false, true);
         if (obj.page[1]=='overview') {
           gb.overview.close(true);          
           gb.profile.open(true, true);
         }

         this.$menu.eq(1).addClass('current');
         break;
       case 'overview':
         if (obj.page[1]=='/') gb.overview.open(false, true);
         if (obj.page[1]=='profile') {
           gb.profile.close(true);
           gb.overview.open(true, true);
         }

         this.$menu.eq(4).addClass('current');
         break;
       case 'modal':
         if (obj.page[1]=='/') gb.modal.open(null, Number(obj.img[0]-1), false);
         if (obj.page[1]=='modal') gb.modal.setCur(Number(obj.img[0]-1));
         break;
      }

    } else {

      switch (obj.page[0]){
       case '/':
         if (obj.page[1]=='profile') gb.profile.close();
         if (obj.page[1]=='overview') gb.overview.close();          
         if (obj.page[1]=='modal') gb.modal.close();

         this.$menu.eq(0).addClass('current');
         break;
       case 'profile':
         if (obj.page[1]=='/') gb.profile.open(false, true);
         if (obj.page[1]=='overview') {
           gb.overview.close(true);          
           gb.profile.open(true, true);
         }

         this.$menu.eq(1).addClass('current');
         break;
       case 'overview':
         if (obj.page[1]=='/') gb.overview.open(false, true);
         if (obj.page[1]=='profile') {
           gb.profile.close(true);
           gb.overview.open(true, true);
         }

         this.$menu.eq(4).addClass('current');
         break;
       case 'modal':
         if (obj.page[1]=='/') gb.modal.open(null, Number(obj.img[0]-1), false);
         if (obj.page[1]=='modal') gb.modal.setCur(Number(obj.img[0]-1));
         break;
      }

    }

    // イベント発行
    $(window).trigger('switchURL', [obj.page[0],obj.page[1],obj.img[0],obj.img[1]]);

  }

  onTransition(that) {

    var link = $(that).data('link');
    
    // urlの書き換え
    switch (link){
      case '/':
        this.switchURL('pushstate', link)
        break;
      case 'profile':
        this.switchURL('query', {page: 'profile'})
        break;
      case 'overview':
        this.switchURL('query', {page: 'overview'})
        break;
    }

  }

  log() {

    // log('path:', gb.u.u.path());
    // log('hash:', this.h.getHash());
    // log('query:', this.q.parse());

    // 現在と過去のurlを確認
    var obj = this.checkURL();

  }

  checkURL() {

    // 現在と過去のurlを確認
    if (this.hs.currentStatus().query.page) var pagecur = this.hs.currentStatus().query.page;
    else var pagecur = '/';
    if (this.hs.currentStatus().query.img) var imgcur = this.hs.currentStatus().query.img;
    else var imgcur = 0;

    var pageprev = null;
    var imgprev = 0;
    if (this.hs.prevStatus()) {
      if (this.hs.prevStatus().query.page) var pageprev = this.hs.prevStatus().query.page;
      else var pageprev = '/';
      if (this.hs.prevStatus().query.img) var imgprev = this.hs.prevStatus().query.img;
      else var imgprev = 0;
    }

    log('current', pagecur, imgcur);
    log('prev', pageprev, imgprev);

    return {page: [pagecur, pageprev], img: [imgcur, imgprev]};

  }

  setEvents() {

    var self = this;

    this.$target.on('click', function(){self.onTransition.call(self, this)});

  }

}