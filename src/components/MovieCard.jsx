import React from 'react';

const MovieCard = ({ movies }) => {
  if (!movies.length) {
    return <p className="text-center mt-4">No movies to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="bg-gray-800 rounded-lg p-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-md w-full h-60 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
          <p className="text-gray-400">{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

  