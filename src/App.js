import "./App.css";
import http from "./api/http-common";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Trailer from "./components/trailer/Trailer";

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

  // const router = createBrowserRouter([
  //   { path: "/", element: <Layout /> },
  //   { path: "/home", element: <Home movies={movies} /> },
  // ]);

  return (
    <div className="App">
      <Header />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Layout movies={movies} />} />
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
      </Routes>
    </div>
  );
}

export default App;
