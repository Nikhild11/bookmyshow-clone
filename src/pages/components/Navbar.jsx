import { useState } from "react";
import "./Navbar.css";
import SigninModal from "./SigninModal";

function Navbar() {
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Hyderabad"
  );

  const handleLocationChange = (city) => {
    setLocation(city);
    localStorage.setItem("location", city);
  };

  const locations = [
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Rajahmundry",
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg top-navbar p-3">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo */}
          <div className="bookmyshow-logo">
            <img
              src="Bookmyshow-logoid.png"
              className="navbar-brand"
              height={55}
              alt="BookMyShow"
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </div>

          {/* Search bar */}
          <div className="flex-grow-1 mx-4 search-bar">
            <form className="d-flex w-100">
              <input
                className="form-control"
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                aria-label="Search"
              />
            </form>
          </div>

          {/* Location Dropdown */}
          <div className="dropdown location-dropdown">
            <button
              className="btn btn-white dropdown-toggle"
              type="button"
              id="locationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {location}
            </button>
            <ul className="dropdown-menu" aria-labelledby="locationDropdown">
              {locations.map((city, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLocationChange(city)}
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sign in button (modal) */}
          <SigninModal />

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Under Navbar */}
      <nav className="navbar navbar-expand-lg under-navbar shadow-sm">
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarMenu"
        >
          {/* Left links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/movies">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sports">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stream">
                Stream
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/activities">
                Activities
              </a>
            </li>
          </ul>

          {/* Right links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/listyourshow">
                ListYourShow
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/corporates">
                Corporates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/offers">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/giftcards">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
