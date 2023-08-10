import SearchForm from 'components/SerchForm/SearchForm';
import React from 'react';
import MovieList from 'components/SearchList/SearchedList';
const SearchList = ({ handleSubmit, text, query }) => {
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {text && <MovieList text={text} query={query}/>}
    </div>
  );
};
export default SearchList;
