//--------------------------------------------------
//
//  GoogleMap
//
//--------------------------------------------------
(function(){

  function GoogleMap(address,$object,opt) {

    this.target = $object;

    this.map;
    this.geo;
    this.address = address;

    // param
    this.latlng = new google.maps.LatLng(35.6701962,139.7173436);
    this.opts = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: this.latlng
    };
    this.opts = $.extend(this.opts,opt);
    this.req = {};

    this.run();

  }

  // メソッド追加
  GoogleMap.prototype = {

    run: function(e) {

      var self = this;

      this.map = new google.maps.Map(this.target, this.opts);
      this.geo = new google.maps.Geocoder();
      this.req = {address: this.address};

      this.geo.geocode(this.req, function(result, status){

          // setGoogleMap
          if (status != google.maps.GeocoderStatus.OK) {
            console.log('error');
            return;
          }

          var latlng = result[0].geometry.location;

          self.map.setCenter(latlng);

          var markerOpt = {
              position: latlng,
              map: self.map,
              draggable: true
          };
          var marker = new google.maps.Marker(markerOpt);

          // イベント設定
          google.maps.event.addDomListener(window, 'resize', function(){
            self.map.panTo(latlng);
          });

      });

    }

  }

  gb.GoogleMap = GoogleMap;

})();