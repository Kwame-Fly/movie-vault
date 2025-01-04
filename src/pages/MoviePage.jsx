import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api/movieApi';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovieDetails = async () => {
      setError('');
      try {
        const data = await fetchMovieDetails(movieId);
        if (data.Response === 'True') {
          setMovieDetails(data);
        } else {
          setError('Movie details not found.');
        }
      } catch (error) {
        setError('Error fetching movie details.');
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  if (!movieDetails) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 underline">Back to Search</Link>
      <div className="mt-4 flex flex-col md:flex-row gap-6">
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="w-full md:w-1/3 rounded shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold">{movieDetails.Title}</h2>
          <p className="text-gray-700 mt-2"><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p className="text-gray-700"><strong>Release Date:</strong> {movieDetails.Released}</p>
          <p className="text-gray-700"><strong>Director:</strong> {movieDetails.Director}</p>
          <p className="text-gray-700"><strong>Cast:</strong> {movieDetails.Actors}</p>
          <p className="text-gray-700"><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p className="text-gray-700"><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
          {movieDetails.Ratings.map((rating, index) => (
            <p key={index} className="text-gray-700"><strong>{rating.Source}:</strong> {rating.Value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
