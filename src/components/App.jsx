import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import TrendList from '../pages/TrendList';
import SearchList from '../pages/SearchList';
import NotFound from '../pages/NotFound';
import MovieCard from './MovieCard/MovieCard';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Header />}>
          <Route index element={<TrendList />} />
          <Route path="trend-list" element={<TrendList />} />
          <Route path="trend-list/movie" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="search-list" element={<SearchList />} />
          <Route path="search-list/movie" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};
