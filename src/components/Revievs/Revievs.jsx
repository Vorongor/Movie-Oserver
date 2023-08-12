import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'components/Fetch/Fetch';
import { useSearchParams } from 'react-router-dom';
import style from './Revievs.module.css';

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
export default Revievs;
