import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/actors" element={<Actors />} />
        <Route exact path="/directors" element={<Directors />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
