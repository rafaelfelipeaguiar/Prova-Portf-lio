import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navBar";
import Footer from "./components/foot/foot";
import Home from "./views/home/home";
import Sobre from "./views/sobre/sobre";
import Projetos from "./views/projetos/projetos";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre sx={{ml:5}} />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
