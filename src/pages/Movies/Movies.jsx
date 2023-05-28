import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiSearchFilms } from 'services/ApiFilms';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [querryParams, setQuerryParams] = useSearchParams();

  const querry = querryParams.get('querry');

  useEffect(() => {
    if (querry === null) {
      return;
    }
    apiSearchFilms(querry).then(({ data }) => setSearchFilms(data.results)).catch((error) => {
      console.log(error)
    });
  }, [querry]);

  const querryInput = search => {
    if (search === '') {
      return setQuerryParams({});
    }
    setQuerryParams({ querry: search });
  };

  return (
    <main>
      <SearchForm onSubmit={querryInput} />
      <MovieList movies={searchFilms} />
    </main>
  );
};

export default Movies;
