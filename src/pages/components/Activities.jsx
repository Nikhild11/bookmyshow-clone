import { useEffect, useState } from "react";
import "./Activities.css";

function Activities() {
  const nowShowing = [
    {
      title: "Dola re Dola",
      lang: "Navaratri Celebrations",
      img: "/act1.avif",
    },
    { title: "Dhandiya utsav", lang: "Navaratri Celebrations", img: "/act2.avif" },
    { title: "Dhandiya utsav 2025", lang: "Navaratri Celebrations", img: "/act3.avif" },
    { title: "SK Navaratri Ustav", lang: "Navaratri Celebrations", img: "/act4.avif" },
    { title: "Navratri Dhandiya Ustav", lang: "Navaratri Celebrations", img: "/act5.avif" },
    { title: "Raasleela", lang: "Navaratri Celebrations", img: "/act6.avif" },
    { title: "Studio Tour", lang: "Tourist Attractions", img: "/act7.avif" },
    { title: "Smash Game On", lang: "Adventure", img: "/act8.avif" },
    { title: "District Gravity", lang: "Adventure", img: "/act9.avif" },
    { title: " DC Kayaking", lang: "Adventure", img: "/act10.avif" },
  ];

  const [location, setLocation] = useState("");

  const date = [
    "Today",
    "Tomorrow",
    "This weekend",
  ];

  const category = [
    "Navaratri Celebrations",
    "Adventure",
    "Amusement Park",
    "Tourist Attractions",
    "Theme Parks",
    "Foods and Drinks",
    "Dance and Music",
    "Unique Tours",
    "Cultural Events",
    "Parties",
    "Antiques, Heritage and Collectibles",
  ];

  useEffect(() => {
    localStorage.getItem("location")
      ? setLocation(localStorage.getItem("location"))
      : setLocation("Hyderabad");
  }, []);

  const Price = ["Free", "100 - 250", "250 - 500", "500 - 1000","Above 1000"];

  return (
    <div className="container-fluid">

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
                      Date
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
                    Category
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
                    Price
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {Price.map((Price) => {
                      return (
                        <button className="btn btn-outline-danger">
                          {Price}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="btn btn-danger w-100 mt-3">browse by Venues</span>
        </div>

        {/* Movies Section */}
        <div className="col-12 col-md-9">
          <div>
            <h3>Activities in {location}</h3>
            <div className="d-flex flex-wrap gap-2">
              {category.map((cat) => {
                return (
                  <button className="btn btn-outline-danger">{cat}</button>
                );
              })}
            </div>
          </div>
          {/* Now Showing */}
          <section className="section">
            <div className="movies-grid mt-4">
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
        </div>
      </div>
    </div>
  );
}

export default Activities;
