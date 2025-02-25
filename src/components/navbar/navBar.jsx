import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"; // Certifique-se do caminho correto
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo no lado esquerdo */}
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        {/* Links centralizados */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
