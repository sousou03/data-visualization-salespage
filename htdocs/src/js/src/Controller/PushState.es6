//--------------------------------------------------
//
//  PushState
//
//--------------------------------------------------

export default class PushState {

  constructor() {

    this.cb = ()=>{};

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  set(nextPage) {

    // pushState(state, title, url)
    // state → popstateイベント時にオブジェクト渡せる
    // title → 使われていない
    // url → 積み上げたり、変更するurl

    // 履歴を積み上げる
    window.history.pushState(null, null, nextPage);

    // 現在の履歴を変更する
    // window.history.replaceState(null, null, nextPage);
      
  }

  onPopState(e) {

    // if (!e.originalEvent.state) return; // 初回アクセス時に再読み込みしてしまう対策

    // var state = e.state;
    // log('path:', gb.u.u.path());
    // log(state, state.name);

    this.cb();

  }

  setEvents() {

    // popstate ブラウザバック対応
    $(window).on('popstate', (e)=>{this.onPopState.call(this, e)});

  }

  removeEvents() {

    // popstate ブラウザバック対応
    $(window).off('popstate');

  }

}