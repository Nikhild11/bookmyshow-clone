import { useParams, useNavigate } from "react-router-dom";
import nowShowing from "../../../data/nowShowing";
import { useEffect, useState } from "react";

import "./BookingPage.css";

const BookingPage = () => {
  const { city, movie: movieSlug, id } = useParams();
  const navigate = useNavigate();

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!id) return;
    const found = nowShowing.find((m) => String(m.id) === String(id));
    setSelectedMovie(found ?? null);
  }, [id]);

  const handleClickToDetails = (m) => {
    if (!m) return;
    navigate(`/buytickets/${city ?? "city"}/${m.slug ?? m.title}/${m.id}`);
  };

  if (!selectedMovie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row booking-page p-5">
        <div className="col-6 d-flex flex-row align-items-center px-5">
          <div className="col-6 d-flex flex-row align-items-center ">
            <div className="">
              <img
                src={selectedMovie.img}
                height="auto"
                width="70%"
                alt={selectedMovie.title}
              />{" "}
            </div>
          </div>
          <div className="col-6 justify-content-center">
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleClickToDetails(selectedMovie)}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default BookingPage;
