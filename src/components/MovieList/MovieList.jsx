import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies)
  return (
    <ul className={css.filmList}>
      {movies?.map(({ id, title, poster_path, vote_average
 }) => (
        <li key={id} className={css.filmCard}>
          <Link className={css.link} to={`/movie/${id}`} state={{ from: location }}>
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
            <p>Average vote: {vote_average}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
