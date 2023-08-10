import React, { useState, useEffect } from 'react';
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

  return (
    <div>
      <h2>Trending Movies Today</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendList;
