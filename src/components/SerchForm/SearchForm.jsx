import React from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <div className={style.box}>
      <form className={style.form} action="" onSubmit={onSubmit}>
        <input className={style.input} type="text" name='query'/>
        <button className={style.btn} type="submit">Search</button>
      </form>
    </div>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};
export default SearchForm;
