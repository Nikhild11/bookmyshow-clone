import { useState, useEffect } from "react";
import "./Stream.css";

const movies = [
  {
    title: "28 Years Later",
    duration: "1h 55m",
    genre: "Horror, Thriller",
    rating: "A",
    languages: "English, Hindi",
    description:
      "A group of survivors of the rage virus lives on a small island...",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-portrait.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-horizontal.jpg",
  },
  {
    title: "The Bad Guys 2",
    duration: "1h 44m",
    genre: "Animation, Comedy, Crime",
    rating: "UA13+",
    languages: "English",
    description:
      "The Bad Guys are struggling to find trust and acceptance in their newly minted lives...",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-portrait.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-horizontal.jpg",
  },
  {
    title: "The Super Husband",
    duration: "1h 10m",
    genre: "Drama, Family, Sci-Fi",
    rating: "UA",
    languages: "Hindi",
    description:
      "A husband who can travel back in time, but struggles to keep his family happy...",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-portrait.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-horizontal.jpg",
  },
  {
    title: "Mirai",
    duration: "1h 40m",
    genre: "Animation, Adventure",
    rating: "U",
    languages: "English",
    description:
      "A young boy discovers a magical garden where he meets his younger sister from the future...",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-portrait.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00423688-fbrevxpbwu-horizontal.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % movies.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + movies.length) % movies.length);

  return (
    <div className="hero-carousel">
      {movies.map((movie, idx) => (
        <div
          key={idx}
          className={`hero-slide ${idx === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${movie.bg})` }}
        >
          <div className="overlay"></div>

          <div className="content">
            {/* Poster */}
            <div className="poster">
              <img src={movie.img} alt={movie.title} />
            </div>

            {/* Info */}
            <div className="info">
              <span className="badge">Premiere</span>
              <h2>{movie.title}</h2>
              <p>
                {movie.duration} • {movie.genre} • {movie.rating}
              </p>
              <p className="langs">{movie.languages}</p>
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {movies.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? "dot active" : "dot"}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
