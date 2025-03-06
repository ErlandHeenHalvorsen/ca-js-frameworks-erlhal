import { BrowserRouter as Router, Routes, Route } from "react-router";

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckOut from "./pages/Checkout";
import CheckoutSuccs from "./pages/CheckoutSuccs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<CheckOut />} />
          <Route path="/CheckoutSuccs" element={<CheckoutSuccs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
