import axios from 'axios';

const API_KEY = '79f2702b42ceb404ad51283cd44db6ad';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWYyNzAyYjQyY2ViNDA0YWQ1MTI4M2NkNDRkYjZhZCIsInN1YiI6IjY0ZDM5ZDJiZDEwMGI2MDExYzdmNzBhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BifGGdJywk4EmXVYKaUktT-qpuUure1RwuYsX7v1VLQ',
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        params: {
          api_key: `${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const handleSearch = async query => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: `${API_KEY}`,
          query: query,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
