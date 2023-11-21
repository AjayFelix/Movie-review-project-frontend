import React, { useState } from "react";
import "./Search.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Link } from "react-router-dom";

const Search = ({ movies }) => {
  console.log(movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [action, setAction] = useState("notClicked");

  const handleFilter = (event) => {
    const keyword = event.target.value;
    const filteredResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase())
    );
    if (keyword === "") {
      setFilteredMovies([]);
    } else {
      setFilteredMovies(filteredResults);
      setAction("notClicked");
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <label htmlFor="searchInput"></label>
        <input
          id="searchInput"
          type="text"
          placeholder="Enter Keywords..."
          autoComplete="off"
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <SearchSharpIcon />
        </div>
      </div>
      {filteredMovies.length !== 0 ? (
        <div className={action == "Clicked" ? "hide" : "dataResults"}>
          {filteredMovies.slice(0, 4).map((movie) => {
            return (
              <div key={movie.id}>
                <Link
                  to={`/moviepage/${movie.title}`}
                  onClick={() => setAction("Clicked")}
                >
                  <img
                    className="search-img"
                    src={movie.poster}
                    alt={`movie poster of ${movie.title}`}
                  />
                </Link>
                <div className="search-info">
                  {movie.title}
                  <div className="year">
                    {"  ("} {new Date(movie.releaseDate).getFullYear()}
                    {" )"}
                  </div>
                </div>

                <hr className="line" />
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
