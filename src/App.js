import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Trailer from "./components/trailer/Trailer";
import MovieReviewForm from "./pages/moviereviewForm/MovieReviewForm";
import MovieService from "./api/MovieServices";
import SigninPage from "./pages/signinPage/SigninPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Logout from "./components/logout/Logout";
import CreateMovie from "./pages/createMovie/CreateMovie";
import Footer from "./components/footer/Footer";

function App() {
  const [movies, Setmovies] = useState();
  const [username, setUsername] = useState("");
  const [authorities, setAuthorities] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setAuthorities(localStorage.getItem("authorities"));
  }, []);

  const getMovies = async () => {
    try {
      const response = await MovieService.getallmovies();

      Setmovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header movies={movies} />
      <Routes>
        <Route path="/" element={<Layout movies={movies} />} />
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="/moviepage/:title" element={<MovieReviewForm />} />
        <Route path="/Register" element={<SigninPage />} />
        <Route path="/createMovie" element={<CreateMovie />} />
        <Route
          path="/login"
          element={
            <LoginPage
              setUsername={setUsername}
              setAuthorities={setAuthorities}
            />
          }
        />
        <Route
          path="/logout"
          element={
            <Logout setUsername={setUsername} setAuthorities={setAuthorities} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
