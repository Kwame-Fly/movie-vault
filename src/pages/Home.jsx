import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchMovies, fetchMovieDetails, fetchMoviesByCategory } from '../api/movieApi';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');

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

  const handleCategoryChange = async (selectedCategory) => {
    setCategory(selectedCategory);
    setError('');
    try {
      const data = await fetchMoviesByCategory(selectedCategory);
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError('No movies found for this category');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('https://source.unsplash.com/1920x1080/?bokeh,cinema')
        `,
        backgroundColor: 'navy',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto p-4 text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Movie Finder</h1>
          <Link
            to="/"
            className="text-white underline hover:text-gray-300"
          >
            Home
          </Link>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className="mt-4">
          <label htmlFor="category" className="mr-2">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="p-2 border rounded bg-white text-black"
          >
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        {error && (
          <p className="text-red-500 mt-4">{error}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
