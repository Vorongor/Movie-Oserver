import React, { useState, useEffect } from 'react';
import { handleSearch } from '../Fetch/Fetch';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h3>{text}</h3>
      {SearhMovies.length > 0 && (
        <ul>
          {SearhMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/goit-react-hw-05-movies/movie?id=${movie.id}`}>
                {movie.title}
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
