import React, { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Fetch/Fetch';

const MovieCard = () => {
  const [searchParams] = useSearchParams();
  const [moviesById, setMoviesById] = useState(null);
  const movieID = searchParams.get('id');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieID);
        setMoviesById(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieID]);

  if (!moviesById) {
    return <div>Loading...</div>;
  }

  const getImageUrl = (path, size = 'w500') => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}/${path}`;
  };

  return (
    <div>
      <div>
        <img src={getImageUrl(moviesById.poster_path)} alt={moviesById.title} />
        <h4>{moviesById.title}</h4>
        <p>{moviesById.vote_average}</p>
        <h4>Overviev</h4>
        <p>{moviesById.overview}</p>
        <h4>Genres</h4>
        <p>{moviesById.genres.map(genre => genre.name).join(', ')}</p>
      </div>
      <div>
        <p></p>
        <Link to={`cast?id=${movieID}`}>Cast</Link>
        <Link to={`reviews?id=${movieID}`}>Revievs</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieCard;
