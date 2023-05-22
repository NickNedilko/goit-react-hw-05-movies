import { Link } from 'react-router-dom';
import css from './FilmInfo.module.css';

const FilmInfo = ({ filmInfo, location }) => {
  const { title, poster_path, genres, vote_average, overview } = filmInfo;
  return (
    <>
      <Link to={location.state?.from ?? '/home'}>Back</Link>
      <div className={css.filmCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="title"
        />
        <div className={css.filmDescription}>
          <h2> {title}</h2>
          <p>Overview: {overview}</p>
          <p>vote average: {vote_average}</p>
          <p>Genres: {genres.map(genre => genre.name).join(', ')} </p>
        </div>
      </div>
      <ul>
        Additional info:
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FilmInfo;
