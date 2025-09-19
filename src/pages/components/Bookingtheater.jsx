import { useEffect, useState } from "react";
import "./Bookingtheater.css";
import { useParams } from "react-router-dom";
import BookingSeats from "./bookingTickets/BookingSeats";
import nowShowing from "../../../data/nowShowing";

const Bookingtheater = () => {
  const { city, movie: movieSlug, id } = useParams();
  //   const [city, setCity] = useState(localStorage.getItem("location") || "");

  const [dates, setDates] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Find movie by id
  useEffect(() => {
    if (!id) return;
    const found = nowShowing.find((m) => m.id == id);
    setSelectedMovie(found ?? null);
  }, [id]);

  // Generate dates
  useEffect(() => {
    const today = new Date();
    const nextDays = Array.from({ length: 6 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return d.toDateString().slice(0, 10); // e.g. "Fri Sep 19"
    });
    setDates(nextDays);
  }, []);

  return (
    <div className="container-fluid">
      {/* Movie title and date */}
      <div className="row p-3">
        <h3>{movieSlug}</h3>
        <p>Select date and time</p>
      </div>

      {/* Theater & Filters */}
      <div className="row align-items-center justify-content-between border border-1 p-3">
        <div className="col-6">
          <div className="d-flex flex-wrap gap-2 mt-1">
            {dates.map((date, index) => (
              <button key={index} className="btn btn-outline-danger btn-sm">
                {date}
              </button>
            ))}
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          {/* Filters */}
          <div className="dropdown d-inline me-2">
            <button
              className="btn btn-outline-tertiary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Price Range
            </button>
            <ul className="dropdown-menu p-2">
              <li>
                <input type="checkbox" /> ₹100 - ₹200
              </li>
              <li>
                <input type="checkbox" /> ₹200 - ₹500
              </li>
              <li>
                <input type="checkbox" /> ₹500+
              </li>
            </ul>
          </div>

          <div className="dropdown d-inline me-2">
            <button
              className="btn btn-outline-tertiary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Special Formats
            </button>
            <ul className="dropdown-menu p-2">
              <li>
                <input type="checkbox" /> 3D
              </li>
              <li>
                <input type="checkbox" /> IMAX
              </li>
              <li>
                <input type="checkbox" /> 4DX
              </li>
            </ul>
          </div>

          <div className="dropdown d-inline">
            <button
              className="btn btn-outline-tertiary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Preferred Time
            </button>
            <ul className="dropdown-menu p-2">
              <li>
                <input type="checkbox" /> Morning
              </li>
              <li>
                <input type="checkbox" /> Afternoon
              </li>
              <li>
                <input type="checkbox" /> Evening
              </li>
              <li>
                <input type="checkbox" /> Night
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seat legend row */}
      <div className="row align-items-center border border-1 p-2">
        <div className="col-6">
          <img src="iccon.webp" width="10%" alt="icon1" />
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <span className="dot active me-2"></span>
          <span className="me-3">available</span>

          <span className="dot booked me-2"></span>
          <span className="me-3">booked</span>

          <span className="dot selected me-2"></span>
          <span>selected</span>
        </div>
      </div>

      {/* Theatres with seats */}
      <div className="col-12 mt-3">
        {selectedMovie?.theatres
          ?.filter((theatre) =>
            city ? theatre.location.toLowerCase() === city.toLowerCase() : true
          )
          .map((theatre) => (
            <BookingSeats
              key={theatre.id}
              movie={selectedMovie}
              theatre={theatre}
            />
          ))}
      </div>
    </div>
  );
};

export default Bookingtheater;
