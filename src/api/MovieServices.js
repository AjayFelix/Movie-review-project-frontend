import httpCommon from "./http-common";

const getallmovies = () => {
  return httpCommon.http.get("/api/rrcritics/movie/public/allmovies");
};
const getMovieByTitle = (title) => {
  return httpCommon.http.get("/api/rrcritics/movie/public/title/" + title);
};
const createMovie = (movieDetails) => {
  return httpCommon.http.post(
    "/api/rrcritics/movie/admin/createMovie",
    movieDetails
  );
};

const MovieService = {
  getallmovies,
  getMovieByTitle,
  createMovie,
};

export default MovieService;
