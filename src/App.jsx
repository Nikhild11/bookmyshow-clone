import { useState } from "react";
import "./App.css";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/components/Home";
import Movies from "./pages/components/Movies";
import Events from "./pages/components/Events";
import Sports from "./pages/components/Sports";
import Activities from "./pages/components/Activities";
import Stream from "./pages/components/Stream";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BookingPage from "./pages/components/BookingPage";
import Bookingtheater from "./pages/components/Bookingtheater";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/stream" element={<Stream />} />
          <Route
            path="/movieDetails/:city/:movie/:id"
            element={<BookingPage />}
          />
          <Route
            path="/buytickets/:city/:movie/:id"
            element={<Bookingtheater />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
