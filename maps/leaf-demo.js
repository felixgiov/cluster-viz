// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map('map').setView([0.7893, 113.9213], 5);

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: 'UAS Big Data Komputasional 2017 - FELIX GIOVANNI VIRGO (16167)',
 subdomains: ['a','b','c']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<b>' + markers[i].bencana + '</b>' +
              '<br/><b>Tanggal:</b> ' + markers[i].tanggal +
              '<br/><b>Jam:</b> ' + markers[i].jam +
              '<br/><b>Lokasi:</b> ' + markers[i].lokasi +
              '<br/><b>Korban:</b> ' + markers[i].korban +
              '<br/><b>Kerugian:</b> ' + markers[i].kerugian +
              '<br/><b>Keterangan:</b> ' + markers[i].keterangan;

  var m = L.marker( [markers[i].lintang, markers[i].bujur], {icon: myIcon} )
                  .bindPopup( popup );

  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );
