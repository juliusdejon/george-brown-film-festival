const movies = [
  {
    thumbnail: 'movie1.webp',
    name: 'The Secret Adventure',
    timestamp: 'Thursday, September 28, 2023',
    genre: 'Adventure',
    directedBy: 'John Director',
  },
  {
    thumbnail: 'movie2.jpeg',
    name: 'Mystery Mansion',
    timestamp: 'Thursday, September 28, 2023',
    genre: 'Mystery',
    directedBy: 'Jane Director',
  },
  {
    thumbnail: 'movie3.jpeg',
    name: 'Romantic Escapade',
    timestamp: 'Thursday, September 28, 2023',
    genre: 'Romance',
    directedBy: 'Michael Director',
  },
  {
    thumbnail: 'movie4.jpeg',
    name: 'Sci-Fi Odyssey',
    timestamp: 'Thursday, September 28, 2023',
    genre: 'Science Fiction',
    directedBy: 'David Director',
  },
  {
    thumbnail: 'movie5.jpeg',
    name: 'Comedy Craziness',
    timestamp: 'Thursday, September 28, 2023',
    genre: 'Comedy',
    directedBy: 'Sarah Director',
  }
];

const loadMovies = () => {
const main = document.querySelector("main");

for (movie of movies) {
  const movieEl = `
  <article>
  <div class="img-container">
    <img src="images/films/${movie.thumbnail}" />
  </div>
  <div class="movie-details">
    <h1>${movie.name}</h1>
    <p>${movie.timestamp}</p>
    <p>${movie.genre}</p>
    <p>${movie.directedBy}</p>
    <a href="tickets.html">Buy Tickets</a>
  </div>
  </article>
  `;
    main.innerHTML += movieEl;
  }

};

document.addEventListener("DOMContentLoaded", loadMovies);
