import SearchForm from 'components/SerchForm/SearchForm';
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from 'components/SearchList/SearchedList';
const SearchList = ({ handleSubmit, text }) => {
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {text && <MovieList text={text} />}
    </div>
  );
};
SearchList.propTypes = {
  handleSubmit: PropTypes.func.isRequired, 
  text: PropTypes.string, 
};
export default SearchList;
