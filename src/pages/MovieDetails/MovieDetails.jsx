import FilmInfo from 'components/FilmInfo/FilmInfo';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { apiFilmById } from 'services/ApiFilms';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!filmId) {
      return;
    }
    apiFilmById(filmId).then(({ data }) => {
      setFilmInfo(data);
    });
  }, [filmId]);

  return (
    filmInfo && (
      <>
        <FilmInfo filmInfo={filmInfo} location={location} />
        <Suspense fallback={<div>Loading.......</div>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetails;
