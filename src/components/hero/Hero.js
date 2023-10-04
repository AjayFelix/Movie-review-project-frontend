import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Hero.css";

const Hero = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return null;
  }

  return (
    <div>
      <Carousel className="movie-carousel-container">
        {movies.map((movie) => {
          return (
            <Paper key={movie.id}>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
