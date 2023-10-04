import "./App.css";
import http from "./api/http-common";
import { useState, useEffect } from "react";

function App() {
  const [movies, Setmovies] = useState();

  const getMovies = async () => {
    try {
      const response = await http.get("/api/rrcritics/movie/allmovies");

      console.log(response.data);

      Setmovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App"></div>;
}

export default App;
