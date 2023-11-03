import React from "react";
import "./Card.css";

const Card = ({ movie }) => {
  if (movie && movie.poster) {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster.substring(
      movie.poster.length - 31
    )}`;

    return (
      <div className="card-container">
        <div className="card-poster-container">
          <div className="card-poster">
            <img src={posterUrl} alt={`movie poster of ${movie.title}`} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <p>No poster available for this movie</p>
        </div>
      </div>
    );
  }
};

export default Card;
