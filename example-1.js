var mymap = L.map('mapid').setView([52.5163, 13.3779], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var locations = [
  {name: "Brandenburger Tor", lon: 13.3779, lat: 52.5163 },
  {name: "Bundestags", lon: 13.3743, lat: 52.5185 },
  {name: "HKW", lon: 13.3648, lat: 52.5194 }
];

locations.forEach((x) => {
  L.marker([x.lat, x.lon]).bindPopup(`<h2>${x.name}</h2>`).addTo(mymap);
});
