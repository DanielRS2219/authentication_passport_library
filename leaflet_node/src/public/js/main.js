const map = L.map('map-template').setView([51.505, -0.09], 13);

const tileURL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'

L.tileLayer(tileURL).addTo(map);