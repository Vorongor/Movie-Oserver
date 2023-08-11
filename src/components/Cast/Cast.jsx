import React, { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'components/Fetch/Fetch';
import { useSearchParams } from 'react-router-dom';

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
    <div>
      <h3>Cast:</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
