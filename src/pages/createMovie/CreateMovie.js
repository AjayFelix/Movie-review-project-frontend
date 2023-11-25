import React, { useState } from "react";
import "./CreateMovie.css";
import { Button } from "react-bootstrap";
import MovieService from "../../api/MovieServices";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {
  let navigate = useNavigate();
  const initialValues = {
    imdbId: "",
    title: "",
    director: "",
    duration: "",
    releaseDate: "",
    poster: "",
    trailerLink: "",
    genres: [],
    backdrops: [],
    reviewIds: [],
    writers: [],
    actors: [],

    description: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "genres" ||
      name === "backdrops" ||
      name === "writers" ||
      name === "actors"
    ) {
      const arrayValue = value.split(",");
      setFormValues({ ...formValues, [name]: arrayValue });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createMovie(formValues);
      console.log("Form submitted:", formValues.title);
    } catch (error) {
      console.error("Error creating movie:", error.message);
    }
  };

  const createMovie = async (data) => {
    await MovieService.createMovie(data);
    setTimeout(navigate(`/moviepage/${formValues.title}`), 3000);
  };

  return (
    <div className="global-container">
      <div className="card createMovie-form">
        <div className="card-body">
          <h1 className="card-title text-center">CREATE MOVIE</h1>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <>
                {" "}
                <label className="label-title" htmlFor="title">
                  Title
                </label>
                <label className="label-director" htmlFor="director">
                  Director
                </label>
              </>
              <div className="form-group1">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="title"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="director"
                  name="director"
                  value={formValues.director}
                  onChange={handleChange}
                />
              </div>
              <>
                {" "}
                <label className="label-imdbId" htmlFor="imdbId">
                  IMDB-ID
                </label>
                <label className="label-duration" htmlFor="duration">
                  Duration
                </label>
                <label className="label-date" htmlFor="releaseDate">
                  ReleaseDate
                </label>
              </>
              <div className="form-group2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="imdbId"
                  name="imdbId"
                  value={formValues.imdbId}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="duration"
                  name="duration"
                  value={formValues.duration}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="releaseDate"
                  name="releaseDate"
                  value={formValues.releaseDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="actors">Actors (comma-separated)</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="actors"
                  name="actors"
                  value={formValues.actors}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="writers">Writers (comma-separated)</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="writers"
                  name="writers"
                  value={formValues.writers}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="trailerLink">Youtube Link</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="trailerLink"
                  name="trailerLink"
                  value={formValues.trailerLink}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="poster">Poster</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="poster"
                  name="poster"
                  value={formValues.poster}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="genres">Genres (comma-separated)</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="genres"
                  name="genres"
                  value={formValues.genres}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="backdrops">Backdrops (comma-separated)</label>
                <input
                  type="text"
                  className="form-control form-control-sm backdrop"
                  id="backdrops"
                  name="backdrops"
                  value={formValues.backdrops}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                />
              </div>

              <div className="button">
                <Button type="submit" variant="outline-info" className="me-2">
                  UPLOAD
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
