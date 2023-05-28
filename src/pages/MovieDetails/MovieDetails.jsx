import FilmInfo from 'components/FilmInfo/FilmInfo';
import { Section } from 'components/Section/Section';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { apiFilmById } from 'services/ApiFilms';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();
  console.log(location);

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
      <Section>
        <FilmInfo filmInfo={filmInfo} location={location} />
        <Suspense fallback={<div>Loading.......</div>}>
          <Outlet />
        </Suspense>
      </Section>
    )
  );
};

export default MovieDetails;
