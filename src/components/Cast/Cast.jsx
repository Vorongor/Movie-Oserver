import React, { useState, useEffect } from 'react';
import { fetchMovieCredits, fetchActorDetails } from 'components/Fetch/Fetch';
import { useSearchParams } from 'react-router-dom';
import style from './Cast.module.css';

const Cast = () => {
  const [searchParams] = useSearchParams();
  const [cast, setCast] = useState([]);
  const movieID = searchParams.get('id');
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const credits = await fetchMovieCredits(movieID);
        setCast(credits.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieID]);

  if (!cast) {
    return <div>Loading...</div>;
  }
  return (
    <div className={style.tumb}>
      <h3 className={style.cast}>Cast:</h3>
      <ul className={style.list}>
        {cast.map(actor => (
          <li key={actor.id} className={style.item}>
            <img
              className={style.img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : 'no-image.jpg'
              }
              alt={actor.name}
            />{' '}
            <p className={style.name}>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
