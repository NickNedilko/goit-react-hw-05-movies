import axios from 'axios';

export const apiTrendFilms = async () => {
  const films = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return films;
};

export const apiSearchFilms = async search => {
  const films = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      api_key: '16c3209db9c8e0f5838703cf6ff99055',
      query: search,
      page: 1,
    },
  });
  return films;
};

export const apiFilmById = async filmId => {
  const films = await axios.get(
    `https://api.themoviedb.org/3//movie/${filmId}`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return films;
};

export const apiFilmCast = async filmId => {
  const films = await axios.get(
    `https://api.themoviedb.org/3//movie/${filmId}/credits`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return films;
};

export const apiFilmReview = async filmId => {
  const films = await axios.get(
    `https://api.themoviedb.org/3//movie/${filmId}/reviews`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return films;
};
