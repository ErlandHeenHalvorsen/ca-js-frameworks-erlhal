import { BrowserRouter as Router, Routes, Route } from "react-router";

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
