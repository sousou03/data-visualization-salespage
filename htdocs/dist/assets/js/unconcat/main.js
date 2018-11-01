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
	
	var _Controller3 = __webpack_require__(19);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _ResourceMgr = __webpack_require__(22);
	
	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);
	
	var _UpdateMgr = __webpack_require__(27);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(28);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(29);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(30);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _UpdateList = __webpack_require__(31);
	
	var _UpdateList2 = _interopRequireDefault(_UpdateList);
	
	var _ResizeList = __webpack_require__(32);
	
	var _ResizeList2 = _interopRequireDefault(_ResizeList);
	
	var _ScrollList = __webpack_require__(33);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
	var _MouseList = __webpack_require__(34);
	
	var _MouseList2 = _interopRequireDefault(_MouseList);
	
	var _View = __webpack_require__(35);
	
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
	  // this.RELEASE = true;
	  this.RELEASE = false;
	
	  // ------------------------------------------------------------
	  //  フラグ関連 
	  // ------------------------------------------------------------
	  // ログ出力, パラメータ, Stars
	  this.LOG = true;
	  this.PARAM = true;
	  this.Profiler = false;
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
	      gb.urlp = new _UrlParamMgr2.default();
	
	      // デバイス確認
	      gb.je = new _JudgeEnvironment2.default();
	
	      if (gb.conf.Profiler) new _Profiler2.default(); // Profiler
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
	
	      this.Stats = new Stats();
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Events = __webpack_require__(20);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _Render_def = __webpack_require__(21);
	
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
	
	var _es6Promise = __webpack_require__(23);
	
	var _OtherLoader = __webpack_require__(25);
	
	var _OtherLoader2 = _interopRequireDefault(_OtherLoader);
	
	var _GetData = __webpack_require__(26);
	
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.4+314e4831
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
	
	    return promise.then(function (value) {
	      return constructor.resolve(callback()).then(function () {
	        return value;
	      });
	    }, function (reason) {
	      return constructor.resolve(callback()).then(function () {
	        throw reason;
	      });
	    });
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), (function() { return this; }())))

/***/ }),
/* 24 */
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
/* 25 */
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
/* 27 */
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
/* 28 */
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
/* 30 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Sns = __webpack_require__(36);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	var _ResponsiveSwitchImg = __webpack_require__(38);
	
	var _ResponsiveSwitchImg2 = _interopRequireDefault(_ResponsiveSwitchImg);
	
	var _Size = __webpack_require__(39);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Clone = __webpack_require__(40);
	
	var _Clone2 = _interopRequireDefault(_Clone);
	
	var _Controller = __webpack_require__(41);
	
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
	
	      // gb.f.SPH($('#wrapper, .section01, .slider, #hagaki_modal .inner'));
	      // gb.f.SPH($('.section01, .slider, #hagaki_modal .inner'));
	
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
	      // this.uic = new UIController();
	
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	      // var cnt = 0;
	      // var len = 4;
	      // for (var i = 0; i < len; i++) {
	      //   var img = new Image();
	      //   img.onload = ()=>{
	      //     cnt++;
	      //     log(cnt);
	      //     if(cnt==len) this.uic.timeline();
	      //   }
	      //   img.src = 'https://sahara.jp/wp/wp-content/themes/sahara2017/img/aisaretiger/img0'+(i+1)+'.jpg';
	      // }
	      // this.uic.timeline();
	
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
/* 36 */
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
	
	var _metaData = __webpack_require__(37);
	
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
/* 37 */
/***/ (function(module, exports) {

	module.exports = {"common_js":{"tit":"","des":"","img":"","url":"","adress":""},"common":{"tit":"","des":"","img":"","keyword":"","fb":{"tit":"","des":"","img":"","url":"","siteName":"","type":"website"},"tw":{"img":"","url":"","siteName":"","creator":"","card":"summary_large_image","hash":"","text":""},"line":{"tit":"","des":"","img":"","url":"","text":""},"mail":{"tit":"","des":"","adress":""}}}

/***/ }),
/* 38 */
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
	//  ResponsiveSwitchImg
	//
	//--------------------------------------------------
	
	var ResponsiveSwitchImg = function (_Base) {
	  _inherits(ResponsiveSwitchImg, _Base);
	
	  function ResponsiveSwitchImg() {
	    _classCallCheck(this, ResponsiveSwitchImg);
	
	    var _this = _possibleConstructorReturn(this, (ResponsiveSwitchImg.__proto__ || Object.getPrototypeOf(ResponsiveSwitchImg)).call(this));
	
	    _this.$target = $('.responsiveImg');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ResponsiveSwitchImg, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      this.isPCLock = gb.u.dv.isResPC ? false : true;
	      this.isSPLock = gb.u.dv.isResSP ? false : true;
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      log(gb.u.dv.isResSP, this.isSPLock);
	
	      // ------------------------------------------------------------
	      //  ブレイクポイントよりもsp側
	      // ------------------------------------------------------------
	      if (gb.u.dv.isResSP && !this.isSPLock) {
	        this.isPCLock = false;
	        this.isSPLock = true;
	
	        this.$target.each(function (index, el) {
	
	          // imgの変更        
	          var src = $(this).attr('src');
	          src = gb.u.s.strReplace(src, 'img_pc', 'img_sp');
	          $(this).attr('src', src);
	
	          // sizeの変更
	          // $(this).off('load');
	          // $(this).on('load', (event)=>{
	
	          //   if ($(this).hasClass('spSize')) gb.u.dv.setImgSPSize($(this));
	
	          // });
	
	        });
	      }
	
	      // ------------------------------------------------------------
	      //  ブレイクポイントよりもpc側
	      // ------------------------------------------------------------
	      if (gb.u.dv.isResPC && !this.isPCLock) {
	        this.isPCLock = true;
	        this.isSPLock = false;
	
	        this.$target.each(function (index, el) {
	
	          // imgの変更        
	          var src = $(this).attr('src');
	          src = gb.u.s.strReplace(src, 'img_sp', 'img_pc');
	          $(this).attr('src', src);
	
	          // sizeの変更
	          // $(this).attr({width: 'auto',height: 'auto'});
	        });
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }]);
	
	  return ResponsiveSwitchImg;
	}(_Base3.default);
	
	exports.default = ResponsiveSwitchImg;

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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Size
	//
	//--------------------------------------------------
	
	var Size = function (_Base) {
	  _inherits(Size, _Base);
	
	  function Size() {
	    _classCallCheck(this, Size);
	
	    var _this = _possibleConstructorReturn(this, (Size.__proto__ || Object.getPrototypeOf(Size)).call(this));
	
	    _this.$target = $('.sliderInner');
	    _this.$sub = $('.logo_big');
	
	    _this.max = 768;
	    _this.min = 376;
	    _this.defw = 340;
	    _this.defh = 523;
	    _this.defW = 375;
	    _this.defH = 667;
	    _this.w = _this.defw;
	    _this.h = _this.defh;
	    _this.rate = _this.h / _this.w;
	    _this.ratew = gb.r.w / _this.w;
	    _this.rateh = gb.r.h / _this.h;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Size, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      var adjust = 0;
	      if ($('body').hasClass('landscape')) adjust = 200;
	
	      var h = gb.r.h - 38 - this.$sub.innerHeight() + adjust;
	
	      TweenMax.set(this.$target, { height: h });
	      if (gb.r.w > this.max || gb.r.w < this.min) TweenMax.set(this.$target, { clearProps: 'all' });
	    }
	  }, {
	    key: 'onResizeC',
	    value: function onResizeC() {
	      var _this2 = this;
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this2.run();
	      }, 100);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('orientationchange', this.onResizeC.bind(this));
	    }
	  }]);
	
	  return Size;
	}(_Base3.default);
	
	exports.default = Size;

/***/ }),
/* 40 */
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
	//  Clone
	//
	//--------------------------------------------------
	
	var Clone = function (_Base) {
	  _inherits(Clone, _Base);
	
	  function Clone() {
	    _classCallCheck(this, Clone);
	
	    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this));
	
	    _this.$wrap = $('.section03');
	    _this.$target = $('.planeWrap02');
	    _this.$clone = _this.$target.clone();
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Clone, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      this.$wrap.append(this.$clone);
	      this.$clone.addClass('clone');
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      // var offset = this.$target.offset();
	      // this.$clone.css({
	      //   position: 'absolute',
	      //   left: offset.left,
	      //   top: offset.top,
	      // });
	
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }]);
	
	  return Clone;
	}(_Base3.default);
	
	exports.default = Clone;

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
	
	var _Controller = __webpack_require__(42);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(43);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _Controller5 = __webpack_require__(50);
	
	var _Controller6 = _interopRequireDefault(_Controller5);
	
	var _Controller7 = __webpack_require__(53);
	
	var _Controller8 = _interopRequireDefault(_Controller7);
	
	var _Controller9 = __webpack_require__(54);
	
	var _Controller10 = _interopRequireDefault(_Controller9);
	
	var _Controller11 = __webpack_require__(58);
	
	var _Controller12 = _interopRequireDefault(_Controller11);
	
	var _Controller13 = __webpack_require__(59);
	
	var _Controller14 = _interopRequireDefault(_Controller13);
	
	var _Controller15 = __webpack_require__(60);
	
	var _Controller16 = _interopRequireDefault(_Controller15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	// ui
	// import Modal from './Modal/Controller.es6';
	
	// import Cover1 from './Cover1/Controller.es6';
	// import Cover2 from './Cover2/Controller.es6';
	
	
	// import Cover4 from './Cover4/Controller.es6';
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.isREv = true;
	
	    _this.setup();
	    _this.setup_op();
	    _this.setEvents();
	
	    // this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      new _Controller2.default();
	      new _Controller4.default();
	      new _Controller4.default($('.hagaki_toggle_modal'), $('.hagaki_open_modal'), $('.hagaki_close_modal'), $('.hagaki_modal_contents'));
	      this.slider = new _Controller6.default();
	
	      // pc
	      if (gb.u.dv.isPC) {
	
	        $(window).scrollTop(0);
	
	        // new FakeScroll();
	        gb.ts = new _Controller10.default();
	
	        $('.imgInnerWrap').each(function (index, el) {
	          var pos = gb.ts.list[index].pos;
	          new _Controller12.default($(el), pos);
	        });
	
	        new _Controller14.default();
	
	        // if (gb.urlp.pattern_cover=='1') new Cover1(gb.ts.listPlane);
	        // if (gb.urlp.pattern_cover=='2') new Cover2(gb.ts.listPlane);
	        // if (gb.urlp.pattern_cover=='3') new Cover3(gb.ts.listPlane);
	        // if (gb.urlp.pattern_cover=='4') new Cover4(gb.ts.listPlane);
	
	        new _Controller16.default(gb.ts.listPlane);
	
	        // sp        
	      } else {
	
	        $('#wrapper').scrollTop(0);
	
	        gb.ts = new _Controller10.default();
	        // if (gb.urlp.pattern_cover=='1') new Cover1(gb.ts.listPlane);
	        // if (gb.urlp.pattern_cover=='2') new Cover2(gb.ts.listPlane);
	        // if (gb.urlp.pattern_cover=='3') new Cover3(gb.ts.listPlane);
	        // if (gb.urlp.pattern_cover=='4') new Cover4(gb.ts.listPlane);
	
	        new _Controller16.default(gb.ts.listPlane);
	      }
	    }
	  }, {
	    key: 'setup_op',
	    value: function setup_op() {
	
	      this.$logoO = $('.section01 .logo .overlay');
	      this.$logoBG = $('.section01 .logo .bg');
	      this.$logoSVG = $('.section01 .logo svg');
	      this.$SAHARA = $('.section01 .SAHARA');
	      this.$share = $('.section01 .share');
	      this.$shareItem = $('.section01 .share .item');
	      this.$logo_bigO = $('.section01 .logo_big .overlay');
	      this.$logo_bigImg = $('.section01 .logo_big img');
	      this.$indicatorItem = $('.section01 .indicator .item .bar');
	      this.$banner = $('.section01 .banner');
	
	      TweenMax.set(this.$SAHARA, { x: -50 });
	      TweenMax.set(this.$shareItem, { x: -50 });
	      TweenMax.set(this.$banner, { scale: 0.85 });
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this2 = this;
	
	      var ease = CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1");
	
	      if (gb.r.w <= 768) {
	        var obj = { height: '100%', ease: ease };
	      } else {
	        var obj = { width: '100%', ease: ease };
	      }
	
	      gb.u.o.disableScroll($(window));
	      $(window).scrollTop(0);
	      $('html').css('opacity', 1);
	
	      // scroll
	      var $t = $('.site-header');
	      var h = $t.innerHeight();
	
	      // animation
	      TweenMax.to($('body,html'), 1.2, {
	        scrollTop: h,
	        ease: Power2.easeInOut
	      });
	      TweenMax.to($t, 1.2, {
	        y: -h,
	        ease: Power2.easeInOut
	      });
	
	      var tl = new TimelineMax({ delay: 0.0 });
	
	      tl
	      // header
	      .to(this.$share, 1.0, {
	        width: '100vw',
	        ease: ease
	      }, 0.0).add(function () {
	
	        _this2.$shareItem.each(function (index, el) {
	
	          TweenMax.to($(el), 1.0, {
	            opacity: 1,
	            x: 0,
	            ease: ease,
	            delay: index * 0.1
	          });
	        });
	      }, 0.0)
	
	      // logo
	      .to(this.$logoO, .8, {
	        width: '100%',
	        ease: ease
	      }, .8).set(this.$logoSVG, { opacity: 1 }, .8 + 0.80).set(this.$logoBG, { opacity: 1 }, .8 + 0.80).to(this.$logoO, .8, {
	        x: '100%',
	        ease: ease
	      }, .8 + 0.85)
	
	      // big logo
	      .to(this.$logo_bigO, .8, {
	        width: '100%',
	        ease: ease
	      }, .8).set(this.$logo_bigImg, { opacity: 1 }, .8 + 0.80).to(this.$logo_bigO, .8, {
	        x: '100%',
	        ease: ease,
	        onComplete: function onComplete() {
	          _this2.$logo_bigO.css('background', 'rgba(0,0,0,0)');
	        }
	      }, .8 + 0.85)
	
	      // indicator
	      .to(this.$indicatorItem, .8, obj, .8 + 0.85)
	
	      // slider
	      .add(function () {
	
	        _this2.slider.autoSwitch();
	      }, 1.2).to(this.$SAHARA, 1.0, {
	        x: 0,
	        opacity: 1,
	        ease: ease
	      }, 1.6)
	
	      // banner
	      .to(this.$banner, .6, {
	        opacity: 1.0,
	        ease: ease
	      }, 2.35).to(this.$banner, 1.5, {
	        scale: 1.0,
	        ease: Elastic.easeOut.config(1.1, 0.45)
	      }, 2.35).add(function () {
	
	        TweenMax.to($('body,html'), 1.2, {
	          scrollTop: 0,
	          ease: ease
	        });
	        TweenMax.to($t, 1.2, {
	          y: 0,
	          ease: ease
	        });
	
	        // imgのappend
	        var len = 0;
	        var cnt = 0;
	        $('img').each(function (index, el) {
	
	          if ($(el).data('src') == undefined) return;
	          len++;
	          var src = $(el).data('src');
	          $(el).on('load', function () {
	            cnt++;
	            if (len == cnt) $(window).trigger('loadAll');
	          });
	          $(el).attr('src', src);
	        });
	
	        $(document).one('mousewheel', function (event) {
	
	          TweenMax.killTweensOf($('body,html'));
	          gb.u.o.enableScroll($(window));
	        });
	      }, 3.0);
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      if (gb.r.w <= 768) {
	        this.$indicatorItem.css('height', '100%');
	        TweenMax.set(this.$indicatorItem, { clearProps: 'width' });
	      }
	      if (gb.r.w > 768) {
	        this.$indicatorItem.css({ 'width': '100%' });
	        TweenMax.set(this.$indicatorItem, { clearProps: 'height' });
	      }
	    }
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
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	// howto
	// <div data-link=".target" data-diff="30"></div>
	// .targetのtop値を取得して、そこまでスクロール
	
	var Controller = function () {
	  function Controller() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.toScroll');
	    var $wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('body,html');
	
	    _classCallCheck(this, Controller);
	
	    this.$wrap = $wrap = $('body,html');
	    // if (gb.u.dv.isPC) this.$wrap = $wrap=$('body,html');
	    // else this.$wrap = $('#wrapper');
	
	    this.$target = $target;
	
	    this.cb = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // Power3.easeInOut
	      // Expo.easeInOut
	
	      // CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1") //expo.easeOut
	      // CustomEase.create("custom", "M0,0 C0.17,0 0.31,0.076 0.386,0.154 0.464,0.234 0.5,0.42 0.5,0.5 0.5,0.586 0.568,0.858 0.64,0.924 0.712,0.99 0.794,1 1,1") // しゅばっしゅばっと
	      // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1") //Expo.easeInOut
	      // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1") //Expo.easeInOut outの方をさらにゆっくりめ
	      // this.ease = CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"); //Expo.easeInOut outの方をさらにゆっくりめ
	
	      this.hashScroll();
	    }
	  }, {
	    key: 'run',
	    value: function run(that) {
	      var _this = this;
	
	      // get target position
	      var $target = $($(that).data("link"));
	      var pos = $target.offset().top;
	
	      // get diff
	      var diff = 0;
	      if ($(that).data('diff')) diff = $(that).data('diff');
	      if (gb.r.w < 768) diff *= 0.8;
	
	      // calculate
	      pos = pos - diff;
	      if (gb.u.dv.isSP) pos += gb.s.st;
	
	      // animation
	      TweenMax.to(this.$wrap, 1.9, {
	        scrollTop: pos,
	        ease: this.ease,
	        onComplete: function onComplete() {
	          _this.cb();
	        }
	      });
	    }
	  }, {
	    key: 'runTo',
	    value: function runTo(pos, cb) {
	
	      // animation
	      TweenMax.to(this.$wrap, 1.9, {
	        scrollTop: pos,
	        ease: this.ease,
	        onComplete: function onComplete() {
	          cb();
	        }
	      });
	    }
	  }, {
	    key: 'hashScroll',
	    value: function hashScroll() {
	
	      var h = location.hash;
	      if (h == '' || h == null || h == undefined) return;
	
	      var st01 = $('.section04').offset().top;
	      var diff = 60;
	      if (gb.r.w < 768) diff *= 0.8;
	      if (h == "#campaign") this.runTo(st01 - diff, function () {});
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.not('.notScroll').on('click', function () {
	        self.run.call(self, this);return false;
	      });
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Render = __webpack_require__(44);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	var _Btn_close = __webpack_require__(49);
	
	var _Btn_close2 = _interopRequireDefault(_Btn_close);
	
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
	
	  function Controller() {
	    var $toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.toggle_modal');
	    var $open = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.open_modal');
	    var $close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $('.close_modal');
	    var $contents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $('.modal_contents');
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.name = 'Modal';
	
	    // this.$toggle = $toggle;
	    _this.$open = $open;
	    _this.$close = $close;
	    _this.$contents = $contents;
	
	    _this.isOpen = false;
	    _this.isFirst = true;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // this.b_c = new Btn_close(this.$close);
	      this.r = new _Render2.default(this.$contents, this);
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	
	      if (this.isOpen) {
	
	        this.close();
	      } else {
	
	        this.open();
	      };
	
	      this.isOpen = !this.isOpen;
	    }
	  }, {
	    key: 'open',
	    value: function open(num) {
	
	      if (this.isFirst && this.$contents.hasClass('modal_contents')) {
	        this.isFirst = false;
	        this.r.setup();
	      }
	      this.r.show(num);
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	
	      this.r.hide();
	
	      if (gb.player) gb.player.pauseVideo();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$open.on('click', function () {
	        var num = $('.open_modal').index(this);
	        self.open.call(self, num);
	      });
	      this.$contents.find('.innerWrap').on('click', function (e) {
	        e.stopPropagation();
	      });
	      this.$contents.on('click', this.close.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RenderBase2 = __webpack_require__(45);
	
	var _RenderBase3 = _interopRequireDefault(_RenderBase2);
	
	var _Controller = __webpack_require__(46);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function (_RenderBase) {
	  _inherits(Render, _RenderBase);
	
	  function Render($target, parent) {
	    _classCallCheck(this, Render);
	
	    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));
	
	    _this.$target = $target;
	
	    // this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {
	
	      gb.rm.setup();
	      new _Controller2.default('video', 'rGwOwAHEGUo');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Render;
	}(_RenderBase3.default);
	
	exports.default = Render;

/***/ }),
/* 45 */
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  UIBase
	//
	// ------------------------------------------------------------
	
	var UIBase = function (_Base) {
	  _inherits(UIBase, _Base);
	
	  function UIBase() {
	    _classCallCheck(this, UIBase);
	
	    var _this = _possibleConstructorReturn(this, (UIBase.__proto__ || Object.getPrototypeOf(UIBase)).call(this));
	
	    _this.$target = $('.target');
	
	    return _this;
	  }
	
	  _createClass(UIBase, [{
	    key: 'show',
	    value: function show() {
	
	      this.$target.css('opacity', 0);
	      this.$target.show();
	
	      $('html').addClass('is-hidden');
	
	      TweenMax.to(this.$target, .8, {
	        opacity: 1,
	        ease: Expo.easeOut
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this2 = this;
	
	      $('html').removeClass('is-hidden');
	
	      TweenMax.to(this.$target, .8, {
	        opacity: 0,
	        ease: Expo.easeOut,
	        onComplete: function onComplete() {
	          _this2.$target.hide();
	        }
	      });
	    }
	  }]);
	
	  return UIBase;
	}(_Base3.default);
	
	exports.default = UIBase;

/***/ }),
/* 46 */
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
	
	var _Player = __webpack_require__(47);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(id, videoID) {
	    _classCallCheck(this, Controller);
	
	    this.list = [];
	
	    this.id = id;
	    this.videoID = videoID;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup(id, videoID) {
	
	      var p = new _Player2.default(this.id, this.videoID);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Player
	//
	//--------------------------------------------------
	
	var _Resize = __webpack_require__(48);
	
	var _Resize2 = _interopRequireDefault(_Resize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Player = function () {
	  function Player(id, videoID) {
	    _classCallCheck(this, Player);
	
	    this.player = null;
	
	    this.id = id;
	    this.videoID = videoID;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Player, [{
	    key: 'setup',
	    value: function setup() {
	
	      // yt.player��load����Ƥ��ʤ����Ϥ򿼑]����
	      if (typeof YT !== "undefined" && YT && YT.Player) {
	
	        gb.player = this.player = new YT.Player(this.id, {
	          width: '100%', // �ץ�`��`�η�
	          height: '100%', // �ץ�`��`�θߤ�
	          videoId: this.videoID, // YouTube��ID
	          events: {
	            'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
	            'onStateChange': this.onPlayerStateChange.bind(this)
	          },
	          playerVars: {
	            autoplay: 0,
	            controls: 1,
	            showinfo: 0,
	            autohide: 1,
	            rel: 0,
	            enablejsapi: 1,
	            iv_load_policy: 3,
	            disablekb: 1,
	            modestbranding: 1,
	            start: 0
	          }
	        });
	      } else {
	
	        setTimeout(this.setup.bind(this), 100);
	      }
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // this.player.playVideo();
	      // this.player.pauseVideo();
	      new _Resize2.default();
	    }
	  }, {
	    key: 'onPlayerStateChange',
	    value: function onPlayerStateChange(e) {
	
	      var status = e.data;
	      // �����K�ˤ����Ȥ�
	      if (status == window.YT.PlayerState.ENDED) {
	        console.log('�����K��');
	        // �ӻ�����
	        e.target.playVideo();
	      }
	      // // �����ФΤȤ�
	      // if (status == window.YT.PlayerState.PLAYING) {
	      //     // e.target.pauseVideo();
	      // }
	      // // ֹͣ�ФΤȤ�
	      // if (status == window.YT.PlayerState.PAUSED) {
	      //     console.log('ֹͣ��');
	      // }
	      // // �Хåե�����ФΤȤ�
	      // if (status == window.YT.PlayerState.BUFFERING) {
	      //     console.log('�Хåե������');
	      // }
	      // // �^�����g�ߤΤȤ�
	      // if (status == window.YT.PlayerState.CUED) {
	      //     console.log('�^�����g��');
	      // }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // ����
	      // $('.detail .playBox').click(()=>{this.player.playVideo();});
	      // // һ�rֹͣ
	      // $('#pause').click(()=>{this.player.pauseVideo();});
	      // // 1��ǰ��
	      // $('#prev').click(()=>{
	      //     // �F�ڤ������r�gȡ��
	      //     var currentTime = this.player.getCurrentTime();
	      //     // ���`���Щ`���Ƅ�
	      //     this.player.seekTo(currentTime - 60);
	      // });
	      // // 1���Ȥ�
	      // $('#next').click(()=>{
	      //     // �F�ڤ������r�gȡ��
	      //     var currentTime = this.player.getCurrentTime();
	      //     // ���`���Щ`���Ƅ�
	      //     this.player.seekTo(currentTime + 60);
	      // });
	      // // �������å�(+10)
	      // $('#volup').click(()=>{
	      //     // �F�ڤ�����ȡ��
	      //     var currentVol = this.player.getVolume();
	      //     this.player.setVolume(currentVol + 10);
	      // });
	      // // ����������(-10)
	      // $('#voldown').click(()=>{
	      //     // �F�ڤ�����ȡ��
	      //     var currentVol = this.player.getVolume();
	      //     this.player.setVolume(currentVol - 10);
	      // });
	      // // �ߥ�`��
	      // $('#mute').click(()=>{
	      //     // �ߥ�`�Ȥ���Ƥ��뤫�ɤ���
	      //     if(this.player.isMuted()) {
	      //         // �ߥ�`�Ȥν��
	      //         this.player.unMute();
	      //     } else {
	      //         // �ߥ�`��
	      //         this.player.mute();
	      //     }
	      // });
	
	    }
	  }]);
	
	  return Player;
	}();
	
	exports.default = Player;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom() {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.isREv = true;
	
	    _this.adjust = 1.0;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.$target = $('#modal #video');
	
	      this.getDef();
	    }
	  }, {
	    key: 'getDef',
	    value: function getDef() {
	
	      this.$target.css({ width: 'auto', height: 'auto' });
	
	      // this.defw = this.$target.width();
	      // this.defh = this.$target.height();
	      this.defw = 980;
	      this.defh = 551;
	
	      this.onResize();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      var H = gb.r.h - 50;
	      var W = gb.r.w - 0;
	      if (gb.r.w <= 750) {
	        var H = gb.r.h - 0;
	        var W = gb.r.w - 0;
	      }
	
	      this.ratioW = H / W;
	      this.ratio = this.defh / this.defw;
	
	      // size cover
	      // update
	      if (this.ratioW > this.ratio) {
	
	        var scale = W / this.defw;
	
	        var w = Math.min(W, this.defw * this.adjust);
	        var h = Math.min(this.defh * scale, this.defh * this.adjust);
	      } else if (this.ratioW <= this.ratio) {
	
	        var scale = H / this.defh;
	
	        var w = Math.min(this.defw * scale, this.defw * this.adjust);
	        var h = Math.min(H, this.defh * this.adjust);
	      }
	
	      // render
	      log(w, h);
	      this.$target.css({ width: Math.floor(w), height: Math.floor(h) });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Btn
	//
	//--------------------------------------------------
	
	var Btn = function () {
	  function Btn($wrap) {
	    _classCallCheck(this, Btn);
	
	    this.$wrap = $wrap;
	    this.$bar = $wrap.find('.bar');
	
	    this.isOpen = false;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Btn, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$bar.eq(0), { scaleX: 0.0, rotation: -45 });
	      TweenMax.set(this.$bar.eq(1), { scaleX: 0.0, rotation: 45 });
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      log('enter');
	
	      TweenMax.killTweensOf(this.$bar);
	
	      this.$bar.each(function (index, el) {
	
	        var tl = new TimelineMax({ delay: index * 0.1 });
	
	        var rot = -45;
	        if (index == 1) rot = 45;
	
	        tl
	        // .set($(el), {'transform-origin': '100% 50%'})
	        .to($(el), 0.4, {
	          scaleX: 1.0,
	          z: 0,
	          rotation: rot,
	          ease: Expo.easeOut
	        });
	        // .set($(el), {'transform-origin': '0% 50%'})  
	        // .to($(el), 0.9, {
	        //   scaleX: 1.0,
	        //   z: 0,
	        //   ease: Expo.easeOut
	        // })  
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	
	      TweenMax.killTweensOf(this.$bar);
	
	      this.$bar.each(function (index, el) {
	
	        var tl = new TimelineMax({ delay: index * 0.1 });
	
	        var rot = -45;
	        if (index == 1) rot = 45;
	
	        tl
	        // .set($(el), {'transform-origin': '100% 50%'})
	        .to($(el), 0.4, {
	          scaleX: 0.0,
	          z: 0,
	          rotation: rot,
	          ease: Expo.easeOut
	        });
	        // .set($(el), {'transform-origin': '0% 50%'})  
	        // .to($(el), 0.9, {
	        //   scaleX: 1.0,
	        //   z: 0,
	        //   ease: Expo.easeOut
	        // })  
	      });
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter() {}
	  }, {
	    key: 'onLeave',
	    value: function onLeave() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      this.$wrap.on('mouseenter', this.onEnter.bind(this));
	      this.$wrap.on('mouseleave', this.onLeave.bind(this));
	    }
	  }]);
	
	  return Btn;
	}();
	
	exports.default = Btn;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Order = __webpack_require__(51);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _Render = __webpack_require__(52);
	
	var _Render2 = _interopRequireDefault(_Render);
	
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
	
	  function Controller($target) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$wrap = $('.slider');
	    _this.$item = _this.$wrap.find('.indicator').find('.item');
	
	    _this.isAuto = true;
	    _this.isSetCur = false;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // this.isUEv = true;
	
	      this.len = this.$item.length;
	
	      this.o = new _Order2.default(this.len);
	      this.r = new _Render2.default(this.$wrap, this.len);
	
	      // this.autoSwitch();
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	
	      this.r.next(this.o.current, this.o.prev);
	
	      this.o.go();
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	
	      this.r.prev(this.o.current);
	
	      this.o.back();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (gb.up.frame % 120 !== 0) return;
	
	      if (gb.s.st > 100) {
	
	        if (this.isAuto) {
	          this.isAuto = false;
	          if (this.tl) this.tl.kill();
	        }
	      } else {
	
	        if (!this.isAuto) {
	          this.isAuto = true;
	          this.autoSwitch();
	        }
	      }
	    }
	  }, {
	    key: 'autoSwitch',
	    value: function autoSwitch() {
	      var _this2 = this;
	
	      this.isAuto = true;
	
	      this.next();
	
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(function () {
	
	        _this2.autoSwitch();
	      }, 3.0 + 3.0);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(that) {
	      var _this3 = this;
	
	      var num = this.$item.index(that);
	      if (this.isSetCur) var pre = this.o.current;else var pre = this.o.prev;
	
	      this.r.setCur(num, pre);
	      this.o.setCur(num);
	
	      this.isSetCur = true;
	
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(function () {
	
	        _this3.isSetCur = false;
	
	        _this3.o.go();
	
	        _this3.autoSwitch();
	      }, 3.0 + 3.0);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      this.$item.on('click', function () {
	        self.onClick.call(self, this);
	      });
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Order
	//
	//--------------------------------------------------
	
	var Order = function () {
	  function Order(len) {
	    _classCallCheck(this, Order);
	
	    this.current = 0;
	    this.old = null;
	    this.next = 1;
	    this.prev = len - 1;
	    this.len = len;
	
	    this.isLoop = true;
	
	    this.setup(len);
	    this.setEvents();
	  }
	
	  _createClass(Order, [{
	    key: 'setup',
	    value: function setup(len) {
	
	      this.current = 0;
	      this.old = null;
	      this.next = 1;
	      this.prev = len - 1;
	      this.len = len;
	    }
	  }, {
	    key: 'go',
	    value: function go() {
	
	      // currentの計算
	      this.calculateOrder('right');
	    }
	  }, {
	    key: 'back',
	    value: function back() {
	
	      // currentの計算
	      this.calculateOrder('left');
	    }
	  }, {
	    key: 'calculateOrder',
	    value: function calculateOrder(dir) {
	
	      // ------------------------------------------------------------
	      // 端で止める
	      // ------------------------------------------------------------
	      if (!this.isLoop) {
	        if (dir == 'right') {
	
	          this.current++;
	          if (this.current > this.len - 1) this.current = this.len - 1;
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        } else {
	
	          this.current--;
	          if (this.current < 0) this.current = 0;
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        }
	      }
	
	      // ------------------------------------------------------------
	      // ループ
	      // ------------------------------------------------------------
	      if (this.isLoop) {
	        if (dir == 'right') {
	
	          this.current++;
	
	          if (this.current > this.len - 1) {
	
	            this.current = 0;
	            this.next = this.current + 1;
	            this.prev = this.len - 1;
	          } else {
	
	            this.next = this.current + 1;
	            this.prev = this.current - 1;
	          }
	
	          if (this.current == this.len - 1) {
	
	            this.next = 0;
	            this.prev = this.current - 1;
	          }
	        } else {
	
	          this.current--;
	
	          if (this.current < 0) {
	
	            this.current = this.len - 1;
	            this.next = 0;
	            this.prev = this.current - 1;
	          } else {
	
	            this.next = this.current + 1;
	            this.prev = this.current - 1;
	          }
	
	          if (this.current == 0) {
	
	            this.next = 1;
	            this.prev = this.len - 1;
	          }
	        }
	
	        this.old = this.current;
	      }
	    }
	  }, {
	    key: 'setCur',
	    value: function setCur(num) {
	
	      this.current = num;
	      this.next = this.current + 1;
	      this.prev = this.current - 1;
	
	      if (this.next > this.len - 1) this.next = 0;
	      if (this.prev < 0) this.prev = this.len - 1;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Order;
	}();
	
	exports.default = Order;

/***/ }),
/* 52 */
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
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function (_Base) {
	  _inherits(Render, _Base);
	
	  function Render($wrap, len) {
	    _classCallCheck(this, Render);
	
	    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));
	
	    _this.$wrap = $wrap;
	    _this.$item = $wrap.find('.item');
	    _this.$img = _this.$item.find('.img');
	    _this.$overlay = _this.$wrap.find('.overlay');
	    _this.$indiItem = $wrap.find('.indicator .item');
	
	    _this.isLock = false;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$img, { 'opacity': 0, x: -150 });
	      // TweenMax.set(this.$img.eq(0), {'opacity': 1, x: 0});
	    }
	  }, {
	    key: 'next',
	    value: function next(cur, prev) {
	
	      // this.$item.removeClass('active');
	      // this.$item.eq(num).addClass('active');
	
	      this.$indiItem.removeClass('active');
	      this.$indiItem.eq(cur).addClass('active');
	
	      this.timeline(cur, prev);
	    }
	  }, {
	    key: 'setCur',
	    value: function setCur(cur, prev) {
	
	      if (this.isLock) return;
	      this.isLock = true;
	
	      this.timeline(cur, prev);
	
	      this.$indiItem.removeClass('active');
	      this.$indiItem.eq(cur).addClass('active');
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline(cur, prev) {
	      var _this2 = this;
	
	      if (cur == 0) var color = '#008dd6';
	      if (cur == 1) var color = '#f50d4e';
	      if (cur == 2) var color = '#00a478';
	      if (cur == 3) var color = '#f85aa0';
	      if (gb.r.w <= 768) {
	        if (cur == 0) var color = '#008dd6';
	        if (cur == 1) var color = '#f50d4e';
	        if (cur == 2) var color = '#00a478';
	        if (cur == 3) var color = '#f85aa0';
	      }
	
	      var tl = new TimelineMax({ delay: 0 });
	      tl.set(this.$overlay, { width: '0%', x: '0%', backgroundColor: color }, 0.0).to(this.$overlay, .8, {
	        width: '100%',
	        ease: Expo.easeInOut
	      }, 0.0).to(this.$img.eq(prev), .8, {
	        x: 150,
	        ease: Power4.easeInOut
	      }, 0.0).set(this.$img, { opacity: 0 })
	      // .set(this.$img.eq(cur), {opacity: 0, x: -150})
	      .set(this.$img.eq(cur), { opacity: 1, x: -150 }).to(this.$img.eq(cur), .8, {
	        x: 0,
	        ease: CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1")
	      })
	      // .to(this.$img.eq(cur), .8, {
	      //   opacity: 1,
	      //   ease: Power2.easeInOut,
	      // }, 0.8)
	      .to(this.$overlay, .8, {
	        x: '100%',
	        ease: Expo.easeOut,
	        onComplete: function onComplete() {
	          _this2.isLock = false;
	        }
	      }, 0.85);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Render;
	}(_Base3.default);
	
	exports.default = Render;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
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
	
	  function Controller() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$wrap = $('body');
	    _this.$target = $target;
	    // if (gb.u.dv.isPC) this.$target = $target;
	    // else this.$target = $('#inner');
	    _this.target = _this.$target.get(0);
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	      this.isUEv = true;
	      this.isRun = false;
	
	      this.speed = 0.12;
	
	      this.scrollY = gb.s.st;
	      this.y = 0;
	      this.oldy = 0;
	
	      if (gb.u.dv.isPC) {
	        this.$wrap.height(this.$target.height());
	      } else {
	        var html = '<div class="fakeHeight"></div>';
	        $('#wrapper').append(html);
	        $('.fakeHeight').height(this.$target.height());
	        $('.fakeHeight').css({ 'position': 'relative', 'z-index': '999999', 'pointer-events': 'none' });
	      }
	      this.$target.css({ position: 'fixed', width: '100%' });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // update
	      this.y += (this.scrollY - this.y) * this.speed;
	      this.y = Number(this.y.toFixed(1));
	
	      // draw
	      this.drawPos();
	
	      // constrain
	      var dis = this.scrollY - this.y;
	      if (dis < 1 && dis > -1) {
	        this.isRun = false;
	        this.offU();
	      }
	
	      this.oldy = this.y;
	    }
	  }, {
	    key: 'drawPos',
	    value: function drawPos() {
	
	      this.target.style.transform = "translate3d(0, " + -this.y + "px, 0)";
	    }
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
	    key: 'onResize',
	    value: function onResize() {
	
	      // if (gb.u.dv.isPC) this.$wrap.height(this.$target.height());
	      // else $(html).height(this.$target.height());
	
	      this.$wrap.height(this.$target.height());
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      gb.sl.add('FakeScroll', this.onScroll.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Position = __webpack_require__(55);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _index = __webpack_require__(56);
	
	var m = _interopRequireWildcard(_index);
	
	var _index2 = __webpack_require__(57);
	
	var e = _interopRequireWildcard(_index2);
	
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
	
	  function Controller() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$target = $('.imgInnerWrap');
	    _this.target = $target.get(0);
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      var _this2 = this;
	
	      this.isREv = true;
	      this.isUEv = true;
	
	      this.isRun = false;
	      this.speed = 0.12;
	      this.scrollY = gb.s.st;
	      this.y = 0;
	      this.tary = 0;
	
	      this.top = .8;
	      this.btm = .2;
	      this.kake = 3;
	      this.ease = .06;
	      if (gb.u.dv.isSP) {
	        this.top = .8;
	        this.btm = .2;
	        this.kake = 2;
	        this.ease = .08;
	      }
	
	      this.list = [];
	      this.listPlane = [];
	
	      this.$target.each(function (index, el) {
	
	        var obj = {};
	
	        // if (index!==3) return; 
	        // if (index>10) return; 
	
	        obj.$target = $(el);
	        obj.$inner = $(el).find('.imgInner');
	        obj.pos = new _Position2.default($(el));
	        obj.y = 0;
	
	        // random
	        if ($(el).hasClass('item')) {
	          obj.ease = m.map(0.12 + (Math.random() - 0.5) * 0.3, 0.04, 0.2, -0.03, 0.27);
	          obj.distance = 500 + (Math.random() - 0.5) * 1000;
	        } else {
	
	          // sizeから
	          var size = $(el).find('img').width() * $(el).find('img').height() / 1000;
	          // log(size / 1000);
	          obj.ease = 0.2 - m.map(size, 0.04, 0.2, 0, 600);
	          obj.distance = 600 - Math.random() * size;
	        }
	
	        // 手動
	        // obj.ease = $(el).data('ease');
	        // obj.distance = $(el).data('distance');
	
	        _this2.list.push(obj);
	
	        // for Plane
	        if ($(el).parent().hasClass('planeWrap') || $(el).parent().hasClass('boxWrap')) _this2.listPlane.push(obj);
	
	        // log(obj.ease)
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // if (gb.up.frame%4==0) return
	
	      this.y += (this.scrollY - this.y) * this.speed;
	
	      for (var i = 0; i < this.list.length; i++) {
	
	        var $target = this.list[i].$target;
	        var $inner = this.list[i].$inner;
	        var pos = this.list[i].pos;
	        var y = this.list[i].y;
	        var ease = this.list[i].ease;
	        var distance = this.list[i].distance;
	
	        pos.update();
	
	        // var speed = Math.abs(pos.progressC);
	        // speed = Number(speed.toFixed(2));
	
	        var targetY = 0.0;
	
	        if (pos.progress > this.top) {
	          var val = pos.progress - this.top;
	          var targetY = m.lerp(0.0, pos.progressC * distance * this.kake, val);
	          targetY = m.constrain(targetY, 0, 600);
	        }
	        if (pos.progress < this.btm) {
	          var val = this.btm - pos.progress;
	          var targetY = m.lerp(0.0, pos.progressC * distance * this.kake, val);
	          targetY = m.constrain(targetY, -600, 0);
	        }
	
	        y += (targetY - y) * this.ease;
	        y = Number(y.toFixed(1));
	        this.drawPos($inner, y);
	        this.list[i].y = y;
	      }
	
	      // updateを止める
	      var dis = this.scrollY - this.y;
	      if (dis < .1 && dis > -.1) {
	        this.isRun = false;
	        this.offU();
	      }
	    }
	  }, {
	    key: 'drawPos',
	    value: function drawPos($target, y) {
	
	      // if (gb.up.frame%4==0) return
	
	      $target.get(0).style.transform = "translate3d(0, " + -y + "px, 0)";
	    }
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
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      gb.sl.add('FakeScroll', this.onScroll.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Position
	//
	//--------------------------------------------------
	
	var Position = function () {
	  function Position($target) {
	    _classCallCheck(this, Position);
	
	    this.$target = $target;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Position, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.progress = 0;
	      this.progressC = 0; // cneter
	      this.progressOld = 0;
	      this.isStageIn = false;
	      this.stageSize = { width: 0, height: 0 };
	      this.offset = { left: 0, top: 0, width: 0, height: 0 };
	      this.stageInOffset = { min: 0, max: 1 };
	
	      this.h = this.$target.height();
	      this.top = this.$target.offset().top;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      var top = this.top - gb.s.st;
	
	      // log((top+h/2) / gb.r.h);
	
	      // progress
	      this.progress = 1 - (top + this.h) / (gb.r.h + this.h);
	      this.progressC = 1 - (top + this.h / 2) / (gb.r.h / 2);
	      // var dir = this.progress-this.progressOld;
	
	      // in,out
	      // if(this.progress >= 0 && this.progress <= 1){
	      //   this.isStageIn = true;
	      // }else{
	      //   this.isStageIn = false;
	      // }
	
	      // this.progressOld = this.progress; 
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.h = this.$target.height();
	      this.top = this.$target.offset().top;
	      // if (gb.u.dv.isSP) this.top += gb.s.st;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	    }
	  }]);
	
	  return Position;
	}();
	
	exports.default = Position;

/***/ }),
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(56);
	
	var m = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// import Val from 'Util/Val.es6';
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($target, pos) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$target = $target;
	    _this.target = _this.$target.get(0);
	    _this.pos = pos;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      // this.v = new Val();
	
	      this.x = 0;
	      this.y = 0;
	
	      // noraml
	      // this.ease = 0.12;
	      // this.radius = 100;
	
	      // random
	      this.ease = m.map(0.12 + (Math.random() - 0.5) * 0.3, 0.02, 0.16, -0.03, 0.27);
	      this.radius = 50 + 100 * Math.random();
	
	      // var size = this.$target.find('img').width() * this.$target.find('img').height() / 1000;
	      // this.ease = 0.16 - m.map(size , 0.04, 0.12, 0, 600);
	      // this.radius = 600 - size * 0.95;
	
	      this.basex = this.$target.offset().left + this.$target.width() / 2;
	      this.basey = this.$target.offset().top + this.$target.height() / 2;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // if (gb.up.frame%4==0) return
	
	      var mx = gb.m.cx;
	      var my = gb.m.cy;
	      var cx = mx;
	      var cy = my;
	
	      var tarx = 0;
	      var tary = 0;
	      var ookisa = 20;
	      var radius = 20;
	
	      // noise
	      // tarx += this.v.noise(gb.up.frame / 200) * ookisa;
	      // tary += this.v.noise(gb.up.frame / 200, 100) * ookisa;
	
	      // 回転
	      // tarx += 0 + Math.cos(gb.up.frame / 150) * radius;
	      // tary += 0 + Math.sin(gb.up.frame / 150) * radius;
	
	      // mousemove
	      tarx += cx * 0.04;
	      tary += cy * 0.04;
	
	      this.x += (tarx - this.x) * this.ease;
	      this.y += (tary - this.y) * this.ease;
	
	      // draw
	      this.x = Number(this.x.toFixed(1));
	      this.y = Number(this.y.toFixed(1));
	
	      if (this.pos.progress < 1.5 && this.pos.progress > -.5) this.target.style.transform = "translate3d(" + this.x + "px, " + this.y + "px, 0)";
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(56);
	
	var m = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom() {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$wrap = $('.videoWrap');
	    _this.$target = _this.$wrap.find('.play');
	    _this.$scale = _this.$target.find('.playScale');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      this.x = 0;
	      this.y = 0;
	      this.wrapx = 0;
	      this.wrapy = 0;
	
	      this.prex = 0;
	
	      this.ease = 0.12;
	      this.radius = 300;
	
	      this.v = 0;
	      this.isEnter = false;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      var basex = this.$wrap.offset().left + this.$wrap.width() / 2;
	      var basey = this.$wrap.offset().top + this.$wrap.height() / 2 - gb.s.st;
	
	      var mx = gb.m.x;
	      var my = gb.m.y;
	
	      var dist = m.dist({ x: mx, y: my }, { x: basex, y: basey });
	
	      // log(dist, mx, my, basex, basey);
	
	      if (dist < this.$wrap.height() / 4 * 3) {
	
	        var tarx = (mx - basex) * 0.2;
	        var tary = (my - basey) * 0.2;
	      } else {
	
	        var tarx = 0;
	        var tary = 0;
	      }
	
	      this.wrapx += (tarx - this.wrapx) * 0.08;
	      this.wrapy += (tary - this.wrapy) * 0.08;
	      // this.x += (tarx - this.x) * this.ease;
	      // this.y += (tary - this.y) * this.ease;
	
	      this.dis = Math.abs(tarx - this.wrapx);
	      // log(this.dis)
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      if (this.dis < .1) return;
	
	      TweenMax.set(this.$wrap, { x: this.wrapx, y: this.wrapy, z: 0 });
	      // TweenMax.set(this.$target, {x: this.x, y: this.y, z: 0});
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter() {
	      var _this2 = this;
	
	      this.isEnter = true;
	      if (this.v != 0) return;
	
	      this.tlEnter = new TimelineMax({ repeat: -1, repeatDelay: .1 });
	      this.tlEnter.set(this.$scale, { scale: 1, opacity: 1 }).to(this.$scale, 1.2, {
	        scale: 1.2,
	        opacity: 0,
	        ease: Power2.easeOut,
	        onUpdate: function onUpdate() {
	
	          _this2.v = _this2.tlEnter.progress().toFixed(2);
	
	          if (!_this2.isEnter && _this2.v >= 0.99) {
	            if (_this2.tlEnter) _this2.tlEnter.kill();
	            TweenMax.killTweensOf(_this2.$scale);
	            _this2.v = 0;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave() {
	
	      this.isEnter = false;
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	
	      // gb.sl.add('Play', this.onScroll.bind(this));   
	
	      this.$target.on('mouseenter', this.onEnter.bind(this));
	      this.$target.on('mouseleave', this.onLeave.bind(this));
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(56);
	
	var m = _interopRequireWildcard(_index);
	
	var _Render = __webpack_require__(61);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom(list) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.list = list;
	    _this.$target = $('#wrapper .planeWrap, #wrapper .boxWrap');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.rList = [];
	
	      for (var i = 0; i < this.list.length; i++) {
	
	        var l = this.list[i];
	
	        l.isLock = false;
	        l.w = this.$target.eq(i).find('.img').width();
	        l.$img = this.$target.eq(i).find('.img');
	        l.shadow = this.$target.eq(i).find('.imgInner').css('box-shadow');
	        TweenMax.set(this.$target.eq(i).find('.imgInner'), { 'box-shadow': 'none' });
	
	        if (l.$target.parent().hasClass('planeWrap')) var r = new _Render2.default(l.$target.parent());else var r = [];
	        this.rList.push(r);
	      }
	
	      TweenMax.set(this.$target.find('.img'), { 'overflow': 'hidden', z: 0, position: 'relative' });
	      TweenMax.set(this.$target.find('.img img'), { 'opacity': 0, x: -100 });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      for (var i = 0; i < this.list.length; i++) {
	
	        var l = this.list[i];
	
	        if (l.pos.progress > .2 && !l.isLock) {
	          l.w = l.$img.width();
	          l.isLock = true;
	          this.timeline(i, l.w, l.shadow, l.$target);
	        }
	      }
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline(i, w, shadow, $target) {
	      var _this2 = this;
	
	      var tl = new TimelineMax({ delay: 0 });
	      tl.to(this.$target.eq(i).find('.overlay'), .8, {
	        width: '100%',
	        ease: Expo.easeInOut
	      }, 0.0).set(this.$target.eq(i).find('.img img'), { opacity: 1 }).to(this.$target.eq(i).find('.img img'), .8, {
	        x: 0,
	        ease: Expo.easeOut
	      }).to(this.$target.eq(i).find('.overlay'), .8, {
	        x: w + 0,
	        ease: Expo.easeOut,
	        onComplete: function onComplete() {
	          _this2.$target.eq(i).find('.overlay').hide();
	        }
	      }, 0.85).to(this.$target.eq(i).find('.imgInner'), 1.2, {
	        boxShadow: shadow,
	        ease: Power2.easeOut
	      }, .9)
	
	      // tit
	      .add(function () {
	
	        if ($target.parent().hasClass('planeWrap')) _this2.rList[i].show();
	      }, 0.6);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _SetSpan = __webpack_require__(62);
	
	var _SetSpan2 = _interopRequireDefault(_SetSpan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function (_Base) {
	  _inherits(Render, _Base);
	
	  function Render($wrap) {
	    _classCallCheck(this, Render);
	
	    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));
	
	    _this.$wrap = $wrap;
	    _this.$textWrap = _this.$wrap.find('.textWrap');
	    _this.$tit = _this.$wrap.find('.tit');
	    _this.$text = _this.$wrap.find('.text');
	    _this.$bar = _this.$wrap.find('.bar');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.ready_tit();
	      this.ready_text();
	      this.ready_bar();
	    }
	  }, {
	    key: 'ready_tit',
	    value: function ready_tit() {
	
	      // spanで1文字1文字囲む
	      var s = new _SetSpan2.default(this.$tit);
	
	      // // 各spanを取得
	      this.$titspan = this.$tit.find('div span');
	      this.$titspan.css({ 'display': 'inline-block', 'backface-visibility': 'hidden' }); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
	      this.$titspan.parent().css('display', 'inline-block');
	      this.len = this.$titspan.length;
	      // this.$tit.css('display', 'flex');
	
	      // ready
	      this.$titspan.each(function (index, el) {
	
	        var w = $(el).width();
	        var h = $(el).height();
	
	        TweenMax.set($(el), { y: h, opacity: 0 });
	        TweenMax.set($(el).parent(), { y: h / 2 });
	      });
	    }
	  }, {
	    key: 'ready_text',
	    value: function ready_text() {
	
	      // spanで1文字1文字囲む
	      var s = new _SetSpan2.default(this.$text);
	
	      // // 各spanを取得
	      this.$textspan = this.$text.find('div span');
	      this.$textspan.css({ 'display': 'inline-block', 'backface-visibility': 'hidden' }); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
	      this.$textspan.parent().css('display', 'inline-block');
	      this.len = this.$textspan.length;
	      // this.$text.css('display', 'flex');
	
	      // ready
	      this.$textspan.each(function (index, el) {
	
	        var w = $(el).width();
	        var h = $(el).height();
	
	        TweenMax.set($(el), { y: h, opacity: 0 });
	        TweenMax.set($(el).parent(), { y: h / 2 });
	      });
	    }
	  }, {
	    key: 'ready_bar',
	    value: function ready_bar() {
	
	      TweenMax.set(this.$bar, { scaleX: 0, 'transform-origin': '0% 50%' });
	    }
	  }, {
	    key: 'show',
	    value: function show(delay) {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        _this2.$titspan.each(function (index, el) {
	
	          TweenMax.to($(el), .9, {
	            opacity: 1,
	            y: 0,
	            ease: Expo.easeOut,
	            delay: index * 0.05
	          });
	          TweenMax.to($(el).parent(), .9, {
	            y: 0,
	            ease: Power2.easeOut,
	            delay: index * 0.05
	          });
	        });
	      }, 0.0).add(function () {
	
	        _this2.$textspan.each(function (index, el) {
	
	          TweenMax.to($(el), .9, {
	            opacity: 1,
	            y: 0,
	            ease: Expo.easeOut,
	            delay: index * 0.03
	          });
	          TweenMax.to($(el).parent(), .9, {
	            y: 0,
	            ease: Power2.easeOut,
	            delay: index * 0.03
	          });
	        });
	      }, 0.4).to(this.$bar, 1.2, {
	        scaleX: 1,
	        ease: Expo.easeOut
	      }, 0.8);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Render;
	}(_Base3.default);
	
	exports.default = Render;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  SpanText
	//
	//--------------------------------------------------
	
	var SpanText = function () {
	  function SpanText($target) {
	    _classCallCheck(this, SpanText);
	
	    this.$target = $target;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SpanText, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.set();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {}
	  }, {
	    key: 'set',
	    value: function set($target) {
	
	      // \s  空白文字:[ \t\n\x0B\f\r]
	      // \S  非空白文字:[^\s]
	      // \w  単語構成文字:[a-zA-Z_0-9]
	      // \W  非単語文字:[^\w]
	
	      // var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
	      // // var span = $target.text().replace(/(\w|\s)/g, '<span>$1</span>');
	      // $target.html(span);
	
	
	      // brタグがあっても問題がないように
	      // brで区切る
	      var text = this.$target.html();
	      var split = /<br>/g;
	      // var split = /\r\n|\r|\n/g; // 改行コードなど
	      var span = text.split(split);
	
	      // trim
	      for (var i = 0; i < span.length; i++) {
	        span[i] = span[i].trim();
	      }
	
	      // span化
	      for (var i = 0; i < span.length; i++) {
	        span[i] = span[i].replace(/(\S)/g, '<div class="oh"><span>$1</span></div>');
	      }
	
	      // br追加して連結
	      var append = span.join('<br>');
	
	      // append
	      this.$target.html(append);
	
	      // log
	      // log(text);
	      // log(span)
	      // log(append)
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return SpanText;
	}();
	
	exports.default = SpanText;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map