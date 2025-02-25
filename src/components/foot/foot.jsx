import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Coluna 1 - Imagem */}
        <div className="footer-column">
          <img src="src\assets\image\img1.png" alt="Logo Rafael Felipe" className="footer-logo" />
        </div>

        {/* Coluna 2 - Contato */}
        <div className="footer-column">
          <h3>Contato</h3>
          <p>Email: <a href="mailto:rafaguiar2005@gmail.com">rafaguiar2005@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rafael-felipe-tec" target="_blank" rel="noopener noreferrer">linkedin.com/in/rafael-felipe-tec</a></p>
          <p>GitHub: <a href="https://github.com/rafaelfelipeaguiar" target="_blank" rel="noopener noreferrer">github.com/rafaelfelipeaguiar</a></p>
        </div>

        {/* Coluna 3 - Links Rápidos */}
        <div className="footer-column">
          <h3>Links Rápidos</h3>
          <p><Link to="/sobre">Sobre Mim</Link></p>
          <p><Link to="/projetos">Projetos</Link></p>
          <p><Link to="/sobre">Habilidades</Link></p>
        </div>
      </div>

      {/* Rodapé */}
      <div className="footer-bottom">
        <p>© 2025 Rafael Felipe - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
