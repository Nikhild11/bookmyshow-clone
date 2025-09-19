import { useEffect, useState } from "react";
import "./Events.css";

function Events() {
  const nowShowing = [
    {
      title: "Telangana Half Marathon",
      lang: "Marathon",
      img: "/eve1.avif",
    },
    { title: "WHD Event", lang: "Marathon", img: "/eve2.avif" },
    { title: "Enablethon 2025", lang: "Marathon", img: "/eve3.avif" },
    { title: "Maverick Lap Track", lang: "Race", img: "/eve4.avif" },
    { title: "Women's Cricket World Cup", lang: "Cricket", img: "/eve5.avif" },
    { title: "FC Goa Vs AL NASSAR", lang: "Football", img: "/eve6.avif" },
    { title: "Chess Tournament", lang: "Chess", img: "/eve7.avif" },
    { title: "Cyclethon", lang: "Race", img: "/eve8.avif" },
    { title: "Math Olympiad", lang: "Competition", img: "/eve9.avif" },
    { title: " Kids Cyclethon", lang: "Race", img: "/eve10.avif" },
  ];

  const [location, setLocation] = useState("");

  const date = ["Today", "Tomorrow", "This weekend"];

  const language = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Malayalam",
    "Kannada",
  ];

  const category = [
    "Workshops",
    "Comedy Shows",
    "Music Shows",
    "Exhibitions",
    "Screenings",
    "Concerts",
    "Talks",
    "Conferences",
    "Meetups",
  ];

  const more_filters = [
    "Free",
    "Paid",
    "Online",
    "Offline",
    "kids allowed",
    "kids not allowed",
    "Family Friendly",
  ];

  useEffect(() => {
    localStorage.getItem("location")
      ? setLocation(localStorage.getItem("location"))
      : setLocation("Hyderabad");
  }, []);

  const Price = ["Free", "100 - 250", "250 - 500", "Above 500"];

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
              {/* Date */}
              <div className="accordion-item border-0 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Date
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {date.map((dt) => (
                      <button className="btn btn-outline-danger">{dt}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category */}
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
                    {category.map((genre) => (
                      <button className="btn btn-outline-danger">
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price */}
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
                    {Price.map((price) => (
                      <button className="btn btn-outline-danger">
                        {price}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="accordion-item border-0 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Language
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body d-flex flex-wrap gap-2">
                    {language.map((lang) => (
                      <button className="btn btn-outline-danger">{lang}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="btn btn-danger w-100 mt-3">Browse by Venues</span>
        </div>

        {/* Movies Section */}
        <div className="col-12 col-md-9">
          <div>
            <h3>Events in {location}</h3>
            <div className="d-flex flex-wrap gap-2">
              {category.map((cat) => (
                <button className="btn btn-outline-danger">{cat}</button>
              ))}
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

export default Events;
