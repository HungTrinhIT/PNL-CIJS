import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
const DemoRounting = () => {
  return (
    <BrowserRouter>
      <div className="d-flex align-items-center">
        <Link className="me-2" to="/">
          Home
        </Link>
        <Link className="me-2" to="/about">
          About
        </Link>
        <Link className="me-2" to="/products">
          Products
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/:title" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DemoRounting;
