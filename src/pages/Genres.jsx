import React from 'react';
import { useLocation } from 'react-router-dom';

const Genres = () => {
  const location = useLocation();
  const { genre, movies } = location.state || { genre: 'Unknown', movies: [] };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/028/288/858/large_2x/christmas-bokeh-background-wooden-background-with-bokeh-glitter-stars-rustic-wood-and-backdrop-for-product-presentation-ai-generative-free-photo.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen w-full p-8 text-white">
        <h1 className="text-4xl font-bold text-center mb-6">{genre} Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.imdbID} className="bg-gray-800 rounded p-4 shadow-lg">
                <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
                <p>{movie.Year}</p>
                {movie.Poster && (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-auto mt-2 rounded"
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No movies found for this genre.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Genres;


