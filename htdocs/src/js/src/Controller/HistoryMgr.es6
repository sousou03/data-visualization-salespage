// ------------------------------------------------------------
//
//  HistoryMgr
//
// ------------------------------------------------------------

export default class HistoryMgr {

  constructor(){

    this.history = [];

  }

  add(obj) {

    this.history.push(obj);

  }

  /**
   * Return information about the current status
   *
   * @memberOf Barba.HistoryManager
   * @return {Object}
   */
  currentStatus() {
    return this.history[this.history.length - 1];
  }

  /**
   * Return information about the previous status
   *
   * @memberOf Barba.HistoryManager
   * @return {Object}
   */
  prevStatus() {
    var history = this.history;

    if (history.length < 2)
      return null;

    return history[history.length - 2];
  }

}