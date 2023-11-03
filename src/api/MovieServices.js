import http from "./http-common";

const getallmovies = () => {
  return http.get("/api/rrcritics/movie/allmovies");
};
const getMovieByTitle = (title) => {
  return http.get("/api/rrcritics/movie/title/" + title);
};

const MovieService = {
  getallmovies,
  getMovieByTitle,
};

export default MovieService;
