var map;
function init() {
  map = new OpenLayers.Map('map');
  var base = new OpenLayers.Layer.OSM()

  var physical = new OpenLayers.Layer.Google(
    "Google Physical",
    {type: google.maps.MapTypeId.TERRAIN}
  );
  var street = new OpenLayers.Layer.Google(
    "Google Streets", // the default
    {numZoomLevels: 20}
  );
  var hybrid = new OpenLayers.Layer.Google(
    "Google Hybrid",
    {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
  );
  var satellite = new OpenLayers.Layer.Google(
    "Google Satellite",
    {type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
  );

  map.addLayers([physical]);
  //map.setCenter( new OpenLayers.LonLat(-122.19058, 46.19976), 5);
  map.setCenter( new OpenLayers.LonLat(-13602148.699803, 5812470.6443611), 5);

  init_submit();
  init_wh(map);
};

function get_bbox(){
  var EPSG4326 = new OpenLayers.Projection("EPSG:4326");
  var EPSG900913 = new OpenLayers.Projection("EPSG:900913");
  var bounds = map.getExtent().clone();
  bounds = bounds.transform(EPSG900913, EPSG4326);
  return bbox = bounds.toBBOX();
};

function init_wh(map){
  var update = function(s) { return function() {
    var input = $(this);
    console.log(s, input, input.val());
    var center = map.center;
    console.log('center', center);
    resize_map(map);
  };};
  $('input.width').keyup(update('width'));
  $('input.height').keyup(update('height'));
  $('a').click(function(ev) {
    var self = $(this);
    if(self.data('w')) {
      $('input.width').val(self.data('w'));
      $('input.height').val(self.data('h'));
      resize_map(map);
    };
  });
};

function resize_map(map){
  var width = $('input.width').val();
  var height = $('input.height').val();
  console.log('wh',width,height);
  if(width != '') { $('#map').css('width', width + '00px'); }
  if(height != '') { $('#map').css('height', height + '00px'); }
  map.updateSize();
};

function init_submit() {
  $('#submit').click(function() {
    $('#latlong').val(get_bbox());
    $('#latlong_form').submit();
  });
}
