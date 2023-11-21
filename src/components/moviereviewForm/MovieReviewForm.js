import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../../api/MovieServices";
import Card from "../card/Card";
import Player from "../player/Player";
import "./MovieReviewForm.css";
import Genres from "../genres/Genres";
import Reviews from "../reviews/Reviews";
import ReviewList from "../reviewList/ReviewList";
import MovieInfo from "../movieInfo/MovieInfo";
function MovieReviewForm() {
  const { title } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovieByTitle() {
      try {
        const response = await MovieService.getMovieByTitle(title);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovieByTitle();
  }, [title]);

  return (
    <main className="review-page-main-container">
      <div className="review-page-movie-details">
        <h3>{movie.title}</h3>
        <p>
          {new Date(movie.releaseDate).getFullYear()} - {movie.duration}
        </p>
      </div>
      <div className="review-page-content-container">
        <div className="review-page-card-container">
          <Card movie={movie} />
        </div>
        <div className="review-page-trailer-container">
          <Player movie={movie} />
        </div>
      </div>
      <div className="genres">
        <Genres movie={movie} />
        <span className="descirption-container">
          <p className="description">{movie.description}</p>
          <MovieInfo movie={movie} />
        </span>
      </div>
      <div className="review-container">
        <Reviews movie={movie} />
        <div>
          <ReviewList movie={movie} />
        </div>
      </div>
    </main>
  );
}

export default MovieReviewForm;
