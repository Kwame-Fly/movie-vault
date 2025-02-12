import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Genres = () => {
  const { state } = useLocation();
  const { genre } = state || {};
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const controller = new AbortController();

    const fetchMoviesByGenre = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${genre}`, {
          signal: controller.signal, // Attach the abort signal
        });
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setError('No movies found for this genre.');
        }
      } catch (err) {
        if (err.name !== 'CanceledError') {
          setError('An error occurred while fetching movies.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (genre) {
      fetchMoviesByGenre();
    }

    return () => {
      controller.abort(); // Clean up when the component unmounts
    };
  }, [genre]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-6"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/028/288/858/large_2x/christmas-bokeh-background-wooden-background-with-bokeh-glitter-stars-rustic-wood-and-backdrop-for-product-presentation-ai-generative-free-photo.jpg')`,
      }}
    >
      <h1 className="text-3xl font-bold mb-6">{genre || 'Genre'} Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-gray-800 p-4 rounded shadow">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover mb-4" />
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;





