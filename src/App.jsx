import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Gif from "./components/Gif";

function App() {
  return (
    <Router>
      {/* <Gif /> */}
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <h1 style={{ color: "white", textAlign: "center", marginTop: "10vh" }}>
          Welcome to Neurolinks
        </h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
