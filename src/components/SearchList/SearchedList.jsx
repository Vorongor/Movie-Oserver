import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { handleSearch } from '../Fetch/Fetch';
import { Link } from 'react-router-dom';
import style from './SearchedList.module.css';

const MovieList = ({ text }) => {
  const [searchMovies, setSearchMovies] = useState(null);

  const savedQuery = localStorage.getItem('searchQuery');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await handleSearch(savedQuery);
        setSearchMovies(result);
        localStorage.setItem('saveList', JSON.stringify(searchMovies));
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, [savedQuery]);

  const getImageUrl = (path, size = 'w500') => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}/${path}`;
  };

  return (
    <div className={style.listBox}>
      <h3 className={style.text}>{text}</h3>
      {searchMovies === null ? (
        <div>Loading...</div>
      ) : searchMovies.length > 0 ? (
        <ul className={style.list}>
          {searchMovies.length > 0 && (
            <ul className={style.list}>
              {searchMovies.map(movie => (
                <li className={style.item} key={movie.id}>
                  <Link
                    className={style.link}
                    to={`/goit-react-hw-05-movies/movie?id=${movie.id}`}
                    state={{ from: '/goit-react-hw-05-movies/search-list' }}
                  >
                    <div className={style.movieBox}>
                      <img
                        className={style.img}
                        src={getImageUrl(movie.poster_path)}
                        alt={movie.title}
                      />
                      <p className={style.title}>{movie.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      ) : (
        <h3>No movies found for this request</h3>
      )}
    </div>
  );
};

MovieList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MovieList;
