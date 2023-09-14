import React from "react";

function MovieCard({ movie, getColor }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie">
      <img src={`${IMG_URL}${movie.poster_path}`} alt="movie" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={getColor(movie.vote_average)}>
          {movie.vote_average}
        </span>
      </div>
      <div className="release-date">
        Released-Date: {new Date(movie.release_date).toDateString()}
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {movie.overview}
      </div>
    </div>
  );
}

export default MovieCard;
