import React, { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../Fetch/Fetch';
import style from './MovieCard.module.css';

const MovieCard = () => {
  const [searchParams] = useSearchParams();
  const [moviesById, setMoviesById] = useState(null);
  const movieID = searchParams.get('id');
  const query = searchParams.get('query');

  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? `/goit-react-hw-05-movies/trend-list`;

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
    <div className={style.mainBox}>
      <div className={style.movieBox}>
        <img
          className={style.img}
          src={getImageUrl(moviesById.poster_path)}
          alt={moviesById.title}
        />
        <div className={style.textBox}>
          <h4>{moviesById.title}</h4>
          <p>User Score: {moviesById.vote_average}</p>
          <p>
            <span className={style.topic}>Overview:</span>
            <br /> {moviesById.overview}
          </p>
          <p>
            <span className={style.topic}>Genres</span>
            <br />
            {moviesById.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <div className={style.linkBox}>
        <Link
          className={style.link}
          to={`cast?id=${movieID}`}
          state={{
            from: query
              ? `/goit-react-hw-05-movies/search-list?query=${query}`
              : `/goit-react-hw-05-movies/trend-list`,
          }}
        >
          Cast
        </Link>
        <Link
          className={style.link}
          to={`reviews?id=${movieID}`}
          state={{
            from: query
              ? `/goit-react-hw-05-movies/search-list?query=${query}`
              : `/goit-react-hw-05-movies/trend-list`,
          }}
        >
          Reviews
        </Link>
        <Link className={style.link} to={backLinkHref}>
          Back
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieCard;
