import http from "./http-common";

const getallmovies = () => {
  return http.get("/api/rrcritics/movie/public/allmovies");
};
const getMovieByTitle = (title) => {
  return http.get("/api/rrcritics/movie/public/title/" + title);
};

const MovieService = {
  getallmovies,
  getMovieByTitle,
};

export default MovieService;
