import { useEffect, useState } from "react";
import "./Movies.css";
import Genres from "../../../data/Genres";
import comingSoon from "../../../data/comingSoon";
import languges from "../../../data/languges";
import { useNavigate } from "react-router-dom";
import nowShowing from "../../../data/nowShowing";

function Movies() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");

  useEffect(() => {
    localStorage.getItem("location")
      ? setLocation(localStorage.getItem("location"))
      : setLocation("Hyderabad");
  }, []);

  const Format = ["2D", "3D", "4D", "IMAX", "IMAX 3D", "IMAX 4D"];

  const handleClickToDetails = (movie) => {
    navigate(`/movieDetails/${location}/${movie.title}/${movie.id}`);
  };

  return (
    <div className="container-fluid">
      {/* Carousel */}
      <div className="row">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src="moviecorrosle1.avif"
                className="d-block w-100"
                alt="moviecorrosle1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="moviecorrosle2.avif"
                className="d-block w-100"
                alt="moviecorrosle2"
              />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="moviecorrosle3.avif"
                className="d-block w-100"
                alt="moviecorrosle3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Filters + Movies */}
      <div className="row mt-4">
        {/* Sidebar / Filters */}
        <div className="col-12 col-md-3 mb-4">
          <h2>Filters</h2>
          <div className="p-3 border border-secondary border-0 rounded">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border-0 mb-3">
                <h2 className="accordion-header">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <button
                      className="accordion-button collapsed flex-grow-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Language
                    </button>
                  </div>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {languges.map((dt) => {
                      return (
                        <button className="btn btn-outline-danger">{dt}</button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Genres
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {Genres.map((genre) => {
                      return (
                        <button className="btn btn-outline-danger">
                          {genre}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Format
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {Format.map((format) => {
                      return (
                        <button className="btn btn-outline-danger">
                          {format}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="btn btn-danger w-100 mt-3">browse by cinemas</span>
        </div>

        {/* Movies Section */}
        <div className="col-12 col-md-9">
          <div>
            <h3>Movies in {location}</h3>
            <div className="d-flex flex-wrap gap-2">
              {languges.map((lang) => {
                return (
                  <button className="btn btn-outline-danger">{lang}</button>
                );
              })}
            </div>
          </div>
          {/* Now Showing */}
          <section className="section">
            <h3 className="section-title mt-4">Now Showing</h3>
            <div className="movies-grid">
              {nowShowing.map((movie, index) => (
                <div
                  className="movie-card"
                  key={index}
                  onClick={() => handleClickToDetails(movie)}
                >
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="movie-img"
                  />
                  <div className="movie-info">
                    <h6 className="movie-title">{movie.title}</h6>
                    <p className="movie-lang">{movie.lang}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coming Soon */}
          <section className="section">
            <h3 className="section-title mt-4">Coming Soon</h3>
            <div className="movies-grid">
              {comingSoon.map((movie, index) => (
                <div className="movie-card" key={index}>
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="movie-img"
                  />
                  <div className="movie-info">
                    <h6 className="movie-title">{movie.title}</h6>
                    <p className="movie-lang">{movie.lang}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Movies;
