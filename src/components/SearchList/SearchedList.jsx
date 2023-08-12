import React, { useState, useEffect } from 'react';
import { handleSearch } from '../Fetch/Fetch';
import { Link } from 'react-router-dom';
import style from './SearchedList.module.css';

const MovieList = ({ query, text }) => {
  const [SearhMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await handleSearch(query);
        setSearchMovies(result);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, [query, SearhMovies]);

  const getImageUrl = (path, size = 'w500') => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}/${path}`;
  };
  return (
    <div className={style.listBox}>
      <h3 className={style.text}>{text}</h3>
      {SearhMovies.length > 0 && (
        <ul className={style.list}>
          {SearhMovies.map(movie => (
            <li className={style.item} key={movie.id}>
              <Link
                className={style.link}
                to={`/goit-react-hw-05-movies/movie?id=${movie.id}`}
              >
                <div className={style.movieBox}>
                  <img
                    className={style.img}
                    src={getImageUrl(movie.poster_path)} // Отримуємо URL постера
                    alt={movie.title}
                  />
                  <p className={style.title}>{movie.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {SearhMovies.length === 0 && <h3>No movies found for this request</h3>}
    </div>
  );
};
export default MovieList;
