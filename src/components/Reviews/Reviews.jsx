import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'components/Fetch/Fetch';
import { useSearchParams } from 'react-router-dom';
import style from './Reviews.module.css';

const Reviews = () => {
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

  if (reviews.length === 0) {
    return <div className={style.sorry}>Sorry, there are still no reviews.</div>;
  }

  return (
    <div className={style.tumb}>
      <h3 className={style.revievs}>Reviews:</h3>
      <ul className={style.list}>
        {reviews.map(review => (
          <li key={review.id}>
            <p className={style.author}>Author: {review.author}</p>
            <p className={style.coment}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
