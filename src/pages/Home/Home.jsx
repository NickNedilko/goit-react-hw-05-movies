import React, { useState, useEffect } from 'react';
import { apiTrendFilms } from 'services/ApiFilms';
import MovieList from 'components/MovieList/MovieList';
import css from './Home.module.css';
import { Section } from 'components/Section/Section';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    apiTrendFilms().then(({ data }) => {
      setTrendMovies(data.results);
    });
  }, []);

  return (
    <Section>
      <h1 className={css.title}>Trending Today</h1>
      <MovieList movies={trendMovies} />
    </Section>
  );
};

export default Home;
