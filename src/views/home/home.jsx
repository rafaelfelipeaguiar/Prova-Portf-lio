import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <h1>👋 Bem-vindo ao meu Portfólio</h1>
        <p>Sou um desenvolvedor web apaixonado pelo TI, sempre em busca de aprender novas tecnologias e evoluir como profissiona</p>
        
        <div className="home-buttons">
          <Link to="/projetos" className="btn">Ver Projetos</Link>
          <Link to="/sobre" className="btn">Sobre Mim</Link>
        </div>
      </div>
      
      {/* Adicionando uma imagem */}
      <div className="home-image">
        <img src="src\assets\image\avatar-remove.png" alt="Avatar" />
      </div>
    </main>
  );
}

export default Home;
