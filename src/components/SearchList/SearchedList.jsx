import React, { useState, useEffect } from 'react';
import { handleSearch } from '../Fetch/Fetch';
import { Link, useLocation } from 'react-router-dom';
import style from './SearchedList.module.css';

const MovieList = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await handleSearch(query);
        setSearchMovies(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  const getImageUrl = (path, size = 'w500') => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}/${path}`;
  };

  return (
    <div className={style.listBox}>
      <h3 className={style.text}>Result of Serch</h3>
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
                    to={`/goit-react-hw-05-movies/movie?query=${query}&id=${movie.id}`}
                    state={{ from: `/goit-react-hw-05-movies/search-list?query=${query}` }}
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
export default MovieList;
