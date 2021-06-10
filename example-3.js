var mymap = L.map('mapid').setView([52.5163, 13.3779], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  maxZoom: 18
}).addTo(mymap);

window.fetch('eigene-daten.csv')
  .then((response) => response.text())
  .then((data) => {
    var rows = data.split('\n').slice(1).map(x => x.split(','));

    var latlons = [];

    rows.forEach((x) => {
      var lat =  parseFloat(x[1], 4);
      var lon = parseFloat(x[2], 4);
      if (lat && lon) {
        latlons.push([lat, lon])

        L.circle([lat, lon], {
	  color: '#000',
	  fillColor: '#000',
	  fillOpacity: 1,
	  radius: 100
        }).addTo(mymap);
      }

    });


    var polyline = L.polyline(latlons, {
      color: 'black',
      weight: 5
    }).addTo(mymap);
  });
