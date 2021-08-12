var mymap = L.map('mapid').setView([52.5163, 13.3779], 10);

L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  maxZoom: 18
}).addTo(mymap);

window.fetch('eladesaeulen.csv')
  .then((response) => response.text())
  .then((data) => {
    var rows = data.split('\n').slice(1).map(x => x.split(','));

    rows.forEach((x) => {
      var lat =  parseFloat(x[9]);
      var lon = parseFloat(x[10]);
      if (lat && lon) {
        L.circle([lat, lon], {
	  color: '#ac00e6',
	  fillColor: '#ac00e6',
	  fillOpacity: 0.4,
	  radius: 200
        }).bindPopup(`<p>${x[0]}</p><p>${x[1]}</p>`).addTo(mymap);
      }
    });
  });
