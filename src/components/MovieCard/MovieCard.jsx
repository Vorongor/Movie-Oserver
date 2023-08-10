import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../Fetch/Fetch';

const MovieCard = ({ movieID }) => {
  const [moviesById, setMoviesById] = useState(null);

  useEffect(() => {
    const fetchDetails = async movieID => {
      try {
        const details = await fetchMovieDetails(movieID); // Приклад ID фільму
        setMoviesById(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [moviesById]);

  if (!moviesById) {
    return <div>Loading...</div>;
  }

  const getImageUrl = (path, size = 'w500') => {
    // Базовий URL для зображень
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}/${path}`;
  };

  return (
    <div>
      <div>
        <img
          src={getImageUrl(moviesById.poster_path)} // Отримуємо URL постера
          alt={moviesById.title}
        />
        <h4>{moviesById.title}</h4>
        <p>{moviesById.vote_average}</p>
        <h4>Overviev</h4>
        <p>{moviesById.overview}</p>
        <h4>Genres</h4>
        <p>{moviesById.genres.map(genre => genre.name).join(', ')}</p>
      </div>
      <div>
        <p></p>
        <Link></Link>
        <Link></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieCard;
