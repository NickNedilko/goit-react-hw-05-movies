import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiFilmCast } from 'services/ApiFilms';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    apiFilmCast(filmId).then(({ data }) => {
      setMovieCast(data.cast);
      console.log(data.cast);
    });
  }, [filmId]);

  return (
    movieCast && (
      <ul className={css.actorsList}>
        {movieCast.map(({ original_name, profile_path, character }) => {
          return (
            <li key={original_name}>
              <img
                className={css.photo}
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://static.thenounproject.com/png/1438945-200.png'
                }
                alt={original_name}
              />
              <p>Real name: {original_name}</p>
              <p>Character: {character} </p>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default MovieCast;

// movieCast &&
// movieCast.map(({ original_name, profile_path }) => {
//   return (
//
//       <li key={original_name}>
//         <img
//           src={`https://image.tmdb.org/t/p/w500${profile_path}`}
//           alt={original_name}
//         />
//         <p>{original_name}</p>
//       </li>
//     </ul>
//   );
// })
