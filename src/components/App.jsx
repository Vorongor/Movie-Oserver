import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const TrendList = React.lazy(() => import('../pages/TrendList'));
const SearchList = React.lazy(() => import('../pages/SearchList'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Header = React.lazy(() => import('./Header/Header'));
const MovieCard = React.lazy(() => import('./MovieCard/MovieCard'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [search, setSearch] = useState();

  const onSubmit = e => {
    e.preventDefault();
    const film = e.target.query.value;
    const message = `Search results by last request: ${film}`;
    setSearch(message);
    localStorage.setItem('searchQuery', JSON.stringify(film));
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Header />}>
          <Route index element={<TrendList />} />
          <Route path="trend-list" element={<TrendList />} />
          <Route
            path="search-list"
            element={<SearchList text={search} handleSubmit={onSubmit} />}
          />
          <Route path="movie" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};
