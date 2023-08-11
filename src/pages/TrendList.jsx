import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../components/Fetch/Fetch';

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

  // const getImageUrl = (path, size = 'w500') => {
  //   const baseUrl = 'https://image.tmdb.org/t/p/';
  //   return `${baseUrl}${size}/${path}`;
  // };

  return (
    <div>
      <h2>Trending Movies Today</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/goit-react-hw-05-movies/movie?id=${movie.id}`}>
              <div>
                <p>{movie.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendList;
