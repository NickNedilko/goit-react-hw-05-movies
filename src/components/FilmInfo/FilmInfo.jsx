import { NavLink, Link } from 'react-router-dom';
import css from './FilmInfo.module.css';
import { useRef } from 'react';

const FilmInfo = ({ filmInfo, location }) => {
  const { title, poster_path, genres, vote_average, overview, release_date
  } = filmInfo;
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <>
      <Link to={backLinkRef.current} className={css.back_btn}>
        Back
      </Link>
      <div className={css.filmCard}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="title"
        />
        <div className={css.filmDescription}>
          <h2 className={css.title}> {title}</h2>
          <p>
            <span className={css.text}>Overview:</span> {overview}
          </p>
          <p>
            <span className={css.text}>vote average:</span> {vote_average}
          </p>
          <p>
            <span className={css.text}>Genres: </span>
            {genres.map(genre => genre.name).join(', ')}
          </p>
          <p>
            <span className={css.text}>Release date:</span> {release_date}
          </p>
        </div>
      </div>
      <div className={css.info}>
        <h2 className={css.title}> Additional info:</h2>
        <div className={css.nav}>
            <NavLink className={css.navLink} to="cast" state={backLinkRef.current}>
          Cast
        </NavLink>
        <NavLink className={css.navLink} to="reviews" state={backLinkRef.current}>
          Reviews
        </NavLink>
      </div>
      </div>
    </>
  );
};

export default FilmInfo;
