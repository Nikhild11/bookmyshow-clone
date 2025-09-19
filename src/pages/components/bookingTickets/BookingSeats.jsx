import { OverlayTrigger, Popover } from "react-bootstrap";

const BookingSeats = ({ movie, theatre }) => {
  return (
    <div className="container border border-1 p-3 mb-3">
      <div className="row align-items-center">
        {/* Theatre Info */}
        <div className="col-6">
          <h6>
            {theatre.name} - {theatre.location}
          </h6>
          <small className="text-muted">{movie.title}</small>
        </div>

        {/* Showtimes */}
        <div className="col-6 d-flex justify-content-end flex-wrap gap-2">
          {theatre.shows.map((show, i) => {
            const popover = (
              <Popover id={`popover-${theatre.id}-${i}`}>
                <Popover.Header as="h6">{show.time} Prices</Popover.Header>
                <Popover.Body>
                  <div>Normal: ₹{show.price.normal}</div>
                  <div>Premium: ₹{show.price.premium}</div>
                  <div>Recliner: ₹{show.price.recliner}</div>
                </Popover.Body>
              </Popover>
            );

            return (
              <OverlayTrigger
                key={i}
                trigger={["hover", "focus"]} // hover + focus for accessibility
                placement="bottom"
                overlay={popover}
              >
                <button className="btn btn-outline-success btn-sm">
                  {show.time}
                </button>
              </OverlayTrigger>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingSeats;
