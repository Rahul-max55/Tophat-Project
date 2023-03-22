import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./Navbar";
import Home from "./Home";
import Card from "./Card";
import Cart from "./Cart";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;