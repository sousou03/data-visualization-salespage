// ------------------------------------------------------------
//
//  Vec クラス
//
// ------------------------------------------------------------
export default class Vec(x, y) {

  constructor(x, y) {

    this.x = x || 0;
    this.y = y || 0;

  }

  add(p) {
      return Vec.add(this, p);
  }
  
  subtract(p) {
      return Vec.subtract(this, p);
  }
  
  scale(scaleX, scaleY) {
      return Vec.scale(this, scaleX, scaleY);
  }
  
  equals(p) {
      return Vec.equals(this, p);
  }
  
  angle() {
      return Vec.angle(this);
  }
  
  distance(p) {
      return Vec.distance(this, p);
  }
  
  length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  set(x, y) {
      if (isObject(x)) {
          y = x.y;
          x = x.x;
      }
      
      this.x = x || 0;
      this.y = y || 0;
      
      return this;
  }
  
  offset(x, y) {
      if (isObject(x)) {
          y = x.y;
          x = x.x;
      }
      
      this.x += x || 0;
      this.y += y || 0;
      
      return this;
  }
  
  normalize(thickness) {
      if (isNull(thickness) || isUndefined(thickness)) {
          thickness = 1;
      }
      
      var length = this.length();
      
      if (length > 0) {
          this.x = this.x / length * thickness;
          this.y = this.y / length * thickness;
      }
      
      return this;
  }
  
  negate() {
      this.x *= -1;
      this.y *= -1;
      
      return this;
  }
  
  perp() {
      this.x = - y;
      this.y = x;
      
      return this;
  }
  
  clone() {
      return Vec.create(this);
  }

  toArray() {
      return [this.x, this.y];
  }
  
  toString() {
      return '(x:' + this.x + ', y:' + this.y + ')';
  }

  // ------------------------------------------------------------
  //
  //  静的メンバ
  //
  // ------------------------------------------------------------
  static create(o, y) {
      if (isArray(o)) return new Vec(o[0], o[1]);
      if (isObject(o)) return new Vec(o.x, o.y);
      return new Vec(o, y);
  };

  static add(p1, p2) {
      return new Vec(p1.x + p2.x, p1.y + p2.y);
  };

  static subtract(p1, p2) {
      return new Vec(p1.x - p2.x, p1.y - p2.y);
  };

  static scale(p, scaleX, scaleY) {
      if (isObject(scaleX)) {
          scaleY = scaleX.y;
          scaleX = scaleX.x;
      } else if (!isNumber(scaleY)) {
          scaleY = scaleX;
      }
      return new Vec(p.x * scaleX, p.y * scaleY);
  };

  static equals(p1, p2) {
      return p1.x == p2.x && p1.y == p2.y;
  };

  static angle(p) {
      return Math.atan2(p.y, p.x);
  };

  static distance(p1, p2) {
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      return Math.sqrt(a * a + b * b);
  };

  static dot(p1, p2) {
      return p1.x * p2.x + p1.y * p2.y;
  };

  static cross(p1, p2) {
      return p1.x * p2.y - p1.y * p2.x;
  };

  static interpolate(p1, p2, f) {
      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;
      return new Vec(p1.x + dx * f, p1.y + dy * f);
  };

  // Test
  static polar(length, radian) {
      return new Vec(length * Math.sin(radian), length * Math.cos(radian));
  };

}