import { useEffect, useState } from "react";
import "./Sports.css";

function Sports() {
  const nowShowing = [
    {
      title: "DS: Infinity Castle",
      lang: "Japanese • Action",
      img: "/movie1.avif",
    },
    { title: "Mirai", lang: "English • Animation", img: "/movie2.avif" },
    { title: "The Conjuring", lang: "English • Horror", img: "/movie3.avif" },
    { title: "Kotha Lokh", lang: "Telugu • Drama", img: "/movie4.avif" },
    { title: "Ghaati", lang: "Telugu • Drama", img: "/movie5.avif" },
    { title: "Bhaagi 4", lang: "Hindi • Action", img: "/movie6.avif" },
    { title: "Little Hearts", lang: "Telugu • Drama", img: "/movie7.avif" },
  ];

  const [location, setLocation] = useState("");

  const comingSoon = [
    {
      title: "They call him OG",
      lang: "Telugu • Action",
      img: "/upcoming1.avif",
    },
    {
      title: "Kantara: Part 2",
      lang: "Telugu • Action",
      img: "/upcoming2.avif",
    },
    {
      title: "Avatar: Fire and Ash",
      lang: "English • Animation",
      img: "/upcoming3.avif",
    },
    {
      title: "Ajey: The Untold story of a Yogi",
      lang: "Hindi • Documentary",
      img: "/upcoming4.avif",
    },
    {
      title: "Rajasaab",
      lang: "Telugu • Horror & Comedy",
      img: "/upcoming5.avif",
    },
  ];

  const date = [
    "Today",
    "Tomorrow",
    "This weekend",
  ];

  const category = [
    "Running",
    "Cricket",
    "Football",
    "Basketball",
    "Badminton",
    "Marathon",
    "Tennis",
  ];

  useEffect(() => {
    localStorage.getItem("location")
      ? setLocation(localStorage.getItem("location"))
      : setLocation("Hyderabad");
  }, []);

  const Format = ["2D", "3D", "4D", "IMAX", "IMAX 3D", "IMAX 4D"];

  return (
    <div className="container-fluid">
      <section className="sportsbannerpromo mt-3">
        <img
          src="/sportsbanner1.avif"
          alt="Sports banner promo"
          className="banner-img"
        />
      </section>

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
                    {date.map((dt) => {
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
                    category
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {category.map((genre) => {
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
              {date.map((lang) => {
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

export default Sports;
