'use strict';

var map = L.map('map').setView([37.8, -96], 4);
var geojson;
var info = L.control();

L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
	key: '9b1a5bc7509a4b88b3f1e34008ac37a4',
	attribution: ' | map tiles by CloudMade | built by Abby Howell in General Assembly\'s Web Development Immersive.',
	styleId: 22677
}).addTo(map);

function getColor(d) {
	return d > 220 ? '#63001e' :
			   d > 190  ? '#980143' :
			   d > 160  ? '#ce1355' :
			   d > 130  ? '#e72a89' :
			   d > 100  ? '#df65b0' :
			   d > 70  ? '#c994c7' :
			   d > 40  ? '#d3b9da' :
			   d > 10  ? '#e6e1ef' :
                   '#f7f3f9' ;
}

function style(feature) {
	return {
		fillColor: getColor(feature.properties.mentions),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7

	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}

	info.update(layer.feature.properties);
}

function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}

function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
	});
}

geojson = L.geoJson(statesData, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);

info.onAdd = function(map){
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info.update = function (props) {
	this._div.innerHTML = '<h4>Which congress members are talking <br>about Greenhouse Gas emissions?</h4>' + (props ?
		'<b>' + props.name + '</b><br>' + props.mentions + ' mentions</b>'  : 'Hover over a state');

};

info.addTo(map);
