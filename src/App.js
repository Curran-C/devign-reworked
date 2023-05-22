import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage/Homepage";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact%20us" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
