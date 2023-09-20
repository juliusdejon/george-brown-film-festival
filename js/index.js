// const backgroundImages = [
//   "../images/Dumb-Money.jpg",
//   "../images/posvbackground.jpg",
//   "../images/thesocialnetworkbackgroundimage.jpg",
//   "../images/upgrade065.jpg",
// ];
// let imageIndex = 1;




const map = L.map("map");
map.setView([43.67642400439807, -79.41088156384413], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 30,
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
let gbMarker = L.marker([43.67642400439807, -79.41088156384413]).addTo(map);
gbMarker.bindPopup("George Brown Tech Film Festival").openPopup();


// const changeImage = () => {
//   let background = document.querySelector("header");
//   background.style.backgroundImage =
//     "url('" + backgroundImages[imageIndex] + "')";

//   imageIndex++;
//   if (imageIndex >= backgroundImages.length) imageIndex = 0;
// };

// document.querySelector("a").addEventListener("click", changeImage);
