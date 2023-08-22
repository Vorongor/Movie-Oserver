import React, { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Fetch/Fetch';
import style from './MovieCard.module.css';

const MovieCard = () => {
  const [searchParams] = useSearchParams();
  const [moviesById, setMoviesById] = useState(null);
  const movieID = searchParams.get('id');
  const searchQuery = searchParams.get('query');

  let backPath = '';
  if (searchQuery === 'null' ) {
    backPath = `/`;
  } else {
    backPath = `/movies?query=${searchQuery}`;
  }
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
        <Link className={style.link} to={`cast?query=${searchQuery}&id=${movieID}`}>
          Cast
        </Link>
        <Link
          className={style.link}
          to={`reviews?query=${searchQuery}&id=${movieID}`}
        >
          Reviews
        </Link>
        <Link className={style.link} to={backPath}>
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
