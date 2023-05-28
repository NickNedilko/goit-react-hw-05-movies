// import Movies from 'pages/Movies/Movies';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MovieCast from 'pages/MovieDetails/MovieCast/MovieCast';
import Reviews from 'pages/MovieDetails/Reviews/Reviews';
import { lazy } from 'react';

const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="movie/:filmId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
