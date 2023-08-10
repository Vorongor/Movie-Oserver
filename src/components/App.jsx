import React, { useState, } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';

import TrendList from '../pages/TrendList';
import SearchList from '../pages/SearchList';
import NotFound from '../pages/NotFound';
import Header from './Header/Header';
import SearchForm from './SerchForm/SearchForm';
// import { handleSearch } from '../Fetch/Fetch';

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onSubmit = e => {
    e.preventDefault();
    const film = e.target.query.value;
    const message = `Search results by request: ${film}`;
    setSearch(message);
    setSearchParams(film);
  };

  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<Header />}>
        <Route index element={<TrendList />} />
      </Route>
      <Route path="/goit-react-hw-05-movies" element={<Header />}>
        <Route path="trend-list" element={<TrendList />} />
      </Route>
      <Route path="/goit-react-hw-05-movies" element={<Header />}>
        <Route
          path="search-list"
          element={<SearchList text={search} query={searchParams} handleSubmit={onSubmit} />}
        />
      </Route>
      <Route path="/goit-react-hw-05-movies/*" element={<Header />}>
        <Route index element={<NotFound />} />
      </Route>
    </Routes>
  );
};
