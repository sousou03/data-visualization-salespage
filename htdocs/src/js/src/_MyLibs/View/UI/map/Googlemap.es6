//--------------------------------------------------
//
//  GoogleMap
//
//--------------------------------------------------

export default class GoogleMap {

  constructor(latlng, address,　$object,　opt) {

    this.latlng = {};
    this.latlng.lat = latlng.lat || 35.6701962; 
    this.latlng.lng = latlng.lng || 139.7173436; 
    this.address = address || '東京';

    this.opts = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: this.latlng
    };
    this.opts = $.extend(this.opts,opt);

    this.latlngMaps = new google.maps.LatLng(this.latlng.lat, this.latlng.lng);
    

    this.$target = $object;

    this.setup();
    this.setEvents();
    this.run();

  }

  setup() {


  }

  run(e) {

    this.map = new google.maps.Map(this.$target, this.opts);

    this.setMarker(this.latlngMaps);

  }

  setMarker(latlng) {

    var markerOpt = {
        position: latlng,
        map: this.map,
        draggable: true
    };

    this.map.setCenter(latlng);

    new google.maps.Marker(markerOpt);

  }

  getMapByAddress() {

    // 住所から取得する場合
    this.geo = new google.maps.Geocoder();
    this.req = {address: this.address};
    this.geo.geocode(this.req, (result, status)=>{

        // setGoogleMap
        if (status != google.maps.GeocoderStatus.OK) {
          console.log('error');
          return;
        }

        var latlng = result[0].geometry.location;

        this.setMarker(latlng);

    });

  }

  onResize() {

    this.map.panTo(this.latlngMaps);

    log(111);

  }

  setEvents() {

    // イベント設定
    google.maps.event.addDomListener(window, 'resize', this.onResize.bind(this));

  }

}
