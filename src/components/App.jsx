import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TrendList from '../pages/TrendList';
import SearchList from '../pages/SearchList';
import NotFound from '../pages/NotFound';
import Header from './Header/Header';

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<Header />}>
        <Route index element={<TrendList />} />
      </Route>
      <Route path="/goit-react-hw-05-movies" element={<Header />}>
        <Route path='trend-list' element={<TrendList />} />
      </Route>
      <Route path="/goit-react-hw-05-movies" element={<Header />}>
        <Route path='search-list' element={<SearchList />} />
      </Route>
      <Route path="/goit-react-hw-05-movies/*" element={<Header />}>
        <Route index element={<NotFound />} />
      </Route>
    </Routes>
  );
};
