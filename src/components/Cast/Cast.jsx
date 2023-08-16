import React, { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'components/Fetch/Fetch';
import { useSearchParams } from 'react-router-dom';
import style from './Cast.module.css';

const Cast = () => {
  const [searchParams] = useSearchParams();
  const [cast, setCast] = useState([]);
  const movieID = searchParams.get('id');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const credits = await fetchMovieCredits(movieID);
        setCast(credits.cast);
        setLoading(false); // Fetch completed, set loading to false
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false); // Fetch failed, set loading to false
      }
    };

    fetchDetails();
  }, [movieID]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  if (!cast || cast.length === 0) {
    return <div>No cast data available.</div>; // Show message for no cast data
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
              alt={`Image of ${actor.name} as ${actor.character}`} // Improved alt text
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
