var map;
function init() {
  map = new OpenLayers.Map('map');
  var base = new OpenLayers.Layer.OSM()
  map.addLayers([base]);
  map.setCenter( new OpenLayers.LonLat(-567468.5392481, 4950672.5471436), 5);
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


