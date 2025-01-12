import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setError('No movies found. Try another search.');
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/028/288/858/large_2x/christmas-bokeh-background-wooden-background-with-bokeh-glitter-stars-rustic-wood-and-backdrop-for-product-presentation-ai-generative-free-photo.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen w-full flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-md">
          Movie-Vault
        </h1>
        <p className="text-center text-lg md:text-xl mb-6 px-4">
          Explore the world of movies. Search for your favorites or discover something new.
        </p>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center mt-4 text-lg">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}
        {movies.length > 0 && <MovieCard movies={movies} />}
      </div>
    </div>
  );
};

export default Home;




