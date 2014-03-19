var map;
function init() {
  map = new OpenLayers.Map('map');
  var base = new OpenLayers.Layer.OSM()
  map.addLayers([base]);
  //map.setCenter( new OpenLayers.LonLat(-122.19058, 46.19976), 5);
  map.setCenter( new OpenLayers.LonLat(-13602148.699803, 5812470.6443611), 5);
  $('#submit').click(function() {
    $('#latlong').val(get_bbox());
    $('#latlong_form').submit();
  });
};

function get_bbox(){
  var EPSG4326 = new OpenLayers.Projection("EPSG:4326");
  var EPSG900913 = new OpenLayers.Projection("EPSG:900913");
  var bounds = map.getExtent().clone();
  bounds = bounds.transform(EPSG900913, EPSG4326);
  return bbox = bounds.toBBOX();
};


