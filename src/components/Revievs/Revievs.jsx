import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'components/Fetch/Fetch';
import { useSearchParams } from 'react-router-dom';

const Revievs = () => {
    const [searchParams] = useSearchParams();
    const [reviews, setReviews] = useState([]);
  const movieID = searchParams.get('id');
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieReviews = await fetchMovieReviews(movieID);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieID]);

  if (!reviews) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Revievs;