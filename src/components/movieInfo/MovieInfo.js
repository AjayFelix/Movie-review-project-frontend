import "./MovieInfo.css";

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <hr className="horizontal-line"></hr>
      <p>
        Director :<span className="name">{movie.director}</span>{" "}
      </p>
      <hr className="horizontal-line"></hr>
      <p>
        Writers :
        {Array.isArray(movie.writers) ? (
          movie.writers.map((writer, index) => (
            <span className="name" key={index}>
              {writer}
            </span>
          ))
        ) : (
          <span> No writers found</span>
        )}
      </p>
      <hr className="horizontal-line"></hr>
      <p>
        Actors :{" "}
        {Array.isArray(movie.actors) ? (
          movie.actors.map((actor, index) => (
            <span className="name" key={index}>
              {actor}
            </span>
          ))
        ) : (
          <span> No Actors found</span>
        )}
      </p>
      <hr />
    </div>
  );
};

export default MovieInfo;
