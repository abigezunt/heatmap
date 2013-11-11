var map = L.map('heatmap').setView([37.8, -96], 4);

L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
	key: '9b1a5bc7509a4b88b3f1e34008ac37a4',
	attribution: 'Map integration by Leaflet, Map tiles by CloudMade; Built by Abby Howell in General Assembly\'s Web Development Immersive.',
	styleId: 22677
}).addTo(map);

L.geoJson(statesData).addTo(map);
