import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../components/Fetch/Fetch';
import style from './TrendList.module.css';
const TrendList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const result = await fetchTrendingMovies();
        setTrendingMovies(result);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrending();
  }, []);

  const getImageUrl = (path, size = 'w500') => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}/${path}`;
  };

  return (
    <div className={style.listBox}>
      <h2 className={style.text}>Trending Movies Today</h2>
      <ul className={style.list}>
        {trendingMovies.map(movie => (
          <li className={style.item} key={movie.id}>
            <Link
              className={style.link}
              to={`/goit-react-hw-05-movies/movie?id=${movie.id}`}
            >
              <div className={style.movieBox}>
                <img className={style.img}
                  src={getImageUrl(movie.poster_path)} // Отримуємо URL постера
                  alt={movie.title}
                />
                <p className={style.title}>{movie.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendList;
