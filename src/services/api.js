const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'adf034e2dfe8e0fada717e58b9449dc8';

function fetchTrendingFilms() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

function fetchMovieById(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
    },
  );
}

function fetchMoviesByQuery(query) {
  return fetch(
    `${BASE_URL}search/movie/?api_key=${API_KEY}&query=${query}&language=en-US&page=1`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

function fetchMovieCast(id) {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

function fetchMovieReviews(id) {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export {
  fetchTrendingFilms,
  fetchMovieById,
  fetchMoviesByQuery,
  fetchMovieCast,
  fetchMovieReviews,
};
