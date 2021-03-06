///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'drh464.l8mm4bfl'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZHJoNDY0IiwiYSI6IndnSWNDRWsifQ.DVN0DmeP8BZbrAlsXZIQHg'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

//map data
var dataFileToAdd = 'data/Howell.geojson';

var featureLayer = L.mapbox.featureLayer();
    
    featureLayer.loadURL(dataFileToAdd);
    featureLayer.addTo(map);
    
featureLayer.on('ready', function(){
  this.setStyle({
    "stroke": "#000000",
    "stroke-width": 2,
    "stroke-opacity": 1,
    "fill": "#555555",
    "fill-opacity": 0.5
    
    });
    map.fitBounds(featureLayer.getBounds());
});


///////////////////////////////////////////////////////////////////////////
//Add popup

featureLayer.on('ready', function(){
   this.eachLayer(function(layer){
       layer.bindPopup('Name: ' + layer.feature.properties.name);
       console.log(layer.feature.properties.Name)
   }); 
});
