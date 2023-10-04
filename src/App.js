import "./App.css";
import http from "./api/http-common";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";

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

  const router = createBrowserRouter([
    { path: "/", element: <Layout /> },
    { path: "/home", element: <Home movies={movies} /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
