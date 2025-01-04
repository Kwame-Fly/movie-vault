import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../api/movieApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setError('');
    try {
      const data = await fetchMovies(query);
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError('No movies found');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
