import { useState } from "react";
import "./App.css";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/components/home";
import Movies from "./pages/components/Movies";
import Events from "./pages/components/Events";
import Sports from "./pages/components/Sports";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter><Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
