import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.filmList}>
      {movies?.map(({ id, title, poster_path, popularity }) => (
        <li key={id} className={css.filmCard}>
          <Link to={`/movie/${id}`} state={{ from: location }}>
            <img
              className={css.filmPoster}
              src={
                poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://static.thenounproject.com/png/2712910-200.png`
              }
              alt={title}
            />
            <h2>{title}</h2>
            <p>{popularity}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
