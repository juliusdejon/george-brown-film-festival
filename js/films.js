const films = [
  {
    thumbnail: 'film1.jpeg',
    name: 'Dumb Money',
    timestamp: 'Wednesday, September 27, 2023',
    genre: 'Drama/Comedy',
    directedBy: 'Craig Gillespie',
  },
  {
    thumbnail: 'film2.jpeg',
    name: 'Upgrade',
    timestamp: 'Thursday, September 28, 2023',
    genre: 'Sci-fi/Action',
    directedBy: 'Leigh Whannell',
  },
  {
    thumbnail: 'film3.jpeg',
    name: 'The Matrix',
    timestamp: 'Friday, September 29, 2023',
    genre: 'Action/Sci-fi',
    directedBy: 'Lana Wachowski',
  },
  {
    thumbnail: 'film4.jpeg',
    name: 'The Social Network',
    timestamp: 'Saturday, September 30, 2023',
    genre: 'Drama/History',
    directedBy: 'David Fincher',
  },
  {
    thumbnail: 'film5.jpeg',
    name: 'Oppenheimer',
    timestamp: 'Sunday, October 1, 2023',
    genre: 'History/Drama',
    directedBy: 'Christopher Nolan',
  },
  {
    thumbnail: 'film6.jpeg',
    name: 'Interstellar',
    timestamp: 'Monday, October 2, 2023',
    genre: 'Sci-fi/Adventure',
    directedBy: 'Christopher Nolan',
  }
];

const loadFilms = () => {
const main = document.querySelector("main");

for (film of films) {
  const filmEl = `
  <article>
  <div class="img-container">
    <img src="images/films/${film.thumbnail}" />
  </div>
  <div class="film-details">
    <h1>${film.name}</h1>
    <p>${film.timestamp}</p>
    <p>Genre: ${film.genre}</p>
    <p>Directed By: ${film.directedBy}</p>
    <a href="tickets.html">Get Passes Now</a>
  </div>
  </article>
  `;
    main.innerHTML += filmEl;
  }

};

document.addEventListener("DOMContentLoaded", loadFilms);
