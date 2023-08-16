import React from 'react';
import style from './Form.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <div className={style.box}>
      <form className={style.form} action="" onSubmit={onSubmit}>
        <input className={style.input} type="text" name="query" />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
