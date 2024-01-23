var map = L.map('map').setView([41.662055482054626, -4.7224544754302489], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([41.665197396478426, -4.72318403624413]).addTo(map);

var circle = L.circle([41.66148706170047, -4.730085329211486], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);