import React from 'react';
import SearchForm from '../components/SerchForm/SearchForm';
import MovieList from '../components/SearchList/SearchedList';

const SearchList = () => {
  return (
    <div>
      <SearchForm />
      <MovieList />
    </div>
  );
};

export default SearchList;
