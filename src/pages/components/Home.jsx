import "./Home.css";
import Hero from "./Hero";
import { useRef } from "react";

function Home() {
  const movieScrollRef = useRef(null);
  const eventScrollRef = useRef(null);
  const sportsScrollRef = useRef(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home-container">
      <Hero />

      {/* Recommended Movies */}
      <section className="section">
        <h3 className="section-title mt-4">Recommended Movies</h3>
        <div className="scroll-container">
          <button className="scroll-btn left" onClick={() => scroll(movieScrollRef, "left")}>
            &#8249;
          </button>
          <div className="scroll-row" ref={movieScrollRef}>
            {[
              "DS:Infinity castle",
              "Mirai",
              "The Conjuring",
              "Kotha Lokh",
              "Ghaati",
              "Bhaagi4",
              "Little Hearts",
            ].map((movie, index) => (
              <div className="card-movie" key={index}>
                <img src={`/movie${index + 1}.avif`} alt={movie} className="card-img" />
                <div className="card-info">
                  <h6 className="card-title">{movie}</h6>
                  <p className="card-subtitle">Drama • Action</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll(movieScrollRef, "right")}>
            &#8250;
          </button>
        </div>
      </section>

      {/* Best of Live Events */}
      <section className="section">
        <h3 className="section-title">Best of Live Events</h3>
        <div className="scroll-container">
          <button className="scroll-btn left" onClick={() => scroll(eventScrollRef, "left")}>
            &#8249;
          </button>
          <div className="scroll-row" ref={eventScrollRef}>
            {["Event1", "Event2", "Event3", "Event4", "Event5"].map((event, index) => (
              <div className="card-events" key={index}>
                <img src={`/events${index + 1}.avif`} alt={event} className="card-eventsimg" />
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll(eventScrollRef, "right")}>
            &#8250;
          </button>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="banner">
        <img src="/banner1.avif" alt="Banner" className="banner-img" />
      </section>

      {/* Sports */}
      <section className="section">
        <h3 className="section-title">Sports & Outdoor</h3>
        <div className="scroll-container">
          <button className="scroll-btn left" onClick={() => scroll(sportsScrollRef, "left")}>
            &#8249;
          </button>
          <div className="scroll-row" ref={sportsScrollRef}>
            {["Marathon", "Marathon", "Marathon", "Race", "Cricket"].map((sport, index) => (
              <div className="card-movie" key={index}>
                <img src={`/sports${index + 1}.avif`} alt={sport} className="card-img" />
                <div className="card-info">
                  <h6 className="card-title">{sport}</h6>
                  <p className="card-subtitle">Outdoor • Hyderabad</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll(sportsScrollRef, "right")}>
            &#8250;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 BookMyShow Replica. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
