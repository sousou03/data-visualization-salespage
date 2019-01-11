/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // setting
	
	
	// Util
	
	
	// model
	
	
	// events
	
	
	// view
	
	
	var _Conf = __webpack_require__(1);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(11);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	var _Debugger = __webpack_require__(12);
	
	var _Debugger2 = _interopRequireDefault(_Debugger);
	
	var _Controller = __webpack_require__(13);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(20);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _ResourceMgr = __webpack_require__(23);
	
	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);
	
	var _UpdateMgr = __webpack_require__(28);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(29);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(30);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(31);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _UpdateList = __webpack_require__(32);
	
	var _UpdateList2 = _interopRequireDefault(_UpdateList);
	
	var _ResizeList = __webpack_require__(33);
	
	var _ResizeList2 = _interopRequireDefault(_ResizeList);
	
	var _ScrollList = __webpack_require__(34);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
	var _MouseList = __webpack_require__(35);
	
	var _MouseList2 = _interopRequireDefault(_MouseList);
	
	var _View = __webpack_require__(36);
	
	var _View2 = _interopRequireDefault(_View);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ------------------------------------------------------------
	      //  初期値の設定・データの配置
	      //  util関数の初期化
	      //  イベントマネージャーの設置
	      // ------------------------------------------------------------
	      // setting
	      gb.conf = new _Conf2.default();
	
	      // util
	      gb.d = new _Debugger2.default();
	      gb.u = new _Util2.default();
	      gb.f = new _Func2.default();
	
	      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
	      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();
	
	      this.onReady();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	      gb.util = new _Controller2.default();
	
	      // ------------------------------------------------------------
	      //  Event
	      // ------------------------------------------------------------   
	      if (gb.conf.isScrollMgr) gb.s = new _ScrollMgr2.default();
	      if (gb.conf.isMouseMgr) gb.m = new _MouseMgr2.default();
	      // gb.ul = new UpdateList();
	      // gb.rl = new ResizeList();
	      gb.sl = new _ScrollList2.default();
	      // gb.ml = new MouseList();
	
	      // ------------------------------------------------------------
	      //  Loading / Model / performance
	      // ------------------------------------------------------------
	      gb.lm = new _Controller4.default();
	      gb.rm = new _ResourceMgr2.default();
	
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	      // Layout, UI, Effects
	      gb.v = new _View2.default();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  Model
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Common;
	}();
	
	// ------------------------------------------------------------
	//
	//  Main
	//
	// ------------------------------------------------------------
	
	
	exports.default = Common;
	(function () {
	
	  // // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	
	  gb.common = new Common();
	
	  if (gb.up) gb.up.loop(); //全体のループスタート
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Config
	//
	// ------------------------------------------------------------
	
	var Conf = function Conf() {
	  _classCallCheck(this, Conf);
	
	  // ------------------------------------------------------------
	  //  本番フラグ
	  // ------------------------------------------------------------    
	  this.RELEASE = true;
	  // this.RELEASE = false;
	
	  // ------------------------------------------------------------
	  //  フラグ関連 
	  // ------------------------------------------------------------
	  // ログ出力, パラメータ, Stars
	  this.LOG = true;
	  this.PARAM = true;
	  this.Profiler = true;
	  this.LOADING = true;
	  this.OPENING = false;
	  this.EFFECT = false;
	  this.INERTIA = false;
	
	  // Event
	  this.isUpdateMgr = true;
	  this.isResizeMgr = true;
	  this.isScrollMgr = true;
	  this.isMouseMgr = true;
	
	  if (this.RELEASE) {
	    this.LOG = false;
	    this.PARAM = false;
	    this.Profiler = false;
	    this.LOADING = true;
	    this.OPENING = false;
	    this.EFFECT = false;
	    this.INERTIA = false;
	  }
	
	  // ------------------------------------------------------------
	  //  basic width height
	  // ------------------------------------------------------------
	  // viewport size
	  this.vDefW = window.innerWidth;
	  this.vDefH = window.innerHeight;
	  this.vW = window.innerWidth;
	  this.vH = window.innerHeight;
	  this.vSPW = window.innerWidth;
	  this.vSPH = window.innerHeight;
	
	  // target size
	  this.DefW = 1300;
	  this.DefH = 850;
	  this.W = 1200;
	  this.H = 750;
	  this.SPW = 375;
	  this.SPH = 667;
	
	  // ------------------------------------------------------------
	  //  ブレイクポイント
	  // ------------------------------------------------------------
	  this.bp00 = 375;
	  this.bp01 = 768;
	  this.bp02 = 1080;
	  this.bp03 = 1280;
	
	  // ------------------------------------------------------------
	  //  レティナ対応
	  // ------------------------------------------------------------
	  this.isRetina = window.devicePixelRatio && window.devicePixelRatio > 1 ? true : false;
	
	  // ------------------------------------------------------------
	  //
	  //  resource
	  //
	  // ------------------------------------------------------------
	
	  // ------------------------------------------------------------
	  //  API
	  // ------------------------------------------------------------
	  // this.APIData = APIData();
	  this.APIURL = './setting.xml';
	
	  // ------------------------------------------------------------
	  //  URL
	  // ------------------------------------------------------------
	  // this.URLData = URLData();
	
	  // ------------------------------------------------------------
	  //  sound data
	  // ------------------------------------------------------------
	  // this.soundData = SoundData();
	
	  // ------------------------------------------------------------
	  //  video
	  // ------------------------------------------------------------
	  // this.videoData = videoData();
	
	  // ------------------------------------------------------------
	  //  img
	  // ------------------------------------------------------------
	  // this.imgData = imgData();
	
	  // ------------------------------------------------------------
	  //  web font loaded
	  // ------------------------------------------------------------
	  // this.webFontLoaded = false;
	
	  // ------------------------------------------------------------
	  //
	  //  Ohter
	  //
	  // ------------------------------------------------------------
	  this.isFirst = true;
	
	  this.isSound = true;
	};
	
	exports.default = Conf;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Array = __webpack_require__(3);
	
	var _Array2 = _interopRequireDefault(_Array);
	
	var _Color = __webpack_require__(4);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _DateClass = __webpack_require__(5);
	
	var _DateClass2 = _interopRequireDefault(_DateClass);
	
	var _Device = __webpack_require__(6);
	
	var _Device2 = _interopRequireDefault(_Device);
	
	var _Math = __webpack_require__(7);
	
	var _Math2 = _interopRequireDefault(_Math);
	
	var _Other = __webpack_require__(8);
	
	var _Other2 = _interopRequireDefault(_Other);
	
	var _String = __webpack_require__(9);
	
	var _String2 = _interopRequireDefault(_String);
	
	var _Url = __webpack_require__(10);
	
	var _Url2 = _interopRequireDefault(_Url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // ------------------------------------------------------------
	//
	//  Util
	//
	// ------------------------------------------------------------
	
	var Util = function Util() {
	  _classCallCheck(this, Util);
	
	  this.a = new _Array2.default();
	  this.c = new _Color2.default();
	  this.d = new _DateClass2.default();
	  this.dv = new _Device2.default();
	  this.m = new _Math2.default();
	  this.o = new _Other2.default();
	  this.s = new _String2.default();
	  this.u = new _Url2.default();
	};
	
	exports.default = Util;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Array
	//
	// ------------------------------------------------------------
	
	var Array = function () {
	  function Array() {
	    _classCallCheck(this, Array);
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  Array
	  //
	  // ------------------------------------------------------------
	
	  // 配列内のランダムな値をひとつ取得
	  // -----------------------------------
	  // @arr : 配列
	  // return : 配列内の値
	  // -----------------------------------
	
	
	  _createClass(Array, [{
	    key: "arrRand",
	    value: function arrRand(arr) {
	
	      return arr[gb.u.m.randomInt(0, arr.length - 1)];
	    }
	
	    // 配列をランダムに並べ替え
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "shuffle",
	    value: function shuffle(ary) {
	
	      var arr = [];
	      arr = ary.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = arr[--i];
	        arr[i] = arr[j];
	        arr[j] = t;
	      }
	      return arr;
	    }
	
	    // ランダムな数値を作る
	
	  }, {
	    key: "randomArr",
	    value: function randomArr(len) {
	
	      var arr = [];
	
	      for (var i = 0; i < len; i++) {
	        arr.push(i);
	      }arr = this.shuffle(arr);
	
	      return arr;
	    }
	
	    // nullを削除した配列を返す
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // return : null削除した配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "sliceNull",
	    value: function sliceNull(arr) {
	
	      var i, l, len1, newArr, val;
	      newArr = [];
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        if (val !== null) {
	          newArr.push(val);
	        }
	      }
	      return newArr;
	    }
	
	    // 配列内のパラメータを比較してソート
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // @para : パラメーター名
	    // @desc : 降順かどうか(boolean) デフォルトは昇順
	    // -----------------------------------
	
	  }, {
	    key: "sort",
	    value: function sort(arr, para, desc) {
	      if (desc === void 0) {
	        desc = false;
	      }
	      if (desc) {
	        return arr.sort(function (a, b) {
	          return b[para] - a[para];
	        });
	      } else {
	        return arr.sort(function (a, b) {
	          return a[para] - b[para];
	        });
	      }
	    }
	  }, {
	    key: "getKey",
	    value: function getKey(list, value) {
	      var returnKey = [];
	      for (var key in list) {
	        if (list[key] == value) {
	          returnKey.push(key);
	        }
	      }
	      return returnKey;
	    }
	  }]);
	
	  return Array;
	}();
	
	exports.default = Array;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Color
	//
	// ------------------------------------------------------------
	
	var Color = function () {
	    function Color() {
	        _classCallCheck(this, Color);
	    }
	
	    // rgbからHEX(16進数)カラー取得
	    // -----------------------------------
	    // @r : 0~255
	    // @g : 0~255
	    // @b : 0~255
	    // return : ex "#FFFFFF"
	    // -----------------------------------
	
	
	    _createClass(Color, [{
	        key: "getHexColor",
	        value: function getHexColor(r, g, b) {
	            var str;
	            str = (r << 16 | g << 8 | b).toString(16);
	            return "#" + new Array(7 - str.length).join("0") + str;
	        }
	
	        // rgbからhslへ
	
	    }, {
	        key: "rgbToHsl",
	        value: function rgbToHsl(r, g, b) {
	            r /= 255;
	            g /= 255;
	            b /= 255;
	
	            var max = Math.max(r, g, b);
	            var min = Math.min(r, g, b);
	            var h, s, l;
	
	            l = (max + min) / 2;
	
	            if (max === min) {
	                h = s = 0;
	            } else {
	                var d = max - min;
	                switch (max) {
	                    case r:
	                        h = ((g - b) / d * 60 + 360) % 360;break;
	                    case g:
	                        h = (b - r) / d * 60 + 120;break;
	                    case b:
	                        h = (r - g) / d * 60 + 240;break;
	                }
	                s = l <= 0.5 ? d / (max + min) : d / (2 - max - min);
	            }
	
	            return [h, s * 100, l * 100];
	        }
	
	        // hslからrgbへ
	
	    }, {
	        key: "hslToRgb",
	        value: function hslToRgb(h, s, l) {
	            s /= 100;
	            l /= 100;
	
	            var r, g, b;
	
	            if (s === 0) {
	                r = g = b = l * 255;
	            } else {
	                var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	                var v1 = 2 * l - v2;
	                r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
	                g = Math.round(hueToRgb(v1, v2, h) * 255);
	                b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
	            }
	
	            return [r, g, b];
	        }
	    }]);
	
	    return Color;
	}();
	
	exports.default = Color;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  DateClass
	//
	// ------------------------------------------------------------
	
	var DateClass = function () {
	  function DateClass() {
	    _classCallCheck(this, DateClass);
	
	    this.startTime = null;
	    this.elapsedTime = null;
	    this.now = new Date();
	  }
	
	  _createClass(DateClass, [{
	    key: "getNow",
	    value: function getNow() {
	
	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.now = new Date();
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {
	
	      this.now = new Date();
	      return this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {
	
	      this.elapsed();
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {
	
	      this.elapsed();
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {
	
	      this.elapsed();
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {
	
	      this.getNow();
	
	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {
	
	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {
	
	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {
	
	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {
	
	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];
	
	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }
	
	    // 数日後のDateオブジェクト取得
	    // -----------------------------------
	
	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {
	
	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	  }]);
	
	  return DateClass;
	}();
	
	exports.default = DateClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Device
	//
	// ------------------------------------------------------------
	
	var Device = function () {
	  function Device() {
	    _classCallCheck(this, Device);
	
	    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
	    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
	    this.isRes = null;
	    this.isResSP = null; // responsive sp
	    this.isResPC = null; // responsive pc
	
	    this.isPC = null;
	    this.isSP = null;
	    this.isTAB = null;
	    this.isMB = null;
	    this.isIE = false;
	
	    this.isSetSPSize = false;
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  device
	  //
	  // ------------------------------------------------------------
	
	  _createClass(Device, [{
	    key: "isDeviceSP",
	    value: function isDeviceSP() {
	
	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");
	
	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');
	
	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');
	
	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');
	
	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {
	
	      if (!(this.isSP || this.isTAB || this.isMB)) {
	
	        $('body').addClass('isDevicePC');
	        this.isPC = true;
	        return;
	      }
	
	      this.isPC = false;
	    }
	  }, {
	    key: "setEventString",
	    value: function setEventString() {
	
	      this.eClick = this.isTab || this.isSP ? 'touchstart' : 'click';
	      this.eStart = this.isTab || this.isSP ? 'touchstart' : 'mousedown';
	      this.eEnd = this.isTab || this.isSP ? 'touchend' : 'mouseup';
	      this.eMove = this.isTab || this.isSP ? 'touchmove' : 'mousemove';
	
	      this.eEnter = this.isTab || this.isSP ? 'touchstart' : 'mouseenter';
	      this.eLeave = this.isTab || this.isSP ? 'touchend' : 'mouseleave';
	      this.eOver = this.isTab || this.isSP ? 'touchstart' : 'mouseover';
	      this.eOut = this.isTab || this.isSP ? 'touchend' : 'mouseout';
	
	      this.eWheel = this.isTab || this.isSP ? 'touchmove' : 'mousewheel';
	      this.eScroll = this.isTab || this.isSP ? 'touchmove' : 'scroll';
	    }
	
	    // スマフォ判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isSmt",
	    value: function isSmt() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }
	
	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isTablet",
	    value: function isTablet() {
	
	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }
	
	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIpad",
	    value: function isIpad() {
	
	      return navigator.userAgent.indexOf('iPad') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  OS
	    //
	    // ------------------------------------------------------------
	
	    // Android判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIos",
	    value: function isIos() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }
	
	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isPs3",
	    value: function isPs3() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }
	
	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isVita",
	    value: function isVita() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PlayStation Vita') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  browser
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isBrowserCheck",
	    value: function isBrowserCheck() {
	
	      this.isIEVersion();
	      this.isEdge();
	      this.isChrome();
	      this.isFF();
	      this.isSafari();
	      this.isOpera();
	      this.isIOSNotSfari();
	      this.isAPPBrowser();
	    }
	
	    // IEかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe",
	    value: function isIe() {
	
	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }
	
	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isWin",
	    value: function isWin() {
	
	      return navigator.platform.indexOf("Win") !== -1;
	    }
	
	    // googleChromeかどうか pcのみ
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isChrome",
	    value: function isChrome() {
	
	      if (this.ua.indexOf('chrome') !== -1) {
	
	        $('body').addClass('isChorme');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isFF",
	    value: function isFF() {
	
	      if (this.ua.indexOf('firefox') !== -1) {
	
	        $('body').addClass('isFF');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {
	
	      if (!this.isChrome() && this.ua.indexOf("lunascape") == -1) {
	
	        var pattern = new RegExp("safari", "i");
	        if (pattern.test(this.ua)) {
	
	          $('body').addClass('isSafari');
	          return true;
	        } else {
	
	          return false;
	        }
	      } else {
	
	        return false;
	      }
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {
	
	      var pattern = new RegExp("opera", "i");
	      if (pattern.test(this.ua)) {
	
	        $('body').addClass('isOpera');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // iOSのsafari以外かどうか spでsafariかsafariでないか(chromeかandroidの標準ブラウザか)を判定したい場合はこちらを使う
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIOSNotSfari",
	    value: function isIOSNotSfari() {
	
	      if (this.isIos() && this.ua.indexOf('safari') === -1 || this.isIos() && this.ua.indexOf('crios') > 0 || this.isIos() && this.ua.indexOf('gsa') > 0) {
	
	        $('body').addClass('isIOSNotSafari');
	        // alert('isIOSNotSafari');
	        return true;
	      } else {
	
	        $('body').addClass('isIOSSafari');
	        // alert('isSafari');
	        return false;
	      }
	    }
	  }, {
	    key: "isAPPBrowser",
	    value: function isAPPBrowser() {
	
	      // debug
	      // var r01 = this.ua.indexOf("fban/fbios;fbav") !== -1;
	      // var r02 = this.ua.indexOf("twitter") !== -1;
	
	      // // $('body').prepend(String(r01));
	      // // $('body').prepend(String(r02));
	
	      // // alert(r01);
	      // // alert(r02);
	
	      if (this.ua.indexOf("fban/fbios;fbav") !== -1 || this.ua.indexOf("twitter") !== -1) {
	
	        $('body').addClass('isAPPBrowser');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  version
	    //
	    // ------------------------------------------------------------
	    // IE8以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }
	
	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }
	
	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }
	
	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {
	
	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }
	
	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isEdge",
	    value: function isEdge() {
	
	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
	
	      if (b) $('body').addClass('isEdge');
	
	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {
	
	      $('body').addClass('isIE');
	      this.isIE = true;
	
	      if (this.appV.indexOf("msie 10.") != -1) {
	        $('body').addClass('isIE10');
	        return 'ie10';
	      } else if (this.appV.indexOf("msie 9.") != -1) {
	        $('body').addClass('isIE9');
	        return 'ie9';
	      } else if (this.appV.indexOf("msie 8.") != -1) {
	        $('body').addClass('isIE8');
	        return 'ie8';
	      } else if (this.appV.indexOf("msie 7.") != -1) {
	        $('body').addClass('isIE7');
	        return 'ie7';
	      } else if (this.appV.indexOf("msie 6.") != -1) {
	        $('body').addClass('isIE6');
	        return 'ie6';
	      } else if (this.appV.indexOf("trident") != -1) {
	        $('body').addClass('isIE11');
	        return 'ie11';
	      }
	
	      $('body').removeClass('isIE');
	      this.isIE = false;
	      return 'notIE';
	    }
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {
	
	      if (this.ua.indexOf("android") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {
	
	      if (this.ua.indexOf("iPhone OS") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDirection",
	    value: function isDirection() {
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isResponsive",
	    value: function isResponsive() {
	      var bp00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375 - 1;
	      var bp01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 960;
	      var bp02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
	      var bp03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1280 + 1;
	
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      // ブレイクしたときに一度だけイベントを発行する
	      if (W > bp00 && this.isRes == 'sp-s') $(window).trigger('sp_s_sp');
	      if (W <= bp00 && this.isRes == 'sp') $(window).trigger('sp_sp_s');
	      if (W > bp01 && this.isRes == 'sp') $(window).trigger('sp_tab');
	      if (W <= bp01 && this.isRes == 'tab') $(window).trigger('tab_sp');
	      if (W > bp02 && this.isRes == 'tab') $(window).trigger('tab_pc');
	      if (W <= bp02 && this.isRes == 'pc') $(window).trigger('pc_tab');
	      if (W > bp03 && this.isRes == 'pc') $(window).trigger('pc_pc_w');
	      if (W <= bp03 && this.isRes == 'pc-w') $(window).trigger('pc_w_pc');
	
	      // isRes
	      if (W <= bp00) this.isRes = 'sp-s';
	      if (W > bp00 && W <= bp01) this.isRes = 'sp';
	      if (W > bp01 && W <= bp02) this.isRes = 'tab';
	      if (W > bp02 && W <= bp03) this.isRes = 'pc';
	      if (W > bp03) this.isRes = 'pc-w';
	
	      // isResPC, isResSP
	      if (W > bp01) {
	        this.isResSP = false;
	        this.isResPC = true;
	        $('body').removeClass('isResponsiveSP');
	        $('body').addClass('isResponsivePC');
	      } else {
	        this.isResSP = true;
	        this.isResPC = false;
	        $('body').addClass('isResponsiveSP');
	        $('body').removeClass('isResponsivePC');
	      }
	
	      log(this.isResSP, this.isResPC);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  user agentでpc,sp振り分け
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isPCSP",
	    value: function isPCSP(urlPC, urlSP) {
	
	      var url = location.href;
	
	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {
	
	        location.href = urlSP;
	      }
	
	      if (this.isPC && url.indexOf('pc') == -1) {
	
	        location.href = urlPC;
	      }
	
	      if (this.isTAB && url.indexOf('pc') == -1) {
	
	        location.href = urlPC;
	      }
	    }
	  }]);
	
	  return Device;
	}();
	
	exports.default = Device;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  MyMath
	//
	// ------------------------------------------------------------
	
	var MyMath = function () {
	  function MyMath() {
	    _classCallCheck(this, MyMath);
	  }
	
	  // ランダムな整数を取得
	  // -----------------------------------
	  // @min : 最小値(int)
	  // @max : 最大値(int)
	  // return : minからmaxまでのランダムな整数(int)
	  // -----------------------------------
	
	
	  _createClass(MyMath, [{
	    key: "randomInt",
	    value: function randomInt(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    // ランダムな整数を2つの範囲から取得
	    // -----------------------------------
	    // @min1 : 最小値1(int)
	    // @max1 : 最大値1(int)
	    // @min2 : 最小値2(int)
	    // @max2 : 最大値2(int)
	    // return : minからmaxまでのランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
	      if (this.hit(2)) {
	        return this.randomInt(min1, max1);
	      } else {
	        return this.randomInt(min2, max2);
	      }
	    }
	
	    // 1/@rangeの確率でtrueを取得
	    // -----------------------------------
	    // @range : 母数(int)
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "hit",
	    value: function hit(range) {
	
	      return this.randomInt(0, range - 1) === 0;
	    }
	
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "range",
	    value: function range(val) {
	
	      return this.randomInt(-val, val);
	    }
	
	    // 値をマッピング
	    // -----------------------------------
	    // @num : マッピングする値(Number)
	    // @resMin : 結果となる値の最小値(Number)
	    // @resMax : 結果となる値の最大値(Number)
	    // @baseMin : 元となる値の最小値(Number)
	    // @baseMax : 元となる値の最大値(Number)
	    // return : マッピングされた値(Number)
	    // -----------------------------------
	
	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {
	
	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);
	
	      return (num - baseMin) * p + resMin;
	    }
	  }, {
	    key: "demical",
	    value: function demical(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	      // 計算 ( Math.pow( 10, 4 ) = 10000 )
	      var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);
	
	      return val;
	    }
	  }, {
	    key: "float",
	    value: function float(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	      return v.toFixed(n);
	    }
	
	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	    // decimal(num, n) {
	    //   var i, pos;
	    //   num = String(num);
	    //   pos = num.indexOf(".");
	    //   if (n === 0) {
	    //     return num.split(".")[0];
	    //   }
	    //   if (pos === -1) {
	    //     num += ".";
	    //     i = 0;
	    //     while (i < n) {
	    //       num += "0";
	    //       i++;
	    //     }
	    //     return num;
	    //   }
	    //   num = num.substr(0, pos) + num.substr(pos, n + 1);
	    //   return num;
	    // }
	
	  }, {
	    key: "clamp",
	    value: function clamp(val, min, max, minVal, maxVal) {
	
	      if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;
	
	      return val;
	    }
	  }, {
	    key: "rate",
	    value: function rate(val, base) {
	
	      var v = val / base;
	
	      return v;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(val01, val02, val) {
	
	      val = val < 0 ? 0 : val;
	      val = val > 1 ? 1 : val;
	      return val01 + (val02 - val01) * val;
	    }
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI; //1ラジアンが何度か
	    }
	
	    // to radians
	
	  }, {
	    key: "radian",
	    value: function radian(angle) {
	
	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {
	
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1
	
	      return arr;
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
	        return 0;
	      });
	
	      // var a = [5,3,9,1,10]
	      // 結果:1,3,5,9,10
	
	      return arr;
	    }
	
	    // map(value, min01, max01, min02, max02) {
	
	    //   var dis01 = max01 - min01;
	    //   var dis02 = max02 - min02
	
	    //   var rate = dis02 / dis01;
	
	    //   value = value * rate;
	
	    //   return value;
	    // }
	
	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {
	
	      return Math.min(max, Math.max(value, min));
	
	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	  }]);
	
	  return MyMath;
	}();
	
	exports.default = MyMath;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Other
	//
	// ------------------------------------------------------------
	
	var Other = function () {
	  function Other() {
	    _classCallCheck(this, Other);
	  }
	
	  // ------------------------------------------------------------
	  //  getPageID
	  // ------------------------------------------------------------
	
	
	  _createClass(Other, [{
	    key: 'getPageID',
	    value: function getPageID() {
	
	      this.pageID = $('body').attr('id');
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'isObject',
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: 'isNumber',
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: 'isString',
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: 'isFunction',
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: 'isNull',
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: 'isUndefined',
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setImgSPSize',
	    value: function setImgSPSize($target) {
	
	      // responsive spのとき処理
	      // if (!this.isResSP) return;
	      // 一度だけ処理
	      if (this.isSetSPSize) return;
	      this.isSetSPSize = true;
	
	      var $img = $target,
	          len = $img.length;
	
	      $img.each(function (i) {
	
	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);
	
	        $(this).attr({
	          'width': w,
	          'height': h
	        });
	
	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }
	
	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'notMove',
	    value: function notMove() {
	      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	
	      if (flag) {
	
	        $('.section01').on('touchstart.noControl touchmove.noControl touchend.noControl', function (e) {
	          e.preventDefault();
	        });
	
	        // this.f = (e)=>{e.preventDefault();};
	        // document.addEventListener('touchmove', this.f, { passive: false });
	      } else {
	
	        $('.section01').off('touchstart.noControl touchmove.noControl touchend.noControl');
	
	        // document.removeEventListener('touchmove', this.f, false);
	      }
	
	      // this.offNotMove();
	
	      // $(window).on('touchstart.noControl touchmove.noControl touchend.noControl click.noControl', function(e){e.preventDefault();});
	    }
	
	    // offNotMove() {
	
	    //   $(window).off('touchstart.noControl touchmove.noControl touchend.noControl');
	    //   // $(window).off('touchstart.noControl touchmove.noControl touchend.noControl click.noControl');
	
	    // }
	
	    // notMove(flag=true) {
	
	    //   if (flag) {
	
	    //     this.f = (e)=>{e.preventDefault();};
	
	    //     document.addEventListener('touchmove', this.f, { passive: false });
	
	    //   } else {
	
	    //     log('off',this.f)
	
	    //     document.removeEventListener('touchmove', this.f, false);
	
	    //   }
	
	    // }
	
	    // notMove() {
	
	    //   this.offNotMove();
	
	    //   this.f = (e)=>{e.preventDefault();};
	
	    //   document.addEventListener('touchmove', this.f.bind(this), { passive: false });
	
	    // }
	
	    // offNotMove() {
	
	
	    //   log(111,this.f);
	    //   if (this.f) {
	    //     log(111,this.f);
	    //     document.removeEventListener('touchmove', this.f.bind(this));  
	    //   }
	
	    // }
	
	
	  }, {
	    key: 'setPreventMousemove',
	    value: function setPreventMousemove() {
	
	      var self = this;
	
	      this.removePrevent();
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: 'preventDefault',
	    value: function preventDefault(e) {
	
	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: 'preventDefaultForScrollKeys',
	    value: function preventDefaultForScrollKeys(e) {
	
	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: 'disableScroll',
	    value: function disableScroll($target) {
	
	      if ($target.addEventListener) // older FF
	        $target.addEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.onwheel = this.preventDefault; // modern standard
	      $target.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      $target.ontouchmove = this.preventDefault; // mobile
	      // document.onkeydown  = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: 'enableScroll',
	    value: function enableScroll($target) {
	
	      if ($target.removeEventListener) $target.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.onmousewheel = document.onmousewheel = null;
	      $target.onwheel = null;
	      $target.ontouchmove = null;
	      document.onkeydown = null;
	    }
	
	    // 全画面
	
	  }, {
	    key: 'full',
	    value: function full() {
	
	      var b = document.body;
	      // var b = document.getElementById("wrapper")
	      // var b = document.getElementsByClassName('menu03');
	
	      if (b.requestFullScreen) {
	        b.requestFullScreen();
	      } else if (b.webkitRequestFullScreen) {
	        b.webkitRequestFullScreen();
	      } else if (b.mozRequestFullScreen) {
	        b.mozRequestFullScreen();
	      } else if (b.msRequestFullscreen) {
	        b.msRequestFullscreen();
	      } else {
	        alert('ご利用のブラウザはフルスクリーン操作に対応していません');
	        return;
	      }
	    }
	  }]);
	
	  return Other;
	}();
	
	exports.default = Other;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  String
	//
	// ------------------------------------------------------------
	
	var String = function () {
	  function String() {
	    _classCallCheck(this, String);
	  }
	
	  _createClass(String, [{
	    key: "isContain",
	    value: function isContain(str, contain) {
	
	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }
	
	      return false;
	    }
	
	    // 0埋めで2桁にする関数
	
	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;
	
	
	      return ("000000000000" + str).substr(num);
	    }
	
	    // 値段表記
	    // -----------------------------------
	
	  }, {
	    key: "price",
	    value: function price(num) {
	
	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }
	
	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------
	
	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {
	
	      var i, len, res;
	      res = "";
	      len = str.length;
	      i = 1;
	      while (i <= len) {
	        res += str.substr(-i, 1);
	        i++;
	      }
	      return res;
	    }
	
	    // 文字列の全置換
	    // -----------------------------------
	    // @val  : 文字列
	    // @oeg  : 置換前の文字列
	    // @dest : 置換後の文字列
	    // -----------------------------------
	
	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {
	
	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {
	
	      var r = new RegExp(before, 'g');
	
	      return str.replace(r, after);
	    }
	
	    // ユニークIDを取得
	    // -----------------------------------
	
	  }, {
	    key: "unique",
	    value: function unique() {
	
	      return new Date().getTime();
	    }
	  }]);
	
	  return String;
	}();
	
	exports.default = String;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Url
	//
	// ------------------------------------------------------------
	
	var Url = function () {
	  function Url() {
	    _classCallCheck(this, Url);
	  }
	
	  // クエリ抜き出し
	
	
	  _createClass(Url, [{
	    key: 'getParam',
	    value: function getParam() {
	
	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};
	
	      for (var i = 0; i < paramItems.length; i++) {
	
	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }
	
	      return list;
	    }
	  }, {
	    key: 'setParam',
	    value: function setParam(text) {
	
	      window.history.pushState('', '', '?' + text);
	    }
	
	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------
	
	  }, {
	    key: 'hash',
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	  }, {
	    key: 'getHash',
	    value: function getHash() {
	
	      return location.hash;
	    }
	  }, {
	    key: 'setHash',
	    value: function setHash(text) {
	
	      location.hash = text;
	    }
	
	    // 指定したstringがクッキーにセットされていたらtrue
	
	  }, {
	    key: 'checkCookie',
	    value: function checkCookie(str) {
	
	      var flag = null;
	
	      if ($.cookie(str) == undefined || $.cookie(str) == '') flag = false;else flag = true;
	
	      return flag;
	    }
	
	    // 指定したstringがクッキーにセットされていたらtrue
	
	  }, {
	    key: 'getCookie',
	    value: function getCookie(str) {
	
	      if ($.cookie(str) == undefined || $.cookie(str) == '') return null;else return $.cookie(str);
	    }
	  }, {
	    key: 'setCookie',
	    value: function setCookie(str, val, period) {
	
	      var p = period || 5 * 1000; // 5秒
	      // var p = period || 30 * 1000; // 30秒
	      // var p = period || 15 * 60 * 1000; // 15分
	      // var p = period || 7 * 24 * 60 * 60 * 1000; //7日
	      var date = new Date();
	      date.setTime(date.getTime() + p);
	
	      $.cookie(str, val, { expires: date, path: '/' });
	    }
	
	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'protocol',
	    value: function protocol() {
	
	      return location.protocol;
	    }
	  }, {
	    key: 'host',
	    value: function host() {
	
	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: 'port',
	    value: function port() {
	
	      return location.port;
	    }
	  }, {
	    key: 'path',
	    value: function path() {
	
	      return location.pathname;
	    }
	  }]);
	
	  return Url;
	}();
	
	exports.default = Url;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Func
	//
	// ------------------------------------------------------------
	
	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);
	
	    this.blank();
	    this.requestAnimationFrame();
	    this.scrollRestoration(false);
	    this.checkPassive();
	  }
	
	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {
	
	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'scrollRestoration',
	    value: function scrollRestoration() {
	      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	
	      // スクロール位置を元の位置に戻す
	      if (bool) {
	
	        window.history.scrollRestoration = 'auto';
	
	        // スクロール位置を必ず一番上に
	      } else {
	
	        window.history.scrollRestoration = 'manual';
	      }
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {
	
	      var FPS = 1000 / 60;
	
	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };
	
	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }
	
	    // smart phone 全画面
	
	  }, {
	    key: 'SPH',
	    value: function SPH() {
	      var _this = this;
	
	      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	
	      if (gb.u.dv.isPC) return;
	
	      var r = function r() {
	        clearTimeout(_this.Timer);
	        _this.Timer = setTimeout(function () {
	          var adjust = 0;
	          if ($('body').hasClass('landscape')) adjust = 200;
	          $target.innerHeight(gb.r.h + adjust);
	        }, 100);
	      };
	
	      r();
	
	      // $(window).on('resize', r);
	      $(window).on('orientationchange', r);
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {
	
	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }
	
	      log(gb.u.isIE);
	
	      if (gb.u.isIE) {
	
	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {
	
	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------
	
	      if (gb.u.isPC) {
	
	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }
	
	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.u.isAndroidVersion();
	
	      if (v == undefined) return;
	      if (v < 5) {
	
	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }, {
	    key: 'smartRollover',
	    value: function smartRollover($target) {
	      var off = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_off.';
	      var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_on.';
	
	
	      var $images = $target;
	
	      for (var i = 0; i < $images.length; i++) {
	
	        if ($images.eq(i).get(0).getAttribute("src").match(off)) {
	
	          log(111);
	
	          $images.eq(i).get(0).onmouseover = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(off, on));
	          };
	          $images.eq(i).get(0).onmouseout = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(on, off));
	          };
	        }
	      }
	    }
	  }, {
	    key: 'checkPassive',
	    value: function checkPassive() {
	
	      // check passive 
	      var supportsPassive = false;
	      try {
	        // getter として opts.passive を定義して、 addEventListener 内で呼ばれたことがわかるようにする
	        var opts = Object.defineProperty({}, 'passive', {
	          get: function get() {
	            // 内部で opts.passive が呼ばれたら対応ブラウザ
	            // 用意しておいたフラグを有効にする
	            supportsPassive = true;
	          }
	        });
	        // 試しに適当なイベントを補足し、 opts.passive が呼ばれるか試す
	        window.addEventListener("test", null, opts);
	        window.removeEventListener("test", null, opts);
	      } catch (e) {}
	
	      window.addEventListenerWithOptions = function (target, type, handler, options) {
	        var optionsOrCapture = options;
	        if (!supportsPassive) {
	          // 非対応ブラウザでは、他のオプションは全て捨て
	          // { capture: bool } の値を useCapture の値として採用する
	          optionsOrCapture = options.capture;
	        }
	        //
	        target.addEventListener(type, handler, optionsOrCapture);
	      };
	    }
	  }]);
	
	  return Func;
	}();
	
	exports.default = Func;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Debugger
	//
	// ------------------------------------------------------------
	
	var Debugger = function () {
	  function Debugger() {
	    _classCallCheck(this, Debugger);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Debugger, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.console(); // console
	    }
	
	    // html外出し用
	
	  }, {
	    key: 'setupHTML',
	    value: function setupHTML() {
	
	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;
	
	      this.$target = $('<div class="debug"></div>');
	
	      this.$target.prependTo($('body')).css({
	        position: 'fixed',
	        'z-index': 99999,
	        left: 20,
	        top: 20
	      });
	    }
	
	    // log系を短く
	
	  }, {
	    key: 'console',
	    value: function (_console) {
	      function console() {
	        return _console.apply(this, arguments);
	      }
	
	      console.toString = function () {
	        return _console.toString();
	      };
	
	      return console;
	    }(function () {
	
	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log'];
	
	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }
	
	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {
	
	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && typeof console[m] === "function" && gb.conf.LOG) {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    })
	
	    // htmlに外出し
	
	  }, {
	    key: 'html',
	    value: function html(v) {
	
	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;
	
	      this.$target.text(v);
	    }
	
	    // alert
	
	  }, {
	    key: 'alert',
	    value: function alert(v) {
	
	      window.alert(v);
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      this.setupHTML();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	    }
	  }]);
	
	  return Debugger;
	}();
	
	exports.default = Debugger;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var _UrlParamMgr = __webpack_require__(14);
	
	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);
	
	var _JudgeEnvironment = __webpack_require__(17);
	
	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);
	
	var _Profiler = __webpack_require__(18);
	
	var _Profiler2 = _interopRequireDefault(_Profiler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // page id
	      gb.pageID = $('body').attr('id');
	
	      // UrlParam パラメータ調整用
	      // gb.urlp = new UrlParamMgr();
	
	      // デバイス確認
	      gb.je = new _JudgeEnvironment2.default();
	
	      if (gb.conf.Profiler) new _Profiler2.default();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Keys = __webpack_require__(16);
	
	var _Keys2 = _interopRequireDefault(_Keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  UrlParamMgr
	//
	// ------------------------------------------------------------
	
	var UrlParamMgr = function (_Base) {
	  _inherits(UrlParamMgr, _Base);
	
	  function UrlParamMgr() {
	    _classCallCheck(this, UrlParamMgr);
	
	    var _this = _possibleConstructorReturn(this, (UrlParamMgr.__proto__ || Object.getPrototypeOf(UrlParamMgr)).call(this));
	
	    _this.name = 'UrlParamMgr';
	
	    _this.keys = (0, _Keys2.default)();
	
	    _this.setParam();
	    _this.getParam();
	
	    log(_this);
	
	    return _this;
	  }
	
	  _createClass(UrlParamMgr, [{
	    key: 'setParam',
	    value: function setParam() {}
	  }, {
	    key: 'getParam',
	    value: function getParam() {
	
	      var params = location.search.replace('?', '').split('&');
	
	      // データの設定
	      for (var i = 0, len = params.length; i < len; i++) {
	
	        // 各キー、バリューを取得
	        var param = params[i];
	        var p = param.split('=');
	        var key = p[0],
	            value = p[1];
	
	        // データと比較して設定
	        for (var j = 0; j < this.keys.length; j++) {
	
	          var obj = this.keys[j];
	
	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {
	
	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {
	
	              var val = obj.value[k];
	
	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) {
	                this[obj.key] = val;
	                break;
	                // anyは、どの値でも
	              } else if (val == 'any') {
	                this[obj.key] = value;
	                break;
	                // anyでも、特定の値でもなければ、def値を入れる
	              } else {
	                this[obj.key] = obj.def;
	              }
	            };
	          }
	        };
	      }
	
	      // キーに値が設定されてなければ、def値を設定
	      for (var j = 0; j < this.keys.length; j++) {
	
	        var obj = this.keys[j];
	
	        if (this[obj.key] == undefined) this[obj.key] = obj.def;
	      }
	    }
	  }]);
	
	  return UrlParamMgr;
	}(_Base3.default);
	
	exports.default = UrlParamMgr;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Base
	//
	// ------------------------------------------------------------
	
	var Base = function () {
	  function Base() {
	    _classCallCheck(this, Base);
	
	    this.name = 'Base';
	
	    this.isUEv = false; // update
	    this.isREv = false; // resize
	    this.isSEv = false; // scroll
	    this.isMEv = false; // mouse
	    this.prevent = true;
	
	    this.isloop = true;
	  }
	
	  _createClass(Base, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      if (this.isloop) {
	
	        this.update();
	        this.draw();
	
	        this.Timer = requestAnimationFrame(this.loop.bind(this));
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {}
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      if (this.isUEv) this.loop();
	      if (this.isREv) $(window).on('resize' + '.' + this.name, this.onResize.bind(this));
	      if (this.isSEv) $(window).on('scroll' + '.' + this.name, this.onScroll.bind(this));
	      if (this.isMEv) $(window).on('touchmove' + '.' + this.name, function (e) {
	        self.onMouseMove.call(self, e);
	        if (self.prevent) e.preventDefault();
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      if (this.isUEv) {
	        this.isloop = false;
	        cancelAnimationFrame(this.Timer);
	      }
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }, {
	    key: 'onU',
	    value: function onU() {
	
	      this.isUEv = true;
	      this.isloop = true;
	      this.loop();
	    }
	  }, {
	    key: 'offU',
	    value: function offU() {
	
	      this.isloop = false;
	      if (this.isUEv) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: 'offR',
	    value: function offR() {
	
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	    }
	  }, {
	    key: 'offS',
	    value: function offS() {
	
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	    }
	  }, {
	    key: 'offM',
	    value: function offM() {
	
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }]);
	
	  return Base;
	}();
	
	exports.default = Base;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = function data() {
	
	  return [{
	    'key': 'mode',
	    'def': 'visual',
	    'value': ['visual', 'ui', 'util', 'inspection']
	  }, {
	    'key': 'num',
	    'def': '01',
	    'value': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
	  }, {
	    'key': 'effect',
	    'def': '01',
	    'value': ['01', '02']
	  }, {
	    'key': 'move',
	    'def': 'add',
	    'value': ['add', 'easing']
	  }, {
	    'key': 'pattern_cover',
	    'def': '1',
	    'value': ['1', '2', '3', '4', '5']
	  }, {
	    'key': 'param03',
	    'def': '3',
	    'value': ['any']
	  }];
	};
	
	exports.default = data;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  JudgeEnvironment
	//
	//--------------------------------------------------
	
	var JudgeEnvironment = function (_Base) {
	  _inherits(JudgeEnvironment, _Base);
	
	  function JudgeEnvironment() {
	    _classCallCheck(this, JudgeEnvironment);
	
	    var _this = _possibleConstructorReturn(this, (JudgeEnvironment.__proto__ || Object.getPrototypeOf(JudgeEnvironment)).call(this));
	
	    _this.name = 'JudgeEnvironment';
	
	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(JudgeEnvironment, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      // デバイス判定
	      gb.u.dv.isDeviceSP();
	      gb.u.dv.isDeviceTAB();
	      gb.u.dv.isDeviceMB();
	      gb.u.dv.isDevicePC();
	      gb.u.dv.setEventString();
	
	      // ブラウザ判定
	      gb.u.dv.isBrowserCheck();
	
	      // responsive / portrait / landscape
	      gb.u.dv.isDirection();
	      gb.u.dv.isResponsive(gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      gb.u.dv.isDirection.call(gb.u.dv);
	      gb.u.dv.isResponsive.call(gb.u.dv, gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
	    }
	  }]);
	
	  return JudgeEnvironment;
	}(_Base3.default);
	
	exports.default = JudgeEnvironment;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _stats = __webpack_require__(19);
	
	var _stats2 = _interopRequireDefault(_stats);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Profiler
	//
	//--------------------------------------------------
	
	var Profiler = function (_Base) {
	  _inherits(Profiler, _Base);
	
	  function Profiler() {
	    _classCallCheck(this, Profiler);
	
	    var _this = _possibleConstructorReturn(this, (Profiler.__proto__ || Object.getPrototypeOf(Profiler)).call(this));
	
	    _this.name = 'Profiler';
	
	    _this.isUEv = true; // update
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Profiler, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.Stats = new _stats2.default();
	      this.Stats.domElement.style.position = "fixed";
	      this.Stats.domElement.style.left = "0px";
	      this.Stats.domElement.style.top = "0px";
	      document.body.appendChild(this.Stats.domElement);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.Stats) this.Stats.update();
	    }
	  }]);
	
	  return Profiler;
	}(_Base3.default);
	
	exports.default = Profiler;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// stats.js - http://github.com/mrdoob/stats.js
	(function(f,e){ true?module.exports=e():"function"===typeof define&&define.amd?define(e):f.Stats=e()})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
	u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
	1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
	b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Events = __webpack_require__(21);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _Render_def = __webpack_require__(22);
	
	var _Render_def2 = _interopRequireDefault(_Render_def);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ReadyMgr
	//
	//--------------------------------------------------
	
	var ReadyMgr = function (_Base) {
	  _inherits(ReadyMgr, _Base);
	
	  function ReadyMgr() {
	    _classCallCheck(this, ReadyMgr);
	
	    var _this = _possibleConstructorReturn(this, (ReadyMgr.__proto__ || Object.getPrototypeOf(ReadyMgr)).call(this));
	
	    _this.name = 'ReadyMgr';
	
	    _this.completed = 0;
	    _this.total = 1; // 最初に0で割られるのを防ぐ
	    _this.current = 0;
	
	    _this.$wrap = $('#wrapper');
	
	    if (gb.conf.LOADING) _this.setup(); // loading有り
	    else _this.setup_not_loading(); // loading無し
	
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ReadyMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.e = new _Events2.default(this);
	      this.r = new _Render_def2.default();
	
	      // this.r.add();
	      // this.r.show();
	    }
	  }, {
	    key: 'setup_not_loading',
	    value: function setup_not_loading() {
	
	      // this.$wrap.css('opacity', 1);
	      this.onComplete();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.e = this.e.update();
	      this.r.update(this.e);
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {
	
	      // update処理をやめる
	      this.offU();
	
	      // this.r.hide();
	
	      var $mask = $('#loading .mask');
	
	      var tl = new TimelineMax();
	
	      tl.to($mask.eq(0), 1.2, {
	        width: '102%',
	        ease: Power3.easeInOut
	      }, 0.2 * 0).to($mask.eq(1), 1.2, {
	        width: '102%',
	        ease: Power3.easeInOut
	      }, 0.2 * 1).to($mask.eq(2), 1.2, {
	        width: '102%',
	        ease: Power3.easeInOut,
	        onComplete: function onComplete() {
	          $('#loading').remove();
	        }
	      }, 0.2 * 2).add(function () {
	
	        $(window).trigger('loadingEnd');
	      }, 0.0);
	    }
	  }]);
	
	  return ReadyMgr;
	}(_Base3.default);
	
	exports.default = ReadyMgr;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Events
	//
	//--------------------------------------------------
	
	var Events = function () {
	  function Events(parent) {
	    _classCallCheck(this, Events);
	
	    this.parent = parent;
	
	    this.current = 0;
	    this.ease = 0.12;
	
	    this.isLock = false;
	    this.loopStart = true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Events, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      var target = gb.lm.completed / gb.lm.total * 100;
	      this.current += (target - this.current) * this.ease;
	      gb.lm.current = this.current;
	      // log(gb.lm.completed,gb.lm.total)
	
	      // 終了処理
	      if (this.current >= 100 && !this.isLock) {
	        this.isLock = true;
	        this.parent.onComplete();
	      }
	
	      // current が 99.9 より大きければ 100 と見なして終了処理へ
	      if (this.current > 99.9) {
	        this.current = 100;
	      }
	
	      // log(gb.lm.completed, gb.lm.total, this.current);
	
	      return this;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return Events;
	}();
	
	exports.default = Events;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function () {
	  function Render(parent) {
	    _classCallCheck(this, Render);
	
	    this.$wrap = $('html');
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'add',
	    value: function add() {
	
	      var html = '<div id="loading">' + '<div class="loadingBar"></div>' + '<div class="loadingPercent"></div>' + '</div>';
	
	      this.$wrap.append(html);
	
	      // get dom
	      this.$loading = $('#loading');
	      this.$bar = $('#loading .loadingBar');
	      this.$percent = $('#loading .loadingPercent');
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      // var tl = new TimelineMax();
	
	      // tl.to(this.$loading, 1.0, {
	      //   opacity: 1,
	      //   ease: Expo.easeInOut,
	      //   onComplete: ()=>{
	
	      //   }
	      // })
	
	      TweenMax.set(this.$loading, { opacity: 1 });
	    }
	  }, {
	    key: 'update',
	    value: function update(e) {
	
	      // log('loading', e.current);
	
	      // this.$bar.css({ width: e.current + '%' }); // bar
	      // this.$percent.html( Math.floor(e.current) + '<span>%</span>'); // value
	
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this = this;
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$bar, 1.0, {
	        x: '102%',
	        ease: Expo.easeInOut,
	        onComplete: function onComplete() {
	
	          _this.remove();
	        }
	      }).to(this.$percent, 1.0, {
	        opacity: 0,
	        ease: Power2.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	
	      this.$loading.remove();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Render;
	}();
	
	exports.default = Render;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  LoadMgr
	//
	//--------------------------------------------------
	
	var _es6Promise = __webpack_require__(24);
	
	var _OtherLoader = __webpack_require__(26);
	
	var _OtherLoader2 = _interopRequireDefault(_OtherLoader);
	
	var _GetData = __webpack_require__(27);
	
	var _GetData2 = _interopRequireDefault(_GetData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMgr = function () {
	  function LoadMgr() {
	
	    // this.setup();
	    // this.setEvents();
	
	    _classCallCheck(this, LoadMgr);
	  }
	
	  _createClass(LoadMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      // var ol = new O();
	
	      // ol.youtubeIframeScript();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return LoadMgr;
	}();
	
	exports.default = LoadMgr;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.5+7f2b526d
	 */
	
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  var type = typeof x;
	  return x !== null && (type === 'object' || type === 'function');
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	
	
	var _isArray = void 0;
	if (Array.isArray) {
	  _isArray = Array.isArray;
	} else {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = void 0;
	var customSchedulerFn = void 0;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var vertx = Function('return this')().require('vertx');
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = void 0;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	
	  if (_state) {
	    var callback = arguments[_state - 1];
	    asap(function () {
	      return invokeCallback(_state, child, callback, parent._result);
	    });
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(2);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var TRY_CATCH_ERROR = { error: null };
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    TRY_CATCH_ERROR.error = error;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then$$1.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then$$1) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then$$1, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$1) {
	  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$1 === TRY_CATCH_ERROR) {
	      reject(promise, TRY_CATCH_ERROR.error);
	      TRY_CATCH_ERROR.error = null;
	    } else if (then$$1 === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$1)) {
	      handleForeignThenable(promise, maybeThenable, then$$1);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function resolve(promise, value) {
	  if (promise === value) {
	    reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = void 0,
	      callback = void 0,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = void 0,
	      error = void 0,
	      succeeded = void 0,
	      failed = void 0;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	    resolve(promise, value);
	  } else if (failed) {
	    reject(promise, error);
	  } else if (settled === FULFILLED) {
	    fulfill(promise, value);
	  } else if (settled === REJECTED) {
	    reject(promise, value);
	  }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      resolve(promise, value);
	    }, function rejectPromise(reason) {
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	}
	
	var Enumerator = function () {
	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);
	
	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }
	
	    if (isArray(input)) {
	      this.length = input.length;
	      this._remaining = input.length;
	
	      this._result = new Array(this.length);
	
	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate(input);
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      reject(this.promise, validationError());
	    }
	  }
	
	  Enumerator.prototype._enumerate = function _enumerate(input) {
	    for (var i = 0; this._state === PENDING && i < input.length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };
	
	  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$1 = c.resolve;
	
	
	    if (resolve$$1 === resolve$1) {
	      var _then = getThen(entry);
	
	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise$1) {
	        var promise = new c(noop);
	        handleMaybeThenable(promise, entry, _then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$1) {
	          return resolve$$1(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$1(entry), i);
	    }
	  };
	
	  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	    var promise = this.promise;
	
	
	    if (promise._state === PENDING) {
	      this._remaining--;
	
	      if (state === REJECTED) {
	        reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }
	
	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };
	
	  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	    var enumerator = this;
	
	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };
	
	  return Enumerator;
	}();
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {Function} resolver
	  Useful for tooling.
	  @constructor
	*/
	
	var Promise$1 = function () {
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];
	
	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }
	
	  /**
	  The primary way of interacting with a promise is through its `then` method,
	  which registers callbacks to receive either a promise's eventual value or the
	  reason why the promise cannot be fulfilled.
	   ```js
	  findUser().then(function(user){
	    // user is available
	  }, function(reason){
	    // user is unavailable, and you are given the reason why
	  });
	  ```
	   Chaining
	  --------
	   The return value of `then` is itself a promise.  This second, 'downstream'
	  promise is resolved with the return value of the first promise's fulfillment
	  or rejection handler, or rejected if the handler throws an exception.
	   ```js
	  findUser().then(function (user) {
	    return user.name;
	  }, function (reason) {
	    return 'default name';
	  }).then(function (userName) {
	    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	    // will be `'default name'`
	  });
	   findUser().then(function (user) {
	    throw new Error('Found user, but still unhappy');
	  }, function (reason) {
	    throw new Error('`findUser` rejected and we're unhappy');
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	  });
	  ```
	  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	   ```js
	  findUser().then(function (user) {
	    throw new PedagogicalException('Upstream error');
	  }).then(function (value) {
	    // never reached
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // The `PedgagocialException` is propagated all the way down to here
	  });
	  ```
	   Assimilation
	  ------------
	   Sometimes the value you want to propagate to a downstream promise can only be
	  retrieved asynchronously. This can be achieved by returning a promise in the
	  fulfillment or rejection handler. The downstream promise will then be pending
	  until the returned promise is settled. This is called *assimilation*.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // The user's comments are now available
	  });
	  ```
	   If the assimliated promise rejects, then the downstream promise will also reject.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // If `findCommentsByAuthor` fulfills, we'll have the value here
	  }, function (reason) {
	    // If `findCommentsByAuthor` rejects, we'll have the reason here
	  });
	  ```
	   Simple Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let result;
	   try {
	    result = findResult();
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	  findResult(function(result, err){
	    if (err) {
	      // failure
	    } else {
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findResult().then(function(result){
	    // success
	  }, function(reason){
	    // failure
	  });
	  ```
	   Advanced Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let author, books;
	   try {
	    author = findAuthor();
	    books  = findBooksByAuthor(author);
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	   function foundBooks(books) {
	   }
	   function failure(reason) {
	   }
	   findAuthor(function(author, err){
	    if (err) {
	      failure(err);
	      // failure
	    } else {
	      try {
	        findBoooksByAuthor(author, function(books, err) {
	          if (err) {
	            failure(err);
	          } else {
	            try {
	              foundBooks(books);
	            } catch(reason) {
	              failure(reason);
	            }
	          }
	        });
	      } catch(error) {
	        failure(err);
	      }
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findAuthor().
	    then(findBooksByAuthor).
	    then(function(books){
	      // found books
	  }).catch(function(reason){
	    // something went wrong
	  });
	  ```
	   @method then
	  @param {Function} onFulfilled
	  @param {Function} onRejected
	  Useful for tooling.
	  @return {Promise}
	  */
	
	  /**
	  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	  as the catch block of a try/catch statement.
	  ```js
	  function findAuthor(){
	  throw new Error('couldn't find that author');
	  }
	  // synchronous
	  try {
	  findAuthor();
	  } catch(reason) {
	  // something went wrong
	  }
	  // async with promises
	  findAuthor().catch(function(reason){
	  // something went wrong
	  });
	  ```
	  @method catch
	  @param {Function} onRejection
	  Useful for tooling.
	  @return {Promise}
	  */
	
	
	  Promise.prototype.catch = function _catch(onRejection) {
	    return this.then(null, onRejection);
	  };
	
	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuther();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuther();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @return {Promise}
	  */
	
	
	  Promise.prototype.finally = function _finally(callback) {
	    var promise = this;
	    var constructor = promise.constructor;
	
	    if (isFunction(callback)) {
	      return promise.then(function (value) {
	        return constructor.resolve(callback()).then(function () {
	          return value;
	        });
	      }, function (reason) {
	        return constructor.resolve(callback()).then(function () {
	          throw reason;
	        });
	      });
	    }
	
	    return promise.then(callback, callback);
	  };
	
	  return Promise;
	}();
	
	Promise$1.prototype.then = then;
	Promise$1.all = all;
	Promise$1.race = race;
	Promise$1.resolve = resolve$1;
	Promise$1.reject = reject$1;
	Promise$1._setScheduler = setScheduler;
	Promise$1._setAsap = setAsap;
	Promise$1._asap = asap;
	
	/*global self*/
	function polyfill() {
	  var local = void 0;
	
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	
	  var P = local.Promise;
	
	  if (P) {
	    var promiseToString = null;
	    try {
	      promiseToString = Object.prototype.toString.call(P.resolve());
	    } catch (e) {
	      // silently ignored
	    }
	
	    if (promiseToString === '[object Promise]' && !P.cast) {
	      return;
	    }
	  }
	
	  local.Promise = Promise$1;
	}
	
	// Strange compat..
	Promise$1.polyfill = polyfill;
	Promise$1.Promise = Promise$1;
	
	return Promise$1;
	
	})));
	
	
	
	//# sourceMappingURL=es6-promise.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), (function() { return this; }())))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Loader
	//
	//--------------------------------------------------
	
	// TextLoader
	// SVGLoader
	// CSSLoader
	// JavaScriptLoader
	// BinaryLoader
	// ImageLoader
	// SpriteSheetLoader
	// VideoLoader
	// SoundLoader
	// JSONLoader
	// JSONPLoader
	// XMLLoader
	
	var Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);
	
	    this.cb = function () {};
	  }
	
	  _createClass(Loader, [{
	    key: 'youtubeIframeScript',
	    value: function youtubeIframeScript(cb) {
	
	      // IFrame Player API の読み込み
	      var tag = document.createElement('script');
	      tag.onload = function () {
	
	        // this.cb();
	
	      };
	
	      // tag.src = "https://www.youtube.com/iframe_api";
	      tag.src = "//www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
	      // YouTube動画
	      window.onYouTubeIframeReady = function () {
	
	        log('youtubeready');
	      };
	    }
	  }, {
	    key: 'webFont',
	    value: function webFont(config) {
	
	      // web font loader用jsのappend
	      var wf = document.createElement('script');
	      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	      wf.type = 'text/javascript';
	      wf.async = 'true';
	      var s = document.getElementsByTagName('script')[0];
	      s.parentNode.insertBefore(wf, s);
	
	      var again = function again() {
	
	        // yt.playerがloadされていない場合を考慮して
	        if (typeof WebFont !== "undefined" && WebFont) {
	
	          WebFont.load(config);
	        } else {
	
	          setTimeout(again, 100);
	        }
	      };
	
	      again();
	    }
	  }, {
	    key: 'webFont_setting',
	    value: function webFont_setting() {
	
	      // web font loader用param
	      // var config = {
	      //   custom: {
	      //     families: [
	      //       'Cormorant',
	      //       'Roboto Condensed'
	      //       // 'Noto Sans Japanese',
	      //       // 'Roboto',
	      //       // 'Alegreya Sans',
	      //       // 'Alegreya Sans SC'
	      //       ],
	      //     urls: [
	      //       'https://fonts.googleapis.com/css?family=Cormorant:500,500i|Roboto+Condensed'
	      //       // './ff15/royal/gallery2018/assets/css/font.css',
	      //       // 'https://fonts.googleapis.com/css?family=Roboto:400,500,300',
	      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans:400,100',
	      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,300,100'
	      //       ]
	      //   },
	      //   active: function() { 
	
	      //       log('webFont!!!!');
	      //       gb.in.conf.webFontLoaded = true;
	
	      //   } 
	      // };
	
	      var conf = {
	        custom: {
	          families: ['Source Code Pro', 'FontAwesome'],
	          urls: ['https://fonts.googleapis.com/css?family=Source+Code+Pro:600', 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'],
	          testStrings: {
	            'FontAwesome': '\uF001'
	          }
	        },
	        // Web Fontが使用可能になったとき
	        active: function active() {
	          new DemoIconsWorld();
	        }
	      };
	
	      var loader = new Loader();
	      loader.webFont(config);
	    }
	  }]);
	
	  return Loader;
	}();
	
	exports.default = Loader;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  GetData
	//
	//--------------------------------------------------             
	
	var GetData = function () {
	  function GetData(APIURL) {
	    _classCallCheck(this, GetData);
	
	    this.APIURL = APIURL;
	
	    this.onSuccess = function () {};
	    this.onError = function () {};
	    this.status = '';
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(GetData, [{
	    key: 'setup',
	    value: function setup() {
	
	      // param
	      this.param = {
	        url: this.APIURL,
	        type: 'get',
	        dataType: 'json',
	        data: {
	          // 'page_no': this.page_no,
	          // 'count': this.count,
	          // 'category_slug': this.category_slug,
	          // 'tag_slug': this.tag_slug,
	          // 'area_slug': this.area_slug,
	          // 'author_name': this.author_name,
	          // 'search_word': this.search_word,
	        },
	        timeout: 5000,
	        cache: false
	      };
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      var _this = this;
	
	      $.ajax(this.param).then(function (data) {
	        _this.onSuccess(data);
	      }, // success
	      function (data) {
	        _this.onError(data);
	      } // error
	      );
	
	      return $.ajax(this.param);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return GetData;
	}();
	
	exports.default = GetData;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateManager
	//
	//--------------------------------------------------
	
	var UpdateMgr = function () {
	  function UpdateMgr() {
	    _classCallCheck(this, UpdateMgr);
	
	    this.frame = 0;
	    this.len = 0;
	    this.Timer = null;
	    this.isStop = false;
	
	    this.st = 0;
	    this.et = 0;
	    this.delta = 0;
	    this.frameRate = 0;
	
	    this.setup();
	  }
	
	  _createClass(UpdateMgr, [{
	    key: "setup",
	    value: function setup() {
	
	      this.start = this.st = new Date().getTime();
	      this.fps = 60.0;
	      this.frameLength = 6.0;
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	
	      // delta
	      var et = new Date().getTime();
	      this.delta = et - this.st;
	      this.st = et;
	
	      // frame
	      this.frame++;
	
	      // 再帰
	      this.Timer = requestAnimationFrame(this.loop.bind(this));
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.loop();
	    }
	  }, {
	    key: "getElapsedTime",
	    value: function getElapsedTime() {
	
	      var elapsed = new Date().getTime() - this.start;
	
	      return elapsed / 1000;
	    }
	  }]);
	
	  return UpdateMgr;
	}();
	
	exports.default = UpdateMgr;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeMgr
	//
	//--------------------------------------------------
	
	var ResizeMgr = function () {
	  function ResizeMgr() {
	    _classCallCheck(this, ResizeMgr);
	
	    this.w = 0;
	    this.h = 0;
	    this.oldW = 0;
	    this.oldH = 0;
	    this.ww = 0;
	    this.wh = 0;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ResizeMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'getWindowSize',
	    value: function getWindowSize() {
	
	      this.oldW = this.w;
	      this.oldH = this.h;
	      this.w = window.innerWidth;
	      this.h = window.innerHeight;
	
	      this.ww = $(window).width();
	      this.hh = $(window).height();
	
	      this.haw = this.w / 2;
	      this.hah = this.h / 2;
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('resize', this.onResize.bind(this));
	      // $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      // $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);
	
	  return ResizeMgr;
	}();
	
	exports.default = ResizeMgr;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollMgr
	//
	//--------------------------------------------------
	
	var ScrollMgr = function () {
	  function ScrollMgr() {
	    _classCallCheck(this, ScrollMgr);
	
	    this.$wrap = $(window);
	    // if (gb.u.dv.isPC) this.$wrap = $(window);
	    // else this.$wrap = $('#wrapper');
	
	    this.st = 0; // 現在のscroll top
	    this.prest = 0;
	    this.sb = 0; // 現在のscroll bottom
	
	    this.isUp = null; // 上スクロールか下スクロールか;
	    this.dis = 0;
	    this.deltaY = 0;
	    this.offset = 0;
	
	    this.isSetWheel = false;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.st = this.$wrap.scrollTop();
	      this.sb = this.st + gb.r.h;
	
	      // down or up
	      // if (this.st > this.prest) {
	      //   console.log('down');
	      // } else {
	      //   console.log('up');
	      // }
	      // this.prest = this.st;
	    }
	  }, {
	    key: 'onWheel',
	    value: function onWheel(e, delta, deltaX, deltaY) {
	
	      this.isWheel = true;
	
	      if (deltaY > 0) this.isUp = true;else this.isUp = false;
	
	      this.dis = deltaY - this.deltaY;
	      this.offset += deltaY;
	      this.deltaY = deltaY;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      // scroll
	      var $wrap = $(window).get(0);
	      // if (gb.u.dv.isPC) var $wrap = $(window).get(0);
	      // else var $wrap = $('#wrapper').get(0);
	      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
	      // this.$wrap.on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	
	      // wheel
	      if (this.isSetWheel) $(document).on('mousewheel', function (e, delta, deltaX, deltaY) {
	        _this.onWheel(e, delta, deltaX, deltaY);
	      }); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);});
	    }
	  }]);
	
	  return ScrollMgr;
	}();
	
	exports.default = ScrollMgr;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseMgr
	//
	//--------------------------------------------------
	
	var MouseMgr = function () {
	  function MouseMgr() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseMgr);
	
	    this.$wrap = $wrap;
	
	    this.x = 0;
	    this.y = 0;
	    this.px = 0; // previous
	    this.py = 0; // previous
	
	    this.cx = 0;
	    this.cy = 0;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseMgr, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "onMousemove",
	    value: function onMousemove(e) {
	
	      this.getPos(e);
	    }
	  }, {
	    key: "onTouchmove",
	    value: function onTouchmove(e) {
	
	      this.x = e.originalEvent.changedTouches[0].pageX;
	      this.y = e.originalEvent.changedTouches[0].pageY;
	    }
	  }, {
	    key: "getPos",
	    value: function getPos(e) {
	
	      if (e.offsetX == undefined) {
	        // this works for Firefox
	        this.x = e.pageX - this.$wrap.offset().left;
	        this.y = e.pageY - this.$wrap.offset().top;
	      } else {
	        // works in Google Chrome
	        this.x = e.pageX - $(window).scrollLeft();
	        this.y = e.pageY - $(window).scrollTop();
	      }
	
	      this.cx = e.clientX - gb.r.haw;
	      this.cy = e.clientY - gb.r.hah;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this = this;
	
	      this.$wrap.on("touchmove.MouseMgr", function (e) {
	        _this.onTouchmove(e);
	      });
	      this.$wrap.on("mousemove.MouseMgr", function (e) {
	        _this.onMousemove(e);
	      });
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {
	
	      this.$wrap.off("touchmove.MouseMgr");
	      this.$wrap.off("mousemove.MouseMgr");
	    }
	  }]);
	
	  return MouseMgr;
	}();
	
	exports.default = MouseMgr;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateList
	//
	//--------------------------------------------------
	
	var UpdateList = function () {
	  function UpdateList() {
	    _classCallCheck(this, UpdateList);
	
	    this.list = [];
	
	    this.Timer = null;
	    this.isStop = false;
	  }
	
	  _createClass(UpdateList, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      // 処理
	      for (var i in this.list) {
	        this.list[i].func();
	      } // 再帰
	      this.Timer = requestAnimationFrame(this.update.bind(this));
	      if (this.isStop) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.update();
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      this.isStop = true;
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.isStop = false;
	      this.update();
	    }
	  }, {
	    key: "add",
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: "remove",
	    value: function remove(name) {
	
	      var target = { name: name, func: function func() {} };
	
	      UpdateList.arrRemove(this.list, target);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: "arrRemove",
	    value: function arrRemove(arr, target) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == target.name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return UpdateList;
	}();
	
	exports.default = UpdateList;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeList
	//
	//--------------------------------------------------
	
	var ResizeList = function () {
	  function ResizeList() {
	    _classCallCheck(this, ResizeList);
	
	    this.list = [];
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ResizeList, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      var arr = this.list;
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // $(window).on('resize', this.onResize.bind(this));
	      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);
	
	  return ResizeList;
	}();
	
	exports.default = ResizeList;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollList
	//
	//--------------------------------------------------
	
	var ScrollList = function () {
	  function ScrollList() {
	    _classCallCheck(this, ScrollList);
	
	    this.list = [];
	    this.endList = [];
	
	    this.isStart = true;
	    this.isWheel = false; // wheel中か、そうでないか
	    this.endTimer = 200;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollList, [{
	    key: "setup",
	    value: function setup() {
	
	      // this.add('end',this.onEnd.bind(this));
	
	    }
	  }, {
	    key: "add",
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: "remove",
	    value: function remove(name) {
	
	      ScrollList.arrRemove(this.list, name);
	    }
	  }, {
	    key: "onScroll",
	    value: function onScroll(e) {
	
	      // if (this.isStart) {
	      //   this.isStart = false;
	      //   // log('resizeStart');
	      //   // 最初だけの処理
	      // };
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: "onMouseWheel",
	    value: function onMouseWheel(e, delta, deltaX, deltaY) {
	
	      this.isWheel = true;
	
	      if (deltaY > 0) this.upWheel = true;else this.upWheel = false;
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: "onEnd",
	    value: function onEnd(e) {
	
	      var self = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        self.isStart = true;
	        self.isWheel = false;
	
	        for (var i in self.endList) {
	          self.endList[i]();
	        }
	      }, this.endTimer);
	    }
	  }, {
	    key: "addFixedObjectScroll",
	    value: function addFixedObjectScroll($target) {
	
	      this.list.push(function () {
	
	        $target.css("left", -$(window).scrollLeft());
	      });
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	
	      // $(window).on('scroll', (e)=>{this.onScroll(e);});
	      var $wrap = $(window).get(0);
	      // if (gb.u.dv.isPC) var $wrap = $(window).get(0);
	      // else var $wrap = $('#wrapper').get(0);
	      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
	      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	      // $(document).on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);}); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);});
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: "arrRemove",
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return ScrollList;
	}();
	
	exports.default = ScrollList;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseList
	//
	//--------------------------------------------------
	
	var MouseList = function () {
	  function MouseList() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseList);
	
	    this.$wrap = $wrap;
	
	    this.list = [{ name: 'def', func: function func() {} }];
	    this.startList = [{ name: 'def', func: function func() {} }];
	    this.endList = [{ name: 'def', func: function func() {} }];
	
	    this.x = 0;
	    this.y = 0;
	    this.endx = 0;
	    this.endy = 0;
	
	    this.isStart = true;
	    this.Timer = null;
	    this.endTime = 20;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseList, [{
	    key: 'setup',
	    value: function setup() {
	
	      // this.add('onEnd', this.onMouseEnd.bind(this));
	
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	
	      if (this.Timer) clearTimeout(this.Timer);
	      var dis = gb.m.x - this.endx;
	      // log(this.isStart, dis);
	      // if (this.isStart && Math.abs(dis)>3) {
	      //   this.isStart = false;
	
	      //   // 最初だけの処理
	      //   // log('moveStart');
	
	      //   for (var i in this.startList) this.startList[i].func();
	
	      // };
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseEnd',
	    value: function onMouseEnd(e) {
	      var _this = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        if (!_this.isStart) {
	          _this.isStart = true;
	
	          // log('moveEnd');
	          _this.endx = gb.m.x;
	          _this.endy = gb.m.y;
	
	          for (var i in _this.endList) {
	            _this.endList[i].func();
	          }
	        }
	      }, this.endTime);
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'addStart',
	    value: function addStart(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.startList.push(obj);
	    }
	  }, {
	    key: 'addEnd',
	    value: function addEnd(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.endList.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      MouseList.arrRemove(this.list, name);
	    }
	  }, {
	    key: 'removeStart',
	    value: function removeStart(name) {
	
	      MouseList.arrRemove(this.startList, name);
	    }
	  }, {
	    key: 'removeEnd',
	    value: function removeEnd(name) {
	
	      MouseList.arrRemove(this.endList, name);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this2 = this;
	
	      this.$wrap.on("touchmove.MouseList", function (e) {
	        _this2.onTouchMove(e);
	      });
	      this.$wrap.on("mousemove.MouseList", function (e) {
	        _this2.onMouseMove(e);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$wrap.off("touchmove.MouseList");
	      this.$wrap.off("mousemove.MouseList");
	    }
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return MouseList;
	}();
	
	exports.default = MouseList;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Sns = __webpack_require__(37);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	var _Controller = __webpack_require__(39);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ViewTop sss
	//
	//--------------------------------------------------
	
	
	var ViewCommon = function (_Base) {
	  _inherits(ViewCommon, _Base);
	
	  function ViewCommon() {
	    _classCallCheck(this, ViewCommon);
	
	    var _this = _possibleConstructorReturn(this, (ViewCommon.__proto__ || Object.getPrototypeOf(ViewCommon)).call(this));
	
	    _this.name = 'ViewCommon';
	
	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ViewCommon, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // new Responsive();
	
	      gb.f.SPH($('.section01'));
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	      // new Sns();
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	      // new Size();
	      // new Clone();
	      // this.setPos();
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	      this.uic = new _Controller2.default();
	
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	
	    }
	  }, {
	    key: 'onLoadingEnd',
	    value: function onLoadingEnd() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	
	
	      // ------------------------------------------------------------
	      // effect
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      // Scene / timeline
	      // ------------------------------------------------------------
	
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onLoadAll',
	    value: function onLoadAll() {
	
	      // new Responsive();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), 'setEvents', this).call(this);
	
	      $(window).on('load', this.onLoad.bind(this));
	      $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
	      $(window).on('loadAll', this.onLoadAll.bind(this));
	    }
	  }]);
	
	  return ViewCommon;
	}(_Base3.default);
	
	exports.default = ViewCommon;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
	//
	//  SNS
	//
	// ------------------------------------------------------------
	
	var _metaData = __webpack_require__(38);
	
	var _metaData2 = _interopRequireDefault(_metaData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SNS = function () {
	  function SNS() {
	    var $fb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.fbShare');
	    var $tw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.twShare');
	    var $line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $('.lineShare');
	    var $mail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $('.onMail');
	
	    _classCallCheck(this, SNS);
	
	    // data
	    var dataC = _metaData2.default['common'];
	
	    this.fb = {
	      $target: $fb,
	      tit: dataC.fb.tit,
	      des: dataC.fb.des,
	      img: dataC.fb.img,
	      url: dataC.fb.url
	      // url: location.href,
	    };
	
	    this.tw = {
	      $target: $tw,
	      tit: dataC.tw.tit,
	      text: dataC.tw.text,
	      url: dataC.tw.url,
	      // url: location.href,
	      hash: dataC.tw.hash
	    };
	
	    this.line = {
	      $target: $line,
	      tit: dataC.tit,
	      des: dataC.des,
	      img: dataC.img,
	      url: dataC.line.url,
	      // url: location.href,
	      text: dataC.line.text
	    };
	
	    this.mail = {
	      $target: $mail,
	      tit: dataC.mail.tit,
	      des: dataC.mail.des,
	      address: dataC.address
	    };
	
	    this.setEvents();
	  }
	
	  _createClass(SNS, [{
	    key: 'runFB',
	    value: function runFB(that) {
	
	      var share = $(that).data('share');
	      if (share == 'index') {
	        var file = 'https://sahara.jp/feature/share/';
	      } else {
	        var file = 'https://sahara.jp/feature/share-campaign/';
	      }
	
	      this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + file);
	
	      return false;
	    }
	  }, {
	    key: 'runTW',
	    value: function runTW(that) {
	
	      var share = $(that).data('share');
	      if (share == 'index') {
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
	  }, {
	    key: 'runLINE',
	    value: function runLINE(that) {
	
	      var share = $(that).data('share');
	      if (share == 'index') {
	        this.line.url = 'https://sahara.jp/feature/share/';
	        this.line.text = 'ずっと前からあるものを新しい目で見ること。そのとき世界は彩りを増し、人生はもっと豊かになる。タイガー魔法瓶が贈る、LOVE TIGER COLLECTION。';
	      } else {
	        this.line.url = 'https://sahara.jp/feature/share-campaign/';
	        this.line.text = 'SAHARAステンレスボトルをご購入の方から抽選で300名様に、LOVE TIGER COLLECTIONのオリジナルグッズが当たる！';
	      }
	
	      this.openWindow('http://line.me/R/msg/text/?' + this.line.text + '%0A' + this.line.url);
	
	      return false;
	    }
	  }, {
	    key: 'runMail',
	    value: function runMail() {
	
	      location.href = 'mailto:' + this.mail.address + '?subject=' + this.mail.tit + '&body=' + this.mail.des + this.mail.url;
	
	      return false;
	    }
	  }, {
	    key: 'openWindow',
	    value: function openWindow(url, w, h) {
	
	      if (w === undefined) w = 600;
	      if (h === undefined) h = 600;
	
	      var l = Number((window.screen.width - w) / 2);
	      var t = Number((window.screen.height - h) / 2);
	
	      window.open(url, 'new_window', 'menubar=no,' + 'toolbar=no,' + 'resizable=yes,' + 'scrollbars=yes,' + 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + l + ',' + 'top=' + t);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      var self = this;
	
	      if (this.fb.$target) this.fb.$target.on('click', function () {
	        self.runFB.call(self, this);
	      });
	      if (this.tw.$target) this.tw.$target.on('click', function () {
	        self.runTW.call(self, this);
	      });
	      if (this.line.$target) this.line.$target.on('click', function () {
	        self.runLINE.call(self, this);
	      });
	      if (this.mail.$target) this.mail.$target.on('click', function () {
	        _this.runMail();return false;
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      if (this.fb.$target) this.fb.$target.off('click');
	      if (this.tw.$target) this.tw.$target.off('click');
	      if (this.line.$target) this.line.$target.off('click');
	      if (this.mail.$target) this.mail.$target.off('click');
	    }
	  }]);
	
	  return SNS;
	}();
	
	exports.default = SNS;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = {"common_js":{"tit":"","des":"","img":"","url":"","adress":""},"common":{"tit":"","des":"","img":"","keyword":"","fb":{"tit":"","des":"","img":"","url":"","siteName":"","type":"website"},"tw":{"img":"","url":"","siteName":"","creator":"","card":"summary_large_image","hash":"","text":""},"line":{"tit":"","des":"","img":"","url":"","text":""},"mail":{"tit":"","des":"","adress":""}}}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(40);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	// ui
	
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      gb.mv = new _Controller2.default();
	      gb.camera.timeline();
	
	      // new Op();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(41);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller sss
	//
	//--------------------------------------------------
	
	// canvas
	
	
	// dom
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // canvas
	      this.c = new _Controller2.default($('.canvasWrap'));
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene = __webpack_require__(42);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	// import Scene02 from './Scenes/Scene02/Scene.es6';
	
	var Content = function (_Base) {
	  _inherits(Content, _Base);
	
	  function Content() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('body');
	    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cv';
	
	    _classCallCheck(this, Content);
	
	    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));
	
	    _this.isUEv = true; // update
	    _this.isREv = true; // update
	
	    _this.$wrap = $wrap;
	    _this.id = id;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Content, [{
	    key: 'setup',
	    value: function setup() {
	
	      // canvas size
	      this.w = gb.r.w;
	      this.h = gb.r.h;
	
	      this.isRetina = false;
	
	      // renderer
	      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	      if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(gb.r.w, gb.r.h);
	      this.renderer.setClearColor(0x092241, 0.0);
	      // this.renderer.setClearColor(0xffffff, 1.0);
	
	      // append
	      this.$wrap.prepend(this.renderer.domElement);
	      // set style
	      $(this.renderer.domElement).css({ position: 'absolute', top: 0, left: 0, 'z-index': 1, opacity: 1 }).attr('id', this.id);
	
	      // obj
	      this.add();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene01 = new _Scene2.default(this.renderer);
	      // this.scene02 = new Scene02(this.renderer);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.scene01.update();
	      // this.scene02.update();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      this.scene01.draw();
	      // this.scene02.draw();
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResizeCustomSP',
	    value: function onResizeCustomSP() {
	      var _this2 = this;
	
	      var dur = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	
	        var w = window.innerWidth;
	        var h = window.innerHeight;
	
	        _this2.scene01.onResize(w, h);
	
	        _this2.renderer.setSize(w, h);
	        if (_this2.scene01.isEffectComposer) {
	          _this2.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
	        }
	      }, dur);
	    }
	  }, {
	    key: 'onResizeCustomPC',
	    value: function onResizeCustomPC() {
	
	      var w = window.innerWidth;
	      var h = window.innerHeight;
	
	      this.scene01.onResize(w, h);
	
	      this.renderer.setSize(w, h);
	      if (this.scene01.isEffectComposer) {
	        this.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Content.prototype.__proto__ || Object.getPrototypeOf(Content.prototype), 'setEvents', this).call(this);
	
	      // if (gb.r.w<=767) $(window).on('orientationchange', this.onResizeCustomSP.bind(this, 200));
	      // else $(window).on('resize', this.onResizeCustomPC.bind(this));
	
	      $(window).on('resize', this.onResizeCustomPC.bind(this));
	    }
	  }]);
	
	  return Content;
	}(_Base3.default);
	
	exports.default = Content;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene2 = __webpack_require__(43);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Camera2 = __webpack_require__(44);
	
	var _Camera3 = _interopRequireDefault(_Camera2);
	
	var _Light2 = __webpack_require__(46);
	
	var _Light3 = _interopRequireDefault(_Light2);
	
	var _Objects = __webpack_require__(47);
	
	var _Objects2 = _interopRequireDefault(_Objects);
	
	var _Effect = __webpack_require__(64);
	
	var _Effect2 = _interopRequireDefault(_Effect);
	
	var _Control = __webpack_require__(65);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	var Scene = function (_Base) {
	  _inherits(Scene, _Base);
	
	  function Scene(renderer) {
	    _classCallCheck(this, Scene);
	
	    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
	
	    _this.renderer = renderer;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Scene, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isEffect = false;
	      this.isGUI = false;
	      this.isControl = false;
	
	      // obj???
	      this.add();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // scene
	      this.scene = new _Scene3.default();
	      this.scene = this.scene.scene;
	      // this.scene.fog = new THREE.FogExp2( 0x000000, 0.0004 );
	
	      // camera
	      this.cameraC = gb.camera = new _Camera3.default(this.scene);
	      this.camera = gb.camera.camera;
	
	      // light
	      this.light = new _Light3.default(this.scene);
	
	      // objects
	      gb.obj = this.obj = new _Objects2.default(this.scene, this.camera, this.renderer);
	
	      // effect
	      this.e = new _Effect2.default(this.isEffect, this.isGUI, this.renderer, this.scene, this.camera);
	
	      // control
	      this.c = new _Control2.default(this.isControl, this.renderer, this.camera);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.cameraC.update();
	
	      this.obj.updateObj();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      if (this.e.isEffect) {
	
	        this.e.composer.render();
	      } else {
	
	        this.renderer.render(this.scene, this.camera);
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'state',
	    value: function state() {}
	  }, {
	    key: 'onResize',
	    value: function onResize(w, h) {
	
	      gb.camera.onResize();
	
	      this.camera.aspect = w / h;
	      this.camera.updateProjectionMatrix();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}(_Base3.default);
	
	exports.default = Scene;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Cube
	//
	//--------------------------------------------------
	
	var Scene = function () {
	  function Scene() {
	    _classCallCheck(this, Scene);
	
	    this.scene;
	
	    this.setup();
	    this.create();
	  }
	
	  _createClass(Scene, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "create",
	    value: function create() {
	
	      this.scene = new THREE.Scene();
	    }
	  }, {
	    key: "updateRotate",
	    value: function updateRotate() {
	
	      var rotateX = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateY = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateZ = gb.in.u.radian(gb.in.up.frame / 1);
	      // var rotateY = 0;
	      // var rotateZ = 0;
	
	      this.scene.rotation.set(rotateX, rotateY, rotateZ);
	    }
	
	    // オブジェクト
	
	  }, {
	    key: "tweenPos",
	    value: function tweenPos(time, target) {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}();
	
	exports.default = Scene;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Camera
	//
	//--------------------------------------------------
	
	var Camera = function (_Base) {
	  _inherits(Camera, _Base);
	
	  function Camera(scene) {
	    _classCallCheck(this, Camera);
	
	    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));
	
	    _this.scene = scene;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Camera, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.x = 0;
	      this.y = 0;
	      this.z = 5;
	      this.movex = 0;
	      this.movey = 0;
	      this.movez = 0;
	      // this.x = 0;
	      // this.y = 40;
	      // this.z = 150;
	      this.x2 = 0;
	      this.y2 = 0;
	      this.z2 = 0;
	      this.lookx = 0;
	      this.looky = 0;
	      this.lookz = 0;
	
	      this.power = 0;
	
	      this.wheely = 0;
	
	      this.fov = 45;
	      this.aspect = gb.r.w / gb.r.h;
	      this.near = 1;
	      this.far = 50000;
	
	      this.ready();
	
	      // this.addHelper();
	
	      // this.param();
	
	      this.progress = 0;
	
	      // this.timeline();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
	      this.camera.position.set(this.x, this.y, this.z);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // mousemove
	      var strength = 0.05;
	      this.movex += (-gb.m.cx * strength - this.movex) * 0.08;
	      this.movey += (gb.m.cy * strength * 0.5 - this.movey) * 0.08;
	
	      // // z
	      // this.wheely *= 0.95;
	      // this.z += this.wheely * 0.01;
	
	      this.camera.position.set(this.x + this.x2 + this.movex * this.power, this.y + this.y2 + this.movey * this.power, this.z + this.z2);
	      this.camera.lookAt({ x: this.lookx, y: this.looky, z: this.lookz });
	    }
	  }, {
	    key: 'addHelper',
	    value: function addHelper() {
	
	      var helper = new THREE.CameraHelper(this.camera);
	      this.scene.add(helper);
	    }
	  }, {
	    key: 'param',
	    value: function param() {
	      var _this2 = this;
	
	      this.p = {
	        x: 0.0,
	        y: 0.0,
	        z: 100.0,
	        lookx: 0.0,
	        looky: 0.0,
	        lookz: 0.0,
	        fov: 80,
	        near: 0.1,
	        far: 10000.0
	      };
	
	      var gui = new dat.GUI();
	
	      // init
	      this.camera.position.set(this.p.x, this.p.y, this.p.z);
	      this.lookx = this.p.lookx;
	      this.looky = this.p.looky;
	      this.lookz = this.p.lookz;
	      this.camera.fov = this.p.fov;
	      this.camera.near = this.p.near;
	      this.camera.far = this.p.far;
	
	      gui.add(this.p, 'lookx', -200, 200, 1).onChange(function (v) {
	        _this2.lookx = v;
	      });
	      gui.add(this.p, 'looky', -200, 200, 1).onChange(function (v) {
	        _this2.looky = v;
	      });
	      gui.add(this.p, 'lookz', -1000, 1000, 1).onChange(function (v) {
	        _this2.lookz = v;
	      });
	      gui.add(this.p, 'fov', 0, 200, 1).onChange(function (v) {
	        _this2.camera.fov = v;
	      });
	      gui.add(this.p, 'near', 0, 20000, 10.0).onChange(function (v) {
	        _this2.camera.near = v;
	      });
	      gui.add(this.p, 'far', 0, 20000, 10.0).onChange(function (v) {
	        _this2.camera.far = v;
	      });
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this3 = this;
	
	      var z = 150;
	      if (gb.r.w <= 767) z = 230;
	      var y2 = 50;
	      if (gb.r.w <= 767) y2 = 30;
	
	      var tl = new TimelineMax();
	
	      tl.to(this, 3.0, {
	        z: 20,
	        ease: Power2.easeInOut
	      }, 0.0);
	
	      var t2 = new TimelineMax();
	
	      t2.to(this, 3.5, {
	        y2: '+=' + y2,
	        ease: Power4.easeInOut
	      }, 1.0).to(this, 3.0, {
	        z2: '+=' + z,
	        ease: Power4.easeInOut
	      }, 1.0).add(function () {
	
	        TweenMax.to(_this3, 2.5, { power: 1, ease: Power2.easeInOut });
	      }, 4.0);
	    }
	  }, {
	    key: 'setDefPos',
	    value: function setDefPos() {
	      var _this4 = this;
	
	      var z = 150;
	      if (gb.r.w <= 767) z = 230;
	      var y2 = 50;
	      if (gb.r.w <= 767) y2 = 30;
	
	      var tl = new TimelineMax();
	
	      tl.set(this, {
	        z: 20
	      }, 0.0);
	
	      var t2 = new TimelineMax();
	
	      t2.to(this, {
	        y2: '+=' + y2
	      }, 0.0).set(this, {
	        z2: '+=' + z
	      }, 0.0).add(function () {
	
	        TweenMax.to(_this4, 2.5, { power: 1, ease: Power2.easeInOut });
	      }, 0.0);
	    }
	  }, {
	    key: 'timelineSinY',
	    value: function timelineSinY() {
	
	      var y2 = 50;
	      if (gb.r.w <= 767) y2 = 30;
	
	      TweenMax.to(this, 7.5, {
	        z: '+=' + -50,
	        ease: Power2.easeInOut
	      });
	
	      var tl = new TimelineMax({ repeat: 0, yoyo: true });
	      tl.to(this, 5.0, {
	        y: '+=' + -y2,
	        ease: Power1.easeInOut
	      });
	    }
	  }, {
	    key: 'timelineDef',
	    value: function timelineDef() {
	
	      var y2 = 50;
	      if (gb.r.w <= 767) y2 = 30;
	
	      TweenMax.killTweensOf(this);
	
	      TweenMax.to(this, 7.5 - 4.0, {
	        z: '+=' + 50,
	        ease: Power2.easeInOut
	      });
	
	      var tl = new TimelineMax({ repeat: 0, yoyo: true });
	      tl.to(this, 5.0 - 2.0, {
	        y: '+=' + y2,
	        ease: Power1.easeInOut
	      });
	    }
	  }, {
	    key: 'toDef',
	    value: function toDef() {
	
	      TweenMax.killTweensOf(this);
	      var z = 150;
	      if (gb.r.w <= 767) z = 230;
	      var y2 = 50;
	      if (gb.r.w <= 767) y2 = 30;
	
	      TweenMax.to(this, 5.0, {
	        y: 0,
	        z: 20,
	        ease: Power2.easeInOut
	      });
	      TweenMax.to(this, 5.0, {
	        y2: y2,
	        z2: z,
	        ease: Power2.easeInOut
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onWheel',
	    value: function onWheel(e) {
	
	      this.wheely += e.deltaY;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this5 = this;
	
	      _get(Camera.prototype.__proto__ || Object.getPrototypeOf(Camera.prototype), 'setEvents', this).call(this);
	
	      $(document).on('mousewheel', function (e) {
	        _this5.onWheel(e);
	      });
	    }
	  }]);
	
	  return Camera;
	}(_Base3.default);
	
	exports.default = Camera;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.random = random;
	exports.randomInt = randomInt;
	exports.random2 = random2;
	exports.hit = hit;
	exports.range = range;
	exports.map = map;
	exports.demical = demical;
	exports.float = float;
	exports.clamp = clamp;
	exports.rate = rate;
	exports.lerp = lerp;
	exports.degree = degree;
	exports.radian = radian;
	exports.dist = dist;
	exports.dist3 = dist3;
	exports.ascend = ascend;
	exports.descend = descend;
	exports.constrain = constrain;
	/**
	 * Generate a random float
	 *
	 * @param  {number} minValue  Minimum boundary
	 * @param  {number} maxValue  Maximum boundary
	 * @param  {number} precision Precision
	 * @return {number}           Generated float
	 */
	function random(minValue, maxValue) {
	  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
	
	
	  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
	}
	
	// ランダムな整数を取得
	// -----------------------------------
	// @min : 最小値(int)
	// @max : 最大値(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function randomInt(min, max) {
	
	  return Math.floor(Math.random() * (max + 1 - min) + min);
	}
	
	// ランダムな整数を2つの範囲から取得
	// -----------------------------------
	// @min1 : 最小値1(int)
	// @max1 : 最大値1(int)
	// @min2 : 最小値2(int)
	// @max2 : 最大値2(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function random2(min1, max1, min2, max2) {
	
	  if (this.hit(2)) {
	    return this.randomInt(min1, max1);
	  } else {
	    return this.randomInt(min2, max2);
	  }
	}
	
	// 1/@rangeの確率でtrueを取得
	// -----------------------------------
	// @range : 母数(int)
	// return : true or false(boolean)
	// -----------------------------------
	function hit(range) {
	
	  return this.randomInt(0, range - 1) === 0;
	}
	
	// 0から範囲内でランダムな整数を取得
	// -----------------------------------
	// @val : 範囲(int)
	// return : ランダムな整数(int)
	// -----------------------------------
	function range(val) {
	
	  return this.randomInt(-val, val);
	}
	
	// 値をマッピング
	// -----------------------------------
	// @num : マッピングする値(Number)
	// @resMin : 結果となる値の最小値(Number)
	// @resMax : 結果となる値の最大値(Number)
	// @baseMin : 元となる値の最小値(Number)
	// @baseMax : 元となる値の最大値(Number)
	// return : マッピングされた値(Number)
	// -----------------------------------
	function map(num, resMin, resMax, baseMin, baseMax) {
	
	  var p;
	  if (num < baseMin) {
	    return resMin;
	  }
	  if (num > baseMax) {
	    return resMax;
	  }
	  p = (resMax - resMin) / (baseMax - baseMin);
	
	  return (num - baseMin) * p + resMin;
	}
	
	function demical(v) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	  // 計算 ( Math.pow( 10, 4 ) = 10000 )
	  var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);
	
	  return val;
	}
	
	function float(v) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	  return v.toFixed(n);
	}
	
	// 数値に小数点第@n位までをつけた文字列を返す
	// -----------------------------------
	// @num : 値(Number)
	// @n : 小数点の位(int)
	// return : 変換された値(String)
	// -----------------------------------
	// decimal(num, n) {
	//   var i, pos;
	//   num = String(num);
	//   pos = num.indexOf(".");
	//   if (n === 0) {
	//     return num.split(".")[0];
	//   }
	//   if (pos === -1) {
	//     num += ".";
	//     i = 0;
	//     while (i < n) {
	//       num += "0";
	//       i++;
	//     }
	//     return num;
	//   }
	//   num = num.substr(0, pos) + num.substr(pos, n + 1);
	//   return num;
	// }
	
	function clamp(val, min, max, minVal, maxVal) {
	
	  if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;
	
	  return val;
	}
	
	function rate(val, base) {
	
	  var v = val / base;
	
	  return v;
	}
	
	function lerp(val01, val02, val) {
	
	  val = val < 0 ? 0 : val;
	  val = val > 1 ? 1 : val;
	  return val01 + (val02 - val01) * val;
	}
	
	function degree(radians) {
	
	  return radians * 180 / Math.PI; //1ラジアンが何度か
	}
	
	// to radians
	function radian(angle) {
	
	  return angle * Math.PI / 180; //1度何ラジアンか
	}
	
	function dist(p1, p2) {
	
	  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	}
	
	function dist3(p1, p2) {
	
	  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) + Math.pow(p2.z - p1.z, 2));
	}
	
	function ascend(arr) {
	
	  arr.sort(function (a, b) {
	    if (a > b) return -1;
	    if (a < b) return 1;
	    return 0;
	  });
	  // var a = [5,3,9,1,10]
	  // 結果:10,9,5,3,1
	
	  return arr;
	}
	
	function descend(arr) {
	
	  arr.sort(function (a, b) {
	    if (a < b) return -1;
	    if (a > b) return 1;
	    return 0;
	  });
	
	  // var a = [5,3,9,1,10]
	  // 結果:1,3,5,9,10
	
	  return arr;
	}
	
	// map(value, min01, max01, min02, max02) {
	
	//   var dis01 = max01 - min01;
	//   var dis02 = max02 - min02
	
	//   var rate = dis02 / dis01;
	
	//   value = value * rate;
	
	//   return value;
	// }
	
	function constrain(value, min, max) {
	
	  return Math.min(max, Math.max(value, min));
	
	  // if (value <= low) value = low;
	  // if (value >= high) value = high;     
	  // return value;
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Light
	//
	//--------------------------------------------------
	
	var Light = function (_Base) {
	  _inherits(Light, _Base);
	
	  function Light(scene) {
	    _classCallCheck(this, Light);
	
	    var _this = _possibleConstructorReturn(this, (Light.__proto__ || Object.getPrototypeOf(Light)).call(this));
	
	    _this.scene = scene;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Light, [{
	    key: 'setup',
	    value: function setup() {
	
	      // this.isUEv = true;
	      this.isHelper = false;
	
	      this.isDirectional = true;
	      this.isAmbient = false;
	      this.isPoint = false;
	      this.isSpot = true;
	
	      // this.ready();
	
	      // this.add();
	
	      if (this.isHelper) this.addHelper();
	
	      // this.param();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // directional light
	      if (this.isDirectional) {
	        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	        this.directionalLight.position.z = -gb.camera.z / 5 * 3;
	        this.directionalLight.position.y = 0;
	      }
	
	      // ambient
	      this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
	
	      // point
	      this.pointLight01 = new THREE.PointLight(0x00ff00, 30, 500, 10);
	      this.pointLight02 = new THREE.PointLight(0x0000ff, 30, 500, 10);
	      this.pointLight03 = new THREE.PointLight(0xff0000, 30, 500, 10);
	
	      this.pointLight01.position.set(0, 200, 100);
	      this.pointLight02.position.set(100, 200, 100);
	      this.pointLight03.position.set(-100, -200, -100);
	
	      // spot
	      if (this.isSpot) {
	        this.spotLight = new THREE.SpotLight(0xfffffff);
	        this.spotLight.position.set(0, 0, gb.camera.z / 5 * 3);
	
	        this.spotLight.intensity = 10.5;
	        this.spotLight.distance = 0.0;
	        this.spotLight.angle = 0.3;
	        this.spotLight.penumbra = 0.5;
	        this.spotLight.decay = 1.0;
	
	        // spot light target
	        var target = new THREE.Object3D();
	        this.scene.add(target);
	        this.spotLight.target = target;
	      }
	
	      // shadow
	      // this.spotLight.castShadow = true;
	      // this.spotLight.shadow.mapSize.width = 1024;
	      // this.spotLight.shadow.mapSize.height = 1024;
	      // this.spotLight.shadow.camera.near = 500;
	      // this.spotLight.shadow.camera.far = 4000;
	      // this.spotLight.shadow.camera.fov = 30;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      if (this.isDirectional) this.scene.add(this.directionalLight);
	
	      // this.scene.add(this.ambientLight);
	
	      // this.scene.add(this.pointLight01);
	      // this.scene.add(this.pointLight02);
	      // this.scene.add(this.pointLight03);
	      // this.scene.add(this.pointLight01, this.pointLight02, this.pointLight03);
	
	      if (this.isSpot) this.scene.add(this.spotLight);
	    }
	  }, {
	    key: 'addHelper',
	    value: function addHelper() {
	
	      // directional
	      if (this.isDirectional) {}
	      // var dll = new THREE.DirectionalLightHelper(this.directionalLight, 20, '#ff0000');
	      // this.scene.add(dll);
	
	
	      // point
	      // var sphereSize = 10;
	      // var pll01 = new THREE.PointLightHelper( this.pointLight01, sphereSize );
	      // this.scene.add(pll01);
	      // var pll02 = new THREE.PointLightHelper( this.pointLight02, sphereSize );
	      // this.scene.add(pll02);
	      // var pll03 = new THREE.PointLightHelper( this.pointLight03, sphereSize );
	      // this.scene.add(pll03);
	
	      // spot
	      if (this.isSpot) {
	        this.slh = new THREE.SpotLightHelper(this.spotLight, '#ffffff');
	        this.scene.add(this.slh);
	      }
	    }
	  }, {
	    key: 'updateRotate',
	    value: function updateRotate() {
	
	      var rotateX = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateY = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateZ = gb.in.u.radian(gb.in.up.frame / 1);
	      // var rotateY = 0;
	      // var rotateZ = 0;
	
	      this.scene.rotation.set(rotateX, rotateY, rotateZ);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.slh) this.slh.update();
	    }
	  }, {
	    key: 'param',
	    value: function param() {
	      var _this2 = this;
	
	      this.param_spot = {
	        color: '#ffffff',
	        x: 0.0,
	        y: 0.0,
	        z: 300.0,
	        angle: Math.PI / 3,
	        intensity: 1.0,
	        distance: 0.0,
	        decay: 1.0,
	        penumbra: 0.0
	      };
	
	      var gui = new dat.GUI();
	
	      // init
	      this.spotLight.position.set(this.param_spot.x, this.param_spot.y, this.param_spot.z);
	      this.spotLight.color = new THREE.Color(this.param_spot.color);
	      this.spotLight.angle = this.param_spot.angle;
	      this.spotLight.intensity = this.param_spot.intensity;
	      this.spotLight.distance = this.param_spot.distance;
	      this.spotLight.decay = this.param_spot.decay;
	      this.spotLight.penumbra = this.param_spot.penumbra;
	
	      gui.addColor(this.param_spot, 'color').onChange(function (v) {
	        _this2.spotLight.color.setHex(v);
	      });
	      gui.add(this.param_spot, 'x', -200, 200, 1).onChange(function (v) {
	        _this2.spotLight.position.x = v;
	      });
	      gui.add(this.param_spot, 'y', -200, 200, 1).onChange(function (v) {
	        _this2.spotLight.position.y = v;
	      });
	      gui.add(this.param_spot, 'z', -1000, 1000, 1).onChange(function (v) {
	        _this2.spotLight.position.z = v;
	      });
	      gui.add(this.param_spot, 'angle', 0, Math.PI / 2, 0.01).onChange(function (v) {
	        _this2.spotLight.angle = v;
	      });
	      gui.add(this.param_spot, 'intensity', 0, 10, 0.1).onChange(function (v) {
	        _this2.spotLight.intensity = v;
	      });
	      gui.add(this.param_spot, 'distance', 0, 1000, 1.0).onChange(function (v) {
	        _this2.spotLight.distance = v;
	      });
	      gui.add(this.param_spot, 'decay', 0, 10, 0.1).onChange(function (v) {
	        _this2.spotLight.decay = v;
	      });
	      gui.add(this.param_spot, 'penumbra', 0, 2, 0.01).onChange(function (v) {
	        _this2.spotLight.penumbra = v;
	      });
	    }
	  }]);
	
	  return Light;
	}(_Base3.default);
	
	exports.default = Light;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(48);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(49);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _Controller5 = __webpack_require__(58);
	
	var _Controller6 = _interopRequireDefault(_Controller5);
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Easing = __webpack_require__(63);
	
	var e = _interopRequireWildcard(_Easing);
	
	var _Array = __webpack_require__(50);
	
	var a = _interopRequireWildcard(_Array);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Objects
	//
	// ------------------------------------------------------------
	
	// basic objects
	
	
	var Objects = function (_Base) {
	  _inherits(Objects, _Base);
	
	  function Objects(scene, camera, renderer) {
	    _classCallCheck(this, Objects);
	
	    var _this = _possibleConstructorReturn(this, (Objects.__proto__ || Object.getPrototypeOf(Objects)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Objects, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      this.y = 0;
	      this.cval = 0; //container val
	      this.posy = 0;
	      if (gb.r.w <= 767) this.posy = -5;
	
	      this.sy = 0;
	      this.scrollY = 0;
	      this.speed = 0.12;
	      this.isRun = false;
	
	      this.isLock = false;
	
	      // this.$body = $('.body');
	      this.$btn = $('.p-drawerToggler');
	
	      // ready
	      this.ready();
	
	      // add
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.defColor = new THREE.Color(0x092241);
	      this.toColor = new THREE.Color(0xe6e9ec);
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.container = new THREE.Object3D();
	
	      // bg
	      this.Bg = new _Controller2.default(this.scene, this.camera);
	
	      // particle
	      this.pListr = [];
	      this.pListb = [];
	      var len = 31;
	      for (var i = 0; i < len; i++) {
	        var pr = new _Controller4.default(this.scene, this.camera, this.renderer, len, i);
	        var pb = new _Controller6.default(this.scene, this.camera, this.renderer, len, i);
	        this.pListr.push(pr);
	        this.pListb.push(pb);
	
	        this.container.add(pr.mesh);
	        this.container.add(pb.mesh);
	      }
	
	      this.scene.add(this.container);
	
	      if (!gb.isLower) this.forLoop();
	      // this.setAnim();
	    }
	  }, {
	    key: 'updateObj',
	    value: function updateObj() {
	
	      for (var i = 0; i < this.pListr.length; i++) {
	        var pr = this.pListr[i];
	        var pb = this.pListb[i];
	        pr.update();
	        pb.update();
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // update
	      this.sy += (this.scrollY - this.sy) * this.speed;
	      this.sy = Number(this.sy.toFixed(2));
	
	      var tary = gb.s.st;
	      var ease1 = 0.06;
	      var ease2 = 0.02;
	
	      tary = m.constrain(tary, 400, 500);
	      tary = m.map(tary, 0, 1, 400, 500);
	      this.y += (tary - this.y) * ease1;
	      tary = gb.s.st;
	      tary = m.constrain(tary, 400, 600);
	      tary = m.map(tary, 0, 1, 400, 600);
	      this.cval += (tary - this.cval) * ease2;
	
	      // 下層だったら
	      if (gb.isLower) this.y = 1;
	      // topでmenuを開いたら
	      if (!gb.isLower && this.$btn.attr('aria-expanded') == 'true') {
	        ease1 = 1;
	        ease2 = 1;
	        this.y = 1;
	      }
	
	      var r = m.lerp(this.defColor.r, this.toColor.r, this.y);
	      var g = m.lerp(this.defColor.g, this.toColor.g, this.y);
	      var b = m.lerp(this.defColor.b, this.toColor.b, this.y);
	
	      this.Bg.mesh.material.color.r = r;
	      this.Bg.mesh.material.color.g = g;
	      this.Bg.mesh.material.color.b = b;
	
	      for (var i = 0; i < this.pListr.length; i++) {
	        var pr = this.pListr[i];
	        var pb = this.pListb[i];
	        pr.uniforms.t.value = this.y;
	        pb.uniforms.t.value = this.y;
	      }
	
	      this.container.position.z = this.cval * 35;
	      this.container.position.y = this.cval * 10 + this.posy;
	      this.container.rotation.x = e.inQuad(this.cval) * (-Math.PI * 2 * 0.02);
	
	      if (!gb.isLower) {
	        if (!this.isLock && tary >= 0.5) {
	          this.isLock = true;
	          this.toDef();
	        }
	        if (this.isLock && tary < 0.5) {
	          this.isLock = false;
	          this.forLoop();
	        }
	      }
	
	      // constrain
	      var dis = this.scrollY - this.sy;
	      if (dis < 0.1 && dis > -0.1) {
	        this.isRun = false;
	        this.offU();
	      }
	    }
	  }, {
	    key: 'forLoop',
	    value: function forLoop() {
	      var _this2 = this;
	
	      this.index = 0;
	      this.pre = 0;
	      this.len = 3;
	
	      // repeat
	      // var arr = a.randomArr(this.len-1);
	      var arr = [0, 1];
	      // var arr = [0,2,1]
	      arr.push(this.len - 1);
	
	      this.tl = new TimelineMax({ delay: 6.5, repeat: -1, repeatDelay: 12.0 });
	      // var tl = new TimelineMax({delay: 2.0, repeat: -1, repeatDelay: 4.0});
	
	      this.tl
	      // rotate
	      .add(function () {
	
	        var cb = function cb(target, cur, pre, index) {
	          var tl = new TimelineMax();
	          tl.add(function () {
	
	            target.switch(cur, index);
	            if (_this2.index % 2 == 0) target.tweenParamTo1();else target.tweenParamTo0();
	          }, 0.0);
	        };
	
	        var cur = arr[_this2.index];
	
	        // camera
	        if (cur == 0) gb.camera.timelineSinY();
	        if (cur == 1) gb.camera.timelineDef();
	
	        // state change
	        for (var i = 0; i < _this2.pListb.length; i++) {
	
	          var pb = _this2.pListb[i];
	          var pr = _this2.pListr[i];
	          // pb.switch(arr[this.index]);
	          // pb.tweenParam();
	
	          cb(pb, cur, _this2.pre, _this2.index);
	          cb(pr, cur, _this2.pre, _this2.index);
	        }
	
	        _this2.index++;
	        _this2.index %= _this2.len;
	        _this2.pre = cur;
	      }, 0.01);
	    }
	
	    // 特定のアニメーション
	
	  }, {
	    key: 'setAnim',
	    value: function setAnim() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	
	      for (var i = 0; i < this.pListb.length; i++) {
	        var pb = this.pListb[i];
	        var pr = this.pListr[i];
	
	        pb.switch(index, i);
	        pb.tweenParamTo1();
	        pr.switch(index, i);
	        pr.tweenParamTo1();
	
	        // pb.mesh.position.y = 0;
	        // pb.prev.pos.y = 0;
	      }
	    }
	
	    // 特定のアニメーション
	
	  }, {
	    key: 'toDef',
	    value: function toDef() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	
	      if (this.tl) this.tl.kill();
	      this.setAnim(2);
	      gb.camera.toDef();
	    }
	  }, {
	    key: 'show',
	    value: function show() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.scrollY = gb.s.st;
	      if (!this.isRun) {
	        this.isRun = true;
	        this.offU();
	        this.onU();
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	
	      this.offU();
	      this.onU();
	      this.sy = 100;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Objects.prototype.__proto__ || Object.getPrototypeOf(Objects.prototype), 'setEvents', this).call(this);
	
	      $(window).on('scroll', this.onScroll.bind(this));
	      $(window).on('changeMenu', this.onChange.bind(this));
	    }
	  }]);
	
	  return Objects;
	}(_Base3.default);
	
	exports.default = Objects;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Plane
	//
	//--------------------------------------------------
	
	var Plane = function (_Base) {
	  _inherits(Plane, _Base);
	
	  function Plane(scene, camera) {
	    _classCallCheck(this, Plane);
	
	    var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	
	    _this.setup();
	    _this.setEvents();
	
	    _this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Plane, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      // this.isREv = true;
	
	      this.ready();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // this.container = new THREE.Object3D();
	
	      this.w = 10;
	      this.h = 10;
	      this.scale = 10;
	
	      var geo = new THREE.PlaneGeometry(this.w, this.h, 1, 1);
	      var mat = new THREE.MeshBasicMaterial({ transparent: true, color: 0x092241 });
	      // var mat = new THREE.MeshBasicMaterial({side: THREE.DoubleSide ,transparent: true, color: 0xff0000, opacity: 0.3});
	      this.mesh = new THREE.Mesh(geo, mat);
	      var scale = 1;
	      this.mesh.scale.set(scale, scale, 1);
	
	      // add
	      this.add();
	
	      this.vec = new THREE.Vector3();
	
	      this.onResize();
	
	      // var color = new THREE.Color(0xffffff);
	      // TweenMax.to(this.mesh.material.color, 1.0, {
	      //     r: color.r,
	      //     g: color.g,
	      //     b: color.b,
	      //     ease: Expo.easeInOut,
	      // })
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.mesh);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);
	      if (this.mesh) {
	
	        this.vec.x = 0 - this.camera.position.x;
	        this.vec.y = 0 - this.camera.position.y;
	        this.vec.z = 0 - this.camera.position.z;
	        this.vec.normalize(1);
	        this.vec.multiplyScalar(this.camera.position.z + 500);
	        this.mesh.position.set(this.camera.position.x + this.vec.x, this.camera.position.y + this.vec.y, this.camera.position.z + this.vec.z);
	
	        this.mesh.quaternion.copy(this.camera.quaternion);
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.ratioW = gb.r.h / gb.r.w;
	      this.ratio = this.h / this.w;
	
	      // // size cover
	      if (this.ratioW > this.ratio) {
	
	        var scale = gb.r.h / this.h;
	        this.mesh.scale.set(scale * this.scale, scale * this.scale, 1);
	      } else if (this.ratioW <= this.ratio) {
	
	        var scale = gb.r.w / this.w * 1.01;
	        this.mesh.scale.set(scale * this.scale, scale * this.scale, 1);
	      }
	    }
	  }]);
	
	  return Plane;
	}(_Base3.default);
	
	exports.default = Plane;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Array = __webpack_require__(50);
	
	var a = _interopRequireWildcard(_Array);
	
	var _Val = __webpack_require__(51);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	var _Particle = __webpack_require__(52);
	
	var _Particle2 = _interopRequireDefault(_Particle);
	
	var _Motion = __webpack_require__(53);
	
	var _Motion2 = _interopRequireDefault(_Motion);
	
	var _shader = __webpack_require__(54);
	
	var _shader2 = _interopRequireDefault(_shader);
	
	var _shader3 = __webpack_require__(56);
	
	var _shader4 = _interopRequireDefault(_shader3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller(scene, camera, renderer, len, index) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	    _this.index = index;
	    _this.len = len;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.prev = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.next = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.param = 0;
	      this.cnt = 0;
	
	      this.ready();
	
	      this.add();
	
	      this.m = new _Motion2.default(this);
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.positions = [];
	      this.colors = [];
	      this.num = 100;
	      if (gb.u.dv.isAndroid() || gb.u.dv.isIe()) this.num = 40;
	      // this.num = 40;
	
	      this.easing = 0.03;
	      this.vRadius = 5;
	      this.zoff = 0;
	      this.t = 0;
	      this.vRotx = 0;
	      this.vRoty = 0;
	      this.vRotz = 0;
	      this.startRotx = 0;
	      this.startRoty = 0;
	      this.startRotz = 0;
	      this.rotPower = 0;
	
	      this.posRadS = 0;
	      this.posF = 0;
	      this.posFAdd = 0;
	      this.posRadius = 0;
	
	      this.ps = [];
	
	      this.geometry = new THREE.BufferGeometry();
	
	      var ps = 3.0;
	      if (gb.r.w <= 767) ps = 2.0;
	
	      this.uniforms = {
	        time: { type: 'f', value: 1.0 },
	        frame: { type: 'f', value: 0.0 },
	        resolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        // imageResolution: {type: 'v2', value: new THREE.Vector2(texture.image.width, texture.image.height)},
	        mouse: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
	        opacity: { type: 'f', value: 1.0 },
	
	        t: { type: 'f', value: 0.0 },
	        psize: { type: 'f', value: ps },
	
	        power: { type: 'f', value: 0.0 },
	        power2: { type: 'f', value: 0.0 },
	        power3: { type: 'f', value: 0.0 },
	        opParam: { type: 'f', value: 0.0 },
	        opParam2: { type: 'f', value: 1.0 },
	
	        index: { type: 'f', value: this.index / this.len }
	      };
	      var mat = new THREE.ShaderMaterial({
	        vertexShader: _shader2.default, fragmentShader: _shader4.default, uniforms: this.uniforms, transparent: true,
	        blending: THREE.AdditiveBlending, vertexColors: THREE.VertexColors,
	        depthTest: false
	      });
	
	      // gemetryの頂点セット
	      this.setVertex();
	
	      // オブジェクト生成
	      this.mesh = new THREE.Points(this.geometry, mat);
	      this.mesh.position.z = 0;
	      this.mesh.material.opacity = 1;
	
	      // this.mesh.position.y = (this.index - this.len / 2) * 5;
	      this.mesh.position.defy = this.mesh.position.y = (this.index - this.len / 2) * 5;
	      this.prev.pos.y = this.next.pos.y = this.mesh.position.y;
	      if (this.index % 2 == 1) {
	        this.mesh.visible = false;
	        this.uniforms.opacity.value = 0;
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // this.scene.add(this.mesh);
	
	    }
	  }, {
	    key: 'setVertex',
	    value: function setVertex() {
	
	      this.positions = new Float32Array(this.num * 3);
	      this.colors = new Float32Array(this.num * 3);
	      this.pdf = new Float32Array(this.num * 1);
	      this.spd = new Float32Array(this.num * 1);
	
	      this.v = new _Val2.default();
	
	      var startRad = this.index / this.len * Math.PI * 0.3;
	      // var radius = 30 * Math.sin(this.index/this.len * Math.PI);
	
	      var r = this.len * 5 / 2;
	      this.maxradius = r;
	      var half = Math.floor(this.len / 2);
	      var val = Math.abs(half - this.index);
	      var tate = val * r / half;
	      var radius = Math.pow(r, 2) - Math.pow(tate, 2);
	      if (radius == 0) radius = 100;
	      this.next.radius = this.prev.radius = radius = Math.sqrt(radius);
	
	      // var r = this.len * 5 / 2;
	      // var val = 0.5 - Math.abs((this.len/2 - this.index) / this.len);
	      // var radius = val * r * 2;
	
	      // log(radius, val)
	
	      for (var i = 0; i < this.num; i++) {
	
	        var param = {
	          x: m.range(40) * 0.5 * Math.random(),
	          y: m.range(40) * 0.5 * Math.random(),
	          z: 0,
	
	          radian: startRad + i / this.num * Math.PI * 2, vradian: this.prev.vradian, radius: radius, defRadius: radius,
	          radian2: m.radian(Math.random() * 360) * 0.3,
	          rad: m.radian(this.index * 1 + 360 * 360 * i / this.num),
	          rad2: m.radian(this.index * 1 + 360 * i / this.num),
	          vRad: m.radian(0.4),
	          r: 35,
	
	          rotateX: 0, rotateY: 0, rotateZ: 0,
	
	          noise: this.v.noise(0, i * 1000),
	
	          stepX: 0, stepY: 0,
	
	          index: i,
	          indexDis: this.index
	        };
	
	        var p = new _Particle2.default(param);
	        this.ps.push(p);
	
	        // positions
	        this.positions[i * 3] = this.ps[i].x;
	        this.positions[i * 3 + 1] = this.ps[i].y;
	        this.positions[i * 3 + 2] = this.ps[i].z;
	
	        // color red ff0000
	        // color blue 009fe7
	        var color = new THREE.Color('#ff0000');
	        this.colors[i * 3] = color.r;
	        this.colors[i * 3 + 1] = color.g;
	        this.colors[i * 3 + 2] = color.b;
	
	        // rand
	        this.pdf[i] = 0;
	
	        // speed
	        this.spd[i] = Math.random() * 0.5;
	      };
	
	      this.geometry.addAttribute('position', new THREE.BufferAttribute(this.positions, 3));
	      this.geometry.addAttribute('color', new THREE.BufferAttribute(this.colors, 3));
	      this.geometry.addAttribute('paramDiff', new THREE.BufferAttribute(this.pdf, 1));
	      this.geometry.addAttribute('spd', new THREE.BufferAttribute(this.spd, 1));
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // 頂点
	      this.m.update();
	      // this.m.updateCircleSize(); // サイズ変更
	      // this.m.updateSphere(); // 球体
	      // this.m.updateDiffusion(); // 拡散
	      // this.m.updateRandomWalk(); // ランダムウォーク
	      // this.m.updateGunya(); // ランダムウォーク
	
	
	      // mesh
	
	      // pos
	      // var x = m.lerp(this.prev.pos.x, this.next.pos.x, this.param);
	      // var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      // var z = m.lerp(this.prev.pos.z, this.next.pos.z, this.param);
	      this.posF += this.posFAdd;
	      var x = m.lerp(Math.cos(this.posRadS + this.posF) * this.posRadius, Math.cos(this.posRadS + this.posF) * this.posRadius, this.param);
	      var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      var z = m.lerp(Math.sin(this.posRadS + this.posF) * this.posRadius, Math.sin(this.posRadS + this.posF) * this.posRadius, this.param);
	      this.mesh.position.set(x, y, z);
	      // rotation
	      this.vRotx += 0.01 * this.rotPower;
	      this.vRoty += 0.01 * this.rotPower;
	      this.vRotz += 0.01 * this.rotPower;
	      var rotx = m.lerp(this.prev.rot.x, this.next.rot.x, this.param) + this.vRotx;
	      var roty = m.lerp(this.prev.rot.y, this.next.rot.y, this.param) + this.vRoty;
	      var rotz = m.lerp(this.prev.rot.z, this.next.rot.z, this.param) + this.vRotz;
	      // this.mesh.rotation.set(this.startRotx + this.rotx,this.startRoty + this.roty,this.startRotz + this.rotz);
	      this.mesh.rotation.set(rotx, roty, rotz);
	      // radius
	      var radius = m.lerp(this.prev.radius, this.next.radius, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.radius = radius;
	      }
	      // radian 点々の回転するスピード
	      var vradian = m.lerp(this.prev.vradian, this.next.vradian, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.vradian = vradian;
	      }
	
	      // if (gb.up.frame%30==0) {
	      //   log(this.vRotx, this.rotPower);
	      //   log(rotx);
	      // }
	
	      // log(y);
	
	      this.uniforms.frame.value = gb.up.frame / 100.0;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'tweenParamTo0',
	    value: function tweenParamTo0() {
	
	      TweenMax.to(this, 1.2, {
	        param: 1,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'tweenParamTo1',
	    value: function tweenParamTo1() {
	
	      TweenMax.to(this, 1.2, {
	        param: 0,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset(index) {
	      var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.9;
	
	      var _this2 = this;
	
	      var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var ease = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Power2.easeInOut;
	
	
	      if (this.index % 2 == 1) {
	
	        TweenMax.to(this.uniforms.opacity, dur, {
	          value: 0.0,
	          ease: ease,
	          onComplete: function onComplete() {
	            _this2.mesh.visible = false;
	          }
	
	        });
	      }
	
	      TweenMax.to(this.uniforms.power, dur, { value: 0.0, ease: ease });
	
	      // var timesx = this.vRotx % (Math.PI*2);
	      // var rotx = timesx * (Math.PI*2)
	      TweenMax.to(this, dur, { rotPower: 0.0, ease: ease });
	      TweenMax.to(this, dur, { vRotx: 0, vRoty: 0, vRotz: 0, ease: ease });
	
	      TweenMax.to(this, dur, { posRadS: 0, ease: ease });
	      TweenMax.to(this, dur, { posFAdd: 0, ease: ease });
	      TweenMax.to(this, dur, { posRadius: 0, ease: ease });
	
	      TweenMax.to(this.prev.rot, dur, { x: 0, y: 0, z: 0, ease: ease });
	      TweenMax.to(this.prev, dur, { radius: this.ps[this.index].defRadius, ease: ease });
	      if (flag) TweenMax.to(this.prev.pos, dur, { y: this.mesh.position.defy, ease: ease });
	
	      TweenMax.to(this.next.rot, dur, { x: 0, y: 0, z: 0, ease: ease });
	      TweenMax.to(this.next, dur, { radius: this.ps[this.index].defRadius, ease: ease });
	      if (flag) TweenMax.to(this.next.pos, dur, { y: this.mesh.position.defy, ease: ease });
	    }
	  }, {
	    key: 'switch',
	    value: function _switch(cur, index) {
	      var _this3 = this;
	
	      this.transition(index);
	
	      // 波波
	      if (cur == 0) {
	
	        // mesh数を増やす
	        if (this.index % 2 == 1) {
	
	          TweenMax.to(this.uniforms.opacity, 2.0, {
	            value: 1.0,
	            ease: Power2.easeInOut,
	            onStart: function onStart() {
	              _this3.mesh.visible = true;
	            }
	
	          });
	        }
	
	        if (cur % 2 == 1) {
	          // pos
	          this.prev.pos.y = 0;
	          // rot
	
	          // radius
	          this.prev.radius = this.maxradius * 0.4 + this.index / this.len * (this.maxradius * 0.8) + this.maxradius * 0.8 * 1 / this.len / 2;
	          // vradian
	          // TweenMax.to(this.prev, 2.5, {vradian: 0.001 + this.index*0.0005,ease: Power2.easeInOut, repeat: -1, yoyo: true});
	        } else {
	          // pos
	          this.next.pos.y = 0;
	          // rot
	
	          // radius
	          this.next.radius = this.maxradius * 0.4 + this.index / this.len * (this.maxradius * 0.8) + this.maxradius * 0.8 * 1 / this.len / 2;
	          // vradian
	          // TweenMax.to(this.next, 2.5, {vradian: 0.001 + this.index*0.0005,ease: Power2.easeInOut, repeat: -1, yoyo: true});
	        }
	      }
	
	      // 綺麗にdelay rotation
	      if (cur == 1) {
	
	        // meshをへらす
	        if (this.index % 2 == 1) {
	
	          TweenMax.to(this.uniforms.opacity, 0.9, {
	            value: 0.0,
	            ease: Power2.easeInOut,
	            onComplete: function onComplete() {
	              _this3.mesh.visible = false;
	            }
	
	          });
	        }
	
	        if (cur % 2 == 1) {
	          // pos
	          this.prev.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.3, ease: Power2.easeInOut });
	          // TweenMax.to(this.prev.rot, 2.5, {x: Math.PI / 4 * 2 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this.prev.rot, 2.5, {y: Math.PI / 4 * 2 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          TweenMax.to(this.prev.rot, 2.5, { z: Math.PI / 4 * 2 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // radius
	          // this.prev.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.prev.radius = this.maxradius;
	          // vradian
	          // this.prev.vradian = 0.001 + (Math.random()-0.5)*0.005;
	          this.tl = new TimelineMax();
	          this.tl.add(function () {
	            _this3.yokuyou();
	          }, 5.0);
	        } else {
	          // pos
	          this.next.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.3, ease: Power2.easeInOut });
	          // TweenMax.to(this.next.rot, 2.5, {x: Math.PI / 4 * 2 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this.next.rot, 2.5, {y: Math.PI / 4 * 2 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          TweenMax.to(this.next.rot, 2.5, { z: Math.PI / 4 * 2 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // radius
	          // this.next.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.next.radius = this.maxradius;
	          // vradian
	          // this.next.vradian = 0.001 + (Math.random()-0.5)*0.005;
	
	          this.tl = new TimelineMax();
	          this.tl.add(function () {
	            _this3.yokuyou();
	          }, 5.0);
	        }
	      }
	
	      // random
	      if (cur == 2) {
	
	        TweenMax.to(this.uniforms.opParam, 0.9, { value: 0.0, ease: Power2.easeInOut });
	        TweenMax.to(this.uniforms.power2, 0.9, { value: 0.0, ease: Power2.easeInOut });
	        clearTimeout(this.Timer);
	
	        this.reset(index, 0.9, true);
	      }
	    }
	  }, {
	    key: 'yokuyou',
	    value: function yokuyou() {
	      var _this4 = this;
	
	      var r = Math.random();
	
	      var x = '+=' + Math.PI * 0.8;
	      var y = '+=' + Math.PI * 0.8;
	      var z = '+=' + Math.PI * 0.8;
	      TweenMax.to(this.prev.rot, 3.0, { x: x, y: y, z: z, ease: Power1.easeInOut });
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this4.yokuyou();
	      }, 8000);
	    }
	  }, {
	    key: 'transition',
	    value: function transition(index) {
	      var _this5 = this;
	
	      var arr = a.randomArr(this.num);
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        if (index == 0) {
	          TweenMax.to(_this5, 1.0, { rotPower: -0.5, ease: Expo.easeInOut });
	        }
	
	        if (index == 1) {
	          TweenMax.to(_this5.uniforms.power2, 0.9, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.uniforms.opParam, 0.9, { value: 0.0, ease: Power2.easeOut });
	        }
	      }, 0.0).add(function () {
	
	        TweenMax.to(_this5.uniforms.power3, 3.0, { value: 1.0, ease: Power2.easeInOut });
	
	        for (var i = 0; i < _this5.num; i++) {
	
	          var p = _this5.ps[arr[i]];
	          TweenMax.to(p, 2.0, {
	            paramDiff: 1,
	            ease: Expo.easeOut,
	            delay: 0.2 + i * 0.005
	          });
	
	          TweenMax.to(p, 2.0, {
	            pf: 1,
	            ease: Expo.easeOut,
	            onUpdate: function onUpdate(index, p) {
	              _this5.pdf[index] = p.pf;
	              _this5.geometry.attributes.paramDiff.needsUpdate = true;
	            },
	            onUpdateParams: [arr[i], p],
	            delay: 0.2 + i * 0.005
	          });
	        }
	      }, 0.0).add(function () {
	
	        TweenMax.to(_this5.uniforms.power3, 3.0, { value: 0.0, ease: Power2.easeInOut });
	
	        for (var i = 0; i < _this5.num; i++) {
	
	          var p = _this5.ps[arr[i]];
	          TweenMax.to(p, 3.0, {
	            paramDiff: 0,
	            // ease: Elastic.easeOut.config(0.9, 0.6),
	            ease: Power2.easeInOut,
	            delay: 0.1 + i * 0.015
	          });
	
	          TweenMax.to(p, 3.0, {
	            pf: 0,
	            // ease: Elastic.easeOut.config(0.9, 0.6),
	            ease: Power2.easeInOut,
	            onUpdate: function onUpdate(index, p) {
	              _this5.pdf[index] = p.pf;
	              _this5.geometry.attributes.paramDiff.needsUpdate = true;
	            },
	            onUpdateParams: [arr[i], p],
	            delay: 0.5 + i * 0.015
	          });
	        }
	      }, 1.5).add(function () {
	
	        if (index == 0) {
	          TweenMax.to(_this5.uniforms.opParam2, 2.0, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.uniforms.power, 2.5, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.uniforms.opParam, 0.9, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5, 2.5, { rotPower: 0.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5, 2.5, { vRotx: 0, vRoty: 0, vRotz: 0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.prev.rot, 2.5, { x: -Math.PI / 10 * 0.2, z: Math.PI / 10 * 0.2, ease: Power2.easeInOut });
	          TweenMax.to(_this5.next.rot, 2.5, { x: -Math.PI / 10 * 0.2, z: Math.PI / 10 * 0.2, ease: Power2.easeInOut });
	        }
	
	        if (index == 1) {
	          TweenMax.to(_this5.uniforms.opParam2, 2.0, { value: 0.0, ease: Power2.easeInOut });
	        }
	      }, 3.0);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrRand = arrRand;
	exports.shuffle = shuffle;
	exports.randomArr = randomArr;
	exports.sliceNull = sliceNull;
	exports.sort = sort;
	exports.getKey = getKey;
	// ------------------------------------------------------------
	//
	//  Array
	//
	// ------------------------------------------------------------
	
	// 配列内のランダムな値をひとつ取得
	// -----------------------------------
	// @arr : 配列
	// return : 配列内の値
	// -----------------------------------
	function arrRand(arr) {
	
	  return arr[gb.u.m.randomInt(0, arr.length - 1)];
	}
	
	// 配列をランダムに並べ替え
	// -----------------------------------
	// @arr : 配列(Array)
	// -----------------------------------
	function shuffle(ary) {
	
	  var arr = [];
	  arr = ary.slice();
	  var i = arr.length;
	  while (i) {
	    var j = Math.floor(Math.random() * i);
	    var t = arr[--i];
	    arr[i] = arr[j];
	    arr[j] = t;
	  }
	  return arr;
	}
	
	// ランダムな数値を作る
	function randomArr(len) {
	
	  var arr = [];
	
	  for (var i = 0; i < len; i++) {
	    arr.push(i);
	  }arr = this.shuffle(arr);
	
	  return arr;
	}
	
	// nullを削除した配列を返す
	// -----------------------------------
	// @arr : 配列(Array)
	// return : null削除した配列(Array)
	// -----------------------------------
	function sliceNull(arr) {
	
	  var i, l, len1, newArr, val;
	  newArr = [];
	  for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	    val = arr[i];
	    if (val !== null) {
	      newArr.push(val);
	    }
	  }
	  return newArr;
	}
	
	// 配列内のパラメータを比較してソート
	// -----------------------------------
	// @arr : 配列(Array)
	// @para : パラメーター名
	// @desc : 降順かどうか(boolean) デフォルトは昇順
	// -----------------------------------
	function sort(arr, para, desc) {
	  if (desc === void 0) {
	    desc = false;
	  }
	  if (desc) {
	    return arr.sort(function (a, b) {
	      return b[para] - a[para];
	    });
	  } else {
	    return arr.sort(function (a, b) {
	      return a[para] - b[para];
	    });
	  }
	}
	
	function getKey(list, value) {
	  var returnKey = [];
	  for (var key in list) {
	    if (list[key] == value) {
	      returnKey.push(key);
	    }
	  }
	  return returnKey;
	}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Ticker
	//
	// ------------------------------------------------------------
	
	var Val = function () {
	  function Val() {
	    _classCallCheck(this, Val);
	
	    this.lastValue_val06 = 0;
	
	    // this.p = new ImprovedNoise();
	  }
	
	  _createClass(Val, [{
	    key: "val",
	    value: function val() {
	
	      return Math.random();
	    }
	
	    // from: https://ics.media/entry/11292
	    // 乱数の乗算 – ゼロ付近の割合を多くする
	
	  }, {
	    key: "val01",
	    value: function val01() {
	
	      return Math.random() * Math.random();
	    }
	
	    // 乱数の2乗 – ゼロ付近の割合をさらに多くする
	
	  }, {
	    key: "val02",
	    value: function val02() {
	
	      var r = Math.random();
	
	      return r * r;
	    }
	
	    // 乱数の平方根。出現頻度が0.0から1.0まで直線的に増えていく
	
	  }, {
	    key: "val03",
	    value: function val03() {
	
	      return Math.sqrt(Math.random());
	    }
	
	    // from: http://fladdict.net/exp/random/
	    // 過去2フレームに、距離○○%以内の重複数が出ないようになっている。
	
	  }, {
	    key: "val04",
	    value: function val04() {
	      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.33;
	
	
	      var val = Math.random();
	
	      while (Math.abs(this.lastValue - val) < distance && Math.abs(this.lastValue2 - val) < distance) {
	        val = Math.random();
	      }
	
	      this.lastValue2 = this.lastValue;
	      this.lastValue = val;
	
	      return val;
	    }
	
	    // コクのある乱数
	
	  }, {
	    key: "val05",
	    value: function val05() {
	      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6.0;
	
	
	      var r = 0;
	
	      for (var i = 0; i < num; i++) {
	        r += Math.random();
	      }
	
	      r = r / num;
	
	      return r;
	    }
	
	    // 芳醇なまろ味を出した乱数
	    // noise関数に比べて、より繊細で幅のある味
	
	  }, {
	    key: "val06",
	    value: function val06() {
	      var interpolation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.8;
	
	
	      this.lastValue_val06 = this.lastValue_val06 * interpolation + Math.random() * (1 - interpolation);
	      return this.lastValue_val06;
	    }
	
	    // need: perlin.js
	    // out -1 〜 1
	    // ex noise.simplex2(0.01, gb.in.up.frame/100);
	
	  }, {
	    key: "noise",
	    value: function (_noise) {
	      function noise(_x) {
	        return _noise.apply(this, arguments);
	      }
	
	      noise.toString = function () {
	        return _noise.toString();
	      };
	
	      return noise;
	    }(function (t) {
	      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
	
	
	      return noise.simplex2(p, t);
	    })
	
	    // need: ImprovedNoise.js three.jsのlibrary
	    // out -0.5 〜 0.5 じゃっかん、0.5を超えるときがある
	
	  }, {
	    key: "noise2",
	    value: function noise2(t) {
	      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
	      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.08;
	
	
	      return this.p.noise(t, x, y);
	    }
	  }, {
	    key: "sin",
	    value: function sin(t) {
	
	      return Math.sin(t);
	    }
	
	    // from: https://medium.com/@gordonnl/the-ocean-170fdfd659f1
	
	  }, {
	    key: "sin2",
	    value: function sin2(t) {
	
	      return Math.sin(t) + Math.sin(t * 2);
	    }
	  }, {
	    key: "sin3",
	    value: function sin3(t) {
	
	      return (Math.sin(t) + Math.sin(2.2 * t + 5.52) + Math.sin(2.9 * t + 0.93) + Math.sin(4.6 * t + 8.94)) / 4;
	    }
	
	    // from: https://ics.media/entry/11292
	    // normal distribution / 正規分布
	
	  }, {
	    key: "normal",
	    value: function normal() {
	
	      // 0.0未満、1.0以上になるケースがあるため
	      // その時は再計算を行う
	      var v;
	      while (true) {
	        v = this.calcNormal();
	        if (0 <= v && v < 1) {
	          break;
	        }
	      }
	
	      return v;
	    }
	  }, {
	    key: "calcNormal",
	    value: function calcNormal() {
	
	      // 正規乱数
	      var r1 = Math.random();
	      var r2 = Math.random();
	      var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
	      // 値を0以上1未満になるよう正規化する
	      value = (value + 3) / 6;
	      return value;
	    }
	  }, {
	    key: "sign",
	    value: function sign() {
	
	      return Math.random() < 0.5 ? 1 : -1;
	    }
	
	    // 時々、かなり飛ぶ
	
	  }, {
	    key: "montecarlo",
	    value: function montecarlo() {
	
	      var r1 = Math.random();
	      var probability = Math.pow(1.0 - r1, 8);
	
	      var r2 = Math.random();
	      if (r2 < probability) {
	        return r1;
	      }
	
	      return 0;
	    }
	  }]);
	
	  return Val;
	}();
	
	exports.default = Val;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Particle
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(51);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Particle = function () {
	  function Particle(param) {
	    _classCallCheck(this, Particle);
	
	    this.vec = new THREE.Vector3();
	
	    this.x = param.x || 0;
	    this.y = param.y || 0;
	    this.z = param.z || 0;
	
	    this.defx = m.range(100) * Math.random();
	    this.defy = m.range(70) * Math.random();
	    this.defz = 0;
	
	    this.vx = 0;
	    this.vy = 0;
	    this.vz = 0;
	
	    // circle用
	    this.radian = param.radian || 0;
	    this.radian2 = param.radian2 || 0;
	    this.vradian = param.vradian || 0;
	    this.radius = param.radius || 0;
	    this.defRadius = param.defRadius || 0;
	
	    // sphere用
	    this.rad = param.rad || 0;
	    this.rad2 = param.rad2 || 0;
	    this.vRad = param.vRad || 0;
	    this.r = param.r || 0;
	
	    this.minDis = 3;
	
	    this.rotateX = param.rotateX || 0;
	    this.rotateY = param.rotateY || 0;
	    this.rotateZ = param.rotateZ || 0;
	
	    this.noise = param.noise || 0;
	    this.v = new _Val2.default();
	    this.seed = 10000 * Math.random();
	    this.stepX = param.stepX || 0;
	    this.stepY = param.stepY || 0;
	
	    this.step = 5 + Math.random() * 8;
	
	    this.top = -70;
	    this.right = 130;
	    this.bottom = 70;
	    this.left = -130;
	
	    this.defRight = 130;
	    this.defLeft = -130;
	
	    this.rr = Math.random() * 0.5;
	
	    this.diffx = (Math.random() - 0.5) * 200;
	    this.diffy = (Math.random() - 0.5) * 200;
	    this.diffz = (Math.random() - 0.5) * 200;
	    if (gb.r.w <= 767) {
	      this.diffx = (Math.random() - 0.5) * 150;
	      this.diffy = (Math.random() - 0.5) * 150;
	      this.diffz = (Math.random() - 0.5) * 150;
	    }
	    // var rad = Math.random() * Math.PI * 10;
	    // var rad2 = Math.random() * Math.PI * 20;
	    // this.diffx = Math.cos(rad) * Math.cos(rad2) * (70 + (Math.random() - 0.5) * 0);
	    // this.diffy = Math.cos(rad) * Math.sin(rad2) * (70 + (Math.random() - 0.5) * 0);
	    // this.diffz = Math.sin(rad) * (70 + (Math.random() - 0.5) * 0);
	    // var rad = param.index / 100 * Math.PI * 2 * 5;
	    // var rad2 = param.index / 100 * Math.PI * 2 * 5;
	    // this.diffx = Math.cos(rad) * Math.cos(rad2) * 70;
	    // this.diffy = Math.cos(rad) * Math.sin(rad2) * 70;
	    // // this.diffz = Math.sin(rad) * 70;
	    // var len = 100;
	    // var radius = 70;
	    // var phi = Math.acos( -1 + ( 2 * param.index ) / len ) + param.indexDis / 31 * Math.PI * 2;
	    // var theta = Math.sqrt( len * Math.PI ) * phi;
	    // this.diffx = radius * Math.cos( theta ) * Math.sin( phi );
	    // this.diffy = radius * Math.sin( theta ) * Math.sin( phi );
	    // this.diffz = radius * Math.cos( phi );
	
	
	    this.paramDiff = 0;
	    this.pf = 0;
	
	    this.isEasingStop = false;
	  }
	
	  _createClass(Particle, [{
	    key: 'wavy',
	    value: function wavy(gx, gy, gz, vRadian) {
	
	      var step = this.noise.getPerlin() * 2;
	
	      var obj = {
	        x: Math.sin(this.radian2 + vRadian) * step + Math.sin(this.radian2 + vRadian) * step,
	        y: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step,
	        z: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step
	      };
	
	      this.x += (gx - this.x) * 0.1;
	      this.y += (gy - this.y) * 0.1;
	      this.z += (gz - this.z) * 0.1;
	
	      return obj;
	    }
	  }, {
	    key: 'gunya',
	    value: function gunya(vRadian, zoff) {
	
	      var angle = Math.PI * 6 * this.v.noise3(Math.abs(this.x / 1500), Math.abs(this.y / 1500), zoff);
	      this.vx = Math.cos(angle) * this.step * 0.087;
	      this.vy = Math.sin(angle) * this.step * 0.087;
	      this.vz = Math.cos(this.radian + vRadian) * 3 + Math.cos(this.radian + vRadian) * 3;
	
	      this.x += this.vx;
	      this.y += this.vy;
	
	      // wavy
	      var step = this.v.noise(gb.up.frame / 100, this.seed) * 0.1;
	      var wavy = {
	        x: Math.sin(this.radian + vRadian) * step + Math.sin(this.radian + vRadian) * step,
	        y: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step,
	        z: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step
	      };
	
	      this.x += wavy.x;
	      this.y += wavy.y;
	    }
	
	    // sphere(vRadian, i, len) {
	
	    //   // spehre
	    //   this.rad += this.vRad;
	    //   this.rad2 += this.vRad;
	
	    //   var phi = Math.acos( -1 + ( 2 * i ) / len );
	    //   var theta = Math.sqrt( len * Math.PI ) * phi;
	
	    //   this.gx = Math.cos(theta) * Math.sin(phi) * 30;
	    //   this.gy = Math.sin(theta) * Math.sin(phi) * 30;
	    //   this.gz = Math.sin(phi) * 30;
	
	    //   this.x += (this.gx - this.x) * 0.1;
	    //   this.y += (this.gy - this.y) * 0.1;
	    //   this.z += (this.gz - this.z) * 0.1;
	
	    // }
	
	  }, {
	    key: 'sphere',
	    value: function sphere(vRadian, i, len) {
	
	      // spehre
	      this.rad += this.vRad * 0.7;
	      this.rad2 += this.vRad * 0.7;
	
	      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
	      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
	      this.gz = Math.sin(this.rad) * 30;
	
	      // this.vec.set(this.gx,this.gy,this.gz);
	      // this.vec.normalize();
	      // this.vec.multiplyScalar(30 + Math.sin(i/Math.PI*2*10 + vRadian / 10) * 30);
	
	      // this.x += (this.vec.x - this.x) * 0.1;
	      // this.y += (this.vec.y - this.y) * 0.1;
	      // this.z += (this.vec.z - this.z) * 0.1;
	
	      this.x += (this.gx - this.x) * 0.1;
	      this.y += (this.gy - this.y) * 0.1;
	      this.z += (this.gz - this.z) * 0.1;
	    }
	  }, {
	    key: 'diffusion',
	    value: function diffusion(vRadian, i, len) {
	
	      // spehre
	      this.rad += this.vRad * 0.7;
	      this.rad2 += this.vRad * 0.7;
	
	      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
	      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
	      this.gz = Math.sin(this.rad) * 30;
	
	      this.vec.set(this.gx, this.gy, this.gz);
	      this.vec.normalize();
	      this.vec.multiplyScalar(30 + Math.sin(i / Math.PI * 2 * 10 + vRadian / 10) * this.rr * 30);
	
	      this.x += (this.vec.x - this.x) * 0.1;
	      this.y += (this.vec.y - this.y) * 0.1;
	      this.z += (this.vec.z - this.z) * 0.1;
	    }
	  }, {
	    key: 'boundary',
	    value: function boundary() {
	
	      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
	        return true;
	      }
	
	      return false;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Motion
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(51);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Motion = function () {
	  function Motion(parent) {
	    _classCallCheck(this, Motion);
	
	    this.p = parent;
	    this.v = new _Val2.default();
	  }
	
	  _createClass(Motion, [{
	    key: 'update',
	    value: function update() {
	
	      var sin = this.p.v.sin(gb.up.frame / 100);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var radian = p.radian += p.vradian;
	        // var radius = p.radius = 50 + sin * 10;
	        var radius = p.radius;
	
	        // circle
	        var x1 = Math.cos(radian) * radius;
	        var y1 = 0;
	        var z1 = Math.sin(radian) * radius;
	
	        // random
	        var x2 = p.diffx;
	        var y2 = p.diffy;
	        var z2 = p.diffz;
	
	        // lerp
	        var x = m.lerp(x1, x2, p.paramDiff);
	        var y = m.lerp(y1, y2, p.paramDiff);
	        var z = m.lerp(z1, z2, p.paramDiff);
	
	        this.p.positions[i * 3 + 0] = x;
	        this.p.positions[i * 3 + 1] = y;
	        this.p.positions[i * 3 + 2] = z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // circle
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setupUpdateCircle',
	    value: function setupUpdateCircle() {
	
	      var x, y;
	      var w = gb.r.w,
	          h = gb.r.h;
	      var radius = 0,
	          radiusOut = 0,
	          radiusIn = 0,
	          radian = 0,
	          step = 0;
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var c = 0.65;
	        if (i < this.p.num / 2) var r = 0.05;else var r = 0.03 + 0.01 * Math.random();
	
	        radiusOut = Math.min(w, h) * (c + r);
	        radiusIn = Math.min(w, h) * (c - r);
	
	        radius = i % 2 == 0 ? radiusOut : radiusIn;
	        step = 3 + Math.random() * 5;
	        radian = m.radian(i + step);
	        x = Math.sin(radian) * radius;
	        y = Math.cos(radian) * radius;
	
	        this.p.ps[i].x = x;
	        this.p.ps[i].y = y;
	        this.p.ps[i].radian = radian;
	        this.p.ps[i].vradian = step;
	        this.p.ps[i].radius = radius;
	      };
	    }
	  }, {
	    key: 'updateCircle',
	    value: function updateCircle() {
	
	      var sin = this.p.v.sin(gb.up.frame / 100);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var radian = p.radian += p.vradian;
	        // var radius = p.radius = 50 + sin * 10;
	        var radius = p.radius;
	
	        this.p.positions[i * 3 + 0] = Math.cos(radian) * radius;
	        this.p.positions[i * 3 + 1] = 0;
	        this.p.positions[i * 3 + 2] = Math.sin(radian) * radius;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // size
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateCircleSize',
	    value: function updateCircleSize() {
	
	      var size = this.v.noise(gb.up.frame / 500) * 10;
	      this.p.mesh.material.size = size;
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // sphere
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateSphere',
	    value: function updateSphere() {
	
	      var vRadian = m.radian(gb.up.frame * 2.6);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        // update
	        p.sphere(vRadian);
	
	        // draw
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // random walk
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateRandomWalk',
	    value: function updateRandomWalk() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var stepx = m.range(1);
	        var stepy = m.range(1);
	
	        // var stepsize = this.v.montecarlo()*10;
	        var stepsize = this.v.montecarlo() * Math.random() * 10;
	        stepx *= stepsize;
	        stepy *= stepsize;
	
	        p.x += stepx;
	        p.y += stepy;
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // gunya
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setupGunya',
	    value: function setupGunya() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.x = m.range(40) * 0.5 * Math.random();
	        p.y = m.range(40) * 0.5 * Math.random();
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	    }
	  }, {
	    key: 'resetGunya',
	    value: function resetGunya(i) {
	
	      var p = this.p.ps[i];
	
	      // p.x = gb.in.u.range(100)*Math.random();
	      // p.y = gb.in.u.range(70)*Math.random();
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+1];
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+1];
	      // p.z = 0;
	
	      p.x = m.range(gb.r.w / 2) * Math.random();
	      p.y = m.range(gb.r.h / 2) * Math.random();
	      p.z = 0;
	
	      this.p.positions[i * 3 + 0] = p.x;
	      this.p.positions[i * 3 + 1] = p.y;
	      this.p.positions[i * 3 + 2] = p.z;
	    }
	    // ぐにゃぐにゃ
	
	  }, {
	    key: 'updateGunya',
	    value: function updateGunya() {
	
	      var vRadian = m.radian(gb.up.frame * 2);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.gunya(vRadian, this.p.zoff);
	        if (p.boundary()) this.resetGunya(i);
	
	        // if (i < this.p.num/4) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = -70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4 && i < this.p.num/4*2 ) {
	
	        //   this.p.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*2 && i < this.p.num/4*3 ) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = 70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*3 && i < this.p.num ) {
	
	        //   this.p.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	
	      this.p.zoff += 0.002;
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	  }]);
	
	  return Motion;
	}();
	
	exports.default = Motion;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(55) + "\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_2_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_2_1(vec4 x) {\n     return mod289_2_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_2_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_2_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_2_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_2_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_2_5;\n  vec3 i1 = min( g_2_5.xyz, l.zxy );\n  vec3 i2 = max( g_2_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_2_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_2_0(i);\n  vec4 p = permute_2_1( permute_2_1( permute_2_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_2_4.wyz - D_2_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_2_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_2_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_2_6.xy,h.z);\n  vec3 p3 = vec3(a1_2_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_2_2(vec4(dot(p0_2_7,p0_2_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_2_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_2_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nvec3 snoiseVec3_1_8( vec3 x ){\n\n  float s  = snoise_2_3(vec3( x ));\n  float s1 = snoise_2_3(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise_2_3(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\n\nvec3 curlNoise_1_9( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3_1_8( p - dx );\n  vec3 p_x1 = snoiseVec3_1_8( p + dx );\n  vec3 p_y0 = snoiseVec3_1_8( p - dy );\n  vec3 p_y1 = snoiseVec3_1_8( p + dy );\n  vec3 p_z0 = snoiseVec3_1_8( p - dz );\n  vec3 p_z1 = snoiseVec3_1_8( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\nuniform float power;\nuniform float power2;\nuniform float power3;\n\nuniform float psize;\n\nattribute float paramDiff;\nattribute float spd;\nuniform float index;\n\nmat4 calcRotateMat4X(float radian) {\n  return mat4(\n    1.0, 0.0, 0.0, 0.0,\n    0.0, cos(radian), -sin(radian), 0.0,\n    0.0, sin(radian), cos(radian), 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4Y(float radian) {\n  return mat4(\n    cos(radian), 0.0, sin(radian), 0.0,\n    0.0, 1.0, 0.0, 0.0,\n    -sin(radian), 0.0, cos(radian), 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4Z(float radian) {\n  return mat4(\n    cos(radian), -sin(radian), 0.0, 0.0,\n    sin(radian), cos(radian), 0.0, 0.0,\n    0.0, 0.0, 1.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4(vec3 radian) {\n  return calcRotateMat4X(radian.x) * calcRotateMat4Y(radian.y) * calcRotateMat4Z(radian.z);\n}\n\nvoid main() {\n\n  vec3 pos = position;\n\n\n  // motion curl\n    // 大きい移動を作る\n  // float noise1 = cnoise3(\n  vec3 noise1 = curlNoise_1_9(\n      vec3(\n        pos.x * 0.006 + frame * 0.1,\n        pos.y * 0.012,\n        pos.z * 0.006\n      )\n    );\n  // float noise2 = cnoise3(\n  vec3 noise2 = curlNoise_1_9(\n      vec3(\n        pos.x * 0.02,\n        pos.y * 0.016 + frame * 0.05,\n        pos.z * 0.02\n      )\n    );\n\n  // rotate\n  vec3 radian = mix(vec3(radians(0.0)), vec3(radians(sin(frame * 0.4)*40.0), radians(sin(frame * 1.0)*10.0), radians(sin(frame * 1.0)*20.0)), paramDiff);\n  mat4 rotateMat = calcRotateMat4(radian);\n\n  // pos\n  float dis = length(pos);\n  pos.y = pos.y + sin(dis * 0.15 + frame*3.0) * 3.0 * power;\n  // pos.y += sin(pos.x * 0.1 + frame*0.001) * 5.0;\n\n  pos.x = pos.x + sin(index * 3.0 + frame*2.0) * 3.0 * power2;\n  pos.z = pos.z + cos(index * 3.0 + frame*2.0) * 3.0 * power2;\n\n  vec3 n = normalize(pos);\n  vec3 newPos = n * dis * (1.0 + (sin(index * 10.0 + frame * (1.5 + spd)) + 1.0) / 2.0 * 0.1); // sphere radius\n  pos = mix(pos, newPos, power3);\n\n  vec4 mvPosition = modelViewMatrix * rotateMat * vec4(pos, 1.0);\n  // vec4 noisePosition = vec4(pos * 2.0 + (normalize(pos) * (300.0 * noise1)), 1.0);\n  // vec4 noisePosition = vec4(pos + (normalize(pos) * (5.0 * noise1)), 1.0);\n  // vec4 mvPosition = modelViewMatrix * noisePosition;\n\n  // size\n  float size = mix(psize, 500.0 / length(mvPosition.xyz), paramDiff);\n\n  vColor = color;\n  vPos = (projectionMatrix * mvPosition).xyz;\n\n  gl_Position = projectionMatrix * mvPosition;\n  gl_PointSize = size;\n\n}\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;\n\n// // func\n// #pragma glslify: map = require(glsl-map)\n// #pragma glslify: random = require(glsl-random)\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n\n// // easing\n// #pragma glslify: ease = require(glsl-easings/back-in-out) \n// #pragma glslify: ease = require(glsl-easings/back-in) \n// #pragma glslify: ease = require(glsl-easings/back-out) \n// #pragma glslify: ease = require(glsl-easings/bounce-in-out) \n// #pragma glslify: ease = require(glsl-easings/bounce-in) \n// #pragma glslify: ease = require(glsl-easings/bounce-out) \n// #pragma glslify: ease = require(glsl-easings/circular-in-out) \n// #pragma glslify: ease = require(glsl-easings/circular-in) \n// #pragma glslify: ease = require(glsl-easings/circular-out) \n// #pragma glslify: ease = require(glsl-easings/cubic-in-out) \n// #pragma glslify: ease = require(glsl-easings/cubic-in) \n// #pragma glslify: ease = require(glsl-easings/cubic-out) \n// #pragma glslify: ease = require(glsl-easings/elastic-in-out) \n// #pragma glslify: ease = require(glsl-easings/elastic-in) \n// #pragma glslify: ease = require(glsl-easings/elastic-out) \n// #pragma glslify: ease = require(glsl-easings/exponential-in-out) \n// #pragma glslify: ease = require(glsl-easings/exponential-in) \n// #pragma glslify: ease = require(glsl-easings/exponential-out) \n// #pragma glslify: ease = require(glsl-easings/linear) \n// #pragma glslify: ease = require(glsl-easings/quadratic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quadratic-in) \n// #pragma glslify: ease = require(glsl-easings/quadratic-out) \n// #pragma glslify: ease = require(glsl-easings/quartic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quartic-in) \n// #pragma glslify: ease = require(glsl-easings/quartic-out) \n// #pragma glslify: ease = require(glsl-easings/quintic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quintic-in) \n// #pragma glslify: ease = require(glsl-easings/quintic-out) \n// #pragma glslify: ease = require(glsl-easings/sine-in-out) \n// #pragma glslify: ease = require(glsl-easings/sine-in) \n// #pragma glslify: ease = require(glsl-easings/sine-out) \n\n// const float interval = 5.0;\n\n// void main() {\n\n//   float now = mod(time, interval);\n//   float val = now / interval; // intervalの時間ごとに、0 〜 1 \n\n//   // このグラフ頭の中でイメージできたいいな。 0から1にすぐなって、1が続き、0.8秒地点から0になって、0.1秒0が続く、それが再度繰り返される\n//   float val = (smoothstep(0.0, 0.1, now / interval) * (1.0 - smoothstep(0.8, 0.9, now / interval)));\n\n// }"

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(57) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\nfloat map_2_8(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_2_8(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_2_8(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_2_8(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\nuniform float opacity;\nuniform float opParam;\nuniform float opParam2;\n\nuniform float t;\nuniform float index;\n\n#define PI 3.1415926535897932384626433832795\n\nvoid main() {\n\n  // Round the point\n  vec3 n;\n  n.xy = gl_PointCoord * 2.0 - 1.0;\n  n.z = 1.0 - dot(n.xy, n.xy);\n  if (n.z < 0.0) discard;\n\n  // float op1 = map(sin(index * 2.0 + frame * 2.5), -1.0, 1.0, 0.0, 1.0);\n  vec3 p = vPos*0.01;\n  p.z = p.z + frame * 0.06;\n  float op1 = map_2_8(snoise_1_3(p), -1.0, 0.8, 0.0, 1.0);\n\n  p = vPos*0.07;\n  p.z = p.z + frame * 1.0;\n  float op2 = map_2_8(snoise_1_3(p), -1.0, 0.8, 0.0, 1.0);\n\n  float op = mix(op1, op2, opParam2);\n\n  vec4 final = mix(vec4(vColor, 1.0 * opacity), vec4(vColor, op * opacity), opParam);\n\n  vec4 c = mix(final, vec4(1.0,1.0,1.0,1.0), t);\n\n  gl_FragColor = c;\n\n}\n"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\nuniform sampler2D texture;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;"

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Array = __webpack_require__(50);
	
	var a = _interopRequireWildcard(_Array);
	
	var _Val = __webpack_require__(51);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	var _Particle = __webpack_require__(59);
	
	var _Particle2 = _interopRequireDefault(_Particle);
	
	var _Motion = __webpack_require__(60);
	
	var _Motion2 = _interopRequireDefault(_Motion);
	
	var _shader = __webpack_require__(61);
	
	var _shader2 = _interopRequireDefault(_shader);
	
	var _shader3 = __webpack_require__(62);
	
	var _shader4 = _interopRequireDefault(_shader3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller(scene, camera, renderer, len, index) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	    _this.index = index;
	    _this.len = len;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.prev = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.next = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.param = 0;
	      this.cnt = 0;
	
	      this.ready();
	
	      this.add();
	
	      this.m = new _Motion2.default(this);
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.positions = [];
	      this.colors = [];
	      this.num = 100;
	      if (gb.u.dv.isAndroid() || gb.u.dv.isIe()) this.num = 40;
	      // this.num = 40;
	
	      this.easing = 0.03;
	      this.vRadius = 5;
	      this.zoff = 0;
	      this.t = 0;
	      this.vRotx = 0;
	      this.vRoty = 0;
	      this.vRotz = 0;
	      this.startRotx = 0;
	      this.startRoty = 0;
	      this.startRotz = 0;
	      this.rotPower = 0;
	
	      this.posRadS = 0;
	      this.posF = 0;
	      this.posFAdd = 0;
	      this.posRadius = 0;
	
	      this.ps = [];
	
	      this.geometry = new THREE.BufferGeometry();
	
	      var ps = 3.0;
	      if (gb.r.w <= 767) ps = 2.0;
	
	      this.uniforms = {
	        time: { type: 'f', value: 1.0 },
	        frame: { type: 'f', value: 0.0 },
	        resolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        // imageResolution: {type: 'v2', value: new THREE.Vector2(texture.image.width, texture.image.height)},
	        mouse: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
	        opacity: { type: 'f', value: 1.0 },
	        t: { type: 'f', value: 0.0 },
	        psize: { type: 'f', value: ps },
	
	        power: { type: 'f', value: 0.0 },
	        power2: { type: 'f', value: 0.0 },
	        power3: { type: 'f', value: 0.0 },
	        opParam: { type: 'f', value: 0.0 },
	        opParam2: { type: 'f', value: 1.0 },
	
	        index: { type: 'f', value: this.index / this.len }
	      };
	      var mat = new THREE.ShaderMaterial({ vertexShader: _shader2.default, fragmentShader: _shader4.default, uniforms: this.uniforms, transparent: true, blending: THREE.AdditiveBlending, vertexColors: THREE.VertexColors });
	
	      // gemetryの頂点セット
	      this.setVertex();
	
	      // オブジェクト生成
	      this.mesh = new THREE.Points(this.geometry, mat);
	      this.mesh.position.z = 0;
	      this.mesh.material.opacity = 1;
	
	      // this.mesh.position.y = (this.index - this.len / 2) * 5 + 2.5;
	      this.mesh.position.defy = this.mesh.position.y = (this.index - this.len / 2) * 5;
	      this.prev.pos.y = this.next.pos.y = this.mesh.position.y;
	      if (this.index % 2 == 0) {
	        this.mesh.visible = false;
	        this.uniforms.opacity.value = 0;
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // this.scene.add(this.mesh);
	
	    }
	  }, {
	    key: 'setVertex',
	    value: function setVertex() {
	
	      this.positions = new Float32Array(this.num * 3);
	      this.colors = new Float32Array(this.num * 3);
	      this.pdf = new Float32Array(this.num * 1);
	      this.spd = new Float32Array(this.num * 1);
	
	      this.v = new _Val2.default();
	
	      var startRad = this.index / this.len * Math.PI * 0.1;
	      // var radius = 30 * Math.sin(this.index/this.len * Math.PI + Math.PI / this.len / 2);
	
	      var r = this.len * 5 / 2;
	      this.maxradius = r;
	      var half = Math.floor(this.len / 2);
	      var val = Math.abs(half - this.index);
	      var tate = val * r / half;
	      var radius = Math.pow(r, 2) - Math.pow(tate, 2);
	      if (radius == 0) radius = 20;
	      this.next.radius = this.prev.radius = radius = Math.sqrt(radius);
	
	      // var r = this.len * 5 / 2;
	      // var val = 0.5 - Math.abs((this.len/2 - this.index) / this.len);
	      // var radius = val * r * 2;
	
	      // log(radius, val)
	
	      for (var i = 0; i < this.num; i++) {
	
	        var param = {
	          x: m.range(40) * 0.5 * Math.random(),
	          y: m.range(40) * 0.5 * Math.random(),
	          z: 0,
	
	          radian: startRad + i / this.num * Math.PI * 2, vradian: this.prev.vradian, radius: radius, defRadius: radius,
	          radian2: m.radian(Math.random() * 360) * 0.3,
	          rad: m.radian(this.index * 1 + 360 * 360 * i / this.num),
	          rad2: m.radian(this.index * 1 + 360 * i / this.num),
	          vRad: m.radian(0.4),
	          r: 35,
	
	          rotateX: 0, rotateY: 0, rotateZ: 0,
	
	          noise: this.v.noise(0, i * 1000),
	
	          stepX: 0, stepY: 0
	        };
	
	        var p = new _Particle2.default(param);
	        this.ps.push(p);
	
	        // positions
	        this.positions[i * 3] = this.ps[i].x;
	        this.positions[i * 3 + 1] = this.ps[i].y;
	        this.positions[i * 3 + 2] = this.ps[i].z;
	
	        var color = new THREE.Color('#009fe7');
	        this.colors[i * 3] = color.r;
	        this.colors[i * 3 + 1] = color.g;
	        this.colors[i * 3 + 2] = color.b;
	
	        // rand
	        this.pdf[i] = 0;
	
	        // speed
	        this.spd[i] = Math.random() * 0.5;
	      };
	
	      this.geometry.addAttribute('position', new THREE.BufferAttribute(this.positions, 3));
	      this.geometry.addAttribute('color', new THREE.BufferAttribute(this.colors, 3));
	      this.geometry.addAttribute('paramDiff', new THREE.BufferAttribute(this.pdf, 1));
	      this.geometry.addAttribute('spd', new THREE.BufferAttribute(this.spd, 1));
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // 頂点
	      this.m.update();
	      // this.m.updateCircleSize(); // サイズ変更
	      // this.m.updateSphere(); // 球体
	      // this.m.updateDiffusion(); // 拡散
	      // this.m.updateRandomWalk(); // ランダムウォーク
	      // this.m.updateGunya(); // ランダムウォーク
	
	
	      // mesh
	
	      // pos
	      // var x = m.lerp(this.prev.pos.x, this.next.pos.x, this.param);
	      // var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      // var z = m.lerp(this.prev.pos.z, this.next.pos.z, this.param);
	      this.posF += this.posFAdd;
	      var x = m.lerp(Math.cos(this.posRadS + this.posF) * this.posRadius, Math.cos(this.posRadS + this.posF) * this.posRadius, this.param);
	      var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      var z = m.lerp(Math.sin(this.posRadS + this.posF) * this.posRadius, Math.sin(this.posRadS + this.posF) * this.posRadius, this.param);
	      this.mesh.position.set(x, y, z);
	      // rotation
	      this.vRotx += 0.01 * this.rotPower;
	      this.vRoty += 0.01 * this.rotPower;
	      this.vRotz += 0.01 * this.rotPower;
	      var rotx = m.lerp(this.prev.rot.x, this.next.rot.x, this.param) + this.vRotx;
	      var roty = m.lerp(this.prev.rot.y, this.next.rot.y, this.param) + this.vRoty;
	      var rotz = m.lerp(this.prev.rot.z, this.next.rot.z, this.param) + this.vRotz;
	      // this.mesh.rotation.set(this.startRotx + this.rotx,this.startRoty + this.roty,this.startRotz + this.rotz);
	      this.mesh.rotation.set(rotx, roty, rotz);
	      // radius
	      var radius = m.lerp(this.prev.radius, this.next.radius, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.radius = radius;
	      }
	      // radian 点々の回転するスピード
	      var vradian = m.lerp(this.prev.vradian, this.next.vradian, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.vradian = vradian;
	      }
	
	      // if (gb.up.frame%30==0) {
	      //   log(this.vRotx, this.rotPower);
	      //   log(rotx);
	      // }
	
	      this.uniforms.frame.value = gb.up.frame / 100.0;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'tweenParamTo0',
	    value: function tweenParamTo0() {
	
	      TweenMax.to(this, 1.2, {
	        param: 1,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'tweenParamTo1',
	    value: function tweenParamTo1() {
	
	      TweenMax.to(this, 1.2, {
	        param: 0,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset(index) {
	      var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.9;
	
	      var _this2 = this;
	
	      var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var ease = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Power2.easeInOut;
	
	
	      if (this.index % 2 == 0) {
	
	        TweenMax.to(this.uniforms.opacity, dur, {
	          value: 0.0,
	          ease: Power2.easeInOut,
	          onComplete: function onComplete() {
	            _this2.mesh.visible = false;
	          }
	
	        });
	      }
	
	      TweenMax.to(this.uniforms.power, dur, { value: 0.0, ease: ease });
	      // var timesx = this.vRotx % (Math.PI*2);
	      // var rotx = timesx * (Math.PI*2)
	      TweenMax.to(this, dur, { rotPower: 0.0, ease: ease });
	      TweenMax.to(this, dur, { vRotx: 0, vRoty: 0, vRotz: 0, ease: ease });
	
	      TweenMax.to(this, dur, { posRadS: 0, ease: ease });
	      TweenMax.to(this, dur, { posFAdd: 0, ease: ease });
	      TweenMax.to(this, dur, { posRadius: 0, ease: ease });
	
	      TweenMax.to(this.prev.rot, dur, { x: 0, y: 0, z: 0, ease: ease });
	      TweenMax.to(this.prev, dur, { radius: this.ps[this.index].defRadius, ease: ease });
	      if (flag) TweenMax.to(this.prev.pos, dur, { y: this.mesh.position.defy, ease: ease });
	
	      TweenMax.to(this.next.rot, dur, { x: 0, y: 0, z: 0, ease: ease });
	      TweenMax.to(this.next, dur, { radius: this.ps[this.index].defRadius, ease: ease });
	      if (flag) TweenMax.to(this.next.pos, dur, { y: this.mesh.position.defy, ease: ease });
	    }
	  }, {
	    key: 'switch',
	    value: function _switch(cur, index) {
	      var _this3 = this;
	
	      this.transition(index);
	
	      // 波波
	      if (cur == 0) {
	
	        // mesh数を増やす
	        if (this.index % 2 == 0) {
	
	          TweenMax.to(this.uniforms.opacity, 2.0, {
	            value: 1.0,
	            ease: Power2.easeInOut,
	            onStart: function onStart() {
	              _this3.mesh.visible = true;
	            }
	
	          });
	        }
	
	        if (cur % 2 == 1) {
	          // pos
	          this.prev.pos.y = 0;
	          // rot
	
	          // radius
	          this.prev.radius = this.maxradius * 0.4 + this.index / this.len * (this.maxradius * 0.8) + this.maxradius * 0.8 * 1 / this.len / 2;
	          // vradian
	          // TweenMax.to(this.prev, 2.5, {vradian: 0.001 + this.index*0.0005,ease: Power2.easeInOut, repeat: -1, yoyo: true});
	        } else {
	          // pos
	          this.next.pos.y = 0;
	          // rot
	
	          // radius
	
	          this.next.radius = this.maxradius * 0.4 + this.index / this.len * (this.maxradius * 0.8) + this.maxradius * 0.8 * 1 / this.len / 2;
	          // vradian
	          // TweenMax.to(this.next, 2.5, {vradian: 0.001 + this.index*0.0005,ease: Power2.easeInOut, repeat: -1, yoyo: true});
	        }
	      }
	
	      // 綺麗にdelay rotation
	      if (cur == 1) {
	
	        // meshをへらす
	        if (this.index % 2 == 0) {
	
	          TweenMax.to(this.uniforms.opacity, 0.9, {
	            value: 0.0,
	            ease: Power2.easeInOut,
	            onComplete: function onComplete() {
	              _this3.mesh.visible = false;
	            }
	
	          });
	        }
	
	        if (cur % 2 == 1) {
	          // pos
	          this.prev.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.5, ease: Power2.easeInOut });
	          // TweenMax.to(this.prev.rot, 2.5, {x: Math.PI / 4 * 0 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this.prev.rot, 2.5, {y: Math.PI / 4 * 0 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          TweenMax.to(this.prev.rot, 2.5, { z: Math.PI / 4 * 0 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // radius
	          // this.prev.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.prev.radius = this.maxradius;
	          // vradian
	          // this.prev.vradian = 0.001 + (Math.random()-0.5)*0.005;
	          this.tl = new TimelineMax();
	          this.tl.add(function () {
	            _this3.yokuyou();
	          }, 8.0);
	        } else {
	          // pos
	          this.next.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.5, ease: Power2.easeInOut });
	          // TweenMax.to(this.next.rot, 2.5, {x: Math.PI / 4 * 0 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this.next.rot, 2.5, {y: Math.PI / 4 * 0 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          TweenMax.to(this.next.rot, 2.5, { z: Math.PI / 4 * 0 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // radius
	          // this.next.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.next.radius = this.maxradius;
	          // vradian
	          // this.next.vradian = 0.001 + (Math.random()-0.5)*0.005;
	
	          this.tl = new TimelineMax();
	          this.tl.add(function () {
	            _this3.yokuyou();
	          }, 8.0);
	        }
	      }
	
	      // random
	      if (cur == 2) {
	
	        TweenMax.to(this.uniforms.opParam, 0.9, { value: 0.0, ease: Power2.easeInOut });
	        TweenMax.to(this.uniforms.power2, 0.9, { value: 0.0, ease: Power2.easeInOut });
	        clearTimeout(this.Timer);
	
	        this.reset(index, 0.9, true);
	      }
	    }
	  }, {
	    key: 'yokuyou',
	    value: function yokuyou() {
	      var _this4 = this;
	
	      var r = Math.random();
	
	      var x = '+=' + Math.PI * 0.6;
	      var y = '+=' + Math.PI * 0.6;
	      var z = '+=' + Math.PI * 0.6;
	      TweenMax.to(this.prev.rot, 3.0, { x: x, y: y, z: z, ease: Power1.easeInOut });
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this4.yokuyou();
	      }, 5000);
	    }
	  }, {
	    key: 'transition',
	    value: function transition(index) {
	      var _this5 = this;
	
	      var arr = a.randomArr(this.num);
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        if (index == 0) {
	          TweenMax.to(_this5, 1.0, { rotPower: -0.5, ease: Expo.easeInOut });
	        }
	
	        if (index == 1) {
	          TweenMax.to(_this5.uniforms.power2, 0.9, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.uniforms.opParam, 0.9, { value: 0.0, ease: Power2.easeOut });
	        }
	      }, 0.0).add(function () {
	
	        TweenMax.to(_this5.uniforms.power3, 3.0, { value: 1.0, ease: Power2.easeInOut });
	
	        for (var i = 0; i < _this5.num; i++) {
	
	          var p = _this5.ps[arr[i]];
	          TweenMax.to(p, 2.0, {
	            paramDiff: 1,
	            ease: Expo.easeOut,
	            delay: 0.2 + i * 0.005
	          });
	
	          TweenMax.to(p, 2.0, {
	            pf: 1,
	            ease: Expo.easeOut,
	            onUpdate: function onUpdate(index, p) {
	              _this5.pdf[index] = p.pf;
	              _this5.geometry.attributes.paramDiff.needsUpdate = true;
	            },
	            onUpdateParams: [arr[i], p],
	            delay: 0.2 + i * 0.005
	          });
	        }
	      }, 0.0).add(function () {
	
	        TweenMax.to(_this5.uniforms.power3, 3.0, { value: 0.0, ease: Power2.easeInOut });
	
	        for (var i = 0; i < _this5.num; i++) {
	
	          var p = _this5.ps[arr[i]];
	          TweenMax.to(p, 3.0, {
	            paramDiff: 0,
	            // ease: Elastic.easeOut.config(0.9, 0.6),
	            ease: Power2.easeInOut,
	            delay: 0.1 + i * 0.015
	          });
	
	          TweenMax.to(p, 3.0, {
	            pf: 0,
	            // ease: Elastic.easeOut.config(0.9, 0.6),
	            ease: Power2.easeInOut,
	            onUpdate: function onUpdate(index, p) {
	              _this5.pdf[index] = p.pf;
	              _this5.geometry.attributes.paramDiff.needsUpdate = true;
	            },
	            onUpdateParams: [arr[i], p],
	            delay: 0.5 + i * 0.015
	          });
	        }
	      }, 1.5).add(function () {
	
	        if (index == 0) {
	          TweenMax.to(_this5.uniforms.opParam2, 2.0, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.uniforms.power, 2.5, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.uniforms.opParam, 0.9, { value: 1.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5, 2.5, { rotPower: 0.0, ease: Power2.easeInOut });
	          TweenMax.to(_this5, 2.5, { vRotx: 0, vRoty: 0, vRotz: 0, ease: Power2.easeInOut });
	          TweenMax.to(_this5.prev.rot, 2.5, { x: Math.PI / 10 * 0.5, z: Math.PI / 10 * 0.2, ease: Power2.easeInOut });
	          TweenMax.to(_this5.next.rot, 2.5, { x: Math.PI / 10 * 0.5, z: Math.PI / 10 * 0.2, ease: Power2.easeInOut });
	        }
	
	        if (index == 1) {
	          TweenMax.to(_this5.uniforms.opParam2, 2.0, { value: 0.0, ease: Power2.easeInOut });
	        }
	      }, 3.0);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Particle
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(51);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Particle = function () {
	  function Particle(param) {
	    _classCallCheck(this, Particle);
	
	    this.vec = new THREE.Vector3();
	
	    this.x = param.x || 0;
	    this.y = param.y || 0;
	    this.z = param.z || 0;
	
	    this.defx = m.range(100) * Math.random();
	    this.defy = m.range(70) * Math.random();
	    this.defz = 0;
	
	    this.vx = 0;
	    this.vy = 0;
	    this.vz = 0;
	
	    // circle用
	    this.radian = param.radian || 0;
	    this.radian2 = param.radian2 || 0;
	    this.vradian = param.vradian || 0;
	    this.radius = param.radius || 0;
	    this.defRadius = param.defRadius || 0;
	
	    // sphere用
	    this.rad = param.rad || 0;
	    this.rad2 = param.rad2 || 0;
	    this.vRad = param.vRad || 0;
	    this.r = param.r || 0;
	
	    this.minDis = 3;
	
	    this.rotateX = param.rotateX || 0;
	    this.rotateY = param.rotateY || 0;
	    this.rotateZ = param.rotateZ || 0;
	
	    this.noise = param.noise || 0;
	    this.v = new _Val2.default();
	    this.seed = 10000 * Math.random();
	    this.stepX = param.stepX || 0;
	    this.stepY = param.stepY || 0;
	
	    this.step = 5 + Math.random() * 8;
	
	    this.top = -70;
	    this.right = 130;
	    this.bottom = 70;
	    this.left = -130;
	
	    this.defRight = 130;
	    this.defLeft = -130;
	
	    this.rr = Math.random() * 0.5;
	
	    this.diffx = (Math.random() - 0.5) * 200;
	    this.diffy = (Math.random() - 0.5) * 200;
	    this.diffz = (Math.random() - 0.5) * 200;
	    if (gb.r.w <= 767) {
	      this.diffx = (Math.random() - 0.5) * 150;
	      this.diffy = (Math.random() - 0.5) * 150;
	      this.diffz = (Math.random() - 0.5) * 150;
	    }
	    // var rad = Math.random() * Math.PI * 10;
	    // var rad2 = Math.random() * Math.PI * 20;
	    // this.diffx = Math.cos(rad) * Math.cos(rad2) * (80 + (Math.random() - 0.5) * 0);
	    // this.diffy = Math.cos(rad) * Math.sin(rad2) * (80 + (Math.random() - 0.5) * 0);
	    // this.diffz = Math.sin(rad) * (80 + (Math.random() - 0.5) * 0);
	
	    this.paramDiff = 0;
	    this.pf = 0;
	
	    this.isEasingStop = false;
	  }
	
	  _createClass(Particle, [{
	    key: 'wavy',
	    value: function wavy(gx, gy, gz, vRadian) {
	
	      var step = this.noise.getPerlin() * 2;
	
	      var obj = {
	        x: Math.sin(this.radian2 + vRadian) * step + Math.sin(this.radian2 + vRadian) * step,
	        y: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step,
	        z: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step
	      };
	
	      this.x += (gx - this.x) * 0.1;
	      this.y += (gy - this.y) * 0.1;
	      this.z += (gz - this.z) * 0.1;
	
	      return obj;
	    }
	  }, {
	    key: 'gunya',
	    value: function gunya(vRadian, zoff) {
	
	      var angle = Math.PI * 6 * this.v.noise3(Math.abs(this.x / 1500), Math.abs(this.y / 1500), zoff);
	      this.vx = Math.cos(angle) * this.step * 0.087;
	      this.vy = Math.sin(angle) * this.step * 0.087;
	      this.vz = Math.cos(this.radian + vRadian) * 3 + Math.cos(this.radian + vRadian) * 3;
	
	      this.x += this.vx;
	      this.y += this.vy;
	
	      // wavy
	      var step = this.v.noise(gb.up.frame / 100, this.seed) * 0.1;
	      var wavy = {
	        x: Math.sin(this.radian + vRadian) * step + Math.sin(this.radian + vRadian) * step,
	        y: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step,
	        z: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step
	      };
	
	      this.x += wavy.x;
	      this.y += wavy.y;
	    }
	
	    // sphere(vRadian, i, len) {
	
	    //   // spehre
	    //   this.rad += this.vRad;
	    //   this.rad2 += this.vRad;
	
	    //   var phi = Math.acos( -1 + ( 2 * i ) / len );
	    //   var theta = Math.sqrt( len * Math.PI ) * phi;
	
	    //   this.gx = Math.cos(theta) * Math.sin(phi) * 30;
	    //   this.gy = Math.sin(theta) * Math.sin(phi) * 30;
	    //   this.gz = Math.sin(phi) * 30;
	
	    //   this.x += (this.gx - this.x) * 0.1;
	    //   this.y += (this.gy - this.y) * 0.1;
	    //   this.z += (this.gz - this.z) * 0.1;
	
	    // }
	
	  }, {
	    key: 'sphere',
	    value: function sphere(vRadian, i, len) {
	
	      // spehre
	      this.rad += this.vRad * 0.7;
	      this.rad2 += this.vRad * 0.7;
	
	      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
	      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
	      this.gz = Math.sin(this.rad) * 30;
	
	      // this.vec.set(this.gx,this.gy,this.gz);
	      // this.vec.normalize();
	      // this.vec.multiplyScalar(30 + Math.sin(i/Math.PI*2*10 + vRadian / 10) * 30);
	
	      // this.x += (this.vec.x - this.x) * 0.1;
	      // this.y += (this.vec.y - this.y) * 0.1;
	      // this.z += (this.vec.z - this.z) * 0.1;
	
	      this.x += (this.gx - this.x) * 0.1;
	      this.y += (this.gy - this.y) * 0.1;
	      this.z += (this.gz - this.z) * 0.1;
	    }
	  }, {
	    key: 'diffusion',
	    value: function diffusion(vRadian, i, len) {
	
	      // spehre
	      this.rad += this.vRad * 0.7;
	      this.rad2 += this.vRad * 0.7;
	
	      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
	      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
	      this.gz = Math.sin(this.rad) * 30;
	
	      this.vec.set(this.gx, this.gy, this.gz);
	      this.vec.normalize();
	      this.vec.multiplyScalar(30 + Math.sin(i / Math.PI * 2 * 10 + vRadian / 10) * this.rr * 30);
	
	      this.x += (this.vec.x - this.x) * 0.1;
	      this.y += (this.vec.y - this.y) * 0.1;
	      this.z += (this.vec.z - this.z) * 0.1;
	    }
	  }, {
	    key: 'boundary',
	    value: function boundary() {
	
	      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
	        return true;
	      }
	
	      return false;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Motion
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(45);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(51);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Motion = function () {
	  function Motion(parent) {
	    _classCallCheck(this, Motion);
	
	    this.p = parent;
	    this.v = new _Val2.default();
	  }
	
	  _createClass(Motion, [{
	    key: 'update',
	    value: function update() {
	
	      var sin = this.p.v.sin(gb.up.frame / 100);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var radian = p.radian += p.vradian;
	        // var radius = p.radius = 50 + sin * 10;
	        var radius = p.radius;
	
	        // circle
	        var x1 = Math.cos(radian) * radius;
	        var y1 = 0;
	        var z1 = Math.sin(radian) * radius;
	
	        // random
	        var x2 = p.diffx;
	        var y2 = p.diffy;
	        var z2 = p.diffz;
	
	        // lerp
	        var x = m.lerp(x1, x2, p.paramDiff);
	        var y = m.lerp(y1, y2, p.paramDiff);
	        var z = m.lerp(z1, z2, p.paramDiff);
	
	        this.p.positions[i * 3 + 0] = x;
	        this.p.positions[i * 3 + 1] = y;
	        this.p.positions[i * 3 + 2] = z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // circle
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setupUpdateCircle',
	    value: function setupUpdateCircle() {
	
	      var x, y;
	      var w = gb.r.w,
	          h = gb.r.h;
	      var radius = 0,
	          radiusOut = 0,
	          radiusIn = 0,
	          radian = 0,
	          step = 0;
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var c = 0.65;
	        if (i < this.p.num / 2) var r = 0.05;else var r = 0.03 + 0.01 * Math.random();
	
	        radiusOut = Math.min(w, h) * (c + r);
	        radiusIn = Math.min(w, h) * (c - r);
	
	        radius = i % 2 == 0 ? radiusOut : radiusIn;
	        step = 3 + Math.random() * 5;
	        radian = m.radian(i + step);
	        x = Math.sin(radian) * radius;
	        y = Math.cos(radian) * radius;
	
	        this.p.ps[i].x = x;
	        this.p.ps[i].y = y;
	        this.p.ps[i].radian = radian;
	        this.p.ps[i].vradian = step;
	        this.p.ps[i].radius = radius;
	      };
	    }
	  }, {
	    key: 'updateCircle',
	    value: function updateCircle() {
	
	      var sin = this.p.v.sin(gb.up.frame / 100);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var radian = p.radian += p.vradian;
	        // var radius = p.radius = 50 + sin * 10;
	        var radius = p.radius;
	
	        this.p.positions[i * 3 + 0] = Math.cos(radian) * radius;
	        this.p.positions[i * 3 + 1] = 0;
	        this.p.positions[i * 3 + 2] = Math.sin(radian) * radius;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // size
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateCircleSize',
	    value: function updateCircleSize() {
	
	      var size = this.v.noise(gb.up.frame / 500) * 10;
	      this.p.mesh.material.size = size;
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // sphere
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateSphere',
	    value: function updateSphere() {
	
	      var vRadian = m.radian(gb.up.frame * 2.6);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        // update
	        p.sphere(vRadian);
	
	        // draw
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // random walk
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateRandomWalk',
	    value: function updateRandomWalk() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var stepx = m.range(1);
	        var stepy = m.range(1);
	
	        // var stepsize = this.v.montecarlo()*10;
	        var stepsize = this.v.montecarlo() * Math.random() * 10;
	        stepx *= stepsize;
	        stepy *= stepsize;
	
	        p.x += stepx;
	        p.y += stepy;
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // gunya
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setupGunya',
	    value: function setupGunya() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.x = m.range(40) * 0.5 * Math.random();
	        p.y = m.range(40) * 0.5 * Math.random();
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	    }
	  }, {
	    key: 'resetGunya',
	    value: function resetGunya(i) {
	
	      var p = this.p.ps[i];
	
	      // p.x = gb.in.u.range(100)*Math.random();
	      // p.y = gb.in.u.range(70)*Math.random();
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+1];
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+1];
	      // p.z = 0;
	
	      p.x = m.range(gb.r.w / 2) * Math.random();
	      p.y = m.range(gb.r.h / 2) * Math.random();
	      p.z = 0;
	
	      this.p.positions[i * 3 + 0] = p.x;
	      this.p.positions[i * 3 + 1] = p.y;
	      this.p.positions[i * 3 + 2] = p.z;
	    }
	    // ぐにゃぐにゃ
	
	  }, {
	    key: 'updateGunya',
	    value: function updateGunya() {
	
	      var vRadian = m.radian(gb.up.frame * 2);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.gunya(vRadian, this.p.zoff);
	        if (p.boundary()) this.resetGunya(i);
	
	        // if (i < this.p.num/4) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = -70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4 && i < this.p.num/4*2 ) {
	
	        //   this.p.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*2 && i < this.p.num/4*3 ) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = 70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*3 && i < this.p.num ) {
	
	        //   this.p.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	
	      this.p.zoff += 0.002;
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	  }]);
	
	  return Motion;
	}();
	
	exports.default = Motion;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(55) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n// #pragma glslify: curlNoise = require(glsl-curl-noise)\n\nvarying vec3 vColor;\nvarying vec3 vPos;\nuniform float power;\nuniform float power2;\nuniform float power3;\n\nuniform float psize;\n\nattribute float paramDiff;\nattribute float spd;\nuniform float index;\n\nmat4 calcRotateMat4X(float radian) {\n  return mat4(\n    1.0, 0.0, 0.0, 0.0,\n    0.0, cos(radian), -sin(radian), 0.0,\n    0.0, sin(radian), cos(radian), 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4Y(float radian) {\n  return mat4(\n    cos(radian), 0.0, sin(radian), 0.0,\n    0.0, 1.0, 0.0, 0.0,\n    -sin(radian), 0.0, cos(radian), 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4Z(float radian) {\n  return mat4(\n    cos(radian), -sin(radian), 0.0, 0.0,\n    sin(radian), cos(radian), 0.0, 0.0,\n    0.0, 0.0, 1.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4(vec3 radian) {\n  return calcRotateMat4X(radian.x) * calcRotateMat4Y(radian.y) * calcRotateMat4Z(radian.z);\n}\n\nvoid main() {\n\n  vec3 pos = position;\n\n\n  // motion curl\n    // 大きい移動を作る\n  float noise1 = snoise_1_3(\n  // vec3 noise1 = curlNoise(\n      vec3(\n        pos.x * 0.6,\n        pos.y * 0.12,\n        frame * 0.5\n      )\n    );\n  float noise2 = snoise_1_3(\n  // vec3 noise2 = curlNoise(\n      vec3(\n        pos.x * 0.02,\n        pos.y * 0.036,\n        frame * 0.4\n      )\n    );\n  float noise3 = snoise_1_3(\n  // vec3 noise2 = curlNoise(\n      vec3(\n        pos.x * 0.02,\n        pos.y * 0.6,\n        frame * 0.5\n      )\n    );\n\n  // rotate\n  vec3 radian = mix(vec3(radians(0.0)), vec3(radians(sin(frame * 0.4)*40.0)), paramDiff);\n  mat4 rotateMat = calcRotateMat4(radian);\n\n  // pos\n  float dis = length(pos);\n  pos.y = pos.y + sin(dis * 0.15 + frame*3.0) * 3.0 * power;\n  // pos.y += sin(pos.x * 0.1 + frame*0.001) * 5.0;\n\n  pos.x = pos.x + sin(index * 3.0 + frame*2.0) * 3.0 * power2;\n  pos.z = pos.z + cos(index * 3.0 + frame*2.0) * 3.0 * power2;\n\n  vec3 n = normalize(pos);\n  vec3 newPos = n * dis * (1.0 + (sin(index * 10.0 + frame * (1.5 + spd)) + 1.0) / 2.0 * 0.1); // sphere radius\n  // pos += vec3(pos.x * noise1, pos.y * noise2, pos.z * noise3) * 0.1; // noise\n  pos = mix(pos, newPos, power3);\n\n  vec4 mvPosition = modelViewMatrix * rotateMat * vec4(pos, 1.0);\n  // vec4 noisePosition = vec4(pos * 2.0 + (normalize(pos) * (300.0 * noise1)), 1.0);\n  // vec4 noisePosition = vec4(pos + (normalize(pos) * (5.0 * noise1)), 1.0);\n  // vec4 mvPosition = modelViewMatrix * noisePosition;\n\n  // size\n  float size = mix(psize, 500.0 / length(mvPosition.xyz), paramDiff);\n\n  vColor = color;\n  vPos = (projectionMatrix * mvPosition).xyz;\n\n  gl_Position = projectionMatrix * mvPosition;\n  gl_PointSize = size;\n\n}\n"

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(57) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\nfloat map_2_8(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_2_8(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_2_8(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_2_8(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\nuniform float opacity;\nuniform float opParam;\nuniform float opParam2;\n\nuniform float t;\n\n#define PI 3.1415926535897932384626433832795\n\nvoid main() {\n\n  // Round the point\n  vec3 n;\n  n.xy = gl_PointCoord * 2.0 - 1.0;\n  n.z = 1.0 - dot(n.xy, n.xy);\n  if (n.z < 0.0) discard;\n\n  // float op1 = map(sin(index * 2.0 + frame * 2.5), -1.0, 1.0, 0.0, 1.0);\n  vec3 p = vPos*0.01;\n  p.z = p.z + frame * 0.06;\n  float op1 = map_2_8(snoise_1_3(p), -1.0, 0.8, 0.0, 1.0);\n\n  p = vPos*0.07;\n  p.z = p.z + frame * 1.0;\n  float op2 = map_2_8(snoise_1_3(p), -1.0, 0.8, 0.0, 1.0);\n\n  float op = mix(op1, op2, opParam2);\n\n  vec4 final = mix(vec4(vColor, 1.0 * opacity), vec4(vColor, op * opacity), opParam);\n\n  vec4 c = mix(final, vec4(1.0,1.0,1.0,1.0), t);\n\n  gl_FragColor = c;\n\n}\n"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linear = linear;
	exports.inBack = inBack;
	exports.inBounce = inBounce;
	exports.inCirc = inCirc;
	exports.inCubic = inCubic;
	exports.inElastic = inElastic;
	exports.inExpo = inExpo;
	exports.inQuad = inQuad;
	exports.inQuart = inQuart;
	exports.inQuint = inQuint;
	exports.inSine = inSine;
	exports.outBack = outBack;
	exports.outBounce = outBounce;
	exports.outCirc = outCirc;
	exports.outCubic = outCubic;
	exports.outElastic = outElastic;
	exports.outExpo = outExpo;
	exports.outQuad = outQuad;
	exports.outQuart = outQuart;
	exports.outQuint = outQuint;
	exports.outSine = outSine;
	exports.inOutBack = inOutBack;
	exports.inOutBounce = inOutBounce;
	exports.inOutCirc = inOutCirc;
	exports.inOutCubic = inOutCubic;
	exports.inOutExpo = inOutExpo;
	exports.inOutQuad = inOutQuad;
	exports.inOutQuart = inOutQuart;
	exports.inOutQuint = inOutQuint;
	exports.inOutSine = inOutSine;
	// # ---------------------------------------------------
	// # イージング計算用オブジェクト
	// # t(0~1)を渡すと歪めた結果(0~1)を返す
	// # ---------------------------------------------------
	
	// # -----------------------------------------------
	// # メソッド一覧
	// # @linear
	// #
	// # @inBack
	// # @inBounce
	// # @inCirc
	// # @inCubic
	// # @inElastic
	// # @inExpo
	// # @inQuad
	// # @inQuart
	// # @inQuint
	// # @inSine
	// #
	// # @outBack
	// # @outBounce
	// # @outCirc
	// # @outCubic
	// # @outElastic
	// # @outExpo
	// # @outQuad
	// # @outQuart
	// # @outQuint
	// # @outSine
	// #
	// # @inOutBack
	// # @inOutBounce
	// # @inOutCirc
	// # @inOutCubic
	// # @inOutExpo
	// # @inOutQuad
	// # @inOutQuart
	// # @inOutQuint
	// # @inOutSine
	// # -----------------------------------------------
	
	function linear(t) {
	
	  return t;
	}
	
	function inBack(t) {
	
	  s = 1.70158;
	  return t * t * ((s + 1) * t - s);
	}
	
	function inBounce(t) {
	
	  t = 1.0 - t;
	
	  if (t < 1 / 2.75) return 1.0 - 7.5625 * t * t;
	
	  if (t < 2 / 2.75) {
	    t -= 1.5 / 2.75;
	    return 1.0 - (7.5625 * t * t + 0.75);
	  }
	
	  if (t < 2.5 / 2.75) {
	    t -= 2.25 / 2.75;
	    return 1.0 - (7.5625 * t * t + 0.9375);
	  }
	
	  t -= 2.625 / 2.75;
	  return 1.0 - (7.5625 * t * t + 0.984375);
	}
	
	function inCirc(t) {
	
	  if (t >= 1) return 1;else return -(Math.sqrt(1 - t * t) - 1);
	}
	
	function inCubic(t) {
	
	  return t * t * t;
	}
	
	function inElastic(t) {
	
	  var p = 0.3;
	  var a = 1.0;
	  var s = 1.70158;
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  if (a < 1.0) {
	    a = 1.0;
	    s = p / 4;
	  } else {
	    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
	  }
	
	  --t;
	  return -(a * Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * 3.1419) / p));
	}
	
	function inExpo(t) {
	
	  if (t == 0) return 0;else return Math.pow(2, 10 * (t - 1));
	}
	
	function inQuad(t) {
	
	  return t * t;
	}
	
	function inQuart(t) {
	
	  return t * t * t * t;
	}
	
	function inQuint(t) {
	
	  return t * t * t * t * t;
	}
	
	function inSine(t) {
	
	  return -Math.cos(t * (Math.PI / 2)) + 1.0;
	}
	
	function outBack(t, s) {
	
	  s = s || 1.70158;
	  --t;
	  return t * t * ((s + 1.0) * t + s) + 1.0;
	}
	
	function outBounce(t) {
	
	  if (t < 1 / 2.75) return 7.5625 * t * t;
	
	  if (t < 2 / 2.75) {
	    t -= 1.5 / 2.75;
	    return 7.5625 * t * t + 0.75;
	  }
	
	  if (t < 2.5 / 2.75) {
	    t -= 2.25 / 2.75;
	    return 7.5625 * t * t + 0.9375;
	  }
	
	  t -= 2.625 / 2.75;
	  return 7.5625 * t * t + 0.984375;
	}
	
	function outCirc(t) {
	
	  --t;
	  return Math.sqrt(1 - t * t);
	}
	
	function outCubic(t) {
	
	  --t;
	  return t * t * t + 1;
	}
	
	function outElastic(t, s) {
	
	  var p = s || 0.3;
	  var a = 1.0;
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  if (a < 1.0) {
	    a = 1.0;
	    s = p / 4;
	  } else {
	    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
	  }
	
	  return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * 3.1419) / p) + 1.0;
	}
	
	function outExpo(t) {
	
	  if (t == 1.0) return 1;else return -Math.pow(2, -10 * t) + 1;
	}
	
	function outQuad(t) {
	
	  return -t * (t - 2);
	}
	
	function outQuart(t) {
	
	  --t;
	  return 1.0 - t * t * t * t;
	}
	
	function outQuint(t) {
	
	  --t;
	  return t * t * t * t * t + 1;
	}
	
	function outSine(t) {
	
	  return Math.sin(t * (Math.PI / 2));
	}
	
	function inOutBack(t, s) {
	
	  var s = s || 1.70158;
	  var k = 1.525;
	
	  t *= 2;
	  s *= k;
	
	  if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));
	
	  t -= 2;
	  return 0.5 * (t * t * ((s + 1) * t + s) + 2);
	}
	
	function inOutBounce(t) {
	
	  if (t < 0.5) return this.inBounce(t * 2) * 0.5;else return this.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
	}
	
	function inOutCirc(t) {
	
	  t *= 2;
	
	  if (t < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
	
	  t -= 2;
	  return 0.5 * (Math.sqrt(1 - t * t) + 1);
	}
	
	function inOutCubic(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t;
	
	  t -= 2;
	  return 0.5 * (t * t * t + 2);
	}
	
	function inOutExpo(t) {
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  t *= 2;
	  if (t < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
	
	  --t;
	  return 0.5 * (-Math.pow(2, -10 * t) + 2);
	}
	
	function inOutQuad(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t;
	
	  t -= 2;
	  return -0.5 * (t * t * t * t - 2);
	}
	
	function inOutQuart(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t;
	
	  t -= 2;
	  return -0.5 * (t * t * t * t - 2);
	}
	
	function inOutQuint(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t * t;
	
	  t -= 2;
	  return 0.5 * (t * t * t * t * t + 2);
	}
	
	function inOutSine(t) {
	
	  return -0.5 * (Math.cos(Math.PI * t) - 1);
	}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Effect
	//
	//--------------------------------------------------
	
	var Effect = function (_Base) {
	  _inherits(Effect, _Base);
	
	  function Effect() {
	    var isEffect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var isGUI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var renderer = arguments[2];
	    var scene = arguments[3];
	    var camera = arguments[4];
	
	    _classCallCheck(this, Effect);
	
	    var _this = _possibleConstructorReturn(this, (Effect.__proto__ || Object.getPrototypeOf(Effect)).call(this));
	
	    _this.renderer = renderer;
	    _this.scene = scene;
	    _this.camera = camera;
	
	    _this.isEffect = isEffect;
	    _this.isGUI = isGUI;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Effect, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isControl = true;
	
	      if (this.isEffect) this.EffectCompose();
	    }
	  }, {
	    key: 'EffectCompose',
	    value: function EffectCompose() {
	
	      // effect composer
	      this.composer = new THREE.EffectComposer(this.renderer);
	      // add render pass
	      this.renderPass = new THREE.RenderPass(this.scene, this.camera);
	      this.composer.addPass(this.renderPass);
	      this.copyPass = new THREE.ShaderPass(THREE.CopyShader); // last pass
	
	      // ------------------------------------------------------------
	      //  ��Pass
	      // ------------------------------------------------------------
	      this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);
	
	      // ------------------------------------------------------------
	      //  ��Pass param
	      // ------------------------------------------------------------
	      // ���ڂ��O��
	      this.p = {
	
	        // RGBShift
	        RGBShiftPass_show: true,
	        RGBShiftPass_angle: 0.0,
	        RGBShiftPass_amount: 0.013,
	        RGBShiftPass_brightness: 3.0
	
	      };
	      this.onParamsChange();
	      this.onTogglePass();
	
	      if (this.isGUI) this.GUISetting();
	    }
	  }, {
	    key: 'onParamsChange',
	    value: function onParamsChange() {
	
	      this.RGBShiftPass.uniforms.angle.value = this.p.RGBShiftPass_angle;
	      this.RGBShiftPass.uniforms.amount.value = this.p.RGBShiftPass_amount;
	      this.RGBShiftPass.uniforms.brightness.value = this.p.RGBShiftPass_brightness;
	    }
	  }, {
	    key: 'onTogglePass',
	    value: function onTogglePass() {
	      //Add Shader Passes to Composer
	      //order is important 
	      this.composer = new THREE.EffectComposer(this.renderer);
	      this.composer.setSize(gb.r.w * window.devicePixelRatio, gb.r.h * window.devicePixelRatio);
	      this.composer.addPass(this.renderPass);
	
	      // ------------ add pass start ------------ 
	      if (this.p.RGBShiftPass_show) this.composer.addPass(this.RGBShiftPass);
	
	      // ------------ add pass end ------------ 
	      this.composer.addPass(this.copyPass);
	      this.copyPass.renderToScreen = true;
	    }
	  }, {
	    key: 'GUISetting',
	    value: function GUISetting() {
	
	      var gui = new dat.GUI();
	      // ------------------------------------------------------------
	      //  ��Pass param setting
	      // ------------------------------------------------------------
	      var f2 = gui.addFolder('RGBShift');
	      f2.add(this.p, 'RGBShiftPass_show').onChange(this.onTogglePass.bind(this));
	      f2.add(this.p, 'RGBShiftPass_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
	      f2.add(this.p, 'RGBShiftPass_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Effect;
	}(_Base3.default);
	
	exports.default = Effect;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	var Scene = function (_Base) {
	  _inherits(Scene, _Base);
	
	  function Scene() {
	    var isControl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var renderer = arguments[1];
	    var camera = arguments[2];
	
	    _classCallCheck(this, Scene);
	
	    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
	
	    _this.renderer = renderer;
	    _this.camera = camera;
	    _this.isControl = isControl;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Scene, [{
	    key: 'setup',
	    value: function setup() {
	
	      if (this.isControl) {
	        this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
	        this.setting();
	      }
	    }
	  }, {
	    key: 'setting',
	    value: function setting() {
	
	      this.controls.rotateSpeed = 3.0; //?????????????٤?
	      this.controls.zoomSpeed = 1.2; //???`?ह??????٤?
	      this.controls.panSpeed = 0.3; //?ѥ󤹤?????٤?
	
	      this.controls.staticMoving = false;
	      this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
	
	      this.controls.noRotate = false; //true?ǻ??????򲻿ɤˤ???    
	      this.controls.noZoom = false; //true?ǥ??`????򲻿ɤˤ???    
	      this.controls.noPan = true; //true?ǥѥ?????򲻿ɤˤ???
	      this.controls.minDistance = 0; //???Ť??????????
	      this.controls.maxDistance = Infinity; //?????????x?????
	      // this.controls.maxDistance = 100; //?????????x?????
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}(_Base3.default);
	
	exports.default = Scene;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map