
const map = L.map("map");
map.setView([43.67642400439807, -79.41088156384413], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 30,
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
let gbMarker = L.marker([43.67642400439807, -79.41088156384413]).addTo(map);
gbMarker.bindPopup("George Brown Tech Film Festival").openPopup();

