import { BrowserRouter as Router, Routes, Route } from "react-router";

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
