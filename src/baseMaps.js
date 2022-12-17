var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	maxZoom: 20,
	subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

var osm2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

/* var map = L.map('map', {
	layers: [osm, googleSat, CartoDB_Positron]
}); */