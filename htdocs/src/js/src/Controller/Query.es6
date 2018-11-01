//--------------------------------------------------
//
//  Query
//
//--------------------------------------------------

// http://phiary.me/javascript-url-parameter-query-string-parse-stringify/
export default class Query {

  constructor(p){

    this.p = p

    this.setup();

  }

  setup() {


  }

  parse(text, sep, eq, isDecode) {

    text = text || location.search.substr(1);
    sep = sep || '&';
    eq = eq || '=';
    var decode = (isDecode) ? decodeURIComponent : function(a) { return a; };
    return text.split(sep).reduce(function(obj, v) {
      var pair = v.split(eq);
      obj[pair[0]] = decode(pair[1]);
      return obj;
    }, {});

  }

  set(obj) {

    var t = '?' + this.stringify(obj);
    // window.location.search = t; // 更新されてしまう
    this.p.set(t)

  }

  stringify(value, sep, eq, isEncode) {

    sep = sep || '&';
    eq = eq || '=';
    var encode = (isEncode) ? encodeURIComponent : function(a) { return a; };
    return Object.keys(value).map(function(key) {
      return key + eq + encode(value[key]);
    }).join(sep);

  }

  setEvents() {

  }

}