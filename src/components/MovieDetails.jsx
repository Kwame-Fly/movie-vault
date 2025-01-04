const MovieDetails = ({ details }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">{details.Title}</h2>
        <p><strong>Genre:</strong> {details.Genre}</p>
        <p><strong>Plot:</strong> {details.Plot}</p>
        <p><strong>Cast:</strong> {details.Actors}</p>
        <p><strong>Ratings:</strong> {details.imdbRating}</p>
      </div>
    );
  };
  
  export default MovieDetails;
  