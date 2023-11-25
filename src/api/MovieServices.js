import http from "./http-common";

const getallmovies = () => {
  return http.get("/api/rrcritics/movie/public/allmovies");
};
const getMovieByTitle = (title) => {
  return http.get("/api/rrcritics/movie/public/title/" + title);
};
const createMovie = (movieDetails) => {
  return http.post("/api/rrcritics/movie/admin/createMovie", movieDetails);
};

const MovieService = {
  getallmovies,
  getMovieByTitle,
  createMovie,
};

export default MovieService;
