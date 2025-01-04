const MovieCard = ({ movie, onClick }) => {
    return (
      <div className="border p-4 rounded shadow-md" onClick={() => onClick(movie.imdbID)}>
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover mb-2" />
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-sm text-gray-600">{movie.Year}</p>
      </div>
    );
  };
  
  export default MovieCard;
  